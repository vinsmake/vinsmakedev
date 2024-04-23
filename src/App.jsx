import './styles/normalize.css'
import './styles/styles.css'
import { SlidingLogos } from './ui/carousels/SlidingLogos'
import ParticlesComponent from './ui/effects/tsparticles/ParticlesComponent'
import { RychardR } from './ui/hero/RychardR/RychardR'



export const App = () => {
  return (
  <>
    <RychardR/>
    <SlidingLogos/>
    <ParticlesComponent />
  </>
  )
}
