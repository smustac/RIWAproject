<template>
  <q-page class="q-pa-md">

    <div class="text-h5 q-mb-md">📚 Popis svih knjiga</div>

    <q-table
      title="Tablica knjiga"
      :rows="rows"
      :columns="columns"
      row-key="id"
      flat
      bordered
      :pagination="pagination"
    >
      <!-- Slot za pretraživanje -->
      <template v-slot:top-right>
        <q-input
          filled
          dense
          debounce="300"
          v-model="filter"
          placeholder="Pretraži knjige..."
          class="q-ml-md"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <!-- Slot za prikaz slike -->
      <template v-slot:body-cell-slika="props">
        <q-td :props="props">
          <q-img :src="props.row.slika" style="width: 60px; height: 80px; border-radius: 4px;" />
        </q-td>
      </template>

      <!-- Slot za status -->
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <q-badge :color="props.row.status === 'Slobodna' ? 'green' : 'red'">
            {{ props.row.status }}
          </q-badge>
        </q-td>
      </template>
    </q-table>

  </q-page>
</template>

<script setup>
import { ref } from 'vue'

// 🔸 Definicija stupaca (columns)
const columns = [
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'left',
    sortable: true,
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'naslov',
    label: 'Naslov',
    field: 'naslov',
    align: 'left',
    sortable: true,
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'autor',
    label: 'Autor',
    field: 'autor',
    align: 'left',
    sortable: true,
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'opis',
    label: 'Opis',
    field: 'opis',
    align: 'left',
    sortable: false,
    style: { fontSize: '14px', maxWidth: '300px', whiteSpace: 'normal' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'slika',
    label: 'Slika',
    field: 'slika',
    align: 'center',
    sortable: false,
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  },
  {
    name: 'status',
    label: 'Status',
    field: 'status',
    align: 'center',
    sortable: true,
    style: { fontSize: '14px' },
    headerStyle: { fontSize: '18px' }
  }
]

// 🔸 Testni podaci (rows)
const rows = [
  {
    id: 1,
    naslov: 'Na Drini ćuprija',
    autor: 'Ivo Andrić',
    opis: 'Roman o životu i povijesti stanovnika grada Višegrada oko poznatog mosta.',
    slika: 'https://cdn.quasar.dev/img/mountains.jpg',
    status: 'Slobodna'
  },
  {
    id: 2,
    naslov: 'Derviš i smrt',
    autor: 'Meša Selimović',
    opis: 'Filozofski roman o borbi pojedinca s društvom i vlastitom savješću.',
    slika: 'https://cdn.quasar.dev/img/parallax1.jpg',
    status: 'Zauzeta'
  },
  {
    id: 3,
    naslov: 'Judita',
    autor: 'Marko Marulić',
    opis: 'Ep o hrabroj Juditi koja spašava svoj narod od neprijatelja.',
    slika: 'https://cdn.quasar.dev/img/quasar.jpg',
    status: 'Slobodna'
  },
  {
    id: 4,
    naslov: 'Zlatarovo zlato',
    autor: 'August Šenoa',
    opis: 'Povijesni roman smješten u Zagreb 16. stoljeća.',
    slika: 'https://cdn.quasar.dev/img/mountains.jpg',
    status: 'Zauzeta'
  },
  {
    id: 5,
    naslov: 'Gospoda Glembajevi',
    autor: 'Miroslav Krleža',
    opis: 'Drama o propasti zagrebačke građanske obitelji Glembay.',
    slika: 'https://cdn.quasar.dev/img/parallax2.jpg',
    status: 'Slobodna'
  }
]

// 🔸 Pagination i filter
const pagination = ref({ rowsPerPage: 5 })
const filter = ref('')
</script>
