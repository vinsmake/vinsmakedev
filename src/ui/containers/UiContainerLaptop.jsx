//1366px - 885px

export const UiContainerLaptop = ({ children }) => {
    return (
        <>
            <div className="UiContainerLaptopMax">
                {children}
            </div>
            <div className="UiContainerLaptopMin">
                {children}
            </div>
        </>
    )
}