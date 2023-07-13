import React from "react";
import Skeleton from "react-loading-skeleton";
const CardSkeleton = () => {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex gap-10">
        <Skeleton height="320px" width="270px" borderRadius={10} />
        <Skeleton height="320px" width="270px" borderRadius={10} />
        <Skeleton height="320px" width="270px" borderRadius={10} />
        <Skeleton height="320px" width="270px" borderRadius={10} />
      </div>
      <div className="mt-10 flex gap-10">
        <Skeleton height="320px" width="270px" borderRadius={10} />
        <Skeleton height="320px" width="270px" borderRadius={10} />
        <Skeleton height="320px" width="270px" borderRadius={10} />
        <Skeleton height="320px" width="270px" borderRadius={10} />
      </div>
    </div>
  );
};

export default CardSkeleton;
