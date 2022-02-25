<template>
  <div class="Aviso">
    <headNav :activeNav="'Aviso'"></headNav>

    <div class="banner"></div>
    <div class="bigContent"> 
      <div class="content one">
        <p class="title">Información de la App de préstamo</p>
          <ul>
            <li style="margin-bottom:20px">La aplicación de préstamo en México tiene la licencia correspondiente de la entidad de crédito. </li>
            <li>Independientemente de la situación de emergencia que encuentre, cuando, donde sea, cuando necesite 
asistencia en efectivo, descargue la aplicación de crédito en efectivo.</li>
          </ul> 
        <p class="title">Características del préstamo</p>
        <p>¡Solicite su préstamo desde $450 en la App de préstamo, y disfrutará el crédito peersonal de bajo 
interés, proceso de depósito corto, y eficiencia de verificación alta!</p>
        <ul>
          <li>Edad: Mayor de 18+ años. </li>
          <li>Duración: de 91 a 120 días. </li>
          <li>Monto del préstamo: $450 ~ $20,000. </li>
          <li>Interés: 0.01%~ 0.1% por día (Tasa de interés anual 3.6%~ 36%).</li>
          <li>Comisión: 8% ~18% del préstamo total. </li>
          <li>IVA:16% del comisión e intereses.</li>
           <li>CAT: 270%~ 540%.</li>
           <li>Por ejemplo:El préstamo es de $ 1,000 pesos y el plazo del préstamo es de 91 días. Solo debe pagar 
91 pesos de intereses (1000x0.1%x91=91), 80 pesos (1000x8%=80) de comisión y 29 pesos ((Comisión 
80+intereses 91)x16%=29) de IVA. El monto total a pagar sería $1200. Solo necesita pagar $ 400 cada 
mes. Valor CAT correspondiente: 343%.</li>
        </ul>
        <p class="title">¿Por qué pedir dinero en nuestra empresa?</p>
        <ul>
          <li>Créditos personales, sin necesidad de documentos hipotecarios;</li>
          <li>Aplicación de créditos económicos, interés bajo/sin interés;</li>
          <li>Préstamos seguros, sin gasto adicional;</li>
          <li>Préstamos relajados, proporcionamos el servicio 7*24 horas;</li>
          <li>Préstamos confiables en efectivo, protegemos la seguridad de datos de clientes;</li>
        </ul>
        <p class="title">¿Cómo solicitar un préstamo?</p>
        <ul>
          <li>Descargar la aplicación en Google Play: la aplicación de crédito personal</li>
          <li>Rellenar la información crediticia personal en 3 pasos.</li>
          <li>¡Depositar en efectivo directamente en su cuenta bancaria!</li>
        </ul>
        <p class="title">¿Qué se necesita para pedir un préstamo (obtener más cash)?</p>
        <ul>
          <li>Las condiciones son muy relajadas, siempre que sea mayor de 18+ años y sea titular de un INE / IFE 
          dentro del período de vigencia.</li>
          <li>Después de obtener el préstamo, pagar el préstamo a tiempo / anticipadamente según la fecha de pago acordada, y su límite de crédito personal en efectivo se incrementará a 20,000 pesos maximo. </li>
        </ul>
        <p class="title">¿Cómo pagar?</p>
        <ul>
          <li>Pago online (SPEI) 7*24horas, puede hacer su pago online (no hay comisión) .</li>
          <li>Puede pagar con la referencia en efectivo en su OXXO más cercano.</li>
        </ul>
      </div>
      <p class="bottomTwo">Cuando descarga la aplicación, le pediremos su autorización para acceder a la información de su teléfono 
celular para validar su identidad. Sus datos están protegidos por los estándares de seguridad más alto a 
nivel mundial, nunca compartiremos su información sin autorización previa.</p>
    </div> 
    <footPage></footPage>

  </div>
</template>

<script>
import headNav from "@/components/headNav.vue";
import footPage from "@/components/foot.vue";
import "../components/scss/Aviso.scss";

export default {
  name: "Aviso",
  components: { headNav, footPage },
  data() {
    return {

    }
  },
}
</script>

<style>
.one p{
  display: flex;
  align-items: center;
}
 
li{
  list-style: disc;
  list-style-image: url('../assets/img/circe.png');
  color: #000;
  font-size:20px; 
}
.content_title{
  font-size: 25px;
}
.titleNum{
  color: #1C9234;
  font-weight: 600;
}
</style>