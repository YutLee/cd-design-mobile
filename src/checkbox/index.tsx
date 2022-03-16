import InternalCheckbox, { CheckboxProps } from './checkbox'
import All from './all'

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>> {
  All: typeof All
}

const Checkbox = InternalCheckbox as CompoundedComponent

Checkbox.All = All
Checkbox.displayName = 'Checkbox'

export default Checkbox
