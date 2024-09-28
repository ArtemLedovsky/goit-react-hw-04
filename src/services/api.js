import axios from "axios";

export const fetchImages = async (query, page) => {
  const API_KEY = "ipcl1xN65DLlRNV5GNLwcNdOnWVcw9lTS0t30WzdxCA";
  const URL = "https://api.unsplash.com/search/photos";
  const { data } = await axios.get(
    `${URL}?client_id=${API_KEY}&page=${page}&query=${query}&per_page=9`
  );
  return data;
};
