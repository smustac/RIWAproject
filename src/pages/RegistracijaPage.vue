<template>
  <q-page class="q-pa-md">
    <h4>Registracija</h4>
    <q-form @submit="registriraj">
      <q-input filled v-model="korisnik.ime" label="Ime" />
      <q-input filled v-model="korisnik.prezime" label="Prezime" />
      <q-input filled v-model="korisnik.korisnickoIme" label="Korisničko ime" />
      <q-input filled v-model="korisnik.email" label="Email" type="email" />
      <q-input filled v-model="korisnik.lozinka" label="Lozinka" type="password" />
      <q-btn label="Potvrdi" color="positive" type="submit" class="q-mt-md" />
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const korisnik = ref({ ime: '', prezime: '', korisnickoIme: '', email: '', lozinka: '' })
const registriraj = () => alert('Registriran: ' + korisnik.value.korisnickoIme)
</script>
