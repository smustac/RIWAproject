<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn push color="white" text-color="primary" label="Unread Mails">
      <q-badge color="orange" v-model="unread" floating>{{ unread }}</q-badge>
    </q-btn>

    <q-btn dense color="purple" round icon="email" class="q-ml-md">
      <q-badge color="red" v-model="open" floating>{{ open }}</q-badge>
    </q-btn>
  <q-card class="my-card bg-secondary text-white" v-for="item in msg" :key="item">
      <q-card-section>
        <div class="text-h6">{{item.title}}</div>
        <div class="text-subtitle2">{{item.author}}</div>
      </q-card-section>

      <q-card-section>
        {{ item.text }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat @click="openMsg()">open</q-btn>
        <q-btn flat @click="deleteMsg()">Delete</q-btn>
      </q-card-actions>
    </q-card>
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="title" label="title" />
      <q-input v-model="author" label="author" />
      <q-input v-model="text" label="text" />
      <q-btn flat @click="save()">Save</q-btn>
    </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
const msg = [
  {
    title: 'Changing planet',
    author: "Jon DO",
    text: 'loke ipsum.'
  },
  {
    title: 'chun li planet',
    author: "Jon DOG",
    text: '._.'
  }

]
let unread = ref(67)
let open = ref(4)

let title =ref('')
let author =ref('')
let text =ref('')
function save(){
  msg.push({title:title.value, author:author.value, text:text.value})
  console.log(msg)
}
function openMsg(){
  if (open.value > 0) {
    open.value -= 1;
  } else {
    open.value = 0;
  }
  console.log("Open"+open.value)
  

}
function deleteMsg(){
  if (unread.value > 0) {
    unread.value -= 1;
  } else {
    unread.value = 0;
  }
  console.log("Delete"+unread.value)

}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>