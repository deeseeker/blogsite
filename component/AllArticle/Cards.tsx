"use client";

import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: Props) => {
  return (
    <article
      className={`bg-white rounded-xl shadow-md p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </article>
  );
};

export default Card;
