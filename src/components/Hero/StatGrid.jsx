import Card from "../UI/Card";
import Image from "../UI/Image";

import darkClasses from "./StatsGrid.module.css";
import lightClasses from "./StatsGrid.light.module.css";

export default function StatGrid({ mounted, stat, isLight }) {
  return (
    <Card
      as="div"
      key={stat.label}
      className={`min-w-fit
        border-2 p-[0.75rem] text-[0.5rem] sm:text-[0.7rem]
        ${stat.fullWidth ? "col-span-2" : ""}
        ${
          !("percent" in stat)
            ? "flex items-center justify-center text-center"
            : ""
        }
        ${isLight ? lightClasses.statBoxLight : darkClasses["stat-box"]}
      `}
    >
      {stat.label}:{" "}
      {stat.image && (
        <div className="flex justify-center items-center gap-1 ml-2">
          <Image
            src={stat.image}
            alt={stat.alt || `${stat.label} icon`}
            imageClassName="w-8"
          />
          <p>{stat.description}</p>
        </div>
      )}
      {"percent" in stat && (
        <>
          <span className="float-right">{stat.percent}%</span>
          <div
            className={`${
              isLight
                ? lightClasses.progressBarLight
                : darkClasses["progress-bar"]
            }`}
          >
            <div
              className={`${
                isLight
                  ? lightClasses.progressFillLight
                  : darkClasses["progress-fill"]
              }`}
              style={{ width: mounted ? `${stat.percent}%` : "0%" }}
            ></div>
          </div>
        </>
      )}
    </Card>
  );
}
