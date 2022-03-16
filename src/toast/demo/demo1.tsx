import Toast, { toast, ToastType } from '..'
import { Button } from '../..'

export default () => {
  const handleOpen = (type: ToastType) => {
    toast({type, content: `这个是一个${type}消息提示`})
  }

  return (
    <>
      <div>
        <h4>简单展示</h4>
        <Button onClick={handleOpen.bind(this, 'default')}>普通提示</Button>
        <Button onClick={handleOpen.bind(this, 'success')}>成功提示</Button>
        <Button onClick={handleOpen.bind(this, 'loading')}>加载提示</Button>
        {/* 至少在React跟节点内任意节点挂载一次 */}
        <Toast />
      </div>
    </>
  )
}
