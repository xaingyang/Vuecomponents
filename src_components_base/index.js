import Vue from 'vue'
import App from './App'//把组装好的整体组件导入到入口文件，准备渲染
Vue.config.productionTip = false

new Vue({
    el:'#root',
    render: h => h(App)
    //第一步：把导入过来的App组件配置对象，在vue模板中注册解释为一个标签名<App/>并使用
    //第二部：把这个标签在模板当中进行渲染

    // components: {
    //     App
    // },
    // template:'<App>'
})