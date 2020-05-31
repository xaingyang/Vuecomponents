<template>
<div>
  <!-- 第一次使用子组件 -->
  <Child>
    <!-- 父组件当中给子组件插槽传递内容
    一个template代表的是给一个插槽的内容
    如果是给具名插槽的，那么template需要带上名字

    template如果传递内容（标签）比较多的时候，我们需要带上
    如果传递的内容就一个标签，那么template是可以省略的

    父传子
     -->
    <template>
      <h2>我喜欢睡觉</h2>
    </template>

    <p slot="aa">我是具名的内容</p>
    <span>谢可寅</span>
  </Child>
  <!-- 第二次使用子组件 -->
  <Child>
    <!-- template可以不写 简写写法 -->
    <a href="javascript:;">我喜欢睡觉</a>


    <!-- 作用域插槽是依赖父组件决定子组件的显示 -->
    <!-- 子传父 -->
    <span slot-scope="slotProps" v-show="isShow" slot="uu">
      √{{slotProps.todo.name}}
    </span>
  </Child>
</div>
</template>

<script type="text/ecmascript-6">
import Child from '@/components/Child'
export default {
  components:{
    Child
  },
  data () {
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>


</style>
