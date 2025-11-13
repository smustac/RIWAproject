<template>
  <q-page class="q-pa-md">
    <q-table
      title="Knjige"
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:body-cell-slika="props">
        <q-td :props="props" class="text-center">
          <img
            :src="props.row.slika"
            alt="slika knjige"
            style="width: 80px; height: auto; border-radius: 8px;"
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
const columns = [
  { name: 'id', label: 'ID', field: 'id', align: 'center', sortable: true },
  { name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left', sortable: true },
  { name: 'autor', label: 'Autor', field: 'autor', align: 'left' },
  { name: 'opis', label: 'Opis', field: 'opis', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'center' },
  { name: 'slika', label: 'Slika', field: 'slika', align: 'center' }
]

const rows = [
  {
    id: 1,
    naslov: 'It',
    autor: 'Stephen King',
    opis: 'Kultni horor roman o zlom entitetu koji poprima oblik klauna Pennywisea i terorizira grad Derry.',
    slika: '/slike/it.jpg',
    status: 'Zauzeta'
  }
]
</script>
