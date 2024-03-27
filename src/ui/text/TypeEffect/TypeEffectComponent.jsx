import { TypeEffect } from './TypeEffect'
import './TypeEffect.css'



export const TypeEffectComponent = () => {
    return (
        <>
            <h1>Vinsmake <span><TypeEffect propWord={"Hello"}/> Developer</span></h1>
            <h2><span><TypeEffect propWord={"Hello"}/></span></h2>
        </>
    )
}