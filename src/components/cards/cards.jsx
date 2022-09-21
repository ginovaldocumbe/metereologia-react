import React from "react";
import styles from "./cards.module.css";

function Cards() {


  return (
    <div className={styles.Cards}>
      <h3 className={styles.prov}>Maputo</h3>
      {/* <img src=""/> */}
      <p>Imagem</p>
      <div className={styles.baixo}>
        <span>Min: 10 °C</span>
        <span>Max: 10 °C</span>
      </div>
    </div>
  );
}

export default Cards;
