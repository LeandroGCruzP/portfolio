"use client";

import { ReactNode } from "react";
import useScreenSize from "./hooks/useScreenSize";

interface ResponsiveComponentProps {
  children: ({ size }: { size: number | undefined }) => ReactNode;
}

const ResponsiveComponent = ({ children }: ResponsiveComponentProps) => {
  const size = useScreenSize();

  return <>{children({ size })}</>;
};

export default ResponsiveComponent;
