import React from "react";

function Container({
  children,
  className,
  isGallery,
}: {
  children: React.ReactNode;
  className?: string;
  isGallery?: boolean;
}) {
  return (
    <div
      className={`w-full px-4 sm:w-[92%] sm:px-0 mx-auto
                max-w-[1300px]
                2xl:max-w-[1500px]
                3xl:max-w-[1700px]
                4xl:max-w-[1900px]
                ${className || ""} ${isGallery ? "overflow-hidden" : ""}`}
    >
      {children}
    </div>
  );
}

export default Container;
