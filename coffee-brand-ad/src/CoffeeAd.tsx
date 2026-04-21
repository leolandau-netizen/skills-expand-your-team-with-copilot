import React from "react";
import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";

export const CoffeeAd = () => {
  return (
    <Composition
      id="CoffeeAd"
      component={MainVideo}
      durationInFrames={30 * 30} // 30 seconds at 30fps
      fps={30}
      width={1920}
      height={1080}
    />
  );
};
