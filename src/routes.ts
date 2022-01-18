import IconDemo from './icon/demo/demo1'
import ButtonDemo from './button/demo/demo1'
import DividerDemo from './divider/demo/demo1'
import SwitchDemo from './switch/demo/demo1'
import GridDemo from './grid/demo/demo1'
import BadgeDemo from './badge/demo/demo1'
import CheckboxDemo from './checkbox/demo/demo1'
import RadioDemo from './radio/demo/demo1'
import InputDemo from './input/demo/demo1'

const resolvePath = (arr: Array<any>) => {
  return arr.map(item => ({
    path: item[0],
    component: item[1],
    private: item[2]
  }))
}

export default resolvePath([
  ['/icon', IconDemo],
  ['/button', ButtonDemo],
  ['/divider', DividerDemo],
  ['/switch', SwitchDemo],
  ['/grid', GridDemo],
  ['/badge', BadgeDemo],
  ['/checkbox', CheckboxDemo],
  ['/radio', RadioDemo],
  ['/input', InputDemo],
  // 404
  // ['*', NotFound]
])
