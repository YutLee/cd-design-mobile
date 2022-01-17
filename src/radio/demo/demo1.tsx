import { ChangeEvent, useState } from 'react'
import Radio from '..'

export default () => {
  const [value, setValue] = useState('apple')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <>
      <div>
        <h4>普通单选框</h4>
        <Radio name="fruit" value="apple" label="苹果" checked={value === 'apple'} onChange={handleChange} />&emsp;
        <Radio name="fruit" value="itchi" label="荔枝" checked={value === 'itchi'} onChange={handleChange} />&emsp;
        <Radio name="fruit" value="orange" label="橙子" checked={value === 'orange'} onChange={handleChange} />&emsp;
        <Radio name="fruit" value="vegetable" disabled label="蔬菜" onChange={handleChange} />&emsp;
        <Radio name="fruit" value="pumpkin" checked disabled label="南瓜" onChange={handleChange} />&emsp;
      </div>
    </>
  )
}
