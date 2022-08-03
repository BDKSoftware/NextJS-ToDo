import "../styles/globals.css";
import { AuthContextProvider } from "../components/AuthContext/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const noAuthRequired = ["/", "/signup", "/login"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
