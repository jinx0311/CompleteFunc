<template>
  <div class="Inicio">
   <div class="banner">
  <!-- <img class="banner_img" src="@/assets/image/bg_1.jpg" alt=""> -->
      <div class="mainContent">
    <p>F.CUBE tu mejor opción</p>
    <img @click="go" style="cursor:pointer" src="@/assets/img/banner1_btn.png" alt="">
    </div>
      </div>

    <div class="p2">
      <div class="mainContent twoContent">
        <div class="title">
          <img src="../assets/img/jk_ico.png" alt="" />Solicitar un préstamo
        </div>
        <div class="loan-content-box">
          <div class="loan-select-box">
            <!-- <div class="loan-select-item">7 Días</div> -->
            <div
              class="loan-select-item"
              :class="isActive == 61 ? 'selected' : ''"
              @click="getDays(61)"
            >
              61 Días
            </div>
            <div
              class="loan-select-item"
              :class="isActive == 90 ? 'selected' : ''"
              @click="getDays(90)"
            >
              90 Días
            </div>
            <div
              class="loan-select-item"
              :class="isActive == 180 ? 'selected' : ''"
              @click="getDays(180)"
            >
              180Días
            </div>
          </div>
          <div class="moneybox">
            $ <span id="money">{{ dealNumber(sliderValue) }}</span>
          </div>
          <div class="sliderBox">
            <el-slider
              v-model="sliderValue"
              :min="1000"
              :max="20000"
              :show-tooltip="false"
            ></el-slider>
            <div class="range">
              <p>$ <span>1,000</span></p>
              <p>$ <span>20,000</span></p>
            </div>
          </div>

          <div class="dateBox">
            <img src="@/assets/img/date_icon.png" alt="" />
            <div class="date">
              Fecha de vencimiento：<span>{{ addDate }}</span>
            </div>
          </div>

          <a 
            target="_blank"
            class="downloadBtn"
            ><button class="solicitarBtn">Solicitar un préstamo</button></a
          >
          <p class="rule">CAT: 270%~ 540%, solo como referencia. Fecha de cálculo: febrero de 2022</p>
        </div>
      </div>
    </div>
    <div class="p3">
      <div class="mainContent">
        <p  class="title"><img src="@/assets/img/left_line.png" alt="">
         <span>Solicita tu préstamo personal en 4 sencillos pasos</span>
           <img src="@/assets/img/right_line.png" alt="">
        </p>
         <ul >
           <li style="list-style:none !important">
              <img src="@/assets/img/li1.png" alt="">
              <p>Descarga la App</p>
              <div class="line"></div>
              <p style="color:#999999">Vaya a GooglePaly para descargar Rapidayuda</p>
           </li>
            <li style="list-style:none !important">
              <img src="@/assets/img/li2.png" alt="">
              <p>Subir INE/IFE</p>
              <div class="line"></div>
              <p style="color:#999999">Identificación oficial vigente</p>
           </li>
            <li style="list-style:none !important">
              <img src="@/assets/img/li3.png" alt="">
              <p>Llenar un formulario</p>
              <div class="line"></div>
              <p style="color:#999999">Llena correctamente nuestros breves formularios con información personal</p>
           </li>
            <li style="list-style:none !important">
              <img src="@/assets/img/li4.png" alt="">
              <p>Depósito exitoso</p>
              <div class="line"></div>
              <p style="color:#999999">El préstamo se depositará directamente en su cuenta bancaria</p>
           </li>
         </ul>
      </div>
    </div>
    <div class="p4">
      <div class="mainContent">
        <p  class="title"><img src="@/assets/img/left_line.png" alt="">
         <span>Solicita tu préstamo personal en 4 sencillos pasos</span>
           <img src="@/assets/img/right_line.png" alt="">
        </p>
         <ul>
           <li>
             <div>
               <p class="t1">Monto alto del préstamo</p>
               <p class="t2">El monto del préstamo puede ser  de hasta $20,000</p>
             </div>
             <img src="@/assets/img/img1.png" alt="">
           </li>
           <li>
             <img src="@/assets/img/img2.png" alt="">
             <div>
               <p class="t1">Proceso de solicitud sencillo</p>
               <p class="t2">Aplicación rápida Tasa de aprobación alta Depósito rápido</p>
             </div>
             
           </li>
           <li>
             <div>
               <p class="t1">100% protección de seguridad de datos</p>
               <p class="t2">Rapidayuda protege la seguridad  de sus datos las 24 horas del día, abriendo el nivel más alto de 
protección de seguridad de 
privacidad de datos para usted.</p>
             </div>
             <img src="@/assets/img/img3.png" alt="">
           </li>
         </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "./scss/Inicio.scss";

export default {
  name: "Inicio",
  data() {
    return {
      changeNum: 0,
      sliderValue: 5000,
      currentdate: "",
      addDate: "",
      isActive: 61,
    };
  },
  created() {
    this.getNowFormatDate();
  },
  methods: {
    go(){
      this.$router.push('/notice')
    },
    changeList(index) {
      this.changeNum = index;
    },
    getDays(day) {
      this.isActive = day;
      this.dateAddDays(this.currentdate, day);
    },
    dealNumber(num) {
      if (num != 0 && num) {
        num = num + "";
        let splitList = num.split(".");
        //将整数部分拆解为单个数字的数组倒序，然后拼装为新的数组，每3位数字进行一次匹配
        let intStrList = splitList[0]
          .split("")
          .reverse()
          .join("")
          .match(/(\d{1,3})/g);
        //将匹配后的数组用，拼接，再拆解为单个数字的数组，反转为原先数组形式，拼接为完整数字
        let intStr = intStrList
          .join(",")
          .split("")
          .reverse()
          .join("");
        return intStr;
      }
      return num;
    },
    dateAddDays(dateStr, dayCount) {
      var tempDate = new Date(dateStr.replace(/-/g, "/")); //把日期字符串转换成日期格式
      var resultDate = new Date((tempDate / 1000 + 86400 * dayCount) * 1000); //增加n天后的日期
      let mounth = (resultDate.getMonth() + 1).toString();
      if (mounth.length == 1) {
        mounth = "0" + mounth;
      }
      let today = resultDate.getDate().toString();
      if (today.length == 1) {
        today = "0" + today;
      }

      var resultDateStr = today + "-" + mounth + "-" + resultDate.getFullYear(); //将日期转化为字符串格式
      this.addDate = resultDateStr;
    },
    getNowFormatDate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      this.currentdate = currentdate;
      this.getDays(90);
    },
  },
};
</script>

<style lang="scss">
.p3.item {
  cursor: pointer;
} 
.playBtn img {
  height: auto !important;
}
</style>
