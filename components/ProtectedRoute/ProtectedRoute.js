import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../AuthContext/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [router, user]);

  return user ? [children] : null;
};

export default ProtectedRoute;
