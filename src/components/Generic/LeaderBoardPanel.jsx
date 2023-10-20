import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import TablePaginationActions from "./TablePaginationActions";
//hook
import useFetchData from "../../hooks/useFetchData";
export default function LeaderBoardPanel({ colNames, keyName, url }) {
  const { limit, setLimit, page, setPage, rows, totalItem, isLoading } =
    useFetchData(url);
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    console.log(parseInt(event.target.value, 10));
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };
  return isLoading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 240,
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="leaderboard panel">
        <TableHead>
          <TableRow>
            <TableCell>{keyName}</TableCell>
            {colNames.map((name) => (
              <TableCell key={name}>{name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row[keyName]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row[keyName]}
              </TableCell>
              {colNames.map((name) => (
                <TableCell key={row[name]}>{row[name].toString()}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={totalItem}
              rowsPerPage={limit}
              page={page}
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
