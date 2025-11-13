<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Gornji header -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>Web page</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Bočni izbornik -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Izbornik</q-item-label>

        <q-item
          v-for="link in linksList"
          :key="link.title"
          clickable
          tag="a"
          :href="link.link"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ link.title }}</q-item-label>
            <q-item-label caption>{{ link.caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Glavni sadržaj -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const linksList = [
  { title: 'Naslovnica', caption: 'Početna stranica', icon: 'home', link: '/#/' },
  { title: 'Nove knjige', caption: 'Pregled novih knjiga', icon: 'menu_book', link: '/#/noveknjige' },
  { title: 'Popis knjiga', caption: 'Sve knjige u knjižnici', icon: 'library_books', link: '/#/popisknjiga' },
  { title: 'Pretraživanje', caption: 'Pretraži knjige', icon: 'search', link: '/#/pretrazivanje' },
  { title: 'Lokacija', caption: 'Gdje se nalazimo', icon: 'location_on', link: '/#/lokacija' },
  { title: 'Login', caption: 'Prijava korisnika', icon: 'login', link: '/#/login' },
  { title: 'Registracija', caption: 'Novi korisnik', icon: 'person_add', link: '/#/registracija' },
  { title: 'Unos novih knjiga', caption: 'Novi korisnik', icon: 'library_books', link: '/#/unosKnjiga' },
]
</script>

<style scoped>
.q-toolbar-title {
  font-weight: bold;
}
</style>
