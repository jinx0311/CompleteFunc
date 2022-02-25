<template>
    <div class="bigTop">
        <!-- <img width="95%" :src="img.borderLine" alt=""> -->
        <p>{{ name }}业绩数据</p>
        <!-- 175px -->
        <img class="fly" :src="img.fly" alt="">
    </div>

</template>
<script>
export default{
    data(){
        return{
            img:{
                borderLine:require('../../static/img/borderLine.png'),
                fly:require('../../static/img/fly.png'),
            }
        }
    },
     props:['name']
}
</script>
<style scoped>
@keyframes myfly
{
    from {left: -15vw;}
    to {left: 15vw;}
}
.bigTop{
    display: flex;
    padding-top: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
p{
    color: #fff;
    position: relative;
    z-index: 99;
    bottom: 5px;
    font-size: 25px;
    margin-bottom: 10px;
}
.fly{
    opacity: .6;
    width: 36px;
    position: relative;
    bottom: 33px;
    animation: myfly 2s linear infinite;
}
</style>
