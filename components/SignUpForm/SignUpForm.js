// Sign Up form for users

import { handleClientScriptLoad } from "next/script";
import { Fragment, useState } from "react";
import classes from "../../styles/Form.module.css";
import Link from "next/link";
import { useAuth } from "../AuthContext/AuthContext";
import { useRouter } from "next/router";
import { db } from "../../firebase/clientApp";
import { doc, setDoc } from "firebase/firestore";

function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { user, signup } = useAuth();
  const router = useRouter();

  function handleInput(event, type) {
    switch (type) {
      case "FULLNAME":
        setFullName(event.target.value);
        return;
      case "EMAIL":
        setEmail(event.target.value);
        return;
      case "PASSWORD":
        setPassword(event.target.value);
        return;
      case "CONFIRMPASSWORD":
        setConfirmPassword(event.target.value);
        return;
      default:
        return;
    }
  }

  function handleCleanUp() {
    setPassword("");
    setError("");
    setFullName("");
    setConfirmPassword("");
    setEmail("");
  }

  async function saveUserData(user) {
    const userData = { fullName: fullName, email: email, tasks: [], uid: user };

    await setDoc(doc(db, "users", `${user}`), userData)
      .then(() => {
        console.log("User Data Successfully Uploaded");
      })
      .catch((error) => alert(error));
  }

  async function handleSubmit() {
    event.preventDefault();

    await signup(email, password)
      .then((user) => {
        handleCleanUp();
        saveUserData(user.user.uid);
        router.replace("/");
        alert("Thank You for Signing Up!");
        console.log("Successfully Signed Up!");
      })
      .catch((error) => {
        alert(error);
        console.log("failed to Sign Up");
      });
  }

  return (
    <Fragment>
      <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={fullName}
          onChange={(event) => {
            handleInput(event, "FULLNAME");
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            handleInput(event, "EMAIL");
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(event) => {
            handleInput(event, "PASSWORD");
          }}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => {
            handleInput(event, "CONFIRMPASSWORD");
          }}
        />
        <button>Sign Up For Next To-Do</button>
        <h1>
          Alrready Have an Account? <Link href="/">Login</Link>
        </h1>
      </form>
    </Fragment>
  );
}

export default SignUpForm;
