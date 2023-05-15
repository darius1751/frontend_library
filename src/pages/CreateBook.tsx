import { DashboardNav } from "../components/DashboardNav";
import { useCreateBook } from "../hooks/useCreateBook";
import '../styles/createBook.css';

export const CreateBook = () => {
    const {handleSubmit, handleLoad, handleChange,handleReset, createBook, authors, frontPage, listAuthors } = useCreateBook();
    return (
        <div>
            <DashboardNav/>
            <div className="page dashboard">
            <form onSubmit={handleSubmit} encType={'multipart/form-data'} className='create-book content'>
                <label htmlFor="frontPage">Portada:</label>
                <br />
                <input type="file" name="frontPage" id="frontPage" onChange={handleLoad} required className='create-book_input'/>
                <br />
                {
                    frontPage && <><img src={frontPage} className='create-book-image'/> <br/></>
                }
                <br />
                <label htmlFor="code">Codigo:</label>
                <br />
                <input type="text" name='code' id='code' onChange={handleChange} value={createBook.code} className='create-book_input' required />
                <br />
                <label htmlFor="title">Titulo:</label>
                <br />
                <input type="text" name='title' id='title' onChange={handleChange} value={createBook.title} className='create-book_input' required />
                <br />
                <label htmlFor="publicationDate">Fecha de publicacion:</label>
                <br />
                <input type="date" name='publicationDate' id='publicationDate' onChange={handleChange} value={createBook.publicationDate} className='create-book_input' />
                <br />
                <label htmlFor="author">Autor:</label>
                <br />
                <input type="text" id='author' name='author' list="authors" onChange={handleChange} className='create-book_input'required />
                <datalist id="authors" ref={listAuthors}>
                    {
                        authors.map((author) => (<option key={author.id} value={author.name}>{author.id}</option>))
                    }
                </datalist>
                <br />
                <br />
                <input type="submit" value={"Crear libro"} className='btn'/>
                <input type="reset" value={"Limpiar"} className='btn' onClick={handleReset}/>
            </form>
        </div>
    </div>
    )
}