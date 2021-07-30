<template>
  <div>
    

    <table class="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Actions</th>          
        </tr>
      </thead>
      <tbody>

        <tr v-for="(role, i) in roles" :key="i">
          
          <td>{{ role.id }}</td>
          <td>{{ role.name }}</td>
          <td>
            <button class="btn btn-primary"  @click="editarRol(role.id)" >Editar</button>
            <button class="btn btn-danger" @click="eliminarRol(role.id)">Eliminar</button>
          </td>
          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import rolesService from "../../services/Roles/index";

export default {
  name: "Roles",
  data() {
    return {
      roles: [],
    };
  },
  created() {
    this.getRoles();
  },
  methods: {
    async getRoles() {
      try {
        // this.roles = await rolesService.listRoles();
        const { data } = await rolesService.listRoles();
        this.roles = data;
      } catch (error) {
        console.error(error);
      }
    },
    editarRol(id){
      console.log(id)
      this.$router.push({
          name: "UpdatedRoles",
          params:{
            idRol:id
          }
      });
    },
    async eliminarRol(id){
       try {
            await rolesService.deleteRoles(id);
        } catch (error) {
            console.error(error)
        }
    }
  },
};
</script>
