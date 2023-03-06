import '../styles/index.css';
import image from '../assets/book.jpg';
import { KnowMoreForm } from '../components/KnowMoreForm';
export const Index = () => {
    return (
        <div>
            <header>
                <img src={image} alt="book" />
                <KnowMoreForm/>
            </header>
        </div>
    )
}