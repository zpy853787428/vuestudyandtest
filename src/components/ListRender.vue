<template>
  <div>
    <ul>
      <li v-for="(person,index) in persons" :key="personKeys[index]">
        {{index}}) id:{{personKeys[index]}} 姓名:{{person.name}},性别:{{person.sex}},年龄:{{person.age}}
      </li>
    </ul>
  </div>
</template>

<script>
import shortId from 'shortid'
export default {
  name: "ListRender",
  data() {
    return {
      data() {
        return{
          persons:[
            {name:'张三',age:18,sex:'女'},
            {name:'李四',age:28,sex:'男'},
            {name:'王五',age:38,sex:'女'},
            {name:'李琦',age:48,sex:'女'},
            {name:'王贵',age:38,sex:'男'}
          ],
          personKeys: []
        }
      }
    }
  },
  mounted() {
    this.personKeys = this.persons.map(value => {
      console.log(value)
      shortId.generate()
    })
  }
}
</script>

<style scoped>

</style>