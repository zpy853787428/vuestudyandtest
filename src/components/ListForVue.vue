<template>
  <div>
    <ul>
      <li v-for="(person,index) in persons" :key="personIds[index]">{{index}}) id:{{personIds[index]}} 姓名:{{person.name}},性别:{{person.sex}},年龄:{{person.age}} </li>
    </ul>
  </div>
</template>

<script>
import shortId from 'shortid'
export default {
  name: "ListforVue",
  data() {
    return{
      persons:[
        {name:'张三',age:18,sex:'女'},
        {name:'李四',age:28,sex:'男'},
        {name:'王五',age:38,sex:'女'}
      ],
      personIds:[]
    }
  },
  mounted(){
    // this.personIds = this.persons.map(t=> shortId.generate())
    this.personIds = this.persons.map(value => {
      shortId.generate()
      console.log(value)
    })
  }
}
</script>

<style scoped>

</style>