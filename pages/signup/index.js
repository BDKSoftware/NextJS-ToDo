// Sign Up Page

import SignUpForm from "../../components/SignUpForm/SignUpForm";
import UnauthorizedLayout from "../../components/UnauthorizedLayout/UnauthorizedLayout";
import Head from "next/head";

export default function SignUp() {
  return (
    <div>
      <Head>
        <title>NextJS Todo Sign Up</title>
        <meta name="description" content="ToDo Practice Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UnauthorizedLayout>
        <SignUpForm />
      </UnauthorizedLayout>
    </div>
  );
}
