<template>
  <div class="Sobre">
    <headNav :activeNav="'sobre'"></headNav>
    <div class="p1"></div>

      <div style="margin:0 auto;">
        <div class="bigContent">
      
      <div class="content">
        <div class="title">
          <div><img src="@/assets/img/logo2.png" alt="">Grupo Empresarial F.Cube</div>
          <div class="line"></div>
        </div>
        <p>Nosotros Somos una empresa financiera y fiduciaria de reciente creación en México, 
nuestra experiencia y trayectoria se enfoca en promover créditos personales con certeza 
jurídica, transparencia y confianza.</p>
        <p>Con nuestro modelo de empresa, aplicamos lo mejor de las tecnologías modernas con el pleno conocimiento de la economía y realidad de la localidad.</p>
        <p>Otorgamos micro créditos de manera muy rápida y eficiente, reinventamos la flexibilidad: evaluamos cada caso de forma integral y entendemos los retos de cada persona.</p>
        
        <div class="title">
          <div>En Grupo Empresarial F.Cube somos</div>
          <div class="line"></div>
        </div>
        <ul class="middleList">
          <li>
            <img src="@/assets/img/list1.png" alt="">
          </li>
          <li>
            <p class="ti">Ágiles</p>
            <p class="co">Sabemos que muchas veces el 
            Banco nos cierra las puertas. 
            Nos preocupamos por entender 
            tus necesidades. “Buscamos el 
            cómo sí”</p>
          </li>
           <li>
            <p class="ti">Efectivos</p>
            <p class="co">Nuestra razón de existir es que 
fortalezcas tu economía. Nuestras condiciones son competitivas y 
adaptables a la realidad de tu 
necesidades</p>
          </li>
          <li>
            <img src="@/assets/img/list2.png" alt="">
          </li>
          <li>
            <img src="@/assets/img/list3.png" alt="">
          </li>
            <li>
            <p class="ti">Confiables</p>
            <p class="co">Estamos respaldados por muchos 
            clientes satisfechos</p>
          </li>
        </ul>
      
      </div>
     
    </div>
     <p class="creditos">Créditos en línea para personas físicas que requieren un préstamo personal.</p>
      <p class="title">¿Cómo lo hacemos?</p>
      <p style="text-align:center">Obtén un crédito con menos requisitos y más rápido que en un banco.</p>
      <ul class="iconList">
        <li>
          <img src="../assets/img/list_icon1.png" alt="">
          <p class="ti">Conoce si puedes calificar para tu crédito</p>
          <p class="co">Inicia tu solicitud en línea, por teléfono o 
            WhatsApp, compartiendo un mínimo de 
            requisitos y datos personales.
            </p>
        </li>
        <li>
          <img src="../assets/img/list_icon2.png" alt="">
          <p class="ti">Completa tu solicitud</p>
          <p class="co">Con ayuda de nuestros asesores y a través 
de la App, envía tu documentación a 
través de nuestra aplicación.</p>
        </li>
        <li>
          <img src="../assets/img/list_icon3.png" alt="">
          <p class="ti">Respuestas inmediatas</p>
          <p class="co"> Tramite muy rápido con un mínimo 
de requisitos.
            </p>
        </li>
      </ul>
      <div class="creditos">
        <p>“En Grupo Empresarial F.Cube, nuestro compromiso es con la gente, nuestra prioridad es entender las necesidades de cada persona, ayudarlas a solucionar sus problemas económicos y sus eventualidades y construir una relación a largo plazo con nuestros clientes”</p>
      </div>
      <p style="text-align:center;width:900px;margin:0 auto;margin-top:30px;font-weight:600">Se informa que GRUPO EMPRESARIAL F.CUBE S.A  DE C.V. SOFOM (ENR) es una Sociedad Financiera de Objeto Múltiple, Entidad No Regulada, que realiza operaciones conforme a la Ley General de Organizaciones y Actividades Auxiliares del Crédito y, de conformidad con lo establecido en su artículo 87-J, no requiere la autorización de la Secretaría de Hacienda y Crédito Público para su constitución y operación.
</p>
<p style="color:#999;text-align:center;margin:30px 0;">Versalles 15, 1er piso oficina 103, Col. Juárez, CDMX 06600
</p>
      </div>
    <footPage></footPage>

  </div>
</template>

<script>
import headNav from "@/components/headNav.vue";
import footPage from "@/components/foot.vue";
import "../components/scss/sobre.scss";

export default {
  name: "Sobre",
  components: { headNav, footPage },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>