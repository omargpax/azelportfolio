"use client";

import { useEffect, useState } from "react";
import LinesBackground from "./LinesBackground";
import ChristmasBg from "./ChristmasBg";
import ChristmasTree from "./ChristmasTree";

export default function SeasonalBackground() {
  const [isDecember, setIsDecember] = useState(false);
  const [lowPerformance, setLowPerformance] = useState(false);

  useEffect(() => {
    const now = new Date();
    setIsDecember(now.getMonth() === 11);

    // Detectar bajo rendimiento basado en RAM disponible
    const ramGB = navigator.deviceMemory || 4; // Asumir 4GB si no disponible
    const cpuCores = navigator.hardwareConcurrency || 4; // Asumir 4 núcleos si no disponible
    if (ramGB <= 2 || cpuCores <= 2) {
      setLowPerformance(true);
    }
  }, []);

  if (lowPerformance) {
    return <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#030712', zIndex: -1 }} />;
  }

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
