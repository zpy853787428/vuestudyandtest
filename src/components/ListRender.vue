<template>
  <div>
    <input placeholder="请输入要查找的人名"  v-model="searchName">
    <ul>
      <li v-for="(person,index) in searchResult" :key="index">
        {{index}})  姓名:{{person.name}},性别:{{person.sex}},年龄:{{person.age}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListRender",
  data() {
    return {
          persons: [
            {name: '张三', age: 18, sex: '女'},
            {name: '李四', age: 28, sex: '男'},
            {name: '王五', age: 38, sex: '女'},
            {name: '李琦', age: 48, sex: '女'},
            {name: '王贵', age: 38, sex: '男'}
          ],
          searchName: ''
    }
  },
      methods:{
        searchPersons(name){
          console.log("开始走这个方法了~~~")
          let arr = []
          console.log(name);
          if (name.trim().length == 0) {
             arr = [...this.persons];
             return arr
          }
          name = name.trim()
          let curName
          for (let i=0;i<this.persons.length;i++){
            curName = this.persons[i].name
            if (curName.indexOf(name) !== -1) {
              arr.push(this.persons[i])
            }
          }
          return arr
        }
      },
     computed:{
       searchResult:{
         get(){
           return this.searchPersons(this.searchName)
         }
       }
     }
}
</script>

<style scoped>

</style>