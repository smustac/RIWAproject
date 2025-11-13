<template>
  <q-page class="q-pa-md">
    <h4>Login</h4>
    <q-form @submit="login">
      <q-input filled v-model="korisnik.korisnickoIme" label="Korisničko ime" />
      <q-input filled v-model="korisnik.lozinka" label="Lozinka" type="password" />
      <q-btn label="Potvrdi" color="primary" type="submit" class="q-mt-md" />
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
const korisnik = ref({ korisnickoIme: '', lozinka: '' })
const login = () => alert('Pokušaj prijave: ' + korisnik.value.korisnickoIme)
</script>