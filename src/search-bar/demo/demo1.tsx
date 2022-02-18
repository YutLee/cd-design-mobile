import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBarSearchEventHandler } from '..'
import { Button, SearchBar } from '../..'
import { InputChangeEventHandler } from '../../input'

export default () => {
  const navigate = useNavigate()
  const [value, setValue] = useState('')

  const handleSearchClick = () => {
    navigate('/search')
  }

  const handleSearchChange: InputChangeEventHandler = (event) => {
    setValue(event.currentTarget.value)
  }

  const handleSearch: SearchBarSearchEventHandler = (value) => {
    console.log(value)
  }

  const handleCancel = () => {
    history.back()
  }

  return (
    <>
      <div>
        <h4>简单展示</h4>
        <SearchBar value={value} onSearchChange={handleSearchChange} onSearch={handleSearch} onCancel={handleCancel} />
        <h4>自定义搜索/取消按钮</h4>
        <SearchBar value={value} onSearchChange={handleSearchChange} onSearch={handleSearch} searchButton={<Button type="primary">搜索</Button>} cancelButton={<Button>取消</Button>} />
        <h4>不显示搜索/取消按钮</h4>
        <SearchBar showButton={false} value={value} onSearchChange={handleSearchChange} onSearch={handleSearch} />
        <h4>点击跳转</h4>
        <SearchBar onSearchClick={handleSearchClick} />
      </div>
    </>
  )
}
