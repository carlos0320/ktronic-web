<template>
  <div class="home">
    <p>Home</p>
    <p>{{ user }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.user = localStorage.getItem("userApp");
  },
};
</script>