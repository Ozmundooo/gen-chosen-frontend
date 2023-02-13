import React from "react";
import { urlFor } from "../../lib/sanity/client";
export default function Partners({ partners }) {
  return (
    <div>
      <h3 className="text-3xl mb-10 text-center font-bold lg:text-4xl font-['Raleway'] py-2 mt-20 ">
        Our Partners
      </h3>
      <div class="slider  ">
        <div class="slide-track">
          {partners.map((partner) => (
            <div class="slide mx-8 my-auto">
              <img src={urlFor(partner.mainImage)} height="70" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
