import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // State
  const [firstname, setFirstname] = useState("");
  const navigate = useNavigate();
  

  // Set of behaviors
  const handleSubmit = (e) => {
    e.preventDefault();
    //alert(`Bonjour ${firstname}`);
    navigate(`/order/${firstname}`);
    setFirstname("");
  };

  // Render
  return (
    <form onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom..."
        required
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}

export default LoginForm;
