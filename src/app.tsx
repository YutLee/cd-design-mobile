import './app.css'
import ButtonDemo from './button/demo/demo1'
import IconDemo from './icon/demo/demo1'
import DividerDemo from './divider/demo/demo1'
import SwitchDemo from './switch/demo/demo1'

function App() {
  return (
    <div className="app">
      <h2>cd-design-mobile</h2>
      <h4>图标组件 Icon</h4>
      <IconDemo />
      <h4>按钮组件 Button</h4>
      <ButtonDemo />
      <h4>分割线组件 Divider</h4>
      <DividerDemo />
      <h4>开关组件 Switch</h4>
      <SwitchDemo />
    </div>
  )
}

export default App
