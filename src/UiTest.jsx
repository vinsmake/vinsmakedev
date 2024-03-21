import './assets/helpers/normalize.css'
import { UiContainers } from "./ui/containers/UiContainers"
import { TypeEffectArrayComponent } from './ui/text/TypeEffectArray/TypeEffectArrayComponent'




export const UiTest = () => {
  return (
  <>
    <UiContainers>
      <TypeEffectArrayComponent/>
    </UiContainers>
  </>
  )
}
