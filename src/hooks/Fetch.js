import { ref } from "vue";

const useFetch = () => {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(false);

  const fetchData = async (url) => {
    loading.value = true;
    data.value = null;
    error.value = false;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error(
            "Usuário excedeu o limite da taxa de requisições. Tente novamente em breve."
          );
        }
        throw new Error("Nenhum resultado encontrado/URL inválida");
      }
      const jsonData = await response.json();
      data.value = jsonData;

    } catch (err) {
      console.log(err);
      error.value = true;
      data.value = null;

    } finally {
      loading.value = false;
    }
  };

  const resetStates = () => {
    data.value = null;
    error.value = false;
  };

  return { data, loading, error, fetchData, resetStates };
};

export default useFetch;