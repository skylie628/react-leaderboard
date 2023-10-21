import useFetchData from "./useFetchData";
export default function useLeaderBoardProps({ url, boardName }) {
  const { limit, setLimit, page, setPage, rows, totalItem } = useFetchData(
    url,
    boardName
  );
  const handlePageChange = (_, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };
  return {
    limit,
    setLimit,
    page,
    setPage,
    rows,
    totalItem,
    handlePageChange,
    handleChangeRowsPerPage,
  };
}
