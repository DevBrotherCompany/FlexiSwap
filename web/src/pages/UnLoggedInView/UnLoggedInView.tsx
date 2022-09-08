import React from "react";
import { useAuth } from "hooks";

export const UnLoggedInView: React.FC = () => {
  const { login } = useAuth();

  const handleClick = async () => {
    await login({ signingMessage: "Hi!" });
  };

  return (
    <>
      <button onClick={handleClick}>Log in with Metamask</button>
    </>
  );
};
