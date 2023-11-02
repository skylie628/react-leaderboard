import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "../App";
import { useSearchParams } from "react-router-dom";
import useGetParam from "./useGetParam";
import { urls } from "../constants/urls";
export default function useFetchData() {
  const [searchParams] = useSearchParams();
  const [totalItem, setTotalItem] = useState(100);
  const boardName = useGetParam();
  const url = urls[boardName];
  const [limit, setLimit] = useState(parseInt(searchParams.get("limit")) || 10);
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);

  const fetchData = async (limit, page) => {
    const rst = await fetch(`${url}?_limit=${limit}&_page=${page}`).then(
      (rst) => rst.json()
    );
    return rst;
  };
  // Cache data
  const { data, isPreviousData } = useQuery({
    queryKey: [boardName, limit, page],
    queryFn: () => fetchData(limit, page),
    keepPreviousData: true,
    staleTime: 100000,
  });
  // Prefetch the next page!
  useEffect(() => {
    if (!isPreviousData) {
      console.log("prefetch!!", page + 1);
      queryClient.prefetchQuery({
        queryKey: [boardName, limit, page + 1],
        queryFn: () => fetchData(limit, page + 1),
      });
    }
  }, [data, limit, page, isPreviousData, queryClient]);
  // get total item amount first
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
    rows: data,
  };
}
