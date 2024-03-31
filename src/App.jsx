import './styles/normalize.css'
import './styles/styles.css'
import ParticlesComponent from './ui/effects/tsparticles/ParticlesComponent'
import { RychardR } from './ui/hero/RychardR/RychardR'



export const App = () => {
  return (
  <>
    <RychardR/>
    <ParticlesComponent id='tsparticles'/>
  </>
  )
}
