<template>
<<<<<<< HEAD
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
=======
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-h3"> Web aplikacija </q-toolbar-title>
        

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

>>>>>>> 6bd971560f50f4ab56c484ffb384272ed1c9a345
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
<<<<<<< HEAD
=======
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Web aplikacija',
    caption: 'github web app',
    icon: 'favorite',
    link: 'https://github.com/thejudgeee/webappp.git',
  },
  {
    title: 'veleri',
    caption: 'veleri stranica',
    icon: 'home',
    link: 'https://www.veleri.hr/hr',
  },
]
>>>>>>> 6bd971560f50f4ab56c484ffb384272ed1c9a345

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
<<<<<<< HEAD

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
=======
</script>
>>>>>>> 6bd971560f50f4ab56c484ffb384272ed1c9a345
