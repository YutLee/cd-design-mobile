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
        <h4>大尺寸</h4>
        <NumberInput size="l" onChange={handleChange} onStep={handleSetp} />
        <h4>圆形按钮</h4>
        <NumberInput size="l" shape="circle" onChange={handleChange} onStep={handleSetp} />
        <h4>step = 3, min = 1, max = 9</h4>
        <NumberInput step={3} min={1} max={9} onChange={handleChange} onStep={handleSetp} />
        <h4>延迟</h4>
        <NumberInput value={value} onChange={handleChange} onStep={handleSetp} />
        <h4>禁用</h4>
        <NumberInput disabled />
      </div>
    </>
  )
}
