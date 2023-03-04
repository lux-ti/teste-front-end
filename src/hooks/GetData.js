import { onMounted, ref } from "vue";
import useFetch from "./Fetch";
import { router } from "../routes";
import { useRoute } from "vue-router";
import GithubApi from "../ApiLinks";

const githubApi = new GithubApi();

const useGetData = () => {
  const { data, loading, error, fetchData } = useFetch();

  const query = ref("");
  const option = ref("");
  const dataItems = ref([]);
  const currentPage = ref(1);
  const finishedList = ref(null);

  const githubHandler = async () => {
    const route = useRoute();
    query.value = route.query.q;
    option.value = route.name;

    if (!query.value) {
      router.push({
        path: "/",
      });
    } else {
      await fetchData(
        githubApi.getSearchUrl(query.value, option.value)
      );

      dataItems.value = data.value.items;

      if (dataItems.value.length === data.value.total_count) {
        finishedList.value = true;
      }
    }
  };

  const loadMore = async () => {
    currentPage.value++;
    
    await fetchData(
      githubApi.getSearchUrl(query.value, option.value, currentPage.value)
    );

    dataItems.value = [...dataItems.value, ...data.value.items];

    if (dataItems.value.length === data.value.total_count) {
      finishedList.value = true;
    }
  };

  onMounted(githubHandler);

  return {
    error,
    loading,
    dataItems,
    data,
    finishedList,
    loadMore,
  };
};

export default useGetData;
