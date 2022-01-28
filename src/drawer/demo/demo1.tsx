import { useState } from 'react'
import Drawer, { DrawerDirectionType } from '..'
import { Button } from '../..'

export default () => {
  const [visible, setVisible] = useState(false)
  const [direction, setDirection] = useState<DrawerDirectionType>('bottom')
  const handleOpen = (direction: DrawerDirectionType) => {
    setDirection(direction)
    setVisible(true)
  }

  const handleClose = () => {
    setVisible(false)
  }


  return (
    <>
      <div>
        <h4>简单展示</h4>
        <Button onClick={handleOpen.bind(this, 'bottom')}>打开抽屉</Button>
        <Button onClick={handleOpen.bind(this, 'top')}>上面抽出</Button>
        <Button onClick={handleOpen.bind(this, 'right')}>右边抽出</Button>
        <Button onClick={handleOpen.bind(this, 'left')}>左边抽出</Button>
        <Drawer title="抽屉" direction={direction} visible={visible} onClose={handleClose}>
          这是一个抽屉
        </Drawer>
      </div>
    </>
  )
}
