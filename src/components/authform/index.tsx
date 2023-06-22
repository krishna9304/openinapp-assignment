"use client";
import Image from "next/image";
import classes from "./authform.module.scss";
import googleIcon from "public/googleicon.svg";
import appleIcon from "public/appleicon.svg";
import Link from "next/link";

interface AuthFormProps {}

export const AuthForm: React.FC<AuthFormProps> = () => {
  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={classes.container}>
      <h1>Sign In</h1>
      <p>Sign in to your account</p>
      <div className={classes.authBtnGroup}>
        <button>
          <Image src={googleIcon} alt="google" /> Sign in with Google
        </button>
        <button>
          <Image src={appleIcon} alt="apple" />
          Sign in with Apple
        </button>
      </div>

      <div className={classes.authCard}>
        <form onSubmit={handleAuth}>
          <div className={classes.formGroup}>
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          <Link href={"/"}>
            <p>Forgot password?</p>
          </Link>

          <button>Sign In</button>
        </form>
      </div>

      <p className={classes.switchAuthPrompt}>
        Don’t have an account? <span>Register here</span>
      </p>
    </div>
  );
};
