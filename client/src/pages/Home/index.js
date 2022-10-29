import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import "./home.css";
import DemoSheet from "../../assets/dndsheet.webp";

const Home = () => {
  return (
    <div id="home">
      <div className="parchment horizontal">
        <div className="parchment-body-horizontal">
          <h1>Just Roll with it</h1>
          <p>
             Create your own 5th edition Dungeons and Dragons character! Create an account to be able
			to save your character and easily make updates and changes
            to your stats and items. 
          </p>
          <div>
            <Link to="/character">YES CREATE CHARACTER</Link>
          </div>
        </div>
      </div>

      <img src={DemoSheet} alt="dnd character sheet" />
    </div>
  );
};

export default Home;
