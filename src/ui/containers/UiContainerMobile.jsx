//430px - 360px

export const UiContainerMobile = ({ children }) => {
    return (
        <>
            <section className="UiContainerMobileMax">
                {children}
            </section>
            <section className="UiContainerMobileMin">
                {children}
            </section>
        </>
    )
}