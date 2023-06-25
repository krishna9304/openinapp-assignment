import React from "react";
import Image, { StaticImageData } from "next/image";

import dashboardIcon from "public/dashboard_icon.svg";
import transactionIcon from "public/transaction_icon.svg";
import scheduleIcon from "public/schedule_icon.svg";
import userIcon from "public/user_icon.svg";
import settingsIcon from "public/settings_icon.svg";

import classes from "./authlayout.module.scss";

interface AuthLayoutProps {
  children?: React.ReactNode;
}
interface NavItemProps {
  icon: StaticImageData;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
  return (
    <div className={classes.nav__item}>
      <Image src={icon} alt={`${label}_icon`} />
      {label}
    </div>
  );
};

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className={classes.main}>
      <div className={classes.leftPane}>
        <div className={classes.leftPane__container}>
          <div className={classes.nav_top}>
            <div className={classes.header}>
              <h2>Board.</h2>
            </div>
            <div className={classes.nav__items}>
              <NavItem icon={dashboardIcon} label="Dashboard" />
              <NavItem icon={transactionIcon} label="Transactions" />
              <NavItem icon={scheduleIcon} label="Schedules" />
              <NavItem icon={userIcon} label="Users" />
              <NavItem icon={settingsIcon} label="Settings" />
            </div>
          </div>
          <div className={classes.nav__footer}>
            <div className={classes.nav__footer__item}>Help</div>
            <div className={classes.nav__footer__item}>Contact Us</div>
          </div>
        </div>
      </div>
      <div className={classes.rightPane}>{children}</div>
    </div>
  );
};
