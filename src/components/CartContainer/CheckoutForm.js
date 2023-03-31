import React, { useState } from "react";

export default function CheckoutForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  

  function handleChange(evt) {
    const value = evt.target.value;
    const input = evt.target.name;

    const newUserData = { ...userData };
    newUserData[input] = value;
    setUserData(newUserData);
  }

  function clearForm() {
    setUserData({
      name: "",
      email: "",
      phone: "",
    });
  }

  function submitData(){
    props.onSubmit(userData)
  }

  return (
    <form>
      <h2>Tus datos para completar la compra:</h2>
      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Nombre</label>
        <input
          value={userData.name}
          name="name"
          type="text"

          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Email</label>
        <input
          value={userData.email}
          name="email"
          type="email"
 
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Teléfono</label>
        <input
          value={userData.phone}
          name="phone"
          type="text"

          onChange={handleChange}
        />
      </div>
      <button
        disabled={
          !(
            userData.name !== "" &&
            userData.phone !== "" &&
            userData.email !== ""
          )
        }
        onClick={() =>props.onSubmit(userData)}
      >
        Finalizar Compra
      </button>
      <button onClick={clearForm}>Limpiar Formulario</button>
    </form>
  );
}