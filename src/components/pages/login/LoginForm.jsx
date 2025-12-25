import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  // State
  const [inputFirstname, setInputFirstname] = useState("");
  const navigate = useNavigate();
  

  // Set of behaviors
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputFirstname("");
    navigate(`order/${inputFirstname}`);
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
        value={inputFirstname}
        onChange={(e) => setInputFirstname(e.target.value)}
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}

export default LoginForm;
