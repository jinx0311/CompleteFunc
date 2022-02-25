<template>
  <div>
    <div class="big" v-if="status < 3">
      <div class="kugou-content">
        <!-- 滚动号码 -->
        <div class="top" v-if="scrollList.length > 0">
          <img :src="img.laba" alt class="notice-img" />
          <van-notice-bar :text="scrollList" />
        </div>
        <!-- banner图 -->
        <div class="banner">
          <div class="record" @click="gorule">Récord</div>
          <p class="banner1">¡PRUEBA TU FORTUNA!</p>
          <p class="banner2">Número restante de sorteo: {{ count }}</p>
        </div>
        <!-- 抽奖弹窗 -->
        <div class="turntable">
          <!-- 转动背景 -->
          <!-- 礼品框 -->
          <div class="prizeUl">
            <div
              class="prizeList"
              v-for="(item, index) in showList"
              :style="{ background: index == 4 ? 'none' : '' }"
              :class="
                item.id == awards[current].id && isRuningLucky
                  ? 'activePrize'
                  : ''
              "
              :key="item.id"
            >
              <div
                v-if="item.type == 1 && item.couponType == 1"
                class="coupon coupon1"
              >
                <span style="font-size:.2rem;">$</span>
                <span
                  :style="{
                    fontSize:
                      item.amount.toString().length > 3 ? '.3rem' : '.35rem'
                  }"
                  >{{ item.amount }}</span
                >
              </div>
              <div
                v-if="item.type == 1 && item.couponType == 4"
                class="coupon coupon2"
              >
                <span style="font-size:.2rem;">$</span>
                <span
                  :style="{
                    fontSize:
                      item.amount.toString().length > 3 ? '.3rem' : '.4rem'
                  }"
                  >{{ item.amount }}</span
                >
              </div>
              <div
                style="display: flex;align-items: center;justify-content: center;height: 100%;"
                v-if="item.type == 2"
              >
                <img class="prizeImg" :src="item.dialImg" alt="" />
              </div>
            </div>
          </div>
          <!-- 抽奖按钮 -->
          <img
            @click="handleStart"
            v-if="status == 1"
            :src="img.start"
            alt
            class="start-btn-big"
          />
          <img
            :src="img.startDis"
            v-if="status != 1"
            alt
            @click="showDialog = true"
            class="start-btn-big"
          />
        </div>
        <img
          class="button"
          v-if="status == 1"
          @click="handleStart"
          :src="img.button"
          alt=""
        />
        <img
          class="button"
          v-if="status != 1"
          @click="showDialog = true"
          :src="img.buttonDis"
          alt=""
        />
      </div>
      <div class="bot">
        <div class="rule">
          <img :src="img.message2" alt="" />
          <p>
            Al liquidar el préstamo por adelantado, puede tener la oportunidad
            de sortear. ¡Cuantos más días tenga para pagar por adelantado, más
            se sorteará la RULETA!
            <span style="font-weight:600"
              >Gane premios como Celulares, Cupones, Recarga de celulares o
              otros beneficios hasta 2,000 pesos, ¡adelante!</span
            >
          </p>
          <p>
            <span style="font-weight:600"> Nota 1:</span> "Pago por adelantado"
            se refiere a la liquidación del monto total del período actual
            (incluido el capital, los intereses y otros gastos integrales) antes
            de la fecha depago.
          </p>
          <p>
            <span style="font-weight:600"> Nota 2:</span> La oportunidad de
            sorteo es válido por 7 días.
          </p>
          <p>
            Ejemplo: La fecha de devolución es el 30 de noviembre. Cuando se
            liquida el 29 de noviembre o antes, se considerará que se liquida
            por adelantado. Así que tener la oportunidad de participar en el
            sorteo el número de veces correspondiente.
          </p>
          <p><span class="circle">·</span> 1 día antes | 1 oportunidad</p>
          <p><span class="circle">·</span> 2 días antes | 2 oportunidades</p>
          <p><span class="circle">·</span> 3 días antes | 3 oportunidades</p>
          <p><span class="circle">·</span> 4 días antes | 4 oportunidades</p>
        </div>
        <div class="rule">
          <img :src="img.message1" alt="" />
          <p><span>1.</span> Fecha de actividad: 14.12.2021—— 14.01.2022;</p>
          <p>
            <span>2.</span> Cada sorteo consume una oportunidad, hacen clic en
            el botón de "Sortear" para comenzar y recibirán los premios
            correspondientes;
          </p>
          <p>
            <span>3.</span> Los premios se pueden ver en la mochila de cupones
            (Yo-Cupón);
          </p>
          <p><span>4.</span> Descripción del premio:</p>
          <ul>
            <li class="textList">
              <img :src="img.li1" alt="" />
              <div>
                <p style="font-weight:600">Cupón de monto adicional:</p>
                <p>aumentar el monto de préstamos;</p>
              </div>
            </li>
            <li class="textList">
              <img :src="img.li2" alt="" />
              <div>
                <p style="font-weight:600">Cupón de reembolso:</p>
                <p>reducir la cantidad de reembolso;</p>
              </div>
            </li>
            <li class="textList">
              <img :src="img.li3" alt="" />
              <div>
                <p style="font-weight:600">Recarga:</p>
                <p>
                  El ATC se comunicará con usted dentro de 1-3 días laborales;
                </p>
              </div>
            </li>
            <li class="textList">
              <img :src="img.li4" alt="" />
              <div>
                <p style="font-weight:600">Celular:</p>
                <p>
                  El ATC se comunicará con usted dentro de 1-3 días laborales;
                </p>
              </div>
            </li>
          </ul>
          <p><span style="font-weight:600">TIPS:</span></p>
          <p>
            <span
              >1) El cupón de monto adicional debe agregarse cuando se solicita
              el préstamo, es decir, cuando se ve el monto prestado;</span
            >
          </p>
          <br />
          <p>
            <span
              >2) El cupón de reembolso se puede agregar en el momento del pago,
              es decir, en la página de "Esperar el pago";</span
            >
          </p>
          <br />
          <p>
            <span>5.</span> Cada usuario tiene un número único de ID de cliente
            que se vincula con su número telefónico o número de INE/IFE, se
            reconoce como el mismo usuario no importan los equipos (celular,
            pad, ordenador, etc) o veces de acceso;
          </p>
          <p>
            <span>6.</span> Reglas de cupones: cuando el monto de premio es
            mayor del monto que debe pagar, se utilizará la cantidad total. No
            hay redención ni retiro de la cantidad excedente. Por ejemplo:
            cuando el usuario le toca un premio $2000, pero el monto de pago es
            $1500, el premio $2000 se utilizará en su totalidad. El premio solo
            se puede usar una vez;
          </p>
          <p>
            <span>7.</span> Superapoyo reserva el derecho de restringir o
            congelar las cuentas personales, retirar transacciones ilegales,
            cancelar recompensas, etc. en cualquier forma de violación
            (incluyendo, pero no limitado a, transacciones fraudulentas,
            trampas, retiros de efectivo maliciosos, etc.) y tomar medidas
            disciplinarias adicionales según la situación;
          </p>
          <p>
            <span>8.</span> Superapoyo se reserva el derecho de realizar los
            ajustes apropiados en las reglas y la configuración de premios del
            Evento en la medida permitida por la ley, sujeto a la visualización
            de la página y a la no publicación de más anuncios individuales, y
            se considerará que cualquier participante en esta actividad acepta
            todas las reglas del Evento y cumplirá con la Declaración Legal de
            Superapoyo y otras disposiciones relevantes relacionadas con las
            actividades de marketing;
          </p>
          <p>
            <span>9.</span> El derecho de interpretación final pertenece
            únicamente a Superapoyo.
          </p>
        </div>
      </div>
      <div class="dialog" v-if="showDialog">
        <div class="mask"></div>
        <!-- 无抽奖机会 -->
        <div class="dialogCont dialogContThree" v-if="status == 2">
          <img class="dialogTitle" :src="img.noCount" alt="" />
          <p class="dialogText">No disponible</p>
          <img
            class="dialogBtn"
            @click="lookRule"
            :src="img.dialogDis"
            alt=""
          />
          <p class="dialogLink" @click="goHome"><u>Volver el inicio</u></p>
          <img
            class="close"
            @click="showDialog = false"
            :src="img.closeBtn"
            alt=""
          />
        </div>
        <!-- 实物手机奖励弹框 -->
        <img
          :src="img.fo"
          class="fo"
          alt=""
          v-if="status == 1 && conponInfo.type == 2"
        />
        <div class="dialogCont" v-if="status == 1 && conponInfo.type == 2">
          <img class="dialogTitle" :src="img.leirong" alt="" />
          <p class="dialogText">¡Te toca el premio!</p>
          <img class="dialogImg" :src="conponInfo.winImg" alt="" />
          <img
            class="dialogBtn"
            @click="showDialog = false"
            :src="img.dialogBtn"
            alt=""
          />
          <p class="dialogLink" @click="goHome"><u>Volver el inicio</u></p>
          <img
            class="close"
            @click="showDialog = false"
            :src="img.closeBtn"
            alt=""
          />
        </div>
        <!-- 优惠券奖励弹框  -->
        <div
          class="dialogCont dialogContTwo"
          v-if="status == 1 && conponInfo.type == 1"
        >
          <img :src="img.hua" class="hua" alt="" />
          <img class="dialogTitle" :src="img.dialog2title" alt="" />
          <p class="dialogText">¡Te toca el premio!</p>
          <div class="dialogCoupon">
            <div class="couponL">
              $&nbsp;<span
                :style="{
                  fontSize:
                    conponInfo.amount.toString().length > 3 ? '.5rem' : '.6rem'
                }"
                >{{ conponInfo.amount }}</span
              >
            </div>
            <div class="couponR" v-if="conponInfo.couponType == 1">
              <p>Cupón de reembolso</p>
            </div>
            <div class="couponR" v-if="conponInfo.couponType == 4">
              <p>Cupón de monto</p>
              <p>adicional</p>
            </div>
          </div>
          <p class="couponDate">
            Validación：{{ conponInfo.validBegin }}-{{ conponInfo.validEnd }}
          </p>
          <div class="Usarlo" @click="goHome">Usarlo</div>
          <img
            class="close"
            @click="showDialog = false"
            :src="img.closeBtn"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="zanwu" v-if="status == 3">
      <img width="100vw" :src="img.zanwu" alt="" />
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "index",
  data() {
    return {
      activityId: null,
      count: null, //抽奖次数
      status: null, //1可以抽奖 2无机会 3已下线
      conponInfo: {
        date: "",
        type: 1
      },
      img: {
        hua: require("../../static/img/hua.png"),
        dialog2title: require("../../static/img/dialog2title.png"),
        dialogDis: require("../../static/img/dialogDis.png"),
        li1: require("../../static/img/li1.png"),
        li2: require("../../static/img/li2.png"),
        li3: require("../../static/img/li3.png"),
        li4: require("../../static/img/li4.png"),
        laba: require("../../static/img/laba.png"),
        start: require("../../static/img/start.png"),
        button: require("../../static/img/button.png"),
        buttonDis: require("../../static/img/buttonDis.png"),
        message1: require("../../static/img/message1.png"),
        message2: require("../../static/img/message2.png"),
        leirong: require("../../static/img/leirong.png"),
        dialogBtn: require("../../static/img/dialogBtn.png"),
        noCount: require("../../static/img/noCount.png"),
        closeBtn: require("../../static/img/closeBtn.png"),
        startDis: require("../../static/img/startDis.png"),
        zanwu: require("../../static/img/zanwu.png"),
        fo: require("../../static/img/bg.png")
      },
      showDialog: false,
      dialogType: null, //1是图片2是优惠券
      prizeImg:
        "https://mxg-storage.obs.na-mexico-1.myhuaweicloud.com/Banner/f84a230478aa2d3ede72c47389e7968.png",
      apiHead: " ", 
      token: "ba76e35226bc4e34419b56ee2c1d64a5",
      animate: false,
      initSpeed: 200, // 初始速度
      speed: null, // 变化速度
      diff: 20, // 速度变化的值，值越大，变化地越快
      award: {}, // 抽中的奖品
      showList: [],
      scrollList: [],
      awards: [],
      time: 0, // 记录开始抽奖的时间
      current: 0, // 当前转动的位置
      isRuningLucky: false // 是否正在抽奖
    };
  },
  created() {},
  mounted() {
    this.getToken();
    axios.defaults.headers.common["access_token"] = this.token;
    let scrollTimer = setInterval(this.scroll, 2000);
    this.init();
  },
  methods: {
    lookRule() {
      this.showDialog = false;
      document.body.scrollTop = document.documentElement.scrollTop = 600;
    },
    getToken() {
      this.token = window.android.getAccessToken();
    },
    goHome() {
      this.showDialog = false;
      window.android.gotoAndroidFragment(3);
    },
    init() {
      let that = this;
      axios
        .post(that.apiHead + "api/v3/h5/v1/activity/prize/find", {
          access_token: that.token
        })
        .then(res => {
          if (res.data.code == 0) {
            that.awards = res.data.data.actActivityPrizes;
            that.scrollList = res.data.data.rollingDocs;
            that.activityId = res.data.data.activityId;
            sessionStorage.setItem("activityId", res.data.data.activityId);
            that.scrollList = this.scrollList.map(item => {
              return item + "　　　";
            });
            that.scrollList = that.scrollList
              .concat(
                that.scrollList,
                that.scrollList,
                that.scrollList,
                that.scrollList,
                that.scrollList,
                that.scrollList,
                that.scrollList
              )
              .toString();
            let arr = that.scrollList;
            that.scrollList = arr.replace(/,/g, "");
            that.makeShowList();
            //获取抽奖次数
            axios
              .post(that.apiHead + "api/v3/h5/v1/activity/prizeTimes", {
                access_token: that.token,
                activityId: this.activityId
              })
              .then(res => {
                if (res.data.code == 0) {
                  this.count = res.data.data.validTimes;
                  if (this.count > 0) {
                    this.status = 1;
                  } else {
                    this.status = 2;
                  }
                }
              });
          } else {
            that.status = 3;
          }
        });
    },
    gorule() {
      this.$router.push("/rule");
    },
    //生成抽奖展示列表
    makeShowList() {
      let arr = this.awards;
      let id4 = arr[2];
      let id5 = arr[3];
      let id6 = arr[4];
      let id7 = arr[5];
      let id8 = arr[6];
      let id9 = arr[7];
      this.showList = [arr[0], arr[1], arr[2], id9, "", id5, id8, id7, id6];
    },
    // 抽奖
    handleStart() {
      if (this.isRuningLucky) {
        return Toast("Está sorteando...");
      }
      if (this.count < 1) {
        this.status = 2;
        this.showDialog = true;
        return;
      }
      if (isNaN(Number(this.initSpeed))) {
        return false;
      }
      this.speed = this.initSpeed;
      // 开始抽奖
      this.isRuningLucky = true;
      this.time = Date.now();
      this.drawAward();
      //Toast("开始抽奖");
    },
    drawAward() {
      // 请求接口，模拟一个抽奖数据(假设请求时间为2s)
      axios
        .post(this.apiHead + "api/v3/h5/v1/activity/prize", {
          access_token: this.token,
          activityId: this.activityId
        })
        .then(res => {
          if (res.data.code == 0) {
            this.conponInfo = res.data.data.data;
            this.count = --this.count;
            this.award = {
              id: res.data.data.data.id
            };
            this.move();
          } else if (res.data.code == 400210) {
            this.isRuningLucky = false;
            this.showDialog = false;
            Toast("No hay premio válido en este evento. ");
          } else if (res.data.code == 400211) {
            this.isRuningLucky = false;
            this.showDialog = false;
            Toast("El evento no existe.");
          } else if (res.data.code == 400212) {
            this.isRuningLucky = false;
            this.showDialog = false;
            Toast("El evento aún no ha comenzado.");
          } else if (res.data.code == 400213) {
            this.isRuningLucky = false;
            this.showDialog = false;
            Toast("El evento ha expirado.");
          } else if (res.data.code == 400214) {
            this.isRuningLucky = false;
            this.showDialog = false;
            Toast("El usuario no tiene oportunidad válida de sortear.");
          }
        });
    },
    move() {
      let timer = setTimeout(() => {
        this.current++;
        if (this.current > 7) {
          this.current = 0;
        }
        // 若抽中的奖品id存在，则开始减速转动
        if (this.award.id && (Date.now() - this.time) / 1000 > 2) {
          this.speed += this.diff; // 转动减速

          // 若转动时间超过4秒，并且奖品id等于小格子的奖品id，则停下来
          if (
            (Date.now() - this.time) / 1000 > 4 &&
            this.award.id == this.awards[this.current].id
          ) {
            clearTimeout(timer);

            setTimeout(() => {
              this.isRuningLucky = false;
              // 这里写停下来要执行的操作（弹出奖品框）
              this.showDialog = true;
            }, 400);
            return;
          }

          // 若抽中的奖品不存在，则加速转动
        } else {
          if (this.speed >= 50) {
            this.speed -= this.diff; // 转动加速
          }
        }

        this.move();
      }, this.speed);
    },
    // 中奖名单滚动
    scroll() {
      this.animate = true;
      let timer = setTimeout(() => {
        if (Array.isArray(this.list) && this.list.length > 0) {
          this.list.push(this.list[0]);
          this.list.shift();
        }

        this.animate = false;
      }, 500);
    }
  }
};
</script>
<style lang="stylus" scoped>

.kugou-content {
	font-family: PingFangSC-Regular, PingFang SC;
  width: 100vw;
  background:url('../../static/img/bg1.png');
  background-size: 100% 100%;
  bottom: 0;
	.bg-banner {
		position: absolute;
		top: 0;
		right: 0;
		width: 8.4rem;
	}
	.kugou-scroll {
		background: #04BBEC;
		display:flex;
		flex-wrap: nowrap;
		justify-content: space-between
		.bg-scroll {
			position: relative;
			width: 100%;
			height: 0.74rem;
			line-height: 0.74rem;
			font-size: 0.35rem;
			overflow: hidden;
			text-align: center;
			letter-spacing: 0.03rem;
		}
		.lkq-name {
			margin-left:100vw;
			color: #fff;
      font-size: 0.28rem;
		}
		.anim {
			transition: all 0.5s linear;
			margin-left: 0
		}
	}
	.turntable {
		    position: relative;
    background-size: 8.5rem;
    background-position: -1.06rem -0.9rem;
    height: 8.2rem;
    padding: 1.15rem;
    top: -1rem;
		.start-btn-big {
			width: 1.8rem;
			position: absolute;
			top: 3.95rem;
			left: 2.88rem;
			z-index: 999;
			animation: btn-animation 0.3s ease-out infinite alternate;
		}
		.run-item-0 {
			width: 2.03rem;
		}
		.run-item-1 {
			width: 2.03rem;
			display: block;
			margin: 0 0 0 1.93rem;
		}
		.run-item-2 {
			width: 2.03rem;
			display: block;
			margin: 0 0 0 3.85rem;
		}
		.run-item-3 {
			width: 2.03rem;
			display: block;
			margin: 1.9rem 0 0 3.85rem;
		}
		.run-item-4 {
			width: 2.03rem;
			display: block;
			margin: 3.8rem 0 0 3.85rem;
		}
		.run-item-5 {
			width: 2.03rem;
			display: block;
			margin: 3.8rem 0 0 1.925rem;
		}
		.run-item-6 {
			width: 2.03rem;
			display: block;
			margin: 3.8rem 0 0 0;
		}
		.run-item-7 {
			width: 2.03rem;
			display: block;
			margin: 1.9rem 0 0 0;
		}
	}

}
.notice-img {
	width: 0.3rem;
    height: 0.3rem;
}
.prizeUl{
	display: flex;
	background: url('../../static/img/board.png');
	background-size: 100% 100%;
	flex-wrap: wrap;
    justify-content: space-between;
    position: absolute;
    top: 1.5rem;
    left: 5vw;
    overflow: hidden;
    box-sizing: border-box;
    width: 90vw;
	padding: .4rem;
}
.prizeList{
	width: 25vw;
	text-align: center;
	line-height: 25vw;
	height:25vw;
	font-size: .5rem;
	margin-bottom: 0.13rem;
	background: url('../../static/img/squer.png');
	background-size: 100% 100%;
	display: flex;
    align-items: center;
    justify-content: center;
}
.activePrize{
	border: 1px solid red;
	background: url('../../static/img/squerY.png');
	background-size: 100% 100%;
}
.banner{
	width: 100vw;
	height: 3.5rem;
	background: url('../../static/img/top.png');
	background-size: 100% 100%;
	text-align: center;
	display: flex;
    flex-direction: column;
    justify-content: flex-end;
	position relative
	.record{
		position absolute
		right 0
		top .3rem
		color #04BBEC
		background #fff
		border-radius: 10px 0px 0px 10px
		font-size .3rem
		padding .05rem .2rem
	}
}
.banner1,.banner2{
	position:relative;
	top:5px;
}
.banner1{
	font-size:.4rem;
font-family: PingFangSC-Semibold, PingFang SC;
font-weight: 600;
color: #FEE370;
}
.banner2{
	font-size: .35rem;
font-family: PingFang-SC-Medium, PingFang-SC;
font-weight: 500;
color: #FFFFFF;
}
.button{
	width: 70vw;
	margin-left: 15vw;
	position:relative;
	bottom: 0.3rem;
}
.rule{
	position:relative;
	text-align: center
	img{
		display: block;
		margin:0 auto;
		width: 80%;
	}
}
.big{
	background: rgb(254,34,51);
	max-width:100vw;
	overflow:hidden;
}
.van-notice-bar{
	background: none;
    color: #fff;
    padding: 0;
    width: 92vw;
    position: relative;
    left: 0.2rem;
	font-size: 12px;
}
/deep/ .van-notice-bar__wrap{
	width: 90vw;
}
.coupon1{
	background-image: url('../../static/img/coupon.png');
	color: #FA7049;
}
.coupon2{
	background-image: url('../../static/img/coupon2.png');
	color: #AD60FF;
}
.bot{
	background: rgb(254,34,51);
	padding-bottom: 10px;
}
.coupon{
	 width: 1.5rem;
	 height: 1.5rem;
	 background-size: 100% 100%;
	 display:flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
    line-height: 1;
    font-size: .3rem;
    padding-top: 0.36rem;
	position: relative;
    bottom: 4px;

}
.rule{
	position:relative;
	background: #fff;
    width: 90vw;
    margin-left: 5vw;
    font-size: .3rem;
    text-align: left;
    padding: 10vw 3vw;
	background: #FEFEF2;
	font-family: PingFangSC-Semibold, PingFang SC;
	color: #333333;
	border-radius: 16px;
	display: flex;
    flex-direction: column;
    align-items: center;
	padding-bottom: 5vw;
	margin-bottom: 10vw;
	p{
		width:100%;
	}
	span{
		color #254ED5
	}
	img{
		position absolute
		top:-.33rem;
	}
}
.dialog{
	position:fixed;
	top:0;
	left:0;
	width:100vw;
	height:100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index:9999;
	.mask{
		width 100%
		height:100%;
		background: rgba(0,0,0,0.6);
		position absolute
		top 0
		left 0
	}
	.fo{
			position: absolute;
			top: 1.5rem;
			z-index: 0;
			width: 120vw;
		}
	.dialogCont{
		width:80vw;
		background:#fff;
		position: relative;
		padding: .3rem 0;
		display: flex;
		flex-direction: column;
		border-radius: 8px;
		align-items: center;

		.hua{
			position: absolute;
			top: -0.5rem;
			width: 100vw;
			height: 144px;
		}
		.dialogImg{
			width:4.5rem;
			position: relative;

    		top: 0.3rem;
		}
	}
	.dialogTitle{
		width:70%;
		position:absolute;
		left:15%;
		top:-1rem;
	}
	.dialogText{
    font-size: 0.4rem;
    margin-top: 0.4rem;
	}
}
.dialogBtn{
	width:70%;
	margin-top:.2rem;
	position:relative;
	z-index: 9999;
}
.dialogLink{
	font-family: PingFang-SC-Medium, PingFang-SC;
font-weight: 500;
color: #333333;
line-height: 33px;
font-size: .3rem;
}
.textList{
	display:flex;
	width:90vw;
	align-items: center;
	position:relative;
	left:3vw;
	margin 15px 0
	p{
		max-width:72vw!important;
	}
	img{
		position:static;
		width:.8rem;
		margin:0;
		margin-right:1vw;
	}
}
.dialogContTwo{
	.couponDate{
		font-weight: 400;
		color: #FFFFFF;
		font-size .2rem
	}
	background:url('../../static/img/origin.png') !important;
	background-size:100% 100%;
	.dialogTitle{
		width:70%;
		left:15%;
		top:-1.3rem;
	}
	.dialogText{
		background-image: linear-gradient(180deg, #FFFFFF 0%, #FFEF95 100%);
		-webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
	font-weight: 550;
	}
	.Usarlo{
		width 60%
		text-align: center;
		color #7F4E03;
		background: linear-gradient(180deg, #FBE469 0%, #FCDB28 100%);
		border-radius: 32px;
		margin .2rem 0;
		font-weight 550;
		position relative;
		top:.2rem;
		padding:.2rem 0;
		font-size: .3rem;
		margin-top: 0.1rem;
    margin-bottom: 0.3rem;
}
	.dialogCoupon{
	background-image:url('../../static/img/couponBg.png')
	width 80%
	height 1.3rem
	background-size 100% 100%
	margin .3rem 0
	display flex
	flex-wrap nowrap
	color #F34029
	align-items: center;
	justify-content: space-between
	font-size .3rem
	margin-bottom .1rem
	.couponL{
		width:35%
		display flex
		justify-content: center
		align-items: center;
		border-right: 1px dashed #F34029
		line-height: .8rem
		font-weight: 550
		span{
			font-size: .6rem
		}
	}
	.couponR{
		display: flex;
		align-items: center;
		width:58%;
		flex-wrap: warp;
		flex-direction: column;
		justify-content: flex-start;
		text-align: left;
		align-items: flex-start;
		position:relative;
		right:0.15rem;
	}
	}

}
.dialogContThree{
	.dialogTitle{
		position:static !important;

	}
}
.close{
	position: absolute;
    bottom: -1rem;
    width: 0.6rem;
}
.zanwu{
	width:100vw;
	display: flex;
	justify-content: center;
	margin-top:.5rem;
	img{
		width:100%;

	}
}
.prizeImg{
	max-width: 1.7rem;
    max-height: 1.7rem;
    width: 1rem;
	position:relative;
	bottom:2px;
}
.top{
	display:flex;
	padding-left:.15rem;
	height:.6rem;
	align-items: center
	background: #00B2DC;
}
.circle{
	font-weight: 800;
    font-size: 30px;
    margin-left: 0.5rem;
    position: relative;
    top: 4px;
    line-height: 13px;
}
</style>
