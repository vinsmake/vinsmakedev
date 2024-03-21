//430px - 360px

export const UiContainerMobile = ({ children }) => {
    return (
        <>
            <div className="UiContainerMobileMax">
                {children}
            </div>
            <div className="UiContainerMobileMin">
                {children}
            </div>
        </>
    )
}