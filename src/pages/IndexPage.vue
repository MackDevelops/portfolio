<template>
  <q-page class="">
    <div class="full-width row items-center position-relative" >
      <div class="row col-12 justify-center">
        <div class="col-12 absolute overflow-hidden" v-if="$q.dark.isActive" style="height:500px;">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
        </div>
        <div class="col-12 row" style="max-width:1200px;">
          <div class="col-12 row q-pa-lg items-center" >
            <div class="col-12 lt-md justify-center items-center row q-pa-md q-mb-md" style="min-width:200px;">
              <q-img src="/IndexPage/portrait-circle.png" style="width:327px;height:349px;"></q-img>
            </div>
            <div class="col-xs-12 col-md row justify-start items-center" >
              <span class="text-h2 text-left" > <!-- add a language below to change language when hovering over -->
                {{ $t('lbl_hi').replace('$[name]', "Prince") }} 
              </span>
              <span class="text-h2"> 
                {{ $t('lbl_aFrontEndDeveloper') }}
              </span><br/>
              <span class="text-h5 q-pt-md"> 
                {{ $t('lbl_imAlsoText') }} 
              </span><br/>
              <div class="col-12 q-pt-md q-gutter-sm">
                <q-btn rounded flat class="bg-primary text-white">{{ $t('home.lbl_skills') }}</q-btn>
                <q-btn rounded flat class="bg-primary text-white">{{ $t('home.lbl_skills') }}</q-btn>
              </div>
            </div>
            <div class="col-shrink gt-sm justify-center items-center row q-pa-md q-mb-md" style="min-width:200px;">
              <q-img src="/IndexPage/portrait-circle.png" style="width:327px;height:349px;"></q-img>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
