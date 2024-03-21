import './assets/helpers/normalize.css'
import { UiContainers } from "./ui/containers/UiContainers"
import { TypeEffectComponent } from './ui/text/TypeEffect/TypeEffectComponent'
import { TypeEffectArrayComponent } from './ui/text/TypeEffectArray/TypeEffectArrayComponent'




export const UiTest = () => {
  return (
  <>
    <UiContainers>
      <TypeEffectComponent/>
    </UiContainers>
  </>
  )
}
