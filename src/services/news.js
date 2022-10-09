import { fetchData } from "@/common/helpers/api-methods";
import { API_HOST } from "@/common/constants/constants";

const getNews = (limit, offset) =>
  fetchData(`${API_HOST}/news/all?limit=${limit}&offset=${offset}`);

export { getNews };
