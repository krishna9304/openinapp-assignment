import Image from "next/image";
import classes from "./topbar.module.scss";
import bellIcon from "public/bell_icon.svg";

interface TopBarProps {}

export const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className={classes.topbar__container}>
      <div className={classes.topbar__header}>Dashboard</div>
      <div className={classes.topbar__right}>
        <div className={classes.search}>
          <input type="text" placeholder="Search..." />
        </div>
        <div>
          <Image width={23} height={23} src={bellIcon} alt="bell" />
        </div>
        <div className={classes.prof_pic}></div>
      </div>
    </div>
  );
};
