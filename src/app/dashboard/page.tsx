import { AuthLayout } from "@/components/authlayout";
import { NextPage } from "next";
import classes from "./dashboard.module.scss";
import { TopBar } from "@/components/topbar";
import { Stats } from "@/components/stats";

interface DashboardProps {}

const Dashboard: NextPage<DashboardProps> = () => {
  return (
    <AuthLayout>
      <div className={classes.container}>
        <TopBar />
        <Stats />
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
