// Home Screen
import { useEffect } from "react";
import { useAuth } from "../../components/AuthContext/AuthContext";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";

function Home({}) {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <Layout>
      <button onClick={() => logout()}>Press Me</button>
    </Layout>
  );
}

export default Home;
