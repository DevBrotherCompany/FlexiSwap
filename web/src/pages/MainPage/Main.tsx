import React from "react";
import { useAuth } from "hooks";

const Main: React.FC = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Main;
