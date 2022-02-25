<template>
  <div class="headNav">
    <div class="head">
      <div class="mainContent">
        <img @click="getActive('Inicio')" class="logo" src="@/assets/img/logo.png" alt="">
        <ul class="nav">
          <li :class="activeNav== 'Inicio'? 'active' : ''"><a @click="getActive('Inicio')">Inicio</a></li>
          <li :class="activeNav== 'Aviso'? 'active' : ''"><a @click="getActive('Aviso')">Producto</a></li>
          <li :class="activeNav== 'sobre'? 'active' : ''"><a @click="getActive('sobre')">Sobre nosotros</a></li>
          <li :class="activeNav== 'terminos'? 'active' : ''"><a @click="getActive('terminos')">Términos y condiciones</a></li> 
          <li :class="activeNav== 'ayuda'? 'active' : ''"><a @click="getActive('ayuda')">Ayuda</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "./scss/nav.scss";

export default {
  name: "headNav",
  props: [ 'activeNav' ],
  data() {
    return {
      // active: "Inicio",
    }
  },
  created() {
    // this.active = this.activeNav;
    // console.log(nav, this.active);
    // if (nav) {
    //   this.active = nav;
    // } else {
    //   localStorage.setItem('activeNav', "Inicio");
    // }
  },
  methods: {
    getActive(val) {
      // this.activeNav = val;
      let url = "";
      switch (val) {
        case "Inicio":
          url = "/home";
          break;
        case "sobre":
          url = "/about";
          break;
        case "Aviso":
          url = "/notice";
          break;
        case "ayuda": 
          url = "/help";
          break;
           case "terminos":
          url = "/terminos";
          break;
      } 
       this.$router.push(url);
    },
  }
}
</script>

<style>

</style>