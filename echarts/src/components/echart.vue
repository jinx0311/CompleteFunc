<template>
    <div>
      <p>哈哈哈哈</p>
       <div :id="id" :style="{width: '100%', height: '180px'}"></div>
    </div>
</template>
<script>  
import * as echarts from 'echarts';   
export default{
    data(){
        return{

        }
    },
    mounted(){
        this.drawLine();
        
    },
    props:['id'],
    methods:{
         drawLine(){ 
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById(this.id))
        // 绘制图表
        const option = {
        tooltip:{showContent:false},
        legend: {
            top: '5%',
            left: 'center',
            show:false,
        },
  
  series: [
    { 
      barWidth:10,
      color:['#fff','rgb(0, 94, 255)'],
      type: 'pie',
      radius: ['40%', '45%'],
      avoidLabelOverlap: false, 
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {  
        label: { 
          show: true,
          color:'#fff',
          fontSize: '10',
          fontWeight: '400',    
        formatter:function(params){
            return(
            '{b|'+params.value+'}%\n\n'+'{a|'+params.name+'}'
            )
        },
        rich:{
            a:{
                color:'#fff', 
                fontSize:'10px',
            },
            b:{
                color:'#fff',
                fontSize:'20px', 
            }
        }
        }, 
      },
     
      labelLine: {
        show: false
      },
      data: [
            { value: 76, name: '首贷' },
            { value: 24, name: '复贷' }, 
            ]
        }
    ]
        } 
        myChart.setOption(option);
       
             
         let index = 0; // 高亮索引
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: index,
        dataIndex: index
      });
      myChart.on("mouseover", function(e) {
        if (e.dataIndex != index) {
          myChart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: index
          });
        }
      });
      myChart.on("mouseout", function(e) {
        index = e.dataIndex;
        myChart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: e.dataIndex
        });
      }); 
    }
    }
}
 </script>
<style scoped> 
</style>
