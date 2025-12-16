import React, { useState } from "react";

function Form() {
  const [firstname, setFirstname] = useState("");

  const handleClick = () => {
    if (firstname === "") {
      alert(`Veuillez remplir ce champ`);
    }
    alert(`Bonjour ${firstname}`);
    setFirstname("");
  };
  return (
    <div>
      <h2>Bienvenue chez nous !</h2>
      <form>
        <h4>Connectez vous</h4>
        <input
          type="text"
          placeholder="Entrez votre prénom"
          required
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <button onClick={handleClick}>Accédez à votre espace</button>
      </form>
    </div>
  );
}

export default Form;
