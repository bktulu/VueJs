<template>
    <p>Test Ediyorum. {{id}} {{buket}}</p>
</template>
<script>

export default ({
    data(){
        return{
            id: this.$route.params.id,
            buket:"Buket"
        }
    }
})
</script>
