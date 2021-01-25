import React from "react";
import Sidebar from "./Components/Admin/Sidebar";
import User from "./Components/Admin/User";
import "./css/Admin.scss";
import { Switch, Route } from "react-router-dom";
import ManagePost from "./Components/Admin/ManagePost";
import ManageModerators from "./Components/Admin/ManageModerators";
import { useStateValue } from "./StateProvider";
function Moderator({ history }) {
  const [{ adminId, moderatorId }] = useStateValue();

  if (!moderatorId) {
    history.push("/login/?moderator");
  }
  return (
    <div style={{ background: "#ffffff" }} id="admin">
      <Sidebar which="moderator" />
      <div id="admin-right">
        <Switch>
          <Route exact path="/moderator" component={User} />
          <Route exact path="/moderator/mangePost" component={ManagePost} />
        </Switch>
      </div>
    </div>
  );
}

export default Moderator;
