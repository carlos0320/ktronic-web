<template>
  <section>
       <div class="login">
           <p class="login__title">Ktronic</p>
           <label for="userName">Username:</label>
        <input type="text" v-model="name">
           <label for="userName">Email:</label>
        <input type="text"  v-model="email">
        <label for="userName">Password:</label>
        <input type="password" v-model="password">
        <label for="userName">Confirm password:</label>
        <input type="password">
        <button @click="register()">Sign up</button>

        
        <p>Already have an account?</p>
        
        <button>Sign in</button>        
       </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      name: "Mabel",
      email: "mabelvillada890@gmail.com",
      password: "Fiagfcj",
      id_role: 123,
    };
  },
  methods: {
    click() {
      console.log(`${this.email} ${this.password}`);
    },
    async register() {
      try {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password,
          id_role: this.id_role,
        };
        console.log("Vamos a imprimir el usuario", user);
        const userRegister = await axios.post(
          "http://localhost:3000/api/users/register",
          user
        );
        console.log(
          "Imprimir usuario registrado en la base de datos",
          userRegister
        );
        this.$router.push({
          name: "Login",
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

section{
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to bottom, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to bottom, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

label{
    color:white;
    margin: 0;
}

.login{
    background-color:black;
    width: 414px;
    max-width: 100%;
    height: 500px;
    display: flex;
    
    flex-direction: column;
    align-items:center;    
}

.login p{
    color: white;
}

.login__title{
    color: white;
    margin: 10px 10px;
    font-size: 30px;
    font-weight: bold;
}

.login input{
    color: white;
    width: 290px;
    height: 30px;
    border-radius: 20px;
    margin: 15px 0px;
    background-color: #292828;
    padding: 5px;
    
}

input:focus{
    border:none;
    outline-width: 0;
}

a{
    color:white;
    cursor: pointer;
    margin: 10px 0px 20px 0px;
}

hr{
    width: 290px;
    margin: 5px 0px 10px 0px;
}

.login button{
    color:white;
    margin: 15px 0px;
    width: 150px;
    height: 30px;
    border-radius: 15px;
    background-color:#EC811E;
    font-weight: bold;
    
}

</style>