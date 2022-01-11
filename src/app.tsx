import './app.css'
import ButtonDemo from './button/demo/demo1'
import IconDemo from './icon/demo/demo1'
import DividerDemo from './divider/demo/demo1'
import SwitchDemo from './switch/demo/demo1'
import GridDemo from './grid/demo/demo1'

function App() {
  return (
    <div className="app">
      <h2>cd-design-mobile</h2>
      <h4>Icon 图标</h4>
      <IconDemo />
      <h4>Button 按钮</h4>
      <ButtonDemo />
      <h4>Divider 分割线</h4>
      <DividerDemo />
      <h4>Switch 开关</h4>
      <SwitchDemo />
      <h4>Grid 栅格</h4>
      <GridDemo />
    </div>
  )
}

export default App
