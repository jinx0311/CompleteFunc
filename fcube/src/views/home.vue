<template>
  <div class="Index">

    <headNav :activeNav="'Inicio'"></headNav>

    <Inicio></Inicio>
    <!-- <Sobre v-if="activeNav=='sobre'"></Sobre>
    <Aviso v-if="activeNav=='Aviso'"></Aviso>
    <Ayuda v-if="activeNav=='ayuda'"></Ayuda> -->

    <footPage></footPage>
  </div>
</template>

<script>
import headNav from "@/components/headNav.vue";
import Inicio from "@/components/Inicio.vue";
// import Sobre from "@/components/sobre.vue";
// import Aviso from "@/components/Aviso.vue";
// import Ayuda from "@/components/ayuda.vue";

import footPage from "@/components/foot.vue";

export default {
  name: 'Index',
  components: { headNav, Inicio, footPage },
  data () {
    return {
      activeNav: "Inicio",
    }
  },
  created() {
    let nav = localStorage.getItem('activeNav');
    if (nav) {
      this.activeNav = nav;
    } else {
      localStorage.setItem('activeNav', this.activeNav);
    }
  },
  methods: {
    // getActiveNav(val) {
    //   this.activeNav = val;
    // }
  }
}
</script>

<style scoped>
.Index {
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin: 0;
  padding: 0;
}
</style>
