// Home Screen
import Head from "next/head";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/AuthContext/AuthContext";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import TodoCard from "../../components/TodoCard/TodoCard";
import {
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../../firebase/clientApp";

function Home() {
  const router = useRouter();
  const { logout, user } = useAuth();
  const [tasks, setTasks] = useState([]);

  async function getTasks(uid) {
    const docRef = doc(db, "users", uid);
    await onSnapshot(docRef, (snapShot) => {
      setTasks(snapShot.data().tasks);
    });
  }

  async function addTask(uid, task) {
    if (task == "") {
      alert("Task cannot be empty");
      return;
    }

    const docRef = doc(db, "users", uid);

    await updateDoc(docRef, {
      tasks: arrayUnion(task),
    })
      .then(() => {
        console.log("Successfully Added Task");
      })
      .catch(() => {
        console.log("Failed To add Task");
      });
  }

  async function deleteTask(uid, task) {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      tasks: arrayRemove(task),
    })
      .then(() => {
        console.log("Successfully Deleted Task");
      })
      .catch(() => {
        console.log("Failed To Delete Task");
      });
  }

  useEffect(() => {
    getTasks(user.uid);
  }, []);
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="description" content="ToDo Practice Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoCard
        user={user}
        tasks={tasks}
        handleAddTask={addTask}
        handleDeleteTask={deleteTask}
      />
    </Layout>
  );
}

export default Home;
