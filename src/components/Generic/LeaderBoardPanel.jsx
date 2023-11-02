//component
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import TablePaginationActions from "./TablePaginationActions";
//hook
import useLeaderBoardProps from "../../hooks/useLeaderBoardProps";
//internal
export default function LeaderBoardPanel({ headerNames, renderRow }) {
  const {
    limit,
    page,
    rows,
    totalItem,
    handlePageChange,
    handleChangeRowsPerPage,
  } = useLeaderBoardProps();
  if (page < 1 || page > totalItem / limit) {
    return <div>Out of range</div>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="leaderboard panel">
        <TableHead>
          <TableRow>
            {headerNames.map((name) => (
              <TableCell key={name}>{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{rows && rows.map((row) => renderRow(row))}</TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={totalItem}
              rowsPerPage={limit}
              page={page - 1}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={(props) => (
                <TablePaginationActions
                  {...props}
                  totalItem={totalItem}
                  limit={limit}
                />
              )}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
