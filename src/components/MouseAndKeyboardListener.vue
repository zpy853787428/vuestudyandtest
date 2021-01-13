<template>
  <div>
<!-- 鼠标点击事件    -->
    <button @click="clickMouse('我点击了鼠标~~~')" >点击</button>
    <button @click="clickMouse2('我点击了鼠标~~~',$event)">点击2</button>
    ----------------------------------------------------------------------
    <a href="http://www.iciba.com/" @click.prevent="clickMouse3('123')">点击超链接</a>
<!-- 像一下这种情况，当我们点击其中的按钮时，同时会触发父组件div的点击事件，如果我们只是想单独的触发button按钮的点击方法，那么，可以使用 stop  -->
    <div @click="clickdiv('div')" style="background-color: red; height: 100px;width: 100px">
      <button @click.stop="clickButton('button',$event)">点我</button>
    </div>
<!-- 鼠标点击事件   -->
    <div>
      <input  placeholder="请输入指定内容" @keyup.enter="keyAction" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MouseAndKeyboardListener",
  data() {
    return {

    }
  },
  methods:{
    clickMouse(args){
      alert(args);
    },
    clickMouse2(args,event){
      alert(args);
      console.log(event);
    },
    clickMouse3(args){
      alert(args)
    },
    clickdiv(args){
      alert(args)
    },
    clickButton(args,event){
      alert(args)
      event.preventDefault()
    },
    keyAction(){
      alert('0000');
    }
  }
}
</script>

<style scoped>

</style>