import React from 'react';
import PropTypes from 'prop-types';
import styles from './pesquisa.module.css';

const Pesquisa = () => (
  <div className={styles.Pesquisa}>
    <input placeholder='Pesquisar cidade especifica' />
    <button>Pesquisar</button>
  </div>
);



export default Pesquisa;
