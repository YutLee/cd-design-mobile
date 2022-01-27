import { ChangeEvent, useRef, useState } from 'react'
import dialog from '..'
import { Button, Textarea } from '../..'

export default () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const valueRef = useRef('')

  const handleOpen = (title: string) => {
    dialog({
      title,
      content: '你确定删除全部历史记录吗？',
      onOk: (close) => {
        close()
        dialog({
          title: '成功',
          content: '删除成功'
        })
      }
    })
  }

  const handleOpenNotOk = () => {
    dialog({
      content: '注册后，性别不可修改',
      cancelText: ''
    })
  }

  const handleOpenNotCancel = () => {
    dialog({
      content: '注册后，性别不可修改',
      okText: ''
    })
  }

  const handleOpenCustom = () => {
    dialog({
      title: '发票须知',
      contentAlign: 'left',
      content: <>
        1.发票金额不含赠品礼品、优惠扣减、未实际发生交易金额。<br />
        2.开票申请:<br />
        (1)有开票需要的买家事前先跟卖家沟通好，避免沟通不畅。<br />
        (2)买家可在确认订单时，只需填写好开票资料跟订单一起提交即可；<br />
        (3)若提交订单时忘记了开票申请，可在提交订单后在订单列表中去操作开票申请，已关闭状态的订单不能开票申请。<br />
        (4)填写开票资料时，请认真核实信息的准确性，若由于资料错误造成损失，由买家承担。<br />
        3.第三方卖家销售的商品/服务的发票由卖家自行出具、提供,发票类型和内容由卖家根据实际商品、服务情况决定。<br />
      </>,
      okText: '我知道了',
      cancelText: ''
    })
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value)
    valueRef.current = event.target.value
  }

  const PromptContent = (props: any) => {
    const {
      value,
      error,
      onChange
    } = props

    return (
      <>
        <p>服务名称：张三(13611112222) 乐龙小区 A17户 500方</p>
        <Textarea value={value} placeholder="请输入终止原因，100字符内" maxLength={100} onChange={onChange} />
        {
          error && <p>{error}</p>
        }
      </>
    )
  }

  const handleOpenPrompt = () => {
    const myDialog: any = dialog({
      title: '服务终止',
      contentAlign: 'left',
      content: <PromptContent value={value} onChange={handleChange} />,
      onOk: (close) => {
        if (!valueRef.current) {
          myDialog.update({
            content:<PromptContent value={value} error={'请输入终止原因！'} onChange={handleChange} />
          })
          return
        }
        valueRef.current = ''
        setValue('')
        close()
      },
      onCancel: (close) => {
        valueRef.current = ''
        setValue('')
        close()
      }
    })
  }

  return (
    <>
      <div>
        <h4>简单展示</h4>
        <Button onClick={handleOpen.bind(this, '提示')}>打开对话框</Button>
        <h4>没有title</h4>
        <Button onClick={handleOpen.bind(this, '')}>没有title</Button>
        <h4>只有一个按钮</h4>
        <Button onClick={handleOpenNotOk}>没有确定按钮</Button>
        <Button onClick={handleOpenNotCancel}>没有取消按钮</Button>
        <h4>自定义</h4>
        <Button onClick={handleOpenCustom}>自定义</Button>
        <h4>prompt</h4>
        <Button onClick={handleOpenPrompt}>prompt</Button>
      </div>
    </>
  )
}
