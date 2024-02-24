import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-4 d-flex justify-content-between ">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
}
