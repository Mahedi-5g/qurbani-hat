"use client";

import Lottie from "lottie-react";
import loadingAnimation from "../assests/lottie/sandyLoading.json";

const LoadingAnimation = () => {
  return (
    <div className="w-fit h-fit">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
};

export default LoadingAnimation;