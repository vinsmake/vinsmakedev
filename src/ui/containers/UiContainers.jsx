import { UiContainerLaptop } from './UIContainerLaptop'
import { UiContainerMobile } from './UIContainerMobile'
import { UiContainerTablet } from './UIContainerTablet'
import { UiContainerDesktop } from './UiContainerDesktop'
import './UiContainer.css'

export const UiContainers = ({ children }) => {
    return (
    <>
        <UiContainerDesktop>
        { children }
        </UiContainerDesktop>
        <UiContainerLaptop>
        { children }
        </UiContainerLaptop>
        <UiContainerTablet>
        { children }
        </UiContainerTablet>
        <UiContainerMobile>
        { children }
        </UiContainerMobile>
    </>
    )
}