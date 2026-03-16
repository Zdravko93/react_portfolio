import React, { useState, useEffect, useMemo } from "react";

import StatGrid from "./StatGrid";

import { statsData } from "../../data/project/data";
import { useTheme } from "../../context/ThemeContext";

const StatsGrid = React.memo(function StatsGrid() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50); // delay to trigger CSS transition
    return () => clearTimeout(timer);
  }, []);

  const isLight = theme === "light";

  const renderedStats = useMemo(() => {
    return statsData.map((stat) => (
      <StatGrid
        key={stat.label}
        mounted={mounted}
        stat={stat}
        isLight={isLight}
      />
    ));
  }, [mounted, isLight]);

  return (
    <div className="grid grid-cols-2 gap-4 mt-6 text-gray-800 dark:text-[#00ff88]">
      {renderedStats}
    </div>
  );
});

export default StatsGrid;
