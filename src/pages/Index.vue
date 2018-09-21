<template>
  <q-page padding>

    <div class="q-display-1 text-white text-center">
      <span v-for="(letter, idx) in revealed" :key="idx" class="q-mr-sm">
        <span v-if="letter === null">_</span>
        <span v-else-if="letter === '-'" class="q-mr-md"></span>
        <span v-else :class="missingIdxs.includes(idx) ? 'text-red' : success ? 'text-green' : 'text-white'">{{letter}}</span>
      </span>
    </div>

    <div class="q-subheading q-mt-xl text-white text-center">{{maxAttempts - attempts}} attempts left</div>

    <div class="row justify-center q-mt-xl" id="keyboard">
      <div
        v-for="(char, id) in alphabet"
        :key="`char-${id}`"
        class="col-sm-1"
      >
        <q-btn
          :color="graveyard.includes(char) ? '' : 'secondary'"
          class="q-mt-md q-mr-sm"
          :label="char"
          @click="tryLetter(char)"
          :disable="graveyard.includes(char) || disable || success"
        />
      </div>
    </div>

    <div class="text-center text-white q-mt-xl">
      <span class="q-mr-md">Highest Score: {{highscore}}</span>
      <span class="q-ml-md">Win streak: {{streak}}</span>
    </div>

    <div class="text-center q-mt-xl">
      <q-btn color="negative" outline label="Reset" @click="reset" />
    </div>
  </q-page>
</template>

<style>
@media only screen and (min-width: 992px) {
  #keyboard {
    width: 60%;
    margin: 48px auto 0 auto;
  }
}

@media only screen and (min-width: 1200px) {
  #keyboard {
    width: 40%;
    margin: 48px auto 0 auto;
  }
}
</style>

<script>
import words from 'assets/words.json'
export default {
  name: 'PageIndex',
  data () {
    return {
      alphabet: 'abcdefghijklmnopqrstuvwxyz',
      maxAttempts: 8,
      chosenWord: '',
      revealed: [],
      graveyard: [],
      attempts: 0,
      disable: false,
      success: false,
      missingIdxs: [],
      streak: 0,
      highscore: 0
    }
  },
  methods: {
    tryLetter (char) {
      this.graveyard.push(char)

      if (this.chosenWord.includes(char)) {
        this.chosenWord
          .split('')
          .forEach((letter, idx) => {
            if (letter === char) this.revealed[idx] = char
          })

        let success = true
        this.revealed.forEach(letter => {
          if (letter === null) success = false
        })

        if (success) {
          this.$q.notify({
            type: 'positive',
            message: 'Success!',
            position: 'bottom'
          })
          this.disable = true
          this.success = true
          this.streak++
          if (this.streak > this.highscore) {
            localStorage.setItem('hangman-highscore', this.streak)
            this.highscore = localStorage.getItem('hangman-highscore')
          }
        }
      } else {
        this.attempts++
        if (this.attempts === this.maxAttempts) {
          this.$q.notify({
            type: 'negative',
            message: 'Game over!',
            position: 'bottom'
          })
          this.streak = 0
          this.disable = true
          this.revealed.forEach((letter, idx) => {
            if (letter === null) this.missingIdxs.push(idx)
          })
          this.revealed = this.chosenWord
        } else {
          // Draw hangman
        }
      }
    },
    reset () {
      this.chosenWord = words[Math.floor(Math.random() * words.length)]
      this.revealed = this.chosenWord.split('').map(letter => letter === '-' ? '-' : null)
      this.graveyard = []
      this.attempts = 0
      this.disable = false
      this.missingIdxs = []
      this.success = false
    }
  },
  computed: {
    words () {
      return words
    }
  },
  mounted () {
    this.chosenWord = words[Math.floor(Math.random() * words.length)]
    this.revealed = this.chosenWord.split('').map(letter => letter === '-' ? '-' : null)

    if (localStorage.getItem('hangman-highscore')) {
      this.highscore = localStorage.getItem('hangman-highscore')
    }
  }
}
</script>
