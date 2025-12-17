import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function OrderPage() {
  const { firstname } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h3>Bonjour {firstname}</h3>
      <br />
      <button onClick={() => navigate("/")}>Déconnexion</button>
    </div>
  );
}

export default OrderPage;
