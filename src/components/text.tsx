import React from "react";

interface TextProps{
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
}

export default function Text({className, children, ...props}) {
  return React.createElement(
    as,
    { className, 
    ...props
    },
    children
  )
}