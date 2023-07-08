<template>
  <div>
    <div v-if="hatalar">
        {{ hatalar }}
    </div>
    <div v-else-if="makale">
        <div>
            <h1>{{ makale.baslik }}</h1>
            <br>
            <p>{{makale.icerik}}</p>

            <br><br><br><br><br>
             
            <p>Oluşturulma Tarihi : {{makale.olusturulmaTarihi}}</p>
            <br><br><br><br><br>
            <div class="delete" @click="makaleSil">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </div>

        </div>
    </div>
    <div v-else>
        Yükleniyor...
    </div>

  </div>
</template>

<script>

import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import makaleGetir from '@/composables/makaleGetir'
import {db} from '@/firebase/config'

export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
      const id = ref(route.params.id);
        
      const {makaleYukle,hatalar,makale} = makaleGetir(route.params.id)
      makaleYukle()
    
      const makaleSil = async () => {
        await db.collection('makaleler').doc(route.params.id).delete().then(() =>{
            router.push("/");
        })
      }


      return {makaleYukle,hatalar,makale,makaleSil}
    }
}
</script>

<style>
    .delete {
        cursor: pointer;
    }
</style>