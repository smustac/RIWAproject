

<template >
  <q-page padding>
     {{ msg }}
   <p v-text= "msg"></p>
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
    <button v-else v-show="false">
      {{ item }}
    </button>
  <q-table
     flat bordered
     :rows="rows"
     :columns="columns"
     row-key="name"
>
<template v-slot:body-cell-myimage="props1">
   <q-td :props="props1">
     <img :src="props1.row.slika" width="100px">
   </q-td>
</template>
</q-table>
</p>
   <a :href="link.url" :target="link.target"> {{link.text}} </a>
   <q-input color="purple-12" v-model="text1" label="Item name" @keyup="log()"> </q-input>
  


  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const msg = 'Hello!'
const htmlText = '<p><b>Formatirani</b> tekst</p>'
const days = ['Ponedjeljak', 'Utorak',
'Srijeda', 'Četvrtak', 'Petak', 'Subota',
'Nedjelja']
const columns = [
{
name: 'name',
required: true,
label: 'Naziv',
align: 'left',
field: row => row.name,
format: val => `${val}`,
sortable: true
},
{
name: 'myimage'
,
label: 'Slika'
,
field: 'slika'
}]
const text = ref('')
text.value = "Hello"
const link = {
url: 'http://www.google.com',
target: '_blank',
text: 'Google'
}

const text1 = ref('')
text1.value = "Hello"

function log() {

  console.log(text1.value)

}
</script>

