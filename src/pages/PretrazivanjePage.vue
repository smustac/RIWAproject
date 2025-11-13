<template>
  <q-page class="q-pa-md">
    <h4>Pretraživanje knjiga</h4>

    <div class="q-pa-md bg-grey-2 rounded-borders q-mb-md">
      <q-input filled v-model="pojam" label="Upiši pojam" class="q-mb-sm" />
      <div>
        <q-checkbox v-model="poNaslovu" label="Po naslovu" />
        <q-checkbox v-model="poAutoru" label="Po autoru" />
      </div>
      <q-btn label="Traži" color="primary" class="q-mt-sm" @click="pretrazi" />
    </div>

    <q-table
      title="Rezultati pretrage"
      :rows="rezultati"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const pojam = ref('')
const poNaslovu = ref(false)
const poAutoru = ref(false)
const rezultati = ref([])

const knjige = [
  { id: 1, naslov: 'It', autor: 'Stephen King', opis: 'Horor o klaunu.' },
  { id: 2, naslov: 'Dracula', autor: 'Bram Stoker', opis: 'Vampir klasik.' },
  { id: 3, naslov: 'Frankenstein', autor: 'Mary Shelley', opis: 'Znanstveni horor.' }
]

const columns = [
  { name: 'id', label: 'ID', field: 'id' },
  { name: 'naslov', label: 'Naslov', field: 'naslov' },
  { name: 'autor', label: 'Autor', field: 'autor' },
  { name: 'opis', label: 'Opis', field: 'opis' }
]

const pretrazi = () => {
  const query = pojam.value.toLowerCase()
  rezultati.value = knjige.filter(k =>
    (poNaslovu.value && k.naslov.toLowerCase().includes(query)) ||
    (poAutoru.value && k.autor.toLowerCase().includes(query))
  )
}
</script>
