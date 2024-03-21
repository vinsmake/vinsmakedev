import { TypeEffectArray } from './TypeEffectArray'
import './TypeEffectArray.css'



export const TypeEffectArrayComponent = () => {
    return (
        <>
            <h1>Vinsmake <span><TypeEffectArray propWords={["Full Stack", "Designer &", "MERN", "PERN" ]}/> Developer</span></h1>
            <h2><span><TypeEffectArray propWords={["React.js", "Node.js", 'Typescript', 'Vite.js', 'React Query', 'React Router', 'Next.js', 'Redux', 'Zod', 'Zustand', 'Git', 'Firebase', 'MySql', 'PostgreSql', 'Bootstrap', 'Sass.css', 'Java', 'Spring Boot' ]}/></span></h2>
        </>
    )
}