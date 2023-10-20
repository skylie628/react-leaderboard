//component
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PostsPanel from "./components/Specific/PostsPanel";
import AlbumsPanel from "./components/Specific/AlbumsPanel";
import TodosPanel from "./components/Specific/TodosPanel";
import "./App.css";

function App() {
  const [selectedTab, setSeletectedTab] = React.useState(0);

  function tabProps(index) {
    return {
      id: `leaderboard-tab-${index}`,
      "aria-controls": `leaderboard-panel-${index}`,
    };
  }
  const handleChangeTab = (event, newValue) => setSeletectedTab(newValue);
  return (
    <>
      <Box className="w-screen p-4 flex flex-col items-center">
        <Box
          className="w-10/12"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tabs
            value={selectedTab}
            onChange={handleChangeTab}
            aria-label="leaderboard tabs"
          >
            <Tab label="POSTS" {...tabProps(0)} />
            <Tab label="TODOS" {...tabProps(1)} />
            <Tab label="ALBUMNS" {...tabProps(2)} />
          </Tabs>
        </Box>
        <PostsPanel value={selectedTab} index={0} />
        <TodosPanel value={selectedTab} index={1} />
        <AlbumsPanel value={selectedTab} index={2} />
      </Box>
    </>
  );
}

export default App;
