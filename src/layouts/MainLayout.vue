<template>
  <q-layout view="lHh Lpr lFf" class="">
    <q-header flat class="bg-transparent header-class">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="">
          Prince Magbanua
        </q-toolbar-title>

        <!-- <div>pcimagbanua@gmail.com</div> -->
        
        <q-space></q-space>
        
        <q-list > 
          <q-btn flat>{{ $t('navbar.lbl_home') }}</q-btn>
          <q-btn flat>{{ $t('navbar.lbl_home') }}</q-btn>
          <q-btn flat>{{ $t('navbar.lbl_home') }}</q-btn>
        </q-list>
        <q-btn :icon="$q.dark.isActive?'img:icons/navbar/nightmode.svg':'img:icons/navbar/lightmode.svg'" round flat 
          @click="()=>{
           toggleDark()
          }">
          <q-tooltip transition-show="flip-right" transition-hide="flip-left"  self="center middle"
          class="text-center bg-transparent text-dynamic-color">{{ $t($q.dark.isActive?'navbar.lbl_darkMode':'navbar.lbl_lightMode') }}</q-tooltip>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Dark, useQuasar } from 'quasar';
import EssentialLink from 'components/EssentialLink.vue'


export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false)
    function toggleDark(){
      Dark.set(!$q.dark.isActive);
    }
    return {
      toggleDark,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
