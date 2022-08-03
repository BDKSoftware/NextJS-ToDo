// Home Screen
import { useEffect, useState } from "react";
import { useAuth } from "../../components/AuthContext/AuthContext";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import TodoCard from "../../components/TodoCard/TodoCard";
import { doc, onSnapshot } from "firebase/firestore";
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

  useEffect(() => {
    console.log(user);
    getTasks(user.uid);
  }, []);
  return (
    <Layout>
      <TodoCard tasks={tasks} />
    </Layout>
  );
}

export default Home;
