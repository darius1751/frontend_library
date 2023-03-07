import { KnowMoreForm } from '../components/KnowMoreForm';
import { Section } from '../components/Section';
import image from '../assets/book.jpg';
import velocidad from '../assets/velocidad.png'
import variedad from '../assets/variedad.png'
import comodidad from '../assets/comodidad.png' 
import '../styles/index.css';
import { Footer } from '../components/Footer';

export const Index = () => {
    return (
        <div>
            <header>
                <img src={image} alt="book" />
                <KnowMoreForm/>
                <article className='page'>
                    <Section image={comodidad} title='Accesibilidad' text={`La información de los libros en un mismo lugar y sin salir de casa.`} />
                    <Section image={velocidad} title='Velocidad' text={`Sin una gran cantidad de pasos, con un muy bien ambiente grafico, puedes navegar y encontrar todos los recursos que necesites sin tener que dar muchas vueltas.
                    `} isInverse/>
                    <Section image={variedad} title='Variedad' text={`Tienes una gran cantidad de libros a tu disposicion, para disfrutar.`} />
                </article>
                <Footer/>
            </header>
        </div>
    )
}