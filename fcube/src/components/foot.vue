<template>
 <div class="foot">
    <el-dialog 
    :visible.sync="dialogVisible"
    width="600px"
     >
    <div>
      <p class="titl" style="color:#326EEF !important;font-size:17px !important;text-align:left !important;margin-top:0 !important">UNIDAD ESPECIALIZADA DE ATENCIÓN DE USUARIOS (UNE)</p>
      <p>En caso de que consideres que la atención a tu consulta, aclaración o reclamación no ha sido resuelta satisfactoriamente o en el tiempo establecido, puedes dirigirte a la UNE:</p>
      <p><span>Teléfonos:</span> (55) 5254 4110 en la CDMX / 800 8310923 LADA Sin Costo</p>
      <p><span>Correo Electrónico:</span>une@dxn.mx</p>
      <p>En caso de alguna consulta, reclamación o aclaración, podrá presentarla en la Unidad Especializada de Atención a Usuarios, la cual dará respuesta en un plazo no mayor a 30 (treinta) días hábiles.</p>
      <p>Dxn Express, S.A. DE C.V., SOFOM, E.N.R., para su constitución y operación con tal carácter, no requiere de autorización de la Secretaría de Hacienda y Crédito Público, y, está sujeta a la supervisión de la Comisión Nacional Bancaria y de Valores, únicamente para efectos de lo dispuesto por el articulo 56 de la ley General de Organizaciones y Actividades Auxiliares del Crédito.</p>
    
    </div> 
  </el-dialog>
  <el-dialog 
    :visible.sync="twoDialog"
    width="600px"
    >
    <div>
      <p class="titl" style="color:#326EEF !important; font-size:17px !important;text-align:left  !important;margin-top:0 !important">CONDUSEF</p>
       <p>En caso de no obtener respuesta satisfactoria, podrá acudir a la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF):</p>
      <p><span>Dirección de Internet: </span>http://www.gob.mx/condusef</p>
      <p><span>Correo Electrónico: </span>asesoria@condusef.gob.mx</p>
      <p><span>Teléfonos:</span> En el territorio nacional 800 999 80 80 y en la Ciudad de México: (55) 53 40 09 99</p>
    
    
    </div> 
  </el-dialog>
   <ul>
     <li>
       <p class="titl" style="color:#fff !important">Presentación de la agencia</p>
       <p class="une" @click="dialogVisible=true">UNE</p>
       <p class="une" style="cursor:pointer" @click="twoDialog=true">CONDUFSEF</p>
     </li>
     <li>
       <p class="titl"  style="color:#fff !important">Sitio de referencia</p>
       <img   @click="goone" style="width:45px;margin-bottom:24px;cursor:pointer" src="@/assets/img/foot_1.png" alt="">
       <img   @click="gotwo"  style="width:115px;cursor:pointer" src="@/assets/img/foot_2.png" alt="">
     </li>
     <li>
       <p class="titl" style="color:#fff !important">Información del contacto</p>
      <p>Llámanos: 525527672731 <br>
          Escríbenos: Rapidayuda.prestamo@gmail.com <br>
          Síguenos: F.CUBE <br>
          Todos los derechos Reservados</p>
     </li>
   </ul>
   <p class="bottom_title">El Buró de Entidades Financieras contiene información de DXN Express, S.A. DE C.V., SOFOM, E.N.R., 
sobre nuestro desempeño frente a los Usuarios, por la prestación de productos y servicios.</p>
 </div>
</template>

<script>
import "./scss/foot.scss";

export default {
  name: "footPage",
  data() {
    return {
      dialogVisible:false,
      twoDialog:false
    }
  },
  methods:{
    goone(){
          window.open('https://www.buro.gob.mx/')

    },
    gotwo(){
      window.open('https://www.condusef.gob.mx/')

    }
  }
}
</script>
