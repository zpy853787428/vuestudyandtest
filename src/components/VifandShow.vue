<template>
  <div>
<!-- 插件的可见与不可见   -->
    <p v-if="flag">今天加班</p>
    <p v-else>今天不加班</p>
    <p>----------------------</p>
    <p v-show="flag">写代码</p>
    <p v-show="!flag">不写代码</p>
    <button @click="flag=!flag">切换</button>
  </div>
</template>

<script>
export default {
  name: "VifandShow",
  data() {
    return {
      flag: true
    }
  }
}
</script>

<style scoped>

</style>