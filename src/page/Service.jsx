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
          paddingBottom: "auto",
          alignItems: "center",
          gap: "30px",
        }}
        className="grid"
      >
        <article>
          <img src="images1.jpeg" alt="/public" />
          <div className="con">
            <h2>Haircut</h2>
          </div>
        </article>

        <article>
          <img src="images1.jpeg" alt="/public" />
          <div className="con">
            <h2>Haircut & Shampooing(Keramas)</h2>
          </div>
        </article>

        <article>
          <img src="images1.jpeg" alt="/public" />
          <div className="con">
            <h2>Hair Style & Coloring</h2>
          </div>
        </article>

        <article>
          <img src="images1.jpeg" alt="/public" />
          <div className="con">
            <h2>Home Service</h2>
          </div>
        </article>
      </main>
    </div>
  );
};
export default Service;
