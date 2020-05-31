<template>
<div>
   <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对谢可寅的看法</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <Add :addComment="addComment"/>
        <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
</div>
</template>

<script type="text/ecmascript-6">

import Add from './components/Add'
import List from '@/components/List'

export default {
    components:{
        Add:Add,
        List:List
    },
    data(){
        return {
            comments:[
                {id:1,username:'小李',content:'谢可寅绝美'},
                {id:2,username:'老刘',content:'这小姑娘实力派'},
                {id:3,username:'小蔡',content:'喜欢可寅呐'}
            ]
        }
    },
    methods:{
        addComment(obj){
            this.comments.unshift(obj)
        },
        deleteComment(index){
            this.comments.splice(index,1)
        }
    }
}
</script>

<style scoped>


</style>
