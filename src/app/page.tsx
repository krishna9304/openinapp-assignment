"use client";
import { AuthForm } from "@/components/authform";
import classes from "@/styles/home.module.scss";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import accordionIcon from "public/accordion.svg";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession({
    required: false,
    onUnauthenticated() {
      redirect("/signin/callbackUrl=/dashboard");
    },
  });

  useEffect(() => {
    if (session) {
      redirect("/dashboard");
    }
  }, [session]);
  return (
    <main className={classes.main}>
      <div className={classes.leftSide}>
        <h1>Board.</h1>
        <p>
          Scroll down <br />
          <Image
            style={{
              transform: "rotate(90deg)",
            }}
            src={accordionIcon}
            alt="accordion"
          />
        </p>
      </div>
      <div className={classes.rightSide}>
        <AuthForm />
      </div>
    </main>
  );
}
