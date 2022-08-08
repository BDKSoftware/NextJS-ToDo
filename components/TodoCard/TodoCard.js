// Main Container for Home Page, this houses all tasks

import { Fragment, useEffect, useState } from "react";
import classes from "./TodoCard.module.css";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoCard({ tasks, handleAddTask, user, handleDeleteTask }) {
  const [newTask, setNewTask] = useState("");
  const [showModal, setShowModal] = useState(true);

  function handleChange(event) {
    event.preventDefault();

    setNewTask(event.target.value);
  }

  return (
    <Fragment>
      <div className={classes.TodoCard}>
        <div className={classes.cardHeader}>
          <section>
            <h1>{"To Do's"}</h1>
            <span>{tasks.length} Tasks Remaining</span>
          </section>
          <div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleAddTask(user.uid, newTask);
                setNewTask("");
              }}
            >
              <input
                type="text"
                placeholder="Enter A New Task"
                value={newTask}
                onChange={handleChange}
              />
              <button type="submit">
                <span>+</span>
              </button>
            </form>
          </div>
        </div>
        <div className={classes.taskList}>
          {tasks.map((task) => {
            return (
              <div key={task} className={classes.mainDiv}>
                <div className={classes.contentDiv}>
                  <span className={classes.task}>{task}</span>
                </div>

                <section>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      handleDeleteTask(user.uid, task);
                    }}
                  >
                    <DeleteIcon className={classes.deleteIcon} />
                  </button>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default TodoCard;
