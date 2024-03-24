import { SetLettersArray } from "./setLettersArray"
import './setLettersArray.css'


export const SetLettersArrayComponent = ({propWords}) => {

    

    return (
        <>
            <div>
                <h1><span><SetLettersArray propWords={['diseñador', 'programador', 'roedor']}/></span></h1>
            </div>
        </>
    )
}