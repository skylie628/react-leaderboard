//component
import { TableRow, TableCell } from "@mui/material";
import { useLocation } from "react-router-dom";
import LeaderBoardPanel from "../../Generic/LeaderBoardPanel";
export default function AlbumsPanel({ index = "albums" }) {
  console.log(useLocation());
  return (
    <div
      id={`leaderboard-panel-${index}`}
      className="w-9/12 mt-5"
      aria-labelledby={`leaderboard-tab-${index}`}
    >
      <LeaderBoardPanel
        headerNames={["Id", "Title"]}
        renderRow={(row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>{row.title}</TableCell>
          </TableRow>
        )}
      />
    </div>
  );
}
