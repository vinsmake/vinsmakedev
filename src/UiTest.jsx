import './assets/helpers/normalize.css'
import { UiContainers } from "./ui/containers/UiContainers"
import { SetLettersArrayComponent } from './ui/text/SetLettersArray/SetLettersArrayComponent'




export const UiTest = () => {
  return (
  <>
    <UiContainers>
      <SetLettersArrayComponent/>
    </UiContainers>
  </>
  )
}
