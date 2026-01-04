"use client";

import { useEffect, useState } from "react";
import LinesBackground from "./LinesBackground";
import ChristmasBg from "./ChristmasBg";
import ChristmasTree from "./ChristmasTree";

export default function SeasonalBackground() {
  const [isDecember, setIsDecember] = useState(false);

  useEffect(() => {
    const now = new Date();
    setIsDecember(now.getMonth() === 11);
  }, []);

  if (isDecember) {
    return (
      <>
        <ChristmasBg />
        <ChristmasTree />
      </>
    );
  }

  return <LinesBackground />;
}
