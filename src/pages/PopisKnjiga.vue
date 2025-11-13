<template>
  <q-page padding>
    <div class="q-pa-md" style="max-width: 350px">
    <q-list dense bordered padding class="rounded-borders">
      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          Item
        </q-item-section>
      </q-item>
    </q-list>
    </div>
    <div>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>List item</q-item-section>
      </q-item>
    
    </div>
   
    <q-table
    title="Knjige"
    flat bordered
    :rows="rows"
    :columns="columns"
    row-key="id"
    >
    <template v-slot:body-cell-myimage="props1">
      <q-td :props="props1">
        <img :src="props1.row.slika" width="100px">
      </q-td>
    </template>
    </q-table>
  
  </q-page>
</template>

<script>
const columns = [
  {name: 'id', label: 'ID', field: 'id', align: 'center', style: 'width: 80px; text-align: center;', headerStyle: 'background-color: #f5f5f5; text-align: center;', sortable: true},
  {name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left', style: 'text-align: left;', headerStyle: 'background-color: #f5f5f5; text-align: left;', sortable: true },
  {name: 'autor', label: 'Autor', field: 'autor', align: 'left', style: 'text-align: left;', headerStyle: 'background-color: #f5f5f5; text-align: left;' },
  {name: 'opis', label: 'Opis', field: 'opis', align: 'left', style: 'text-align: left; max-width: 300px; white-space: normal;', headerStyle: 'background-color: #f5f5f5; text-align: left;' },
  //{name: 'slika', label: 'Slika', field: 'slika', align: 'center', style: 'text-align: center;', headerStyle: 'background-color: #f5f5f5; text-align: center;' },
  {name: 'status', label: 'Status', field: 'status', align: 'center', style: 'text-align: center;', headerStyle: 'background-color: #f5f5f5; text-align: center;', sortable: true},
  {name: 'name', required: true, label: 'Name', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
  {name: 'myimage', label: 'Slika', field: 'slika' }]

const rows = [ 
  {
    id: 1,
    naslov: 'It',
    autor: 'Stephen King',
    opis: 'Kultni horor roman o zlom entitetu koji poprima oblik klauna Pennywisea i terorizira grad Derry.',
    slika: 'https://media.newyorker.com/photos/59b3f875e899d754c57f4c35/master/w_2560%2Cc_limit/Rothman-IT.JPG',
    status: 'Zauzeta'
  },
  {
    id: 2,
    naslov: 'The Shining',
    autor: 'Stephen King',
    opis: 'Psihološki horor o obitelji koja boravi u zlokobnom hotelu Overlook gdje otac polako gubi razum.',
    slika: '',
    status: 'Slobodna'
  },
  {
    id: 3,
    naslov: 'Dracula',
    autor: 'Bram Stoker',
    opis: 'Klasik horor književnosti koji prati grofa Drakulu i njegov pokušaj širenja vampirizma u Englesku.',
    slika: '',
    status: 'Slobodna'
  },
  {
    id: 4,
    naslov: 'Frankenstein',
    autor: 'Mary Shelley',
    opis: 'Roman o znanstveniku Viktoru Frankensteinu koji stvara život i mora se suočiti s posljedicama svoje kreacije.',
    slika: '',
    status: 'Zauzeta'
  },
  {
    id: 5,
    naslov: 'The Exorcist',
    autor: 'William Peter Blatty',
    opis: 'Zastrašujuća priča o djevojčici opsjednutoj demonima i dvojici svećenika koji pokušavaju izvršiti egzorcizam.',
    slika: '',
    status: 'Slobodna'
  }]

export default {
  setup () {
    return {
      columns,
      rows
    }
  }
}
</script>
