import React from "react";
import { HeroList } from "../components/HeroList";

export const DcPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <br />
     <HeroList publisher="DC Comics" />
    </>
  );
};
