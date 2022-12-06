<template>
  <div class="makanan1-container">
    <textarea
      placeholder="placeholder"
      class="makanan1-textarea textarea"
    ></textarea>
    <button class="makanan1-button">Checkout</button>
    <span class="makanan1-text">Daftar Menu</span>
    <img
      src="/playground_assets/eo8bgkwaqrxh7y0myj3k-300h.png"
      alt="image"
      class="makanan1-image"
    />
    <span class="makanan1-text01">Pesanan Anda</span>
    <img
      src="/playground_assets/j5yefsakzntn2izslk0b-300h.png"
      alt="image"
      class="makanan1-image1"
    />
    <span class="makanan1-text02">Total Pesanan Anda Rp 92.000</span>
    <span class="makanan1-text03">Makanan</span>
    <span class="makanan1-text04">Minuman</span>
    <span class="makanan1-text05">
      <span class="makanan1-text06">Catatan:</span>
      <br class="makanan1-text07" />
      <span class="makanan1-text08">Pedas</span>
      <br class="makanan1-text09" />
      <span class="makanan1-text10">Ekstra Kentang</span>
      <br />
    </span>
    <span class="makanan1-text12">GigaMac</span>
    <span class="makanan1-text13">Rp 80.000</span>
    <span class="makanan1-text14">Rp 80.000</span>
    <span class="makanan1-text15">Monday Ice Cream</span>
    <span class="makanan1-text16">Snack</span>
  </div>
</template>

<script>
export default {
  name: 'Makanan1',
  metaInfo: {
    title: 'Makanan1 - Huge Functional Dunlin',
    meta: [
      {
        property: 'og:title',
        content: 'Makanan1 - Huge Functional Dunlin',
      },
    ],
  },
}
</script>

<style scoped>
.makanan1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.makanan1-textarea {
  width: 439px;
  height: 1002px;
  background-color: #dc5c5c;
}
.makanan1-button {
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
  background-color: rgb(255, 250, 91);
}
.makanan1-text {
  top: 57px;
  left: 66px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
  font-weight: bold;
}
.makanan1-image {
  top: 485px;
  left: 582px;
  width: 198px;
  height: 247px;
  position: absolute;
  object-fit: cover;
}
.makanan1-text01 {
  top: 74px;
  left: 512px;
  color: rgb(0, 0, 0);
  position: absolute;
  font-size: 40px;
  font-weight: bold;
}
.makanan1-image1 {
  top: 111px;
  left: 505px;
  width: 290px;
  height: 249px;
  position: absolute;
  object-fit: cover;
}
.makanan1-text02 {
  color: rgb(0, 0, 0);
  right: 74px;
  bottom: 68px;
  position: absolute;
  font-size: 40px;
  font-weight: bold;
}
.makanan1-text03 {
  top: 126px;
  left: 68px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
  text-decoration: underline;
}
.makanan1-text04 {
  top: 196px;
  left: 66px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
}
.makanan1-text05 {
  top: 337px;
  left: 827px;
  color: rgb(164, 150, 150);
  position: absolute;
  font-size: 35px;
}
.makanan1-text06 {
  font-size: 20px;
}
.makanan1-text07 {
  font-size: 20px;
}
.makanan1-text08 {
  font-size: 20px;
}
.makanan1-text09 {
  font-size: 20px;
}
.makanan1-text10 {
  font-size: 20px;
}
.makanan1-text12 {
  top: 367px;
  left: 580px;
  color: rgb(0, 0, 0);
  position: absolute;
  font-size: 35px;
  font-weight: 700;
}
.makanan1-text13 {
  top: 372px;
  color: rgb(0, 0, 0);
  right: 117px;
  position: absolute;
  font-size: 35px;
  font-weight: 700;
}
.makanan1-text14 {
  top: 741px;
  color: rgb(0, 0, 0);
  right: 110px;
  position: absolute;
  font-size: 35px;
  font-weight: 700;
}
.makanan1-text15 {
  top: 737px;
  left: 525px;
  color: rgb(0, 0, 0);
  position: absolute;
  font-size: 35px;
  font-weight: 700;
}
.makanan1-text16 {
  top: 266px;
  left: 69px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
}
</style>
