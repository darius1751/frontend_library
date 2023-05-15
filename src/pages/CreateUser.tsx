import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DashboardNav } from "../components/DashboardNav"
import { findAllRoles } from "../helpers/http/findAllRoles";
import { useGuard } from "../hooks/useGuard"
import { Role } from "../models";
import { ReduxSelector } from "../providers/reduxStore";
import { PersonReduxState } from "../providers/slices/personSlice";
export const CreateUser = () => {
    useGuard("Administrador");
    const { token } = useSelector<ReduxSelector, PersonReduxState>(({ personState }) => personState);
    const [roles, setRoles] = useState<Role[]>();
    useEffect(() => {
        (async () => {
            setRoles(await findAllRoles(token))
        })();
    }, []);
    return (
        <div>
            <DashboardNav />
            <div className="page dashboard">
                <form>
                    <fieldset>
                        <legend>Datos personales:</legend>
                        <section className="field">
                            <label htmlFor="name">Nombre:</label>
                            <br />
                            <input type="text" className='input' name='name' id='name' placeholder="Ingrese su nombre" />
                        </section>
                        <section className="field">
                            <label htmlFor="phone">Telefono:</label>
                            <br />
                            <input type="tel" name='phone' id='phone' className='input' placeholder="Ingrese su telefono" />
                        </section>
                        <section className="field">
                            <label htmlFor="documentIdentifier">Identificacion:</label>
                            <br />
                            <input type="text" name='documentIdentifier' id='documentIdentifier' className='input' placeholder="Ingrese su identificacion:" />
                        </section>
                        <section className="field">
                            <label htmlFor="birthday">Fecha de nacimiento:</label>
                            <br />
                            <input type="date" name='birthday' id='birthday' className='input' />
                        </section>
                        <section className="field">
                            <label htmlFor="email">Correo electronico:</label>
                            <br />
                            <input type="email" name='email' id="email" className='input' />
                        </section>
                        <section className="field">
                            <label htmlFor="address">Direccion de residencia:</label>
                            <br />
                            <input type="text" name='address' id="address" className='input' />
                        </section>
                        <section className="field">
                            <label htmlFor="roleId">Rol:</label>
                            <br />
                            <select name="roleId" id="roleId" className='input'>
                                {
                                    roles?.map(({ id, name }) => <option value={id} key={id}>{name}</option>)
                                }
                            </select>
                        </section>
                        <fieldset>
                            <legend>Credentiales:</legend>
                            <section className="field">
                                <label htmlFor="address">Usuario:</label>
                                <br />
                                <input type="text" name='address' id="address" className='input' />
                            </section>
                            <section className="field">
                                <label htmlFor="password">Contrase&ntilde;a</label>
                                <br />
                                <input type="password" name='password' id="password" className='input' />
                            </section>
                            <section className="field">
                                <label htmlFor="confirmPassword">Confirmar contrase&ntilde;a</label>
                                <br />
                                <input type="password" name='confirmPassword' id="confirmPassword" className='input' />
                            </section>
                        </fieldset>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}