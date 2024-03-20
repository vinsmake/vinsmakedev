//1366px - 885px

export const UiContainerLaptop = ({ children }) => {
    return (
        <>
            <section className="UiContainerLaptopMax">
                {children}
            </section>
            <section className="UiContainerLaptopMin">
                {children}
            </section>
        </>
    )
}