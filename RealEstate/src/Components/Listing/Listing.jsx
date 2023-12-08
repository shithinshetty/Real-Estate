import React from "react";
import BedIcon from "@mui/icons-material/Bed";
import PoolIcon from "@mui/icons-material/Pool";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import image1 from "../../Assets/Listing_img1.jpg";
import image2 from "../../Assets/Listing_img3.jpg";
import image3 from "../../Assets/Listing_img2.jpg";
import image4 from "../../Assets/Listing_img4.jpg";
import image5 from "../../Assets/Listing_img5.jpg";

import "./Listing.css";

const properties = [
  {
    id: 1,
    image: image1,
    name: "PrimePulse Realty,MarthaHalli",
    price: "10,000 ",
    desc: "Infusing prime energy into realty experiences with Pulse Realty.",
    beds: 6,
  },
  {
    id: 2,
    image: image2,
    name: "HarmonyHaven Realty,Shivajinagar",
    price: "7,000 ",
    desc: "Crafting havens of harmony through visionary real estate at HarmonyHaven.",
    beds: 4,
  },
  {
    id: 3,
    image: image3,
    name: "PantheonPeak Living,Indiranagar",
    price: "14,000 ",
    desc: "Live at the PantheonPeak, where every residence is a testament to architectural grandeur.",
    beds: 10,
  },
  {
    id: 4,
    image: image4,
    name: "CelestialCrest Abodes,HSR Layout",
    price: "23,000 ",
    desc: "At CelestialCrest, homes are abodes that touch the celestial heights of elegance.",
    beds: 9,
  },
  {
    id: 5,
    image: image5,
    name: "VortexVista Villas,Nagarbavi Main Road",
    price: "33,000 ",
    desc: "Immerse yourself in the dynamic allure of VortexVista Villas, where homes offer panoramic views and a vortex of modern design.",
    beds: 20,
  },
];
const Listing = () => {
  return (
    <div className="Listing container section">
      <div className="secContainer">
        <div className="secHeader">
          <span className="orangeText">Our Listings</span>
          <h1 className="title">
            Buy And Sell Properties
            <span className="orangeDot">.</span>
          </h1>
          <p>
            <span className="paratitle">
              Unlocking Dreams in Every Doorway:
            </span>
            <br></br>
            Discover a world of possibilities with our real estate offerings.
            From elegant residences to thriving commercial spaces, we are your
            key to unlocking the door to a life enriched by prime locations,
            thoughtful design, and unparalleled investment potential. Let us
            guide you on a journey where each property is a canvas for realizing
            your unique vision of home or business success.
          </p>
          <div className="btns flex">
            <button className="btn active">Exclusive</button>
            <button className="btn ">Standard</button>
          </div>
        </div>

        {properties.map(({ id, image, name, price, desc, beds }) => {
          return (
            <div className="secContent grid">
              <div key={id} className="singleListing">
                <div className="imgDiv">
                  <img src={image} alt="House Image" />
                </div>
                <div className="info">
                  <h2 className="name">{name}</h2>
                  <span className="price">
                    <span className="orangeText"> ₹</span>
                    <span className="digits">{price} </span>
                    <span className="duration">/Day</span>
                  </span>
                  <p>{desc}</p>
                  <div className="ammenities flex">
                    <span className="flex">
                      <BedIcon className="icon" />
                      <blockquote>x{beds}</blockquote>
                    </span>

                    <span className="flex">
                      <PoolIcon className="icon" />
                      <blockquote> Pool</blockquote>
                    </span>

                    <span className="flex">
                      <WifiIcon className="icon" />
                      <blockquote>Upto 100MBps</blockquote>
                    </span>

                    <span className="flex">
                      <LocalDiningIcon className="icon" />
                      <blockquote>
                        North Cuisine/South Cuisine/Continental/Middle East{" "}
                      </blockquote>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listing;
