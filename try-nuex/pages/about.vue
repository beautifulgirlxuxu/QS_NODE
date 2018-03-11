<template>
    <div>
      <p>Hi, from {{name}}</p>
      <nuxt-link to='/'>Back home</nuxt-link>
    </div>
  </template>
  
  <script>
    export default {
        // nuxt 本质将 .vue 交给后端渲染
        //  webpack server-side-renderer 插件
        // react 生态 next.js 模仿来
        // .vue => html/css/js
        //  data 注意区分来源前？后端？
        asyncData() {
            return {
                name:process.static ? 'static':(process.server ? 'server':'client')
            }
        },
        head: {
            title:'About page'
        }
    }
  
  </script>
  
  <style>
  
  
  </style>
  
