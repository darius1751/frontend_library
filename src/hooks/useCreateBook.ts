import { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { addCategories } from "../helpers/http/addCategories";
import { findAllAuthors } from "../helpers/http/findAllAuthors";
import { findAllCategories } from "../helpers/http/findAllCategories";
import { httpCreateBook } from "../helpers/http/httpCreateBook";
import { Author, Category } from "../models";
import { ReduxSelector } from "../providers/reduxStore";
import { PersonReduxState } from "../providers/slices/personSlice";
import { useForm } from "./useForm";
import { useGuard } from "./useGuard";
const initialCreateBook = {
    code: '',
    title: '',
    publicationDate: '',
    author: '',
    description: '',
}
export const useCreateBook = () => {
    const { token } = useSelector<ReduxSelector, PersonReduxState>(({ personState }) => personState);
    const [authors, setAuthors] = useState<Author[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [frontPage, setFrontPage] = useState<string>("");
    const [createBook, handleChange, setCreateBook] = useForm(initialCreateBook);
    const [categoriesSelected, setCategoriesSelected] = useState<string[]>([]);
    useGuard("Bibliotecario","Administrador");
    const listAuthors = useRef<HTMLDataListElement>(null);
    useEffect(() => {
        (
            async () => {
                try {
                    setAuthors(await findAllAuthors(token));
                    setCategories(await findAllCategories(token))
                } catch (exception) {
                    console.log({exception});
                }
            })();
    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            const { code, publicationDate, title, author, description } = createBook;

            const { files } = (e.target as HTMLFormElement)[0] as HTMLInputElement;
            let authorId = undefined;
            if (files)
                formData.append('frontPage', files[0])
            for (const data of listAuthors.current!.children) {
                if (author === (data as HTMLOptionElement).value) {
                    authorId = data.innerHTML;
                    break;
                }
            }
            if (authorId)
                formData.append('authorId', authorId);
            else
                throw new Error("Por favor seleccionar un author de la lista");
            formData.append('code', code);
            formData.append('publicationDate', publicationDate);
            formData.append('title', title);
            formData.append('description', description);
            const newBook = await httpCreateBook(formData, token);
            const bookAndCategories = await addCategories(newBook.id, categoriesSelected,token);
            console.log({bookAndCategories})
            
        } catch (exception) {
            console.log({ exception });
        }


    }
    const handleLoad = (e: ChangeEvent<HTMLInputElement>) => {
        const typesImages: string[] = ["image/png", "image/gif", "image/jpeg", "image/jpg", "image/svg+xml"];
        const { files } = e.target;
        if (files?.length) {
            const file = files[0];
            if (typesImages.includes(file.type))
                setFrontPage(URL.createObjectURL(file));
            else {
                setFrontPage("");
                e.target.value = "";
            }
        } else
            setFrontPage("");

    }
    const handleReset = (e: MouseEvent<HTMLInputElement>) => {
        setFrontPage("");
        setCreateBook(initialCreateBook);
    }
    return {
        handleSubmit,
        handleLoad,
        handleChange,
        handleReset,
        setCategoriesSelected,
        createBook,
        authors,
        categoriesSelected,        
        categories,
        frontPage,
        listAuthors
    }
}