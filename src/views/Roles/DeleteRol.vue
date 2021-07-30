<script>
    import rolesService from "../../services/Roles"
    
    export default{
        name: "deleteView",
        data(){
            
        },
        created () {
         this.paramsRolId= this.$route.params.idRol;
         this.deleteRol();
         
        },
        methods:{
            async deleteRol(){
                try {
                    await rolesService.deleteRoles(this.paramsRolId);
                } catch (error) {
                    console.error(error)
                }
            }
        }
    }

</script>
