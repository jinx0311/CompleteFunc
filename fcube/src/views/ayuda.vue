<template>
  <div class="ayuda">
    <headNav :activeNav="'ayuda'"></headNav>
    <div class="banner"></div>
    <div class="content"> 
      <el-collapse accordion>
  <el-collapse-item>
    <template slot="title">
      <img src="../assets/img/wen.png" alt="">Requisito indispensable:
    </template>
   <div style="color:#999">Edad: mayor de 18 años</div>
  </el-collapse-item>
  <el-collapse-item>
    <template slot="title">
      <img src="../assets/img/wen.png" alt="">Trámites indispensables:
    </template>
    <div style="color:#999">1) Tener su IFE/INE en la mano</div>
    <div style="color:#999">2) Tener una cuenta de débito de CUALQUIER banco y que esté a SU nombre</div>
    <div style="color:#999">3) Llenar su solicitud en la aplicación</div>
    <div style="color:#999"><span style="color:#699AF7"><b>NOTE:</b></span> Recuerde que no pedimos ninguna clase de anticipos y que la única forma de hacer su solicitud 
es por medio de la aplicación. TODO EL PROCESO ES GRATUITO</div> 
  </el-collapse-item>

  <el-collapse-item>
    <template slot="title">
      <img src="../assets/img/wen.png" alt="">¿Cómo puedo solicitar de nuevo un préstamo?
    </template>
   <div style="color:#999">Si le rechazaron su última solicitud, puede volver a solicitar después de 7 días; Una vez que se acredite su 
pago podrá solicitar un segundo préstamo ¡de inmediato! Y esta vez disfrutará de un monto mayor con un 
costo menor.</div>
  </el-collapse-item>

  <el-collapse-item>
    <template slot="title">
      <img src="../assets/img/wen.png" alt="">¿Cómo tener otro préstamo mientras tengo uno activo?
    </template>
   <div style="color:#999">Lamentablemente no puede pedir otro préstamo mientras tiene un activo. Debería liquidar su préstamo 
activo para poder solicitar otro. Eso sí, una vez que liquide, podrá solicitar otro de forma inmedia.</div>
  </el-collapse-item>

  <el-collapse-item>
    <template slot="title">
      <img src="../assets/img/wen.png" alt="">¿Cómo pago mi préstamo en OXXO?
    </template>
   <div style="color:#999">1) Abra la APP y verá su número de referencia de pago OXXO, es único y personal. Guárdelo ya que ese número será lo mismo para todos sus pagos en OXXO;</div>
<div style="color:#999">2) Realice su pago por OXXO PAY en la tienda OXXO;</div>
<div style="color:#999">3) De el número de referencia;</div>
<div style="color:#999">4) Confirme que el beneficiario sea APP;</div>
<div style="color:#999">5) Pague en efectivo y guarde el ticket, ¡y listo!</div>
  </el-collapse-item>

  <el-collapse-item>
    <template slot="title">
      <img src="../assets/img/wen.png" alt="">¿Qué puedo hacer si no puedo pagar en OXXO?
    </template>
   <div style="color:#999">1) Si tiene problemas al pagar su préstamo en OXXO, ¡no se preocupe! Le recomendamos pagar por 
transferencia electrónica, que es más fácil y econónica;</div>
<div style="color:#999">2) En la aplicación debería poner la información de transferencia únicamente por la primera vez (el 
número de CLABE que ingrese comienza con 646);</div>
<div style="color:#999">3) Recuerde que no importa si paga desde la aplicación de su banco o en OXXO, puede pedir otro 
préstamo inmediatamente después de ver reflejado su pago.</div>
  </el-collapse-item>

  <el-collapse-item>
    <template slot="title">
      <img src="../assets/img/wen.png" alt="">¿Cómo pago mi préstamo a SPEI?
    </template>
   <div style="color:#999">1) Abre la aplicación de su banco o ingrese a página de internet y seleccione "Transferir";</div>
<div style="color:#999">2) Seleccione la cuenta origen;</div>
<div style="color:#999">3) Seleccione "Agregar un nuevo destinatario";</div>
<div style="color:#999">4) Ingrese el número de cuenta CLABE de APP;</div>
<div style="color:#999">5) Ingrese "APP" como nombre del Beneficiario y nombre de alias del contracto;</div>
<div style="color:#999">6) Seleccione el monto de su pago y reálicelo;</div>
<div style="color:#999">7) ¡Transferencia exitosa! Los pagos tardarán hasta 2 horas en reflejarse en APP, también puede copiar directamente la información de transferencia desde APP. *Por ejemplo: Los datos que debe colocar en su banca móvil son: BANCO: STP; BENEFICIARIO: APP; CONCEPTO: PAGO DE PRÉSTAMO; CLABE: 646***************.</div>
  </el-collapse-item>


 <el-collapse-item>
    <template slot="title">
      <img src="../assets/img/wen.png" alt="">Accidentalmente pagué en exceso, ¿qué hago?
    </template>
   <div style="color:#999">No se preocupe, el dinero en exceso se depositará automáticamente en el saldo de su cuenta y se puede utilizar para el pago.</div>
  </el-collapse-item>


<el-collapse-item>
    <template slot="title">
      <img src="../assets/img/wen.png" alt="">¿Cómo completar la información bancaria para el pago del préstamo?
    </template>
   <div style="color:#999">Primero, copie la cuenta de pago en la interfaz de pago de App. Luego, abra su software de pago de terceros y complete la siguiente información en secuencia. </div>
  </el-collapse-item>

</el-collapse>
    </div>
    
    <footPage></footPage>

  </div>
</template>

<script>
import headNav from "@/components/headNav.vue";
import footPage from "@/components/foot.vue";
import "../components/scss/ayuda.scss";

export default {
  name: "ayuda",
  components: { headNav, footPage },
  data() {
    return {
      activeNames:[],
      changeBtn:1,
      activeName:'one',
      btnList:[
        {
          label:'Application',
          id:1
        },
        {
          label:'Questions',
          id:2
        },
        {
          label:'Abnormal',
          id:3
        }
      ]
    }
  },
  watch:{
    changeBtn(){
      this.activeNames=[]
    }
  },
  methods:{
    handleChange(){
      console.log(this.activeNames);
    },
    changeCont(id){
      this.changeBtn=id

    }
  }
}
</script>

<style scoped lang="scss">
 
 
img{
  width:20px;
  height:20px;
  margin-right:10px
}
.content {
  flex: 1;
  z-index: 99;
  width: 1200px;
  height: 956px;
  margin: 664px auto 0;
  background-color: #ffffff;
  padding-top: 37px;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  margin-bottom: 60px;
  padding-right: 30px;
  box-sizing: border-box;
  align-items: center;
      display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: flex-start;
   
}
.collapseDiv{
  font-size: 15px;
}
.el-collapse{
  width: 100%;
}
.ayuda button {
  display: inline-block;
  padding: 12px 34px;
  font-weight: 400;
  border: none;
  color: #999;
  background: #fbfbfb;
  cursor: pointer;
  font-size: 18px;
  width: 200px;
  height: 48px;
  box-shadow: 0px 2px 11px 0px #e7e6e6;
  border-radius: 24px 0px 0px 24px !important;
  margin-bottom: 20px;
}
.banner{
  height: 700px;
}
.content{
  margin: 722px auto 0;
}
</style>