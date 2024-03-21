//884px - 431px

export const UiContainerTablet = ({ children }) => {
    return (
        <>
            <div className="UiContainerTabletMax">
                {children}
            </div>
            <div className="UiContainerTabletMin">
                {children}
            </div>
        </>
    )
}