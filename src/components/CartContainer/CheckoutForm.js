import React, { useState } from "react";
import "./styles.css";

export default function CheckoutForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    remail: "",
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
      surname: "",
      phone: "",
      email: "",
      remail: "",
    });
  }

function submitData(e){
    e.preventDefault()
    props.handleCheckout(userData)
  }

  return (
    <form onSubmit={submitData}>
      <h2>Datos para completar la compra:</h2>

      <div className="linea">
        <label>Nombre</label>
        <input
          value={userData.name}
          name="name"
          type="text"

          onChange={handleChange}
        />
      </div>

      <div className="linea">
        <label>Apellido</label>
        <input
          value={userData.surname}
          name="surname"
          type="text"

          onChange={handleChange}
        />
      </div>
      <div className="linea">
        <label>Teléfono</label>
        <input
          value={userData.phone}
          name="phone"
          type="text"

          onChange={handleChange}
        />
      </div>
      <div className="linea">
        <label>E-mail</label>
        <input
          value={userData.email}
          name="email"
          type="email"
 
          onChange={handleChange}
        />
      </div>

      <div className="linea">
        <label>Repetí tu e-mail.</label>
        <input
          value={userData.remail}
          name="remail"
          type="email"
          
 
          onChange={handleChange}
        />
      </div>

      {userData.email !== userData.remail?
      <div style={{ display: "flex", marginBottom: 8 }}>
       <p className="alerta">El e-mail debe coincidir para poder finalizar.</p>
      </div>: ""}


      <button className="button"
        disabled={
          !(
            userData.name !== "" &&
            userData.surname !== "" &&
            userData.phone !== "" &&
            userData.email !== "" &&
            userData.remail !== "" &&
            userData.email === userData.remail  
          )
        }
        
        

        onClick={() =>props.onSubmit(userData)}
        type="submit"
        >
        Finalizar Compra
      </button>
      <button className="button buttonLimpiar" onClick={clearForm}>Limpiar Formulario</button>
    </form>
  );
}