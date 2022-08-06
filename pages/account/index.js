import Layout from "../../components/Layout/Layout";
import AccountCard from "../../components/AccountCard/AccountCard";
import { useAuth } from "../../components/AuthContext/AuthContext";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/clientApp";

function AccountPage() {
  const { user, logout } = useAuth();
  const [numOfTasks, setNumOfTasks] = useState(0);

  useEffect(() => {
    getTasks(user.uid);
  });

  async function getTasks(uid) {
    const docRef = doc(db, "users", uid);
    await onSnapshot(docRef, (snapShot) => {
      setNumOfTasks(snapShot.data().tasks.length);
    });
  }

  return (
    <Layout>
      <AccountCard user={user} logout={logout} numOfTasks={numOfTasks} />
    </Layout>
  );
}

export default AccountPage;
