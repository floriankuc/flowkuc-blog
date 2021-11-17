import React, { ReactElement } from "react";
import Typography from "./Typography";
import Baseline from "./Baseline";

const GlobalStyles = (): ReactElement => {
  return (
    <>
      <Baseline />
      <Typography />
    </>
  );
};

export default GlobalStyles;
