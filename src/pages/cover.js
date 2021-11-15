import React from "react";
import { Link } from 'react-router-dom';

export default function Cover() {
  return (
    <div>
      <h1>Portada</h1>
      <Link to={'/tool'}> Herramienta </Link>
      
    </div>
  );
}
