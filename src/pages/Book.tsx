import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Back } from "../components/Back";
import { findBookByCode } from "../helpers/http/findBookByCode";
import { Book as BookModel} from "../models"
import '../styles/book.css';

export const Book = () => {
    const [ book, setBook ] = useState<BookModel>();
    const { code }  = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            try{
                const bookAPI = await findBookByCode(code!);
                setBook(bookAPI);
            }catch(exception){
                navigate('/books');
            }
            
        })();
    },[]);

    return (
        <div className="page">
            <Back page="/books"/>
            <img src={book?.secureURL} alt={book?.title} className='book-image'/>
            <div className="book-content">
                <h2 className="book-title">{book?.title}</h2>
                <section className="book-description">
                    <strong>Descripcion:</strong>
                    { book?.description }
                </section>
                <section className="book-categories">
                    <strong>Categorias:</strong>
                    {
                        book?.categories?.map?.((category) => <NavLink to='#'>{category.name}</NavLink>)
                    }
                </section>
                <article className="book-recommendations">

                </article>
            </div>
        </div>
    )
}