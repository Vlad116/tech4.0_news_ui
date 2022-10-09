import { fetchJSON } from "./fetchJSON";

export const fetchData = async (
  url,
  dispatch,
  requestData,
  receiveData,
  handleError
) => {
  //   dispatch(requestData({ isFetching: true }));
  try {
    const data = await fetchJSON(url);
    return data;
    // dispatch(receiveData(data));
    // dispatch(handleError({ didInvalidate: false }));
  } catch (error) {
    console.log(error);
    // dispatch(handleError({ didInvalidate: true }));
  }
  //   dispatch(requestData({ isFetching: false }));
};
