import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Toolbar from '..'
import { Icon, SearchBar } from '../..'
import closeSVG from '../../icon/demo/icons/close.svg'
import { InputChangeEventHandler } from '../../input'
import { SearchBarSearchEventHandler } from '../../search-bar'

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

  return (
    <>
      <div>
        <h4>简单展示</h4>
        <Toolbar title="这个是标题" />
        <h4>自定义返回按钮</h4>
        <Toolbar title="无返回按钮" showBackIcon={false} />
        <h4>自定义返回按钮</h4>
        <Toolbar title="自定义返回按钮" backIcon={<Icon src={closeSVG} />} />
        <h4>有后缀</h4>
        <Toolbar title="购物车" suffix="编辑" />
        <h4>无边框</h4>
        <Toolbar title="商品详情" bordered={false} />
        <h4>显示搜索图标</h4>
        <Toolbar title="订单" showSearchIcon onSearchClick={handleSearchClick} />
        <h4>搜索图标+后缀</h4>
        <Toolbar title="我的收藏" showSearchIcon onSearchClick={handleSearchClick} suffix="编辑" />
        <h4>搜索工具栏</h4>
        <Toolbar>
          <div style={{flex: 1}}>
            <SearchBar value={value} onSearchChange={handleSearchChange} onSearch={handleSearch} />
          </div>
        </Toolbar>
        <div style={{height: '1000px'}}></div>
      </div>
    </>
  )
}
