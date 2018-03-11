<template>
<div class="container">
    <h1>{{post.title}}</h1>
    <pre>{{post.body}}</pre>
    <p>
        <nuxt-link to='/posts'>Back to the id list</nuxt-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    // 纯前端取数据 vue 的 data() 
    //  asyncData 
    async asyncData({ params }) {
        // await 异步变同步的解决方案，数据库的查询异步过程
       let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        return {
            post: data
        }
    } 
}
</script>

<style>

</style>
