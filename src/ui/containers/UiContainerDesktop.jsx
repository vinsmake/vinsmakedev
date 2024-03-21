//any  - 1367px

export const UiContainerDesktop = ({ children }) => {
    return (
        <>
            <div className='UiContainerDesktopMax'>
                {children}
            </div>
            <div className='UiContainerDesktopMin'>
                {children}
            </div>
        </>
    )
}
