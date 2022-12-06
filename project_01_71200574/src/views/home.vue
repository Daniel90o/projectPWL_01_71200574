<template>
  <div class="home-container">
    <textarea placeholder="placeholder" class="home-textarea textarea"></textarea>
    <router-link to="/makanan2" class="home-navlink">Checkout</router-link>
    <span class="home-text">Daftar Menu</span>
    <router-link to="/makanan" class="home-navlink1">Makanan</router-link>
    <span class="home-text1">Minuman</span>
    <span class="home-text2">Snack</span>
    <h1 class="home-text3">
      <span>Selamat Datang di Aplikasi MacDonal,</span>
      <br />
      <span>Silakan Pesan Makanan Anda</span>
      <br />
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    title: 'Huge Functional Dunlin',
    meta: [
      {
        property: 'og:title',
        content: 'Huge Functional Dunlin',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.home-textarea {
  width: 439px;
  height: 1002px;
  background-color: #dc5c5c;
}
.home-navlink {
  left: 75px;
  color: rgb(0, 0, 0);
  width: 269px;
  bottom: 83px;
  height: 42px;
  margin: auto;
  position: absolute;
  font-size: 35px;
  text-align: center;
  font-weight: 700;
  text-decoration: none;
  background-color: rgb(255, 250, 91);
}
.home-text {
  top: 57px;
  left: 66px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
  font-weight: bold;
}
.home-navlink1 {
  top: 126px;
  left: 68px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
  text-decoration: none;
}
.home-text1 {
  top: 196px;
  left: 66px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
}
.home-text2 {
  top: 266px;
  left: 69px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
}
.home-text3 {
  top: 452px;
  left: 661px;
  position: absolute;
  font-size: 40px;
  align-self: center;
  text-align: center;
  border-radius: var(--dl-radius-radius-radius4);
}
</style>
