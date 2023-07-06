import React from "react";
import { Navigate } from "react-router-dom";
function Protected({ login, children }) {
  if (!login) {
    return <Navigate to="/showcase" replace />;
  }
  return children;
}
export default Protected;
