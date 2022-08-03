import Head from "next/head";
import { useEffect, useState } from "react";

// Component Imports

// Wrapper Import
import UnauthorizedLayout from "../components/UnauthorizedLayout/UnauthorizedLayout";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div>
      <Head>
        <title>NextJS Todo Login</title>
        <meta name="description" content="ToDo Practice Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UnauthorizedLayout>
        <LoginForm />
      </UnauthorizedLayout>
    </div>
  );
}
