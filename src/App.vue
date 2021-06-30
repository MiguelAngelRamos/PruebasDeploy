<template>
  <div>
    <!-- <div class="text-center mt-5">
      <h1>{{ message }}</h1>
          <button @click="message = 'He cambiado!!'">Cambiar</button>
    <button @click="destruir()">Destruir Instancia Vue</button>
    </div> -->
     <router-view/>

  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      message: "Ciclo de vida de Vue.js",
    };
  },
  beforeCreate() {
    console.log("BeforeCreate");
    console.log(this.message);
  },
  created() {
    // Al crear los métodos, observadores y eventos, pero aún no accedemos al DOM(Template)
    // aun no a leido #app que antes se conocia como el
    console.log("created");
  },
  beforeMount() {
    // Cuando se va insertar información en e DOM(Template)
    // Se ejecuta antes de insertar el Dom
    console.log("beforeMount");
  },
  mounted() {
    // Se ejecuta al insertar el DOM
    console.log("mounted");
  },
  beforeUpdate() {
    // Al detectar un cambio
    console.log("beforeUpdate");
  },
  updated() {
    // Al Realizar los cambios
    console.log("updated");
  },
  beforeDestroy() {
    // Antes de destruir la instancia
    console.log("BeforeDestroy");
  },
  destroyed() {
    // Se destruye toda la instancia
    console.log("destroyed");
  },
  methods: {
    destruir() {
      this.$destroy();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div> -->
