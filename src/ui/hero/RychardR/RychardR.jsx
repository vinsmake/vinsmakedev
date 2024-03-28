import { RychardRData } from './RychardRData'
import './RychardR.css'
import { TypeFlip } from '../../text/TypeFlip/TypeFlip'


export const RychardR = () => {

    const { hero1, hero2, hero3, logo, signature} = RychardRData

    return (
        <>
            <section className="RychardR">
                <div className="RychardR-content">
                    <img src={logo} className="RychardR-logo" />
                    <h1 className="RychardR-title">{hero1}</h1>
                    <div className="RychardR-subheader">
                        <p><TypeFlip propWords={['UX Designer', 'Full Stack Developer', 'React Native Developer',]} /></p>
                    </div>
                    <p className="RychardR-text">{hero3}</p>
                    <img src={signature} className='RychardR-signature'/>
                </div>
            </section>
        </>
    )
}