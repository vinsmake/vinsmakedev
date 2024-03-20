import TypeEffect from './TypeEffect'
import './TypeEffect.css'



export const TypeEffectText = () => {
    return (
        <>
            <h1>Vinsmake <span><TypeEffect propWords={["Full Stack", "Designer &", "MERN", "PERN" ]}/> Developer</span></h1>
            <h2><span><TypeEffect propWords={["React.js", "Node.js", 'Typescript', 'Vite.js', 'React Query', 'React Router', 'Next.js', 'Redux', 'Zod', 'Zustand', 'Git', 'Firebase', 'MySql', 'PostgreSql', 'Bootstrap', 'Sass.css', 'Java', 'Spring Boot' ]}/></span></h2>
        </>
    )
}