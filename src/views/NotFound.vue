<template>
   <h1>Oops!</h1>
   <h3>The {{resource}} you are looking for is not found</h3>
   <router-link :to="{name:'EventList'}">Back to Home</router-link>  
</template>

<script>
export default {
    props:{
        resource:{
            type:String,
            required: true,
            default: 'page'
        }
    } 
}
</script>

<style>

</style>
