import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export const Portal = ({ children }: { children: React.ReactNode }) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};
