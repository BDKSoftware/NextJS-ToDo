// Home Screen
import { useEffect } from "react";
import { useAuth } from "../../components/AuthContext/AuthContext";
import { useRouter } from "next/router";

function Home({}) {
  const router = useRouter();
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          logout();
        }}
      >
        Press me
      </button>
    </div>
  );
}

export default Home;
