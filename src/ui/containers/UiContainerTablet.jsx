//884px - 431px

export const UiContainerTablet = ({ children }) => {
    return (
        <>
            <section className="UiContainerTabletMax">
                {children}
            </section>
            <section className="UiContainerTabletMin">
                {children}
            </section>
        </>
    )
}