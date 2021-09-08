import React from "react";
import { useLocation } from "react-router-dom";
export default function NotFound() {
  let location = useLocation();
  return <div>404页面 {location.pathname}</div>;
}
