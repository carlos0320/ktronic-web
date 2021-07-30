<template>
   <div>
        
        <input type="text" v-model="rol.name">
      <v-text-field
      v-model="rol.name"
      name="name"
      label="Name"
      type="text"
    ></v-text-field>
    <v-btn color="primary" @click="updateRole()">Actualizar</v-btn>
   </div>
</template>

<script>
import rolesService from "../../services/Roles"

 export default {
     name: "updateView",
     data(){
        
         return {
            paramsRolId: "",
            rol:{
             
            }
         }
     },
     created () {
         this.paramsRolId= this.$route.params.idRol;
         this.getOneRole();
         
     },
     methods:{
         async getOneRole(){
             try {
                 console.log()
                 const dataRol = await rolesService.listOne(this.paramsRolId);
                this.rol = dataRol.data
                 console.log(dataRol)
             } catch (error) {
                 console.error(error)
             }
         },
         async updateRole(){
             try {
                 console.log("metodo actualizar")
                 await rolesService.updateRoles(this.rol.id,this.rol.name)
                  this.$router.push({
                    name: "Roles"
                   
                });
             } catch (error) {
                 console.error(error)
             }
         }
     }
 }
</script>
