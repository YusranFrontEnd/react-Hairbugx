import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div className="content">
      <img src="images.jpeg" alt="" loading="lazy" />

      <div className="text">
        <h2>HairBugx</h2>
        <p>
          Ini adalah barbershop, bukan salon rambut. Kamu datang ke sini tidak
          mencoba untuk mengesankan siapa pun. Ini adalah tempat hanya untuk
          berbicara, bergaul dengan teman-teman, berbicara tentang olahraga,
          wanita, hubungan." - Joe Davis
        </p>

        <div className="social">
          <ul>
            <li>
              <a href="##" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={38} color="#4267B2" />
              </a>
              <a
                href="https://www.instagram.com/HairBugx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={38} color="#FFC0CB" />
              </a>
              <a href="##" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={38} color="#98FB98" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <footer>
        <p>Jl.Balombong, Pangkep</p>
        <p> Jl.Maccini Raya, Makassar</p>
        <p>© 2023 HairBugx. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
