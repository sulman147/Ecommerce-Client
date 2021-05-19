import React from "react";
import AdminNav from "../../components/nav/AdminNav";

const AdminDashboard = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-2">
        <AdminNav />
      </div>
      <div className="col">user history page</div>
    </div>
  </div>
);

export default AdminDashboard;
