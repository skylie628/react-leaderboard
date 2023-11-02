import { useLocation } from "react-router-dom";
export default function useGetParam() {
  const locate = useLocation();
  return locate.pathname.split("/")[1] || "posts";
}
