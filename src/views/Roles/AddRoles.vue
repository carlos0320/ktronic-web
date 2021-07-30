<template>
    <div>
        <input type="text" v-model="name">
        <button>Agregar</button>
    </div>
</template>

<script>
    export default{
        name: "AddRoles",
        data(){
            return{
                name:""
            }
        }
    }


</script>
