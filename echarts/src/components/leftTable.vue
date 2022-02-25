<template>
    <div class="container_lefts">
         <el-table 
        ref="table"
      :data="tableData" 
      :height="height+'vh'"
      style="width: 100%">
      <el-table-column
        prop="node"
        width="100"
        align="center" 
        label="节点" >
      </el-table-column>
     <el-table-column
       prop="data"
       width="60"
       align="center"
       label="数量" >
     </el-table-column>
      <el-table-column
        prop="rate"
        width="90"
        align="center"
        label="转化率" >
      </el-table-column>
     <el-table-column
       prop="last7rate" 
       align="center"
       label="近7日转化率" >
     </el-table-column> 
    </el-table>
    </div>
</template>
<script>
export default {
    data(){
        return{
          tableData:[]
        }
    },
    props: {
      scale:{
        type:Number,
        default:null
      },
      height:{
        type:String,
        default:[]
      },
      sendData: {
        type: Array,
        default: [],
      },
    },
    mounted(){
      this.tableData=[...this.sendData]
   //  this.tableScroll()
    },
  watch :{
    sendData(val){
      if (val.length>0){
        this.tableData=this.sendData
      }
    }
  },
    methods:{
      tableScroll(){
         // 拿到表格挂载后的真实DOM
                const table = this.$refs.table
                console.log(table);
                // 拿到表格中承载数据的div元素
                const divData = table.bodyWrapper
                // 拿到元素后，对元素进行定时增加距离顶部距离，实现滚动效果(此配置为每100毫秒移动1像素)
                setInterval(() => {
                    // 元素自增距离顶部1像素
                    divData.scrollTop += 1
                   // 339.9
                    // 判断元素是否滚动到底部(可视高度+距离顶部=整个高度)
                    if(divData.scrollTop>339.88){
                      divData.scrollTop=0
                    }
                    // if (divData.clientHeight + divData.scrollTop + 1 > divData.scrollHeight) {
                    //     // 重置table距离顶部距离
                    //      divData.scrollTop = 0
                    // }
                }, 30)
                const that = this
                window.onresize = () => {
                    return (() => {
                        window.screenHeight = document.body.clientHeight
                        that.clientHeight = window.screenHeight
                    })()
                }
      }
    }
}
</script>
<style scoped>
/deep/ .el-table{
  background: rgb(7,29,70);
  border: 1px solid rgb(8, 56, 136);

}
/deep/ .el-table .el-table__body{
 padding-left: 0px;
}
.has-gutter{
  background: pink;
}
/deep/ .el-table__cell{
      background: rgb(7,29,70) !important;
      color: #fff;
      border-color: red;
      /* border-top: 1px solid red;
      border-bottom: 1px solid red; */
}
/deep/ .has-gutter .el-table__cell{
  background:none !important;

}
/deep/ .el-table tr{
  font-size: 15px;
  border-color: red !important;
  background-image:  linear-gradient(to right,rgb(9,54,126), rgb(20,34,95));
}
.has-gutter{
  background: red;
}
/deep/.el-table--scrollable-y ::-webkit-scrollbar {
  display: none;
}
.el-table .index{
  display: inline-block;
  height: 20px;
  width: 20px;
  line-height: 20px;
  background: rgb(27, 76, 145);
}
</style>
<style>
 .container_lefts .el-table td,
  .container_lefts .el-table th.is-leaf,
  .container_lefts .el-table--border,
  .container_lefts .el-table--group {
    border-top: none;
    border-color: rgb(8, 56, 136);
    cursor: pointer;
    padding:  0px 0;
  }
  .container_lefts .el-table::before {
    height: 0;
  }

</style>
