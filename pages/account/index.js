import Head from "next/head";
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
      <Head>
        <title>NextJS My Acount</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="description" content="ToDo Practice Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AccountCard user={user} logout={logout} numOfTasks={numOfTasks} />
    </Layout>
  );
}

export default AccountPage;
