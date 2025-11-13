<template>
  <q-page padding class="q-pa-md">
    
    <div class="q-gutter-md" style="max-width: 400px">
      <q-input outlined v-model="author" label="Ime autora" />
      <q-input outlined v-model="title" label="Naslov" />
      <q-input outlined v-model="description" label="Opis" />

      <q-file outlined v-model="file" label="Odaberi sliku" accept="image/*">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>

      <q-btn 
        label="Spremi unos" 
        color="primary" 
        @click="saveEntry"
        :disable="!author || !title"
      />
    </div>

    
    <div class="q-mt-xl">
      <div v-if="entries.length === 0">
        <q-banner dense class="bg-grey-3 text-grey-8">
          Nema unosa još. Dodaj novi unos iznad.
        </q-banner>
      </div>

      <div v-else>
        <div 
          v-for="(entry, index) in entries" 
          :key="entry.id" 
          class="q-mb-lg"
        >
          <q-card>
            <q-card-section>
              <div><strong>ID:</strong> {{ entry.id }}</div>
              <div><strong>Ime autora:</strong> {{ entry.author }}</div>
              <div><strong>Naslov:</strong> {{ entry.title }}</div>
              <div><strong>Opis:</strong> {{ entry.description }}</div>

              <div>
                <q-checkbox v-model="entry.checked" label="Zauzeta" />
              </div>
            </q-card-section>

            <q-card-section v-if="entry.imageUrl">
              <q-img 
                :src="entry.imageUrl" 
                alt="Slika" 
                style="max-width: 10%; border-radius: 8px;"
              />
            </q-card-section>

            <q-separator />

            <q-card-actions align="right">
              <q-btn 
                color="negative" 
                flat 
                icon="delete" 
                label="Obriši" 
                @click="deleteEntry(index)" 
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const author = ref('')
const title = ref('')
const description = ref('')
const file = ref(null)
const nextId = ref(1) 

const entries = ref([])

function saveEntry() {
  const newEntry = {
    id: nextId.value, 
    author: author.value,
    title: title.value,
    description: description.value,
    imageUrl: file.value ? URL.createObjectURL(file.value) : null,
    checked: false
  }

  entries.value.push(newEntry)

  
  nextId.value++

 
  author.value = ''
  title.value = ''
  description.value = ''
  file.value = null
}

function deleteEntry(index) {
  entries.value.splice(index, 1)
}
</script>
