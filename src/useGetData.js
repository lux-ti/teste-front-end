import { onMounted, ref } from "vue";
import useFetch from "./useFetch";
import { router } from "./routes";
import { GET_REPOSITORIES_OR_USERS } from "./api_links";
import { useRoute } from "vue-router";

const useGetData = () => {
  const { data, loading, error, fetchData } = useFetch();

  const query = ref("");
  const option = ref("");
  const dataItems = ref([]);
  const currentPage = ref(1);
  const listHasFinished = ref(null);

  const fetchGithubHandler = async () => {
    const route = useRoute();

    query.value = route.query.q;
    option.value = route.name;

    //se a query "q" não existir ou não possuir valor, a página é redirecionada a "home"
    if (!query.value) {
      router.push({
        path: "/",
      });
    } else {
      await fetchData(GET_REPOSITORIES_OR_USERS(query.value, option.value));

      dataItems.value = data.value.items;

      //verifica se não há mais itens para serem puxados da API.
      if (dataItems.value.length === data.value.total_count) {
        listHasFinished.value = true;
      }
    }
  };

  const loadMoreDataHandler = async () => {
    ++currentPage.value;

    await fetchData(
      GET_REPOSITORIES_OR_USERS(query.value, option.value, currentPage.value)
    );

    dataItems.value = [...dataItems.value, ...data.value.items];

    //verifica se não há mais itens para serem puxados da API.
    if (dataItems.value.length === data.value.total_count) {
      listHasFinished.value = true;
    }
  };

  onMounted(() => {
    fetchGithubHandler();
  });

  return {
    error,
    loading,
    dataItems,
    listHasFinished,
    loadMoreDataHandler,
  };
};

export default useGetData;
