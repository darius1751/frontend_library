import { ChangeEvent, FormEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findAllAuthors } from "../helpers/http/findAllAuthors";
import { httpCreateBook } from "../helpers/http/httpCreateBook";
import { Author } from "../models";
import { ReduxSelector } from "../providers/reduxStore";
import { PersonReduxState } from "../providers/slices/personSlice";
import { useForm } from "./useForm";
const initialCreateBook = {
    code: '',
    title: '',
    publicationDate: '',
    author: ''
}
export const useCreateBook = () => {
    const { token } = useSelector<ReduxSelector, PersonReduxState>(({ personState }) => personState);
    const [authors, setAuthors] = useState<Author[]>([]);
    const [author, setAuthor] = useState<string>("");
    const [frontPage, setFrontPage] = useState<string>("");
    const [createBook, handleChange, setCreateBook] = useForm(initialCreateBook);
    const navigate = useNavigate();
    const listAuthors = useRef<HTMLDataListElement>(null);
    useEffect(() => {

        (
            async () => {
                try {
                    setAuthors(await findAllAuthors(token));
                } catch (exception) {
                    navigate('/login');
                    return;
                }
            })();


    }, []);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            const { code, publicationDate, title, author } = createBook;
            const { files } = (e.target as HTMLFormElement)[0] as HTMLInputElement;
            let authorId = undefined;
            if (files)
                formData.append('frontPage', files[0])
            for(const data of listAuthors.current!.children){
                if(author === (data as HTMLOptionElement).value){
                    authorId = data.innerHTML;
                    break;
                }                    
            }
            if(authorId)
                formData.append('authorId', authorId);
            else
                throw new Error("Por favor seleccionar un author de la lista");
            formData.append('code', code);
            formData.append('publicationDate', publicationDate);
            formData.append('title', title);
            console.log(await httpCreateBook(formData, token));
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
        createBook, 
        authors, 
        frontPage,
        listAuthors
    }
}