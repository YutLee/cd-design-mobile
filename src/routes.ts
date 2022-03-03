import ActionSheetDemo from './action-sheet/demo/demo1'
// import BackTopDemo from './back-top/demo/demo1'
import BadgeDemo from './badge/demo/demo1'
import ButtonDemo from './button/demo/demo1'
import CardDemo from './card/demo/demo1'
import CheckboxDemo from './checkbox/demo/demo1'
import CouponDemo from './coupon/demo/demo1'
import DialogDemo from './dialog/demo/demo1'
import DividerDemo from './divider/demo/demo1'
import DrawerDemo from './drawer/demo/demo1'
import DropdownDemo from './dropdown/demo/demo1'
import EmptyDemo from './empty/demo/demo1'
import GridDemo from './grid/demo/demo1'
import IconDemo from './icon/demo/demo1'
import ImageDemo from './image/demo/demo1'
import InputDemo from './input/demo/demo1'
import ListDemo from './list/demo/demo1'
import NumberInputDemo from './number-input/demo/demo1'
import RadioDemo from './radio/demo/demo1'
import RateDemo from './rate/demo/demo1'
import SearchBarDemo from './search-bar/demo/demo1'
import StepsDemo from './steps/demo/demo1'
import SwitchDemo from './switch/demo/demo1'
import TabsDemo from './tabs/demo/demo1'
import TagDemo from './tag/demo/demo1'
import TextareaDemo from './textarea/demo/demo1'
import TimelineDemo from './timeline/demo/demo1'
import ToastDemo from './toast/demo/demo1'
import ToolbarDemo from './toolbar/demo/demo1'

const resolvePath = (arr: Array<any>) => {
  return arr.map(item => ({
    path: item[0],
    title: item[1],
    component: item[2]
  }))
}

export default resolvePath([
  ['/action-sheet', 'ActionSheet 上拉菜单', ActionSheetDemo],
  // ['/back-top', BackTopDemo],
  ['/badge', 'Badge 徽标', BadgeDemo],
  ['/button', 'Button 按钮', ButtonDemo],
  ['/card', 'Card 卡片', CardDemo],
  ['/checkbox', 'Checkbox 复选框', CheckboxDemo],
  ['/coupon', 'Coupon 优惠券', CouponDemo],
  ['/dialog', 'Dialog 对话框', DialogDemo],
  ['/divider', 'Divider 分割线', DividerDemo],
  ['/drawer', 'Drawer 抽屉', DrawerDemo],
  ['/dropdown', 'Dropdown 下拉菜单', DropdownDemo],
  ['/empty', 'Empty 空状态', EmptyDemo],
  ['/grid', 'Grid 栅格', GridDemo],
  ['/icon', 'Icon 图标', IconDemo],
  ['/image', 'Image 图片', ImageDemo],
  ['/input', 'Input 输入框', InputDemo],
  ['/list', 'List 列表', ListDemo],
  ['/number-input', 'NumberInput 数字输入框', NumberInputDemo],
  ['/radio', 'Radio 单选框', RadioDemo],
  ['/rate', 'Rate 评分', RateDemo],
  ['/search-bar', 'SearchBar 搜索栏', SearchBarDemo],
  ['/steps', 'Steps 步骤条', StepsDemo],
  ['/switch', 'Switch 开关', SwitchDemo],
  ['/tabs', 'Tabs 标签页', TabsDemo],
  ['/tag', 'Tag 标签', TagDemo],
  ['/textarea', 'Textarea 多行输入框', TextareaDemo],
  ['/timeline', 'Timeline 时间轴', TimelineDemo],
  ['/toast', 'Toast 消息提示', ToastDemo],
  ['/toolbar', 'Toolbar 工具栏', ToolbarDemo],
  // 404
  // ['*', NotFound]
])
