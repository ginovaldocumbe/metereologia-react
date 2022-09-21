import React from "react";
import styles from "./inicio.module.css";
import Pesquisa from "../pesquisa/pesquisa";
import Foot from "../foot/foot";
import Cards from "../cards/cards";
const Inicio = () => (
  <div className="">
    <div className={styles.custom1}>
      <svg
        className={styles.sv}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className={styles.shapefill}
        ></path>
      </svg>
    </div>
    <Pesquisa />
    <Cards />
    <Foot />
  </div>
);

export default Inicio;
