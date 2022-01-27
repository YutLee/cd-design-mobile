import './app.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import routes from './routes'

function Index() {
  return <div>cd design mobile</div>
}

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><Link to="/action-sheet">ActionSheet 上拉菜单</Link></li>
        <li><Link to="/back-top">BackTop 回到顶部</Link></li>
        <li><Link to="/badge">Badge 徽标</Link></li>
        <li><Link to="/button">Button 按钮</Link></li>
        <li><Link to="/card">Card 卡片</Link></li>
        <li><Link to="/checkbox">Checkbox 复选框</Link></li>
        <li><Link to="/dialog">Dialog 对话框</Link></li>
        <li><Link to="/divider">Divider 分割线</Link></li>
        <li><Link to="/empty">Empty 空状态</Link></li>
        <li><Link to="/grid">Grid 栅格</Link></li>
        <li><Link to="/icon">Icon 图标</Link></li>
        <li><Link to="/image">Image 图片</Link></li>
        <li><Link to="/input">Input 输入框</Link></li>
        <li><Link to="/number-input">NumberInput 数字输入框</Link></li>
        <li><Link to="/radio">Radio 单选框</Link></li>
        <li><Link to="/rate">Rate 评分</Link></li>
        <li><Link to="/steps">Steps 步骤条</Link></li>
        <li><Link to="/switch">Switch 开关</Link></li>
        <li><Link to="/tabs">Tabs 标签页</Link></li>
        <li><Link to="/tag">Tag 标签</Link></li>
        <li><Link to="/textarea">Textarea 多行输入框</Link></li>
        <li><Link to="/timeline">Timeline 时间轴</Link></li>
        <li><Link to="/toast">Toast 消息提示</Link></li>
        <li><Link to="/toolbar">Toolbar 工具栏</Link></li>
        <li><Link to="/tree">Tree 树形控件</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Index />} />
        {
          routes.map(item => (
            <Route path={item.path} key={item.path} element={<item.component />} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
