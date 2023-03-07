import { FormEvent, useState } from "react";
import { useForm } from "../hooks/useForm";
import { KnowMore } from "../models/knowMore";
import "../styles/knowMoreForm.css";
import { validateEmail } from "../validations/validateEmail";
import { validateName } from "../validations/validateName";
const initialKnowMore: KnowMore = {
  name: "",
  email: "",
};
export const KnowMoreForm = () => {
  const [knowMore, handleChage] = useForm(initialKnowMore);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email, name } = knowMore;
    try{
        validateName(name);
        validateEmail(email);
    }catch(exception:any){
        console.log({exception});
        alert(exception.message);
    }
    
  }
  return (
    <div>
      <form className="knowMoreForm" onSubmit={handleSubmit}>
        <p className="title">
          Ingrese sus datos para recibir informacion acerca del registro en la
          biblioteca
        </p>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Ingrese su nombre"
          className="input-text"
          onChange={handleChage}
          value={knowMore.name}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Ingrese su email"
          className="input-text"
          onChange={handleChage}
          value={knowMore.email}
        />
        <button className="btn" type='submit'>Quiero saber mas</button>
      </form>
    </div>
  );
};
