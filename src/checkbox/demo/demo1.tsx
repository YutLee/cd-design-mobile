import { useEffect, useState } from 'react'
import Checkbox from '..'
import { CheckBoxOptionsProps } from '../checkbox'

const CheckboxAll = Checkbox.All

export default () => {
  const init: CheckBoxOptionsProps = {}
  const [options, setOptions] = useState(init)
  const [checked, setChecked] = useState(false)
  const [disabled, setDisabled] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setChecked(true)
      setDisabled(true)
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
        <Checkbox disabled={disabled} label="复选框" />&emsp;
        <span>两秒后改变状态</span>
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
        <h4>全选禁用</h4>
        <CheckboxAll name="disabledFruit" label="全选" disabled />&emsp;
        <Checkbox name="disabledFruit" value="vegetable" label="蔬菜" />&emsp;
        <Checkbox name="disabledFruit" value="pumpkin" checked label="南瓜" />&emsp;
        <Checkbox name="disabledFruit" value="lantern" checked invalid label="灯笼" />
        <h4>全选失效</h4>
        <CheckboxAll name="invalidFruit" label="全选" invalid />&emsp;
        <Checkbox name="invalidFruit" value="vegetable" label="蔬菜" />&emsp;
        <Checkbox name="invalidFruit" value="pumpkin" checked label="南瓜" />&emsp;
        <Checkbox name="invalidFruit" value="lantern" checked invalid label="灯笼" />
        <h4>全失效或禁用</h4>
        <CheckboxAll name="invalidOrDisabledFruit" label="全选" />&emsp;
        <Checkbox name="invalidOrDisabledFruit" value="vegetable" disabled label="蔬菜" />&emsp;
        <Checkbox name="invalidOrDisabledFruit" value="pumpkin" checked disabled label="南瓜" />&emsp;
        <Checkbox name="invalidOrDisabledFruit" value="lantern" invalid label="灯笼" />
        <h4>全失效</h4>
        <CheckboxAll name="allInvalidFruit" label="全选" />&emsp;
        <Checkbox name="allInvalidFruit" value="vegetable" invalid label="蔬菜" />&emsp;
        <Checkbox name="allInvalidFruit" value="pumpkin" checked invalid label="南瓜" />&emsp;
        <Checkbox name="allInvalidFruit" value="lantern" invalid label="灯笼" />
      </div>
    </>
  )
}
