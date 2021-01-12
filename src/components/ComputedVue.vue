<template>
  <div>
    <p>
      <label>姓氏:<input placeholder="请输入内容" v-model="firstName"/>
      </label><br>
      <label>名字:<input placeholder="请输入名字" v-model="lastName"/></label>
    </p>
    <p>
      <label>姓名:</label><input v-model="fullNametwo">
    </p>
    <p>
      <label>姓名:</label><input v-model="fullNametwo">
    </p>
    <label>watch监听器:<input v-model="fullnameThree"></label>
  </div>
</template>
<script>
  export default {
    name: "ComputedVue",
    data() {
      return {
        firstName:'',
        lastName:'',
        fullnameThree:''
      }
    },
    computed:{
      fullNametwo:{
        get(){
          return this.firstName+"."+this.lastName
        },
        set(value){
          console.log(value)
          let names = value.split(".")
          let firstName =names[0]
          let lastName = names[1]
          if(typeof(firstName)==="undefined"){
            firstName=''
          }
          if(typeof(lastName)==="undefined"){
            lastName=''
          }
          this.firstName = firstName
          this.lastName = lastName
        }
      }
    },
    watch:{
      firstName(value){
        this.fullnameThree =  value + "." +this.lastName
      },
      lastName(value){
        this.fullnameThree =  this.firstName + "." + value
      },
      fullNameThree(value){
        let names = value.split(".")
        let firstName = names[0]
        let lastName = names[1]
        if (typeof(firstName) === "undefined") {
          firstName = ''
        }
        if (typeof(lastName) === "undefined") {
          lastName = ''
        }
        this.firstName = firstName
        this.lastName = lastName
      }
    }
  }
</script>

<style scoped>

</style>