import {SlidingLogosData} from "./slidinglogosdata"

export const SlidingLogos = () => {

    const {text, logo} = SlidingLogosData;

    return (
        <>
            {
                SlidingLogosData.map(logo => (
                    <article className="slidinglogos-logo" key={logo.logo}>
                        <p className="slidinglogos-p">
                            {logo.text}
                        </p>
                        <img className="slidinglogos-img" src={`./images/slidinglogos/logo${logo}.png`} />
                    </article>
                ))
            }

        </>
    )
}