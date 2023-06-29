import React from 'react';

const GalletaFortuna = ({ fortune }) => {

  return (

    <div className="fortune-container">

      <p className="fortune">{fortune.phrase}</p>

      <p className="author">- {fortune.author}</p>

    </div>
    
  );
};

export default GalletaFortuna;
