import React from "react";
import Image, { StaticImageData } from "next/image";

import totalRevenueIcon from "public/total_revenue_icon.svg";
import totalTransactionsIcon from "public/total_transactions_icon.svg";
import totalLikesIcon from "public/total_likes.svg";
import totalUsersIcon from "public/total_users.svg";

import classes from "./stats.module.scss";

interface StatsProps {}

export const Stats: React.FC<StatsProps> = () => {
  return (
    <div className={classes.stats__container}>
      <div className={classes.stats__card__container}>
        <StatsCard
          backgroundColor="#DDEFE0"
          icon={totalRevenueIcon}
          alt="total_revenue"
          label="Total Revenues"
          value="$2,129,430"
        />
        <StatsCard
          backgroundColor="#F4ECDD"
          icon={totalTransactionsIcon}
          alt="total_transactions"
          label="Total Transactions"
          value="1,520"
        />
        <StatsCard
          backgroundColor="#EFDADA"
          icon={totalLikesIcon}
          alt="total_likes"
          label="Total Likes"
          value="9,721"
        />
        <StatsCard
          backgroundColor="#DEE0EF"
          icon={totalUsersIcon}
          alt="total_users"
          label="Total Users"
          value="892"
        />
      </div>
    </div>
  );
};

interface StatsCardProps {
  backgroundColor: string;
  icon: StaticImageData;
  alt: string;
  label: string;
  value: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  backgroundColor,
  icon,
  alt,
  label,
  value,
}) => {
  return (
    <div style={{ backgroundColor }} className={classes.stats__card}>
      <div className={classes.img_container}>
        <Image src={icon} alt={alt} />
      </div>
      <p>{label}</p>
      <h2>{value}</h2>
    </div>
  );
};
