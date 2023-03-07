export const validateEmail = (email: string) => {
    const validEmail = /^[\w+\d+]+\.?[\w+\d+]+@\w+\.(com|es|co)$/;
    if(email.trim().length === 0)
        throw new Error(`Please add email`);
    if(!validEmail.test(email))
        throw new Error('Error format email');
}