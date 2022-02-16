import { useMount } from 'cd-hooks'
import { useState } from 'react'
import Steps from '..'

export default () => {
  const [current, setCurrent] = useState(1)

  useMount(() => {
    setTimeout(() => {
      setCurrent(2)
    }, 1000)
  })

  return (
    <>
      <div>
        <h4>简单展示</h4>
        <Steps>
          <span>校验原手机</span>
          <span>绑定新手机</span>
          <span>完成绑定</span>
        </Steps>
        <Steps initial={1} current={current}>
          <span>校验原手机</span>
          <span>绑定新手机</span>
          <span>完成绑定</span>
        </Steps>
      </div>
    </>
  )
}
