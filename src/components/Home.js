import React from "react";
import Sociallink from "./Sociallink";

const Home = () => {
  return (
    <section className="container">
      <div className="main">
        <div className="detail">
          <h3>Hi I'm</h3>
          <h1>
            <span style={{ color: "#52489C" }}>Rahul</span> "Vaishnav"
          </h1>
          <p>
            "I'm a professional Web Developer. Our Main Goal to help & Satisfy the Local & Global Clients by Web development solutions."
          </p>
          <Sociallink />
        </div>
        <div className="images">
          <img src="img.png" alt="Profile" className="img-w" />
        </div>
      </div>
    </section>
  );
};

export default Home;
