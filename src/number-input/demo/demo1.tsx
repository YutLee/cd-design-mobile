import { useMount } from 'cd-hooks'
import { useState } from 'react'
import NumberInput, { NumberInputStepEventHandler } from '..'

export default () => {
  const [value, setValue] = useState(10)
  const handleChange = (value: number) => {
    console.log(value)
  }

  const handleSetp: NumberInputStepEventHandler = (value, step, type) => {
    console.log(value, step, type)
  }

  useMount(() => {
    setValue(20)
    setTimeout(() => {
      setValue(30)
    }, 3000)
  })

  return (
    <>
      <div>
        <h4>简单展示</h4>
        <NumberInput onChange={handleChange} onStep={handleSetp} />
        <h4>step = 3</h4>
        <NumberInput value={5} step={3} onChange={handleChange} onStep={handleSetp} />
        <h4>延迟</h4>
        <NumberInput value={value} onChange={handleChange} onStep={handleSetp} />
        <h4>禁用</h4>
        <NumberInput disabled />
      </div>
    </>
  )
}
