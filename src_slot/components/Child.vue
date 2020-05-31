<template>
<div>
    <p>我是固定不变的</p>
    <!-- 匿名插槽 没有名字的 在父组件当中没有写名字的东西会默认传递给这个插槽使用
    如果插槽内部有美容，父组件也没有给插槽去传递内容，那么默认的内容被现实
    如果插槽内部有内容，父组件给插槽传递了内容，那么默认的内容被覆盖
    -->
    <!-- 匿名插槽在使用当中只有一个 -->
    <slot>爱渊哥</slot>

    <!-- 具名插槽 -->
    <slot name="aa">爱渊哥</slot>

    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <slot name="uu" :todo="todo">
                <!-- 类似于属性传值，但是在这代表将子组件当中的数据传递给父组件当中某个固定的作用区域 -->
                {{todo.name}}
            </slot>
        </li>
    </ul>
</div>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
        return {
            todos:[
                {id:1,name:'赵丽颖',age:33},
                {id:2,name:'杨幂',age:40},
                {id:3,name:'渊哥',age:18},
            ]
        }
    }
}
</script>

<style scoped>


</style>
