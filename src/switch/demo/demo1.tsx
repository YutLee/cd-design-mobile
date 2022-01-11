import { useState } from 'react'
import Switch from '..'

export default () => {
  const [count, setCount] = useState(0)
  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleChange = (checked: boolean) => {
    setChecked(checked)
  }

  return (
    <>
      <div>
        <h4>开关尺寸</h4>
        <Switch size="s" />
        <Switch />
        <Switch size="l" />
        <h4>开关带文字</h4>
        <Switch size="s" checkedChildren="开" unCheckedChildren="关" />
        <Switch checkedChildren="开" unCheckedChildren="关" />
        <Switch size="l" checkedChildren="显示" unCheckedChildren="隐藏" />
        <h4>开关事件</h4>
        <Switch checked={checked} onClick={handleClick} onChange={handleChange} />
        <label>开关状态：{checked ? '开' : '关'}</label>&emsp;
        <span>点击次数{count}</span>
      </div>
    </>
  )
}
