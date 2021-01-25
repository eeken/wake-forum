import React from "react";
import Sidebar from "./Components/Admin/Sidebar";
import User from "./Components/Admin/User";
import "./css/Admin.scss";
import { Switch, Route } from "react-router-dom";
import ManagePost from "./Components/Admin/ManagePost";
import ManageModerators from "./Components/Admin/ManageModerators";
import { useStateValue } from "./StateProvider";
function Admin({ history }) {
  const [{ adminId }] = useStateValue();

  //redirect to login if adminId is not set
  if (!adminId) {
    history.push("/login/?admin");
  }
  return (
    <div style={{ background: "#ffffff" }} id="admin">
      <Sidebar which="admin" />
      <div id="admin-right">
        <Switch>
          <Route exact path="/admin" component={User} />
          <Route exact path="/admin/mangePost" component={ManagePost} />
          <Route
            exact
            path="/admin/manageModerators"
            component={ManageModerators}
          />
        </Switch>
      </div>
    </div>
  );
}

export default Admin;
