import React from "react";

import classes from "./Clients.module.scss";

const IMGS = [
  "/clients_1.svg",
  "/clients_2.svg",
  "/clients_3.svg",
  "/clients_4.svg",
  "/clients_5.svg",
  "/clients_6.svg",
];

const Clients = () => {
  return (
    <section className={classes.clients}>
      <p>Join 25,000+ companies who’ve reached</p>

      <div className={classes.row}>
        {IMGS.map((logo) => (
          <img key={logo} src={logo} alt={logo} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
