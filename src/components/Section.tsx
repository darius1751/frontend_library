import '../styles/section.css';
export type SectionProps = {
    image: string;
    title: string;
    text: string;
    isInverse?: boolean;
};
export const Section = ({ image, title, text, isInverse = false}:SectionProps) => {
    if(isInverse){

    }

    return (
        <div className={`section`}>
            <img src={image} className={`section-image${isInverse?'-inverse':''}`}/>
            <section className='section-text'>
                <p>
                    <span className='section-text-title'>{title}:</span>
                    <br/>
                    <br />
                    {text}
                </p>
            </section>
        </div>
    )
}