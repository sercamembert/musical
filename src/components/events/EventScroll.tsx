"use client";
import React, { useEffect, useRef } from "react";

const EventScroll = ({ children }: any) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft =
        (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="padding flex flex-col overflow-x-auto  md:overflow-x-hidden "
    >
      {children}
    </div>
  );
};

export default EventScroll;
