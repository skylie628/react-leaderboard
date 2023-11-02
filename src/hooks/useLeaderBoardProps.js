import useFetchData from "./useFetchData";
import { useNavigate } from "react-router-dom";
import useGetParam from "./useGetParam";
export default function useLeaderBoardProps() {
  const navigate = useNavigate();
  const boardName = useGetParam();
  const { limit, setLimit, page, setPage, rows, totalItem } = useFetchData();
  const handlePageChange = (_, newPage) => {
    navigate(`/${boardName}?page=${newPage + 1}&limit=${limit}`);
    setPage(newPage + 1);
  };
  const handleChangeRowsPerPage = (event) => {
    navigate(`/${boardName}?page=1&limit=${event.target.value}`);
    setLimit(parseInt(event.target.value, 10));
    setPage(1);
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
