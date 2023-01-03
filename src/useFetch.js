import { ref } from "vue";

const useFetch = () => {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(false);

  const fetchData = async (url) => {
    await fetch(url)
      .then((response) => {
        loading.value = true;
        data.value = null;
        error.value = false;

        //Se a URL for digitada incorretamente
        if (!response.ok) throw new Error("URL inválida");
        return response.json();
      })
      .then((jsonData) => {
        /* if (jsonData.total_count === 0) {
          //se não forem retornados resultados:
          throw new Error("Não há resultados para esta pesquisa");
        } 
        */
        data.value = jsonData;
        error.value = false;
      })
      .catch((err) => {
        console.log(err);
        error.value = true;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return { data, loading, error, fetchData };
};

export default useFetch;