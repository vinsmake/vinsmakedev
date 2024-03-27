import {RychardRyanData} from './RychardRyanData'
import './RychardRyan.css'
import { TypeFlip } from '../../text/TypeFlip/TypeFlip'


export const RychardRyan = () => {

const {hero1, hero2, hero3, logo} = RychardRyanData

    return (
        <>
            <section className="section hero" id="home" aria-label="home">
                <div className="container">

                    <img src={logo} className="hero-banner" />

                    <div className="hero-content">

                        <h1 className="hero-title">{hero1}</h1>

                        <div className="subheader">
                            <p><TypeFlip propWords={['UX Designer', 'Full Stack Developer', 'React Native Developer', ]}/></p>
                        </div>

                        <p className="hero-text">{hero3}</p>

                    </div>

                </div>

{/*                 <img src="./assets/images/hero-shape.svg" width="211" height="189" alt="" class="shape" />
 */}
            </section>
        </>
    )
}