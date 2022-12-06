<template>
  <div class="makanan2-container">
    <textarea
      placeholder="placeholder"
      class="makanan2-textarea textarea"
    ></textarea>
    <router-link to="/makanan2" class="makanan2-navlink">Checkout</router-link>
    <textarea
      placeholder="Tambah Ke Pesanan"
      class="makanan2-textarea1 textarea button"
    ></textarea>
    <span class="makanan2-text">Daftar Menu</span>
    <span class="makanan2-text01">Makanan</span>
    <span class="makanan2-text02">Minuman</span>
    <span class="makanan2-text03">Snack</span>
    <span class="makanan2-text04">Pedas</span>
    <span class="makanan2-text05">Tidak</span>
    <span class="makanan2-text06">Tidak</span>
    <span class="makanan2-text07">Ya</span>
    <span class="makanan2-text08">Pedas/Tidak</span>
    <span class="makanan2-text09">
      <span class="makanan2-text10">GigaMac</span>
      <br />
      <span>Rp 70.000</span>
      <br />
    </span>
    <span class="makanan2-text14">Ekstra Kentang (+10.000)</span>
    <img
      src="/playground_assets/j5yefsakzntn2izslk0b-600h.png"
      alt="image"
      class="makanan2-image"
    />
  </div>
</template>

<script>
export default {
  name: 'Makanan2',
  metaInfo: {
    title: 'Makanan2 - Huge Functional Dunlin',
    meta: [
      {
        property: 'og:title',
        content: 'Makanan2 - Huge Functional Dunlin',
      },
    ],
  },
}
</script>

<style scoped>
.makanan2-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.makanan2-textarea {
  width: 439px;
  height: 1002px;
  background-color: #dc5c5c;
}
.makanan2-navlink {
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
.makanan2-textarea1 {
  color: #ffffff;
  right: 64px;
  width: 431px;
  bottom: 68px;
  height: 63px;
  position: absolute;
  font-size: 30px;
  text-align: center;
  border-color: rgba(0, 0, 0, 0);
  background-color: #dc5c5c;
}
.makanan2-text {
  top: 57px;
  left: 66px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
  font-weight: bold;
}
.makanan2-text01 {
  top: 126px;
  left: 68px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
}
.makanan2-text02 {
  top: 196px;
  left: 66px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
}
.makanan2-text03 {
  top: 266px;
  left: 69px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
}
.makanan2-text04 {
  top: 168px;
  left: 519px;
  color: #838383;
  position: absolute;
  font-size: 40px;
}
.makanan2-text05 {
  top: 384px;
  left: 716px;
  color: rgb(131, 131, 131);
  position: absolute;
  font-size: 40px;
}
.makanan2-text06 {
  top: 167px;
  left: 712px;
  position: absolute;
  font-size: 40px;
}
.makanan2-text07 {
  top: 379px;
  left: 526px;
  position: absolute;
  font-size: 40px;
}
.makanan2-text08 {
  top: 108px;
  left: 524px;
  position: absolute;
  font-size: 45px;
  font-weight: bold;
}
.makanan2-text09 {
  top: 569px;
  right: 193px;
  position: absolute;
  font-size: 45px;
  text-align: center;
  font-weight: bold;
}
.makanan2-text10 {
  font-size: 60px;
}
.makanan2-text14 {
  top: 311px;
  left: 520px;
  position: absolute;
  font-size: 45px;
  font-weight: bold;
}
.makanan2-image {
  top: 63px;
  right: 28px;
  width: 604px;
  height: 511px;
  position: absolute;
  object-fit: cover;
}
</style>
