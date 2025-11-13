<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 400px">
      <q-input filled v-model="naslov" label="Naslov knjige" />
      <q-input filled v-model="autor" label="Ime autora" />
      <q-input filled v-model="opis" label="Opis" />

    
      <q-file
        outlined
        v-model="fileModel"
        label="Odaberi sliku knjige"
        accept="image/*"
        @update:model-value="ucitajSliku"
      >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>


      <div v-if="slikaPreview" class="q-mt-sm">
        <q-img :src="slikaPreview" style="width: 100px; height: 140px;" />
      </div>

      <q-select
        filled
        v-model="status"
        :options="options"
        label="Dostupnost knjige"
      />

    
      <div class="row q-gutter-sm q-mt-md">
        <q-btn
          label="Spremi"
          color="primary"
          icon="save"
          @click="spremiKnjigu"
        />
        <q-btn
          label="Odustani"
          color="negative"
          flat
          icon="close"
          @click="odustani"
        />
      </div>
    </div>

    <div class="q-mt-lg">
      <h6> Popis knjiga:</h6>
      <q-list bordered separator v-if="knjige.length">
        <q-item v-for="(k, index) in knjige" :key="index">
          <q-item-section avatar>
            <q-img
              :src="k.slika"
              style="width: 60px; height: 80px; object-fit: cover;"
            />
          </q-item-section>

          <q-item-section>
            <q-item-label><b>{{ k.naslov }}</b> — {{ k.autor }}</q-item-label>
            <q-item-label caption>
              ID: {{ k.id }} | Status: {{ k.status }}
            </q-item-label>
            <q-item-label caption>{{ k.opis }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div v-else class="text-grey q-mt-md">
        Nema unesenih knjiga.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'


const naslov = ref('')
const autor = ref('')
const opis = ref('')
const fileModel = ref(null)
const slikaPreview = ref(null)
const status = ref(null)
const options = ['Slobodna', 'Zauzeta']


const knjige = ref([])


function ucitajSliku(file) {
  if (!file) {
    slikaPreview.value = null
    return
  }

  const reader = new FileReader()
  reader.onload = e => {
    slikaPreview.value = e.target.result
  }
  reader.readAsDataURL(file)
}

function spremiKnjigu() {
  if (!naslov.value || !autor.value) {
    alert('Molimo unesite naslov i autora knjige!')
    return
  }

  const novaKnjiga = {
    id: knjige.value.length + 1,
    naslov: naslov.value,
    autor: autor.value,
    opis: opis.value,
    status: status.value || 'Slobodna',
    slika: slikaPreview.value 
  }
  

  knjige.value.push(novaKnjiga)
  odustani()
  
}


function odustani() {
  
  naslov.value = ''
  autor.value = ''
  opis.value = ''
  fileModel.value = null
  slikaPreview.value = null
  status.value = null
}
</script>
