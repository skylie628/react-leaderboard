//component
import LeaderBoardPanel from "../../Generic/LeaderBoardPanel";
import { TableRow, TableCell } from "@mui/material";
export default function TodosPanel({ index = "todos" }) {
  return (
    <div
      id={`leaderboard-panel-${index}`}
      className="w-9/12 mt-5"
      aria-labelledby={`leaderboard-tab-${index}`}
    >
      <LeaderBoardPanel
        headerNames={["Id", "Title", "Completed"]}
        renderRow={(row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.completed ? "completed" : "doing"}</TableCell>
          </TableRow>
        )}
      />
    </div>
  );
}
