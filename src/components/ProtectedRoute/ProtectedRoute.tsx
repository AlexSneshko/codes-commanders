import React from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "../../hooks/redux";
import { PATH } from "../../constants/path";

interface ProtectedRouteProps {
  redirectPath?: string;
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectPath = PATH.HOME,
  children,
}) => {
  const user = useAppSelector((state) => state.user.user);

  if (user) {
    return <Navigate to={redirectPath} />;
  }

  return <>{children}</>;
};
