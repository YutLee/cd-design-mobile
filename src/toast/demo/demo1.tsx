import toast, { Toast } from '..'
import { Button } from '../..'

export default () => {
  const handleOpen = () => {
    toast('这个是一个toast消息提示')
  }

  return (
    <>
      <div>
        <h4>简单展示</h4>
        <Button onClick={handleOpen}>普通提示</Button>
        {/* 至少在React跟节点内任意节点挂载一次 */}
        <Toast />
      </div>
    </>
  )
}
