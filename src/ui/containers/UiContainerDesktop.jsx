//any  - 1367px

export const UiContainerDesktop = ({ children }) => {
    return (
        <>
            <section className='UiContainerDesktopMax'>
                {children}
            </section>
            <section className='UiContainerDesktopMin'>
                {children}
            </section>
        </>
    )
}
