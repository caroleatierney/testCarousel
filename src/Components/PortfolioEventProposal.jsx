import React from "react";
import { Carousel, Flowbite} from "flowbite-react";

import Page1  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-1.jpg"
import Page2  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-2.jpg";
import Page3  from "../Images/Buonacore-Camryn-Bridal-Shower-Brunch-Event-Proposal/Page-3.jpg";

export default function PortfolioEventProposal() {
  return (
    <div className="w-5/6 h-auto sm:h-64 xl:h-80 2xl:h-96 mx-auto">
      <Carousel>
        <div className="flex h-full items-center justify-center">
          <img src={Page1} alt="Page 1" />
        </div>
        <div className="flex h-full items-center justify-center">
          <img src={Page2} alt="Page 2" />
        </div>
        <div className="flex h-full items-center justify-center">
          <img src={Page3} alt="Page 3" />
        </div>
      </Carousel>
    </div>
  );
}