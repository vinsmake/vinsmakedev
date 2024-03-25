import './assets/helpers/normalize.css'
import { UiContainers } from "./ui/containers/UiContainers"
import { TypeFlip } from './ui/text/TypeFlip/TypeFlip'




export const UiTest = () => {
  return (
  <>
    <UiContainers>
      <TypeFlip propWords={['React Developer', 'UX Designer', 'MERN/PERN Developer']}/>
    </UiContainers>
  </>
  )
}
