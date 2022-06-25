import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

import Navigation from "./components/Navigation";
import Main from "./components/Main";

export default function App() {
  const location = useLocation();
  const [apiType, setApiType] = useState("dog");

  return (
    <>
      <Navigation />

      {location.pathname === "/" ? (
        <Main apiType={apiType} setApiType={setApiType} />
      ) : (
        <Outlet context={[apiType, setApiType]} />
      )}
    </>
  );
}
