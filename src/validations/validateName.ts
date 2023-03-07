export const validateName = (name: string) => {
    if(name.trim().length === 0)
        throw new Error(`Please add name`);
}