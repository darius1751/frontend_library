import { MouseEvent } from "react";
import { DashboardNav } from "../components/DashboardNav";
import { useCreateBook } from "../hooks/useCreateBook";
import '../styles/createBook.css';

export const CreateBook = () => {
    const { handleSubmit, handleLoad, handleChange, handleReset, setCategoriesSelected, createBook, categories, categoriesSelected, authors, frontPage, listAuthors } = useCreateBook();
        
    const handleClickCategory = (e: MouseEvent<HTMLElement>) => {
        const $input = e.currentTarget.childNodes[0] as HTMLInputElement;
        const checked = !$input.checked;
        $input.checked = checked;
        if(checked)
            setCategoriesSelected([...categoriesSelected, $input.value]);
        else{
            const newCategoriesSelected = categoriesSelected.filter((categorySelected) => categorySelected != $input.value);
            setCategoriesSelected([...newCategoriesSelected]);
        }
    }
    return (
        <div>
            <DashboardNav />
            <div className="page dashboard">
                <form onSubmit={handleSubmit} encType={'multipart/form-data'} className='create-book content'>
                    <label htmlFor="frontPage">Portada:</label>
                    <br />
                    <input type="file" name="frontPage" id="frontPage" onChange={handleLoad} required className='create-book_input' />
                    <br />
                    {
                        frontPage && <><img src={frontPage} className='create-book-image' /> <br /></>
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
                    <input type="text" id='author' name='author' list="authors"  onChange={handleChange} className='create-book_input' required />
                    <datalist id="authors" ref={listAuthors}>
                        {
                            authors.map((author) => (<option key={author.id} value={author.name}>{author.id}</option>))
                        }
                    </datalist>
                    <br />
                    <label htmlFor="">Categorias:</label>
                    <br />
                    <section id="" className='create-book_multiple'>
                        {
                            categories.map(({ name, id }) => 
                                <section key={id} className='option' onClick={handleClickCategory}><input type="checkbox" name="categoriesSelected"  value={id}/>{name}</section>
                            )
                        }
                    </section>
                    <br/>
                    <label htmlFor="description">Descripcion:</label>
                    <textarea name="description" id="description" cols={30} rows={10} onChange={handleChange} className='create-book_text-area' maxLength={250}></textarea>
                    <br />
                    <br />
                    <input type="submit" value={"Crear libro"} className='btn'/>
                    <input type="reset" value={"Limpiar"} className='btn' onClick={handleReset} />
                </form>
            </div>
        </div>
    )
}