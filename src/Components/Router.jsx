import React from "react";
import PortfolioEventProposal from "../Components/PortfolioEventProposal";
import { createBrowserRouter } from "react-router-dom";
import.meta.env.BASE_URL;

export const router = createBrowserRouter([
  {
    path: "/Camryn-Portfolio/portfolioEventProposal",
    element: <PortfolioEventProposal />,
  },
]);
