import { useEffect, useState } from 'react'
import Checkbox from '..'
import { CheckBoxOptionsProps } from '../checkbox'

const CheckboxAll = Checkbox.All

export default () => {
  const init: CheckBoxOptionsProps = {}
  const [options, setOptions] = useState(init)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setChecked(true)
    }, 2000)
  }, [])

  const handleAllChange = (options: CheckBoxOptionsProps) => {
    setOptions(options)
  }

  const handleChange = (options: CheckBoxOptionsProps) => {
    setOptions(options)
  }

  return (
    <>
      <div>
        <h4>普通复选框</h4>
        <Checkbox checked={checked} />
        <Checkbox label="复选框" />
        <h4>不可用</h4>
        <Checkbox disabled />
        <Checkbox disabled checked />
        <h4>失效</h4>
        <Checkbox invalid label="未选中" />
        <Checkbox invalid checked label="选中" />
        <h4>全选</h4>
        <CheckboxAll name="fruit" label="全选" onChange={handleAllChange} />&emsp;
        <Checkbox name="fruit" value="apple" label="苹果" onChange={handleChange} />&emsp;
        <Checkbox name="fruit" value="itchi" checked label="荔枝" onChange={handleChange} />&emsp;
        <Checkbox name="fruit" value="orange" label="橙子" onChange={handleChange} />&emsp;
        <Checkbox name="fruit" value="vegetable" disabled label="蔬菜" />&emsp;
        <Checkbox name="fruit" value="pumpkin" checked disabled label="南瓜" />&emsp;
        <Checkbox name="fruit" value="lantern" invalid label="灯笼" />
        <code>
          <p>选择了:</p>
          {
            options.values &&
              options?.values.map(item => {
                if (!item.disabled && !item.invalid && item.checked) {
                  return item.value + ','
                }
              })
          }
        </code>
      </div>
    </>
  )
}
