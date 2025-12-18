import React from "react";
import { useParams, Link } from "react-router-dom";

function OrderPage() {
  const { username } = useParams();

  return (
    <div>
      <h3>Bonjour {username}</h3>
      <br />
      <Link to="/"><button>Déconnexion</button></Link>
    </div>
  );
}

export default OrderPage;
