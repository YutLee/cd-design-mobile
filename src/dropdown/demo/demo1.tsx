import { useState } from 'react'
import Dropdown, { DropdownChangeHandler } from '..'
import { Icon } from '../..'
import './demo1.css'
import arrowDownSVG from '../icons/arrow-down.svg'

export default () => {
  const [value, setValue] = useState('3')
  const handleChange: DropdownChangeHandler = (option) => {
    setValue(option.value)
  }

  return (
    <>
      <div>
        <h4>简单展示</h4>
        <Dropdown onChange={handleChange}>
          <Dropdown.Option value="1">综合推荐</Dropdown.Option>
          <Dropdown.Option value="2">最新排序</Dropdown.Option>
          <Dropdown.Option value="3">最热排序</Dropdown.Option>
        </Dropdown>
        <Dropdown onChange={handleChange} footer={<>收起<Icon src={arrowDownSVG} /></>}>
          <Dropdown.Option value="1">综合推荐</Dropdown.Option>
          <Dropdown.Option value="2" selected>最新排序</Dropdown.Option>
          <Dropdown.Option value="3">最热排序</Dropdown.Option>
        </Dropdown>
        <h4>不可用</h4>
        <Dropdown value={value} onChange={handleChange}>
          <Dropdown.Option value="1">综合推荐</Dropdown.Option>
          <Dropdown.Option value="2">最新排序</Dropdown.Option>
          <Dropdown.Option value="3" disabled>最热排序</Dropdown.Option>
        </Dropdown>
        <Dropdown disabled onChange={handleChange} footer={<>收起<Icon src={arrowDownSVG} /></>}>
          <Dropdown.Option value="1">综合推荐</Dropdown.Option>
          <Dropdown.Option value="2">最新排序</Dropdown.Option>
          <Dropdown.Option value="3">最热排序</Dropdown.Option>
        </Dropdown>
        <div style={{height: '1000px'}}></div>
      </div>
    </>
  )
}
