// Main Container for Home Page, this houses all tasks

import { Fragment } from "react";
import classes from "./TodoCard.module.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/clientApp";
import { useAuth } from "../AuthContext/AuthContext";

function TodoCard({ tasks }) {
  //console.log(tasks);
  return (
    <Fragment>
      <div className={classes.TodoCard}>
        <div></div>
        {tasks.map((task) => {
          return <h1 key={task.task}>{task.task}</h1>;
        })}
      </div>
    </Fragment>
  );
}

export default TodoCard;
