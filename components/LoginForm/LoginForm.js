// Component for user Login

// CSS Imports
import { Fragment, useEffect, useState } from "react";
import classes from "../../styles/Form.module.css";
import { useAuth } from "../AuthContext/AuthContext";

import Link from "next/link";
import { useRouter } from "next/router";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const { user, login } = useAuth();

  const CLEANUPALL = 1;
  const CLEANUP_PASSWORD = 2;

  useEffect(() => {
    if (error !== "") {
      alert(error);
      handleCleanUp();
    }
  }, [error]);

  function handleInput(event, type) {
    event.preventDefault();
    switch (type) {
      case "EMAIL":
        setEmail(event.target.value);
        return;
      case "PASSWORD":
        setPassword(event.target.value);
        return;
    }
  }

  function handleCleanUp(errorType) {
    if (errorType === CLEANUPALL) {
      setPassword("");
      setError("");
      setEmail("");
    }

    if (errorType === CLEANUP_PASSWORD) {
      setPassword("");
      setError("");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    await login(email, password)
      .then(() => {
        handleCleanUp(CLEANUPALL);
        router.replace("/home");
        console.log("Successfully Logged In!");
      })
      .catch((error) => {
        alert(error);
        console.log("Login failure");
        handleCleanUp(CLEANUP_PASSWORD);
      });
  }

  return (
    <Fragment>
      <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
        <div>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) => {
              handleInput(event, "EMAIL");
            }}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) => {
              handleInput(event, "PASSWORD");
            }}
          />
        </div>
        <button type="submit">Login</button>
        <span>Forgot Password?</span>
        <h1>
          Don't Have an Account? <Link href="/signup">Sign Up</Link>
        </h1>
      </form>
    </Fragment>
  );
}

export default LoginForm;
