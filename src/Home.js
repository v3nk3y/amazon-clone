import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            title="Echo Dot (3rd gen) - Smart speaker with Alexa - Charcoal"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/419SVFEiGcL._AC_.jpg"
            rating={4}
          />
          <Product
            title="Apple Watch Series 5 (GPS, 40mm) - Space Gray Aluminum Case with Black Sport Band"
            price={570.56}
            image="https://images-na.ssl-images-amazon.com/images/I/71DnIj%2B%2BjUL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Xbox One S 1TB Battlefield V Bundle - Xbox One S Edition"
            price={499.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71yIFvrfDIL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            title="Cyberpunk 2077 Xbox One - Standard Edition"
            price={79.96}
            image="https://images-na.ssl-images-amazon.com/images/I/811ICFO3qnL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            title="Red Dead Redemption 2 - Standard Edition - PlayStation 4"
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81z80lFufgL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Samsung Home Entertainment LC49G95TSSNXZA 240Hz G-Sync WQHD Curved Super Wide 32:9 Gaming Monitor - 49, Dark Blue Grey"
            price={(1, 999.99)}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
