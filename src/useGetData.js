import { onBeforeMount, ref } from "vue";
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

  const fetchGithubHandler = async () => {
    const route = useRoute();

    query.value = route.query.q;
    option.value = route.name;

    const backToHome = () =>
      router.push({
        path: "/",
      });

    //se a query "q" não existir ou não possuir valor, a página é redirecionada a "home"
    if (!query.value) {
      backToHome();
    } else {
      await fetchData(GET_REPOSITORIES_OR_USERS(query.value, option.value));

      //se o total de itens puxados da API for igual a 0, a página é redirecionada a "home"
      if (data.total_count === 0) {
        backToHome();
        return;
      }
      dataItems.value = data.value.items;
    }
  };

  const loadMoreDataHandler = async () => {
    ++currentPage.value;

    await fetchData(
      GET_REPOSITORIES_OR_USERS(query.value, option.value, currentPage.value)
    );

    dataItems.value = [...dataItems.value, ...data.value.items];
  };

  onBeforeMount(async () => {
    await fetchGithubHandler();
  });

  return { error, loading, dataItems, loadMoreDataHandler, fetchGithubHandler };
};

export default useGetData;
