import actionSheet from '..'
import { Button } from '../..'

export default () => {
  const handleOpen = (title: string) => {
    actionSheet({
      title,
      dataSource: [{
        content: '拨打“0757-29226373”'
      }, {
        content: '拨打“0757-29226374”'
      }, {
        content: '拨打“135393459010”'
      }],
      onItemClick: (data, close) => {
        alert('选择了 ' + data.content)
        close()
      }
    })
  }

  const handleOpenCustom = () => {
    actionSheet({
      dataSource: [{
        content: '拨打“0757-29226373”'
      }, {
        content: '拨打“0757-29226374”'
      }, {
        content: '拨打“135393459010”'
      }],
      cancelText: '关闭',
      onCancel: (close) => {
        alert('点击了关闭')
        close()
      }
    })
  }

  return (
    <>
      <div>
        <h4>简单展示</h4>
        <Button onClick={handleOpen.bind(this, '客服热线')}>打开对话框</Button>
        <h4>没有title</h4>
        <Button onClick={handleOpen.bind(this, '')}>没有title</Button>
        <h4>自定义</h4>
        <Button onClick={handleOpenCustom}>自定义</Button>
      </div>
    </>
  )
}
