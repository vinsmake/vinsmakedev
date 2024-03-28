import { SaveContact } from "./saveContact"
export const SaveContactComponent = () => {

const handleClick = () => {
    const contact = {
        name: "Enrique Plascencia",
        phone: "3336650692",
        email: "ps.enrique.e@gmail.com",
        website: "vinsmake.dev"
    };
    SaveContact({contact})
}

    return (
        <>
            <h1 onClick={handleClick}>Save Contact</h1>
        </>
    )
}