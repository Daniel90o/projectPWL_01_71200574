<template>
  <div class="makanan-container">
    <textarea
      placeholder="placeholder"
      class="makanan-textarea textarea"
    ></textarea>
    <span class="makanan-text">Daftar Menu</span>
    <span class="makanan-text1">Makanan</span>
    <span class="makanan-text2">Minuman</span>
    <span class="makanan-text3">Snack</span>
    <router-link to="/makanan1" class="makanan-navlink">
      <img
        src="/playground_assets/j5yefsakzntn2izslk0b-400h.png"
        alt="image"
        class="makanan-image"
      />
    </router-link>
    <img
      src="/playground_assets/uku5bjlspyqswewsxvfv-400h.png"
      alt="image"
      class="makanan-image1"
    />
    <img
      src="/playground_assets/qfolkbse1r3oj75zam4b-300h.png"
      alt="image"
      class="makanan-image2"
    />
    <span class="makanan-text4">GigaMac</span>
    <span class="makanan-text5">ChisBurger</span>
    <span class="makanan-text6">MacNaget</span>
    <router-link to="/makanan2" class="makanan-navlink1">Checkout</router-link>
  </div>
</template>

<script>
export default {
  name: 'Makanan',
  metaInfo: {
    title: 'Makanan - Huge Functional Dunlin',
    meta: [
      {
        property: 'og:title',
        content: 'Makanan - Huge Functional Dunlin',
      },
    ],
  },
}
</script>

<style scoped>
.makanan-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.makanan-textarea {
  width: 439px;
  height: 1002px;
  background-color: #dc5c5c;
}
.makanan-text {
  top: 57px;
  left: 66px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
  font-weight: bold;
}
.makanan-text1 {
  top: 126px;
  left: 68px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
  text-decoration: underline;
}
.makanan-text2 {
  top: 196px;
  left: 66px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
}
.makanan-text3 {
  top: 266px;
  left: 69px;
  color: rgb(255, 255, 255);
  position: absolute;
  font-size: 35px;
}
.makanan-navlink {
  display: contents;
}
.makanan-image {
  top: 46px;
  left: 455px;
  width: 423px;
  height: 345px;
  position: absolute;
  object-fit: cover;
  text-decoration: none;
}
.makanan-image1 {
  top: 97px;
  left: 872px;
  width: 370px;
  height: 321px;
  position: absolute;
  object-fit: cover;
}
.makanan-image2 {
  top: 129px;
  right: 81px;
  width: 282px;
  height: 243px;
  position: absolute;
  object-fit: cover;
}
.makanan-text4 {
  top: 420px;
  left: 577px;
  position: absolute;
  font-size: 40px;
  font-weight: bold;
}
.makanan-text5 {
  top: 410px;
  left: 958px;
  position: absolute;
  font-size: 40px;
  font-weight: bold;
}
.makanan-text6 {
  top: 415px;
  right: 86px;
  position: absolute;
  font-size: 40px;
  font-weight: bold;
}
.makanan-navlink1 {
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
</style>
