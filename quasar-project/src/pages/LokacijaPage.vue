<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-md">📍 Lokacija knjižnice</div>
    <div id="map" style="height: 500px; width: 100%;"></div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const initialMap = ref(null)

onMounted(() => {
  // Inicijalizacija karte na zadanoj poziciji (lat, lng) i zoomu
  initialMap.value = L.map('map').setView([45.3312, 14.4322], 13)

  // Dodavanje OpenStreetMap sloja
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(initialMap.value)

  // Opcionalno: dodavanje markera na lokaciju
  L.marker([45.3312, 14.4322])
    .addTo(initialMap.value)
    .bindPopup('Knjiznica 📚')
    .openPopup()
})
</script>

<style>
/* Leaflet standardne ikone ponekad ne prikazuje pravilno u Quasaru, ovo osigurava da se učitaju */
.leaflet-container {
  height: 100%;
  width: 100%;
}
</style>
