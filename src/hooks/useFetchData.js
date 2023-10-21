import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../App";
export default function useFetchData(url, boardName) {
  const [totalItem, setTotalItem] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const fetchData = async (limit, page) => {
    const rst = await fetch(`${url}?_limit=${limit}&_page=${page + 1}`).then(
      (rst) => rst.json()
    );
    return rst;
  };
  const { data, isError, isPreviousData } = useQuery({
    queryKey: [boardName, limit, page],
    queryFn: () => fetchData(limit, page),
    keepPreviousData: true,
    staleTime: 1000000,
  });
  // Prefetch the next page!
  useEffect(() => {
    if (!isPreviousData) {
      queryClient.prefetchQuery({
        queryKey: [boardName, limit, page + 1],
        queryFn: () => fetchData(limit, page + 1),
      });
    }
  }, [data, limit, page, isPreviousData, queryClient]);

  const getTotalItem = async (url) => {
    const totalItem = await fetch(url)
      .then((rst) => rst.json())
      .then((rst) => rst.length);
    return totalItem;
  };
  useEffect(() => {
    getTotalItem(url).then((rst) => setTotalItem(rst));
  }, []);
  return {
    limit,
    setLimit,
    page,
    setPage,
    totalItem,
    isError,
    rows: data,
  };
}
