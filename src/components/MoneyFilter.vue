<template>
  <div>
    <div>
      <p>
        {{money1 | moneyFormat}}
      </p>
      <p>--------------------------------</p>
      <p>
        全局过滤器
        {{page | wholeMoneyFormat}}
      </p>
      <p>
        时间过滤器
        {{ curDate | timeFilter }}
      </p>
    </div>
  </div>
</template>

<script>
import  moment from 'moment'
export default {
  name: "MoneyFilter",
  data() {
    return {
      money1: 124.457,
      page: 456.122,
      curDate: new Date()
    }
  },
  filters:{
    moneyFormat(value){
      // toFixed 方法会进行四舍五入
      return "¥" + Number(value).toFixed(2)
    },
    timeFilter(value){
      var format = 'YYYY-MM-DD hh:mm:ss'
      return moment(value).format(format)
    }
  }
}
</script>

<style scoped>

</style>