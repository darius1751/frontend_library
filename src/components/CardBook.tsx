import { NavLink } from "react-router-dom";
import { Book } from "../models"
export type PropsCardBook = {
    book: Book;
}
export const CardBook = ({ book }:PropsCardBook) => {
    const { code, title, secureURL, description, author, categories } = book;
    return (
        <section className="card-book">
            <img src={ secureURL } alt={title} className='card-book-image'/>
            <section className="card-book-content">
                <NavLink className="card-book-title" to={`/book/${code}`}>{title}</NavLink>
                <p className="card-book-author"><strong>Author:</strong> {author.name}</p>
                { 
                    description && 
                    <p className="card-book-description"><strong>Descripcion: </strong>{description}</p> 
                }
                {/* { 
                    categories.length == 0 || 
                    <p className="card-book-categories"> <strong>Categories: </strong>
                        {categories.map((category) => (<NavLink to={'#'} key={category.id+`${book.id}`}>{category.name}</NavLink>)) }
                    </p>
                    
                } */}
            </section>
        </section>
    ) 
}