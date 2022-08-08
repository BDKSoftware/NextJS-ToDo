import { Fragment } from "react";
import classes from "./AccountCard.module.css";

function AccountCard({ user, numOfTasks, logout }) {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.header}>
          <span>My Account</span>
        </div>
        <div className={classes.main}>
          <div>
            <h1>Email: </h1>
            <span>{user.email}</span>
          </div>
          <div>
            <h1>UID : </h1>
            <span className={classes.small}>{user.uid}</span>
          </div>
          <div>
            <h1>Number of Tasks remaining : </h1>
            <span>{numOfTasks}</span>
          </div>
          <button onClick={logout}>
            <span>Log out</span>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default AccountCard;
