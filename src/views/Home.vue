<template>
  <Layout>
    <div class="form-group">
      <label><h3>Selecciona el Indicador</h3></label>
      <!--SELECT -->
      <select v-model="indicador" class="form-select" name="indicador">
        <option v-for="(ind, index) in indicadoresEconomicos" :key="index">
          {{ ind.codigo }}
        </option>
      </select>
      <!-- / SELECT -->
    </div>
    <Spinner v-if="loading"/>
    <!-- Indicadores info -->
    <div  v-if="indicadorInfo.serie" class="indicadores-info mt-4">
      <h4>Indicador: {{ indicadorInfo.nombre }}</h4>
      <h5>Unidad de medida: {{ indicadorInfo.unidad_medida }}</h5>
    </div>
    <!-- /Indicadores info -->
    <!-- Tabla -->
    <table v-if="indicadorInfo.serie" class="table mt-5">
      <thead>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ind in indicadorInfo.serie" :key="ind.fecha">
          <!-- <td>{{ fecha(ind.fecha) }}</td> -->
          <td> {{ ind.fecha | fecha }}</td>
          <td>{{ ind.valor }}</td>
        </tr>

      </tbody>
    </table>
  </Layout>
</template>

<script>
// @ is an alias to /src
import Layout from "../layout/Layout.vue";
import { indicadoresEconomicos } from "@/api/indicadores.js";
import Spinner from  "../components/Spinner.vue";
export default {
  name: "Home",
  components: {
    Layout,
    Spinner
  },
  data() {
    return {
      indicadorInfo: [],
      indicadoresEconomicos : [
        { codigo : 'uf'},
        { codigo : 'ivp'},
        { codigo: 'dolar'},
        { codigo: 'dolar_intercambio'},
        { codigo: 'euro'},
        { codigo: 'ipc'},
        { codigo: 'utm'},
        { codigo: 'imacec'},
        { codigo: 'tpm'},
        { codigo: 'libra_cobre'},
        { codigo: 'tasa_desempleo'},
        { codigo: 'bitcoin'}
  ],
  indicador: '',
  loading: false,
    }
  },
  methods: {
    async getIndicadores() {
      try {
        console.log('invocando get indicadores')
        this.indicadorInfo = await indicadoresEconomicos(this.indicador);
        console.log(this.indicador);
        this.loading = false;
      } catch (error) {
        console.log(error);
      }

    },
    fecha(value) {
      const f = new Date(value);
      const fecha = `${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`;
      return fecha;
    }
  },
  created() {
    this.getIndicadores();
  },
  computed: {
  
  },
  filters: {
    fecha: function (value) {
      let f = new Date(value);
      let fecha = `${f.getDate()}/${f.getMonth() + 1}/${f.getFullYear()}`;
      return fecha
  }
},
  watch: {
    /* recibe por parametro el nuevoValor, valorAnterior */
    indicador() {
      this.loading = true;
      this.indicadorInfo= [];
      console.log("estoy en el watch")
      this.getIndicadores();
    }
  }
  
};
</script>
