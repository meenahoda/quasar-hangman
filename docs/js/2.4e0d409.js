(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{Nr18:function(e,t,a){"use strict";var s=a("S/j/"),r=a("d/Gc"),i=a("ne8i");e.exports=function(e){var t=s(this),a=i(t.length),n=arguments.length,o=r(n>1?arguments[1]:void 0,a),l=n>2?arguments[2]:void 0,c=void 0===l?a:r(l,a);while(c>o)t[o++]=e;return t}},bHtr:function(e,t,a){var s=a("XKFU");s(s.P,"Array",{fill:a("Nr18")}),a("nGyu")("fill")},djVK:function(e,t,a){},gEGz:function(e,t,a){"use strict";var s=a("djVK"),r=a.n(s);r.a},iyQ6:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{attrs:{padding:""}},[a("div",{staticClass:"q-display-1 text-white text-center"},e._l(e.revealed,function(t,s){return a("span",{key:s,staticClass:"q-mr-sm"},[null===t?a("span",[e._v("_")]):"-"===t?a("span",{staticClass:"q-mr-md"}):a("span",{class:e.missingIdxs.includes(s)?"text-red":e.success?"text-green":"text-white"},[e._v(e._s(t))])])})),a("div",{staticClass:"q-subheading q-mt-xl text-white text-center"},[e._v(e._s(e.maxAttempts-e.attempts)+" attempts left")]),a("div",{staticClass:"row justify-center q-mt-xl",attrs:{id:"keyboard"}},e._l(e.alphabet,function(t,s){return a("div",{key:"char-"+s,staticClass:"col-sm-1"},[a("q-btn",{staticClass:"q-mt-md q-mr-sm",attrs:{color:e.graveyard.includes(t)?"":"secondary",label:t,disable:e.graveyard.includes(t)||e.disable||e.success},on:{click:function(a){e.tryLetter(t)}}})],1)})),a("div",{staticClass:"text-center text-white q-mt-xl"},[a("span",{staticClass:"q-mr-md"},[e._v("Highest Score: "+e._s(e.highscore))]),a("span",{staticClass:"q-ml-md"},[e._v("Win streak: "+e._s(e.streak))])]),a("div",{staticClass:"text-center q-mt-xl"},[a("q-btn",{attrs:{color:"negative",outline:"",label:"Reset"},on:{click:e.reset}})],1)])},r=[];s._withStripped=!0;a("bHtr"),a("KKXr"),a("rGqo"),a("Z2Ku"),a("L9s1");var i=a("rUjw"),n={name:"PageIndex",data:function(){return{alphabet:"abcdefghijklmnopqrstuvwxyz",maxAttempts:8,chosenWord:"",revealed:[],graveyard:[],attempts:0,disable:!1,success:!1,missingIdxs:[],streak:0,highscore:0}},methods:{tryLetter:function(e){var t=this;if(this.graveyard.push(e),this.chosenWord.includes(e)){this.chosenWord.split("").forEach(function(a,s){a===e&&(t.revealed[s]=e)});var a=!0;this.revealed.forEach(function(e){null===e&&(a=!1)}),a&&(this.$q.notify({type:"positive",message:"Success!",position:"bottom"}),this.disable=!0,this.success=!0,this.streak++,this.streak>this.highscore&&(localStorage.setItem("hangman-highscore",this.streak),this.highscore=localStorage.getItem("hangman-highscore")))}else this.attempts++,this.attempts===this.maxAttempts&&(this.$q.notify({type:"negative",message:"Game over!",position:"bottom"}),this.streak=0,this.disable=!0,this.revealed.forEach(function(e,a){null===e&&t.missingIdxs.push(a)}),this.revealed=this.chosenWord)},reset:function(){this.chosenWord=i[Math.floor(Math.random()*i.length)],this.revealed=new Array(this.chosenWord.length).fill(null),this.graveyard=[],this.attempts=0,this.disable=!1,this.missingIdxs=[],this.success=!1}},computed:{words:function(){return i}},mounted:function(){this.chosenWord=i[Math.floor(Math.random()*i.length)],this.revealed=this.chosenWord.split("").map(function(e){return"-"===e?"-":null}),localStorage.getItem("hangman-highscore")&&(this.highscore=localStorage.getItem("hangman-highscore"))}},o=n,l=(a("gEGz"),a("KHd+")),c=Object(l["a"])(o,s,r,!1,null,null,null);c.options.__file="Index.vue";t["default"]=c.exports},rUjw:function(e){e.exports=["alpha","apple","anteater","attitude","atlantic","agoraphobia","arachnid","boom","bees","beta","battle","botanist","badger","boat","bottle","board","cattle","capital","champion","churning","canada","columbia","cooperative","cunning","confidential","confident","conversation","context","conman","commander","congratulations","dance","ditto","dilapidated","decapitated","dumped","discoball","dragon","dressing-gown","elephant","earache","earring","eyelashes","fabulous","gaping","graceful","gamma","giraffe","gemstone","gripping","grill","happiness","hardware","hostel","hiker","hardhat","igloo","jumper","jalapeños","kaftan","lemonade","league","legend","lambda","monstrosity","neopolitan","orthodontics","octagon","postmodern","pocket","packet","queue","radical","rumour","ropebridge","ratatouille","rippled","restriction","starter","shootout","shower","suddenly","sigma","suitcase","topology","tumour","timbuktu","tumeric","tablet","thankful","tangerine","undergraduate","underground","underworld","underwater","ukelele","useless","vaccine","vacation","vatican","warzone","wardrobe","workaround","xylophone","yacht","yellow","youthful","yearning","yahoo","zipper","zone","zeitgeist","zooming","kebab","tortilla","apple","pineapple","peanuts","nachos","chilli-con-carne","olives","calamari","blackberry","raspberry","strawberry","cherries","watermelon","orange","lemon","banana","avacado","guacamole","coconut","aubergine","beetroot","potato","sweetcorn","broccoli","pretzel","baguette","pancakes","croissant","hamburger","cheese-burger","sandwich","french-fries","enchiladas","fajitas","stir-fry","doughnut","cereal","sundae","lollipop","girafffe","penguin","turtle","tortoise","caterpillar","tiger","zebra","horse","camel","pony","crocodile","alligator","parrot","dinosaur","reptile","tarantula","spider","monkey","gorilla","octopus","piglet","reindeer","unicorn","lioness","poodle","shiba-inu","elephant","squirrel"]}}]);