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

        //Se a URL for digitada incorretamente ou forem realizadas muitas requisições
        if (!response.ok) {
          if (response.status === 403) {
            throw new Error(
              "Usuário excedeu o limite da taxa de requisições. Tente novamente em breve."
            );
          }
          throw new Error("Nenhum resultado encontrado");
        }
        return response.json();
      })
      .then((jsonData) => {
        data.value = jsonData;
      })
      .catch((err) => {
        console.log(err);
        error.value = true;
        data.value = null;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  const resetStates = () => {
    data.value = null;
    error.value = false;
  };

  return { data, loading, error, fetchData, resetStates };
};

export default useFetch;
