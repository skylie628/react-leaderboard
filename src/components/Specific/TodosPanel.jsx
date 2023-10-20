//component
import LeaderBoardPanel from "../Generic/LeaderBoardPanel";
export default function TodosPanel({ value, index }) {
  return (
    <div
      id={`leaderboard-panel-${index}`}
      className="w-9/12 mt-5"
      hidden={value != index}
      aria-labelledby={`leaderboard-tab-${index}`}
    >
      {value == index && (
        <LeaderBoardPanel
          url="https://jsonplaceholder.typicode.com/todos"
          colNames={["title", "completed"]}
          keyName="id"
        />
      )}
    </div>
  );
}
