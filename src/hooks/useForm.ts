import { ChangeEvent, FormEvent, useState } from "react"


export const useForm = <T>(initialState: T):[T, (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,  React.Dispatch<React.SetStateAction<T>>] => {
    const [state, setState] = useState<T>(initialState);
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    return [
        state,
        handleChange,
        setState
    ];
}