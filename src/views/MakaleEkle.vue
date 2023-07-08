<template>
  <div class="makale-ekle">
    <form @submit.prevent="makaleEkle">
      <label for="baslik">Makale Başlık</label>
      <input type="text" name="baslik" id="baslik" v-model="baslik" required/>
      <label for="icerik">Makale İçerik</label>
      <textarea name="icerik" id="icerik" cols="30" v-model="icerik" rows="10"></textarea>
      <button type="submit">Oluştur</button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue';
import {db,timestamp} from '@/firebase/config'
import {useRouter} from 'vue-router'
export default {
  setup() {
    const baslik = ref('');
    const icerik = ref('');
    const router = useRouter();

    const makaleEkle = async() => {
      const makale = {
        baslik :baslik.value,
        icerik: icerik.value,
        olusturulmaTarihi : timestamp()
      }
      const res = await db.collection('makaleler').add(makale)
      .then(() =>{
        router.push("/")
      }).catch((err=>console.log(err.message)))
    }

    return {makaleEkle, baslik, icerik}

  }
}
</script>

<style scoped>
  .makale-ekle form {
    max-width: 400px;
    margin: 0 auto;
  }

 textarea,input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 8px;
 }

 textarea {
  height: 120px;
 }

 label {
  display: block;
  margin-top:24px;
 }

 button {
  margin-top:20px;
  background: #ddd;
  color: black;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.2rem;
 }

</style>