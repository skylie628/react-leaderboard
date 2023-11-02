//component
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import useGetParam from "../hooks/useGetParam";
import { Outlet, useNavigate } from "react-router-dom";
//external
export default function DashBoard() {
  const [param, setParam] = useState(useGetParam());
  const navigate = useNavigate();
  function tabProps(index) {
    return {
      id: `leaderboard-tab-${index}`,
      "aria-controls": `leaderboard-panel-${index}`,
    };
  }
  const handleChangeTab = (event, newValue) => {
    const newParam =
      newValue == 0 ? "posts" : newValue == 1 ? "todos" : "albums";
    navigate(`/${newParam}`);
    setParam(newParam);
  };
  return (
    <Box className="w-screen p-4 flex flex-col items-center">
      <Box className="w-10/12" sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={param == "posts" ? 0 : param == "todos" ? 1 : 2}
          onChange={handleChangeTab}
          aria-label="leaderboard tabs"
        >
          <Tab label="POSTS" {...tabProps("posts")} />
          <Tab label="TODOS" {...tabProps("todos")} />
          <Tab label="ALBUMS" {...tabProps("albums")} />
        </Tabs>
      </Box>
      <Outlet />
    </Box>
  );
}
