<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-md">🔎 Pretraživanje knjiga</div>

    <div class="q-gutter-md row items-center">
      <q-input
        filled
        v-model="searchTerm"
        label="Unesite pojam za pretraživanje"
        class="col-6"
      />

      <div class="col-3">
        <q-option-group
          v-model="searchBy"
          :options="[
            { label: 'Po autoru', value: 'autor' },
            { label: 'Po naslovu', value: 'naslov' }
          ]"
          type="checkbox"
          inline
        />
      </div>

      <q-btn
        color="primary"
        label="Traži"
        icon="search"
        class="col-2"
        @click="searchBooks"
      />
    </div>

    <div v-if="filteredBooks.length" class="q-mt-lg">
      <q-table
        title="Rezultati pretraživanja"
        :rows="filteredBooks"
        :columns="columns"
        row-key="id"
        flat
        bordered
      />
    </div>

    <div v-else-if="searched" class="text-grey q-mt-lg">
      Nema pronađenih rezultata.
    </div>
  </q-page>
</template>

<script setup>

import { ref } from 'vue'

const searchTerm = ref('')
const searchBy = ref(['naslov'])
const searched = ref(false)

const columns = [
  { name: 'id', label: 'ID', field: 'id', align: 'left' },
  { name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left' },
  { name: 'autor', label: 'Autor', field: 'autor', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'center' }
]

// Dummy podaci
const books = ref([
  { id: 1, naslov: 'Na Drini ćuprija', autor: 'Ivo Andrić', status: 'Slobodna' },
  { id: 2, naslov: 'Derviš i smrt', autor: 'Meša Selimović', status: 'Zauzeta' },
  { id: 3, naslov: 'Zlatarovo zlato', autor: 'August Šenoa', status: 'Slobodna' },
  { id: 4, naslov: 'Judita', autor: 'Marko Marulić', status: 'Zauzeta' }
])

const filteredBooks = ref([])

function searchBooks() {
  const term = searchTerm.value.toLowerCase()
  searched.value = true

  filteredBooks.value = books.value.filter(book => {
    const byTitle = searchBy.value.includes('naslov') && book.naslov.toLowerCase().includes(term)
    const byAuthor = searchBy.value.includes('autor') && book.autor.toLowerCase().includes(term)
    return byTitle || byAuthor
  })
}
</script>
