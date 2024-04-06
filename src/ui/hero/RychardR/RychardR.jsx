import { RychardRData } from './RychardRData'
import './RychardR.css'
import { TypeFlip } from '../../text/TypeFlip/TypeFlip'
import { SaveContact } from '../../onClick/saveContact/saveContact'
import { NightClubButton } from '../../buttons/NightClubButton'


export const RychardR = () => {

    const { hero1, hero2, hero3, logo, signature } = RychardRData

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

                    <img src={signature} className='RychardR-signature' />
                    <div
                        className='RychardR-contact'
                        onClick={() => SaveContact({
                            name: 'Enrique Plascencia',
                            phone: '3336610692',
                            email: 'ps.enrique.e@gmail.com',
                            website: 'vinsmake.dev'
                        })}>
                        
                        <p>{/* <TypeFlip propWords={['Save Contact', 'Guardar Contacto']} /> */} <NightClubButton/></p>

                    </div>
                </div>
            </section>
        </>
    )
}