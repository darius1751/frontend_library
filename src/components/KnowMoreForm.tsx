import { useState } from 'react'
import { KnowMore } from '../models/knowMore'
import '../styles/knowMoreForm.css'
const initialKnowMore: KnowMore = {
    name:'',
    email:''
}
export const KnowMoreForm = () => {
    const [knowMore, setKnowMore] = useState<KnowMore>(initialKnowMore);
    return (
        <div>
            <form className='knowMoreForm'>
                <p className="title">
                    Ingrese sus datos para recibir informacion acerca del registro en la biblioteca
                </p>
                <label htmlFor="name">Nombre:</label>
                <input type="text" name='name' placeholder="Ingrese su nombre" className="input-text"/>
                <br />
                <label htmlFor="name">Email:</label>
                <input type="text" name='email' placeholder="Ingrese su email" className="input-text"/>
                <button className='btn'>Quiero saber mas</button>
            </form>
        </div>
    )
}