// Layout for when the user is not logged in
import classes from "./UnauthorizedLayout.module.css";

// Wrapper Component for Unauthorized Screens... i.e (Login, Sign Up, Forgot Password)
function UnauthorizedLayout(props) {
  return (
    <div>
      <header className={classes.header}>
        <span>Next To-Do </span>
      </header>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default UnauthorizedLayout;
