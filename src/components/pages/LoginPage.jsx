import React, { useState } from "react";

function Form() {
  // State
  const [firstname, setFirstname] = useState("");

  // Set of behaviors
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${firstname}`);
    setFirstname("");
  };

  // Render
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez vous</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom..."
          required
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  );
}

export default Form;
