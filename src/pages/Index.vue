<template>
  <q-page padding>
    <div class="q-mx-xl">
      <div class="q-display-3 q-mb-xl text-white row">Hangman!</div>
      <div class="row q-mb-xl">
        <div class="col-sm-12 col-md-6">
          <div class="q-display-1 text-white">
            <span v-for="(letter, idx) in revealed" :key="idx" class="q-mr-sm">
              <span v-if="letter === null">_</span>
              <span v-else :class="missingIdxs.includes(idx) ? 'text-red' : success ? 'text-green' : 'text-white'">{{letter}}</span>
            </span>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="q-display-1 text-white">{{maxAttempts - attempts}} attempts left.</div>
          <div v-if="graveyard.length > 0" class="text-white">
            Used letters: <span v-for="letter in graveyard" :key="letter">{{letter}} </span>
          </div>
        </div>
      </div>
    
      <q-input
        dark
        color="info"
        float-label="Type a letter"
        v-model="attempt"
        @keyup.enter="tryLetter"
        :maxlength="1"
        :disable="disable"
      />

      <q-btn color="info" label="Go" @click="tryLetter" class="q-mt-lg q-mr-sm"/>
      <q-btn color="info" outline label="Reset" @click="reset" class="q-mt-lg" />
    </div>
  </q-page>
</template>

<script>
// TODO: html maxlength does not work on mobile keyboard
import words from 'assets/words.json'
export default {
  name: 'PageIndex',
  data () {
    return {
      maxAttempts: 8,
      chosenWord: '',
      revealed: [],
      graveyard: [],
      attempts: 0,
      attempt: '',
      disable: false,
      success: false,
      missingIdxs: []
    }
  },
  methods: {
    tryLetter () {
      if (this.attempt.trim().length === 1 && this.attempt.trim().match(/[a-z]/i)) {
        this.attempt = this.attempt.toLowerCase()
        if (this.graveyard.includes(this.attempt)) {
          this.$q.notify({
            type: 'negative',
            message: `You have already tried the letter '${this.attempt}'.`,
            position: 'top'
          })
        } else {
          this.graveyard.push(this.attempt)
          this.graveyard.sort()

          if (this.chosenWord.includes(this.attempt)) {
            this.chosenWord.split('').forEach((letter, idx) => {
              if (letter === this.attempt) this.revealed[idx] = this.attempt
            })
            
            let success = true
            this.revealed.forEach(letter => {
              if (letter === null) success = false
            })

            if (success) {
              this.$q.notify({
                type: 'positive',
                message: 'Success!',
                position: 'top'
              })
              this.disable = true
              this.success = true
            }
          } else {
            this.attempts++
            if (this.attempts === this.maxAttempts) {
              this.$q.notify({
                type: 'negative',
                message: 'Game over!',
                position: 'top'
              })
              this.disable = true
              this.revealed.forEach((letter, idx) => {
                if (letter === null) this.missingIdxs.push(idx)
              })
              this.revealed = this.chosenWord
            } else {
              // Draw hangman
            }
          }
        }
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Only letters allowed.',
          position: 'top'
        })
      }
    },
    reset () {
      this.chosenWord = words[Math.floor(Math.random() * words.length)]
      this.revealed = new Array(this.chosenWord.length).fill(null)
      this.graveyard = []
      this.attempts = 0
      this.attempt = ''
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
    this.revealed = new Array(this.chosenWord.length).fill(null)
  }
}
</script>
