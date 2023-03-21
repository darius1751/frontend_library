import { FormEvent } from "react";
import imageLogin from "../assets/login.jpeg";
import { useForm } from "../hooks/useForm";
import { Login as LoginModel } from "../models/login";
import "../styles/login.css";
const initialLogin: LoginModel = {
    user: '',
    password: ''
}
export const Login = () => {
    const [login, handleChange] = useForm(initialLogin);
    const { user, password } = login;
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    }
    return (
        <div className="page-login">
            <article className="page">
                <section className="login">
                    <img src={imageLogin} alt="Fondo Login" className="image-login" />
                    <form className="login-form" onSubmit={handleSubmit}>
                        <p>Bienvenido a tu biblioteca virtual de confianza
                        
                        </p>
                        <section className="field-login">
                            <label htmlFor="user">Usuario:</label>
                            <br />
                            <input
                                type="text"
                                name="user"
                                id="user"
                                value={user}
                                placeholder="Ingrese su usuario"
                                className="input-text"
                                onChange={handleChange}
                            />
                        </section>
                        <br />
                        <section className="field-login">
                            <label htmlFor="password">Contrase&ntilde;a:</label>
                            <br />
                            <input
                                type="password"
                                value={password}
                                name="password"
                                id="password"
                                placeholder="Ingrese su contraseña"
                                className="input-text"
                                onChange={handleChange}
                            />
                        </section>
                        <input className="btn-submit" type='submit' value={'Iniciar Sesion'} />
                    </form>
                </section>
            </article>
        </div>
    );
};
