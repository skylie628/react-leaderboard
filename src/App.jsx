import DashBoard from "./Pages/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsPanel from "./components/Specific/Panel/PostsPanel";
import AlbumsPanel from "./components/Specific/Panel/AlbumsPanel";
import TodosPanel from "./components/Specific/Panel/TodosPanel";
import { Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
export const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoard />}>
            <Route index element={<Navigate to="/posts" replace />} />
            <Route path="posts" index element={<PostsPanel />} />
            <Route path="todos" element={<TodosPanel />} />
            <Route path="albums" element={<AlbumsPanel />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
