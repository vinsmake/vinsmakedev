
import SetLettersArray from './setLettersArray'
import './setLettersArray.css'

export const SetLettersArrayComponent = ({propWords}) => {

    

    return (
        <>
            <div>
                <h1 className="array">
                    <SetLettersArray words={['diseñador', 'programador', 'roedor']}/>
                    <span className="in">hello</span>    
                    <span className="out">bye</span>    
                </h1>
            </div>
        </>
    )
}