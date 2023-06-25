import React from "react";
import classes from "./misccard.module.scss";
import Image from "next/image";
import accordion from "public/accordion.svg";
import pieChart from "public/pie_chart.svg";

interface MiscCardStatsProps {}

const chartData = [
  {
    label: "Basic Tees",
    percentage: "55%",
    color: "#98D89E",
  },
  {
    label: "Custom Short Pants",
    percentage: "55%",
    color: "#F6DC7D",
  },
  {
    label: "Super Hoodies",
    percentage: "55%",
    color: "#EE8484",
  },
];

const upcomingEvents = [
  {
    label: "Meeting with suppliers from Kuta Bali",
    time: "14.00-15.00",
    location: "at Sunset Road, Kuta, Bali",
    borderColor: "#9BDD7C",
  },
  {
    label: "Check operation at Giga Factory 1",
    time: "18.00-20.00",
    location: "at Central Jakarta",
    borderColor: "#6972C3",
  },
];

export const MiscCardStats: React.FC<MiscCardStatsProps> = () => {
  return (
    <div className={classes.main}>
      <MiscCard addinfo="May - June 2021">
        <div>
          <div className={classes.card__body__item}>
            <Image src={pieChart} alt="pie-chart" />
            <div className={classes.chart_stats}>
              {chartData.map((data, idx) => {
                return (
                  <div key={idx}>
                    <h4>
                      <div
                        style={{
                          backgroundColor: data.color,
                        }}
                      ></div>
                      {data.label}
                    </h4>
                    <p>{data.percentage}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </MiscCard>
      <MiscCard addinfo="See All">
        <div className={classes.card__body__item__topproducts}>
          {upcomingEvents.map((data, idx) => {
            return (
              <div
                key={idx}
                style={{
                  borderColor: data.borderColor,
                }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    color: "#000000",
                  }}
                >
                  {data.label}
                </p>
                <p>{data.time}</p>
                <p>{data.location}</p>
              </div>
            );
          })}
        </div>
      </MiscCard>
    </div>
  );
};

interface MiscCardProps {
  children?: React.ReactNode;
  addinfo?: string;
}

const MiscCard: React.FC<MiscCardProps> = ({ children, addinfo }) => {
  return (
    <div className={classes.card__container}>
      <div className={classes.card__header}>
        <h3>Top products</h3>
        <span>
          {addinfo}{" "}
          <Image
            style={{
              transform: addinfo !== "See All" ? "" : "rotate(90deg)",
            }}
            src={accordion}
            alt="accordion"
          />
        </span>
      </div>
      <div className={classes.card__body}>{children}</div>
    </div>
  );
};
