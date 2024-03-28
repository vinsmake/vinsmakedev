import { RychardRData } from './RychardRData'
import './RychardR.css'
import { TypeFlip } from '../../text/TypeFlip/TypeFlip'


export const RychardR = () => {

    const { hero1, hero2, hero3, logo } = RychardRData

    return (
        <>
            <section className="RychardR">

                <img src={logo} className="RychardR-logo" />

                <div className="RychardR-content">

                    <h1 className="RychardR-title">{hero1}</h1>

                    <div className="RychardR-subheader">
                        <p><TypeFlip propWords={['UX Designer', 'Full Stack Developer', 'React Native Developer',]} /></p>
                    </div>

                    <p className="RychardR-text">{hero3}</p>



                </div>

                {/*                 <img src="./assets/images/hero-shape.svg" width="211" height="189" alt="" class="shape" />
 */}
            </section>
        </>
    )
}