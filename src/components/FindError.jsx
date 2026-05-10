"use client";

import Lottie from "lottie-react";
import notFoundAnimation from "../assests/lottie/404 error page with cat.json";

const FindError = () => {
  return (
    <div className="w-fit h-fit">
      <Lottie animationData={notFoundAnimation} loop={true} />
    </div>
  );
};

export default FindError;