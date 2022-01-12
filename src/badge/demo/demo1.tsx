import { useState } from 'react'
import Badge from '..'
import { Button, Icon } from '../..'
import storeFill from '../../icon/demo/icons/store-fill.svg'

export default () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div>
        <h4>默认</h4>
        <Button onClick={handleClick}>徽标数+1</Button>
        <Badge count={count}>
          <Icon size="xl" src={storeFill} />
        </Badge>
        &emsp;
        <Badge count={count + 90} showZero>
          <Icon size="xl" src={storeFill} />
        </Badge>
        &emsp;
        <Badge dot>
          <Icon size="xl" src={storeFill} />
        </Badge>
        <h4>单独使用</h4>
        <Badge count={100} />
        <Badge dot />
      </div>
    </>
  )
}
