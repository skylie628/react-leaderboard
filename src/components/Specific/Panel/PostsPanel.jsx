//component
import { TableCell, TableRow } from "@mui/material";
import LeaderBoardPanel from "../../Generic/LeaderBoardPanel";

export default function PostsPanel({ value, index }) {
  return (
    <div
      id={`leaderboard-panel-${index}`}
      className="w-9/12 mt-5"
      hidden={value != index}
      aria-labelledby={`leaderboard-tab-${index}`}
    >
      {value == index && (
        <LeaderBoardPanel
          headerNames={["Id", "Title", "Body"]}
          renderRow={(row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.body}</TableCell>
            </TableRow>
          )}
          resource="posts"
        />
      )}
    </div>
  );
}
