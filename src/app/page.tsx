import { AuthForm } from "@/components/authform";
import classes from "@/styles/home.module.scss";

export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.leftSide}>
        <h1>Board.</h1>
      </div>
      <div className={classes.rightSide}>
        <AuthForm />
      </div>
    </main>
  );
}
