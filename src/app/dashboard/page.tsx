"use client";
import { AuthLayout } from "@/components/authlayout";
import { NextPage } from "next";
import classes from "./dashboard.module.scss";
import { TopBar } from "@/components/topbar";
import { Stats } from "@/components/stats";
import { GraphStats } from "@/components/graphstats";
import { MiscCardStats } from "@/components/misccard";

interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = () => {
  return (
    <AuthLayout>
      <div className={classes.container}>
        <TopBar />
        <Stats />
        <GraphStats />
        <MiscCardStats />
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
