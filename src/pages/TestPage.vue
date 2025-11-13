<template>
  <q-page padding>
    <p v-text="htmlText"></p>
    <p v-html="htmlText"></p>
    <p v-for="item in days" :key="item">
      <button>
        {{ item }}
      </button>
    </p>
    <p v-for="item in days" :key="item">
      <button v-if="item=='Ponedjeljak'">
        {{ item }} *
      </button>
      <button v-else>
        {{ item }}
      </button>
    </p>
    <p v-for="item in days" :key="item" >
      <button v-if="item=='Ponedjeljak'">
        {{ item }} *
      </button>
      <button v-else v-show="false">
        {{ item }}
      </button>
    </p>

    <a :href="link.url" :target="link.target"> {{link.text}} </a>

    <q-input color="purple-12" v-model="text1" label="Item name" @keyup="Log()"> </q-input>
  </q-page>
</template>

<script setup>
import {ref} from 'vue'

  const htmlText = '<p><b>Formatirani</b> tekst</p>'
  const days = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota','Nedjelja']
  
  const link = {
  url: 'http://www.google.com',
  target: '_blank',
  text: 'Google'
  }

  const text1 = ref('')
  text1.value = "Hello"

  function Log() {
    console.log(text1.value)
  }
</script>
