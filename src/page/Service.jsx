import React from "react";
import "./Service.css";

const Service = () => {
  return (
    <div className="content-list">
      <main
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          margin: "100px",

          alignItems: "center",
          gap: "30px",
        }}
        className="grid"
      >
        <article>
          <img src="images1.jpeg" alt="/public" />
          <div className="con">
            <h2>Haircut</h2>
            <p>35.000</p>
          </div>
        </article>

        <article>
          <img src="pike1.jpeg" alt="/public" />
          <div className="con">
            <h2>Haircut & Shampooing</h2>
            <p>40.000</p>
          </div>
        </article>

        <article>
          <img src="pike2.jpeg" alt="/public" />
          <div className="con">
            <h2>Hair Style & Coloring</h2>
            <p>100.000</p>
          </div>
        </article>

        <article>
          <img src="images1.jpeg" alt="/public" />
          <div className="con">
            <h2>Home Service</h2>
            <p>50.000</p>
          </div>
        </article>
      </main>
    </div>
  );
};
export default Service;
