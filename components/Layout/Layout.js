import Link from "next/link";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.div}>
      <header className={classes.header}>
        <span>Next To-Do </span>
        <nav>
          <Link href="/account">Account</Link>
        </nav>
      </header>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
