import { useEffect, useState } from "react";

export default function useFetchData(url) {
  const [rows, setRows] = useState([]);
  const [totalItem, setTotalItem] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(() => true);
  const fetchData = async (limit, page) => {
    const fetchedData = await fetch(
      `${url}?_limit=${limit}&_page=${page + 1}`
    ).then((rst) => rst.json());
    return fetchedData;
  };
  const getTotalItem = async (url) => {
    const totalItem = await fetch(url)
      .then((rst) => rst.json())
      .then((rst) => rst.length);
    return totalItem;
  };
  useEffect(() => {
    getTotalItem(url).then((rst) => setTotalItem(rst));
  }, []);
  useEffect(() => {
    setIsLoading(true);
    fetchData(limit, page).then((data) => {
      setRows(data);
      setIsLoading(false);
    });
  }, [limit, page]);
  return { limit, setLimit, page, setPage, rows, totalItem, isLoading };
}
