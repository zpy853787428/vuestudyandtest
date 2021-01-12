<template>
  <div>
    <span :class="classOne">样式类可以是字符串</span>
    <span :class="[classOne,classTwo]">样式可以是数组</span>
    <span :class="{'oneClass':true,'twoClass':true}">样式可以是对象</span>
    <p>------------------------------------</p>
    <span :style="{backgroundColor:bgColor}">style样式可以看看</span>
  </div>
</template>

<script>
  export default {
    name: "ClassAndStyle",
    data() {
      return {
        classOne: 'oneClass',
        classTwo: 'twoClass',
        bgColor: 'red'
      }
    }
  }
</script>

<style scoped>
   .oneClass{
     font-size: 100px;
     font-family: Algerian;
   }
   .twoClass{
     color: rebeccapurple;
     margin: 10px 10px 0;
   }
</style>