import ActionSheetDemo from './action-sheet/demo/demo1'
import AvatarDemo from './avatar/demo/demo1'
import BackTopDemo from './back-top/demo/demo1'
import BadgeDemo from './badge/demo/demo1'
import ButtonDemo from './button/demo/demo1'
import CardDemo from './card/demo/demo1'
import CheckboxDemo from './checkbox/demo/demo1'
import DialogDemo from './dialog/demo/demo1'
import DividerDemo from './divider/demo/demo1'
import EmptyDemo from './empty/demo/demo1'
import GridDemo from './grid/demo/demo1'
import IconDemo from './icon/demo/demo1'
import ImageDemo from './image/demo/demo1'
import InputDemo from './input/demo/demo1'
import NavigationDemo from './navigation/demo/demo1'
import NumberInputDemo from './number-input/demo/demo1'
import RadioDemo from './radio/demo/demo1'
import RateDemo from './rate/demo/demo1'
import StepsDemo from './steps/demo/demo1'
import SwitchDemo from './switch/demo/demo1'
import TabsDemo from './tabs/demo/demo1'
import TagDemo from './tag/demo/demo1'
import TextareaDemo from './textarea/demo/demo1'
import TimelineDemo from './timeline/demo/demo1'
import ToastDemo from './toast/demo/demo1'
import ToolbarDemo from './toolbar/demo/demo1'
import TreeDemo from './tree/demo/demo1'
import UploadDemo from './upload/demo/demo1'

const resolvePath = (arr: Array<any>) => {
  return arr.map(item => ({
    path: item[0],
    component: item[1],
    private: item[2]
  }))
}

export default resolvePath([
  ['/action-sheet', ActionSheetDemo],
  ['/avatar', AvatarDemo],
  ['/back-top', BackTopDemo],
  ['/badge', BadgeDemo],
  ['/button', ButtonDemo],
  ['/card', CardDemo],
  ['/checkbox', CheckboxDemo],
  ['/dialog', DialogDemo],
  ['/divider', DividerDemo],
  ['/empty', EmptyDemo],
  ['/grid', GridDemo],
  ['/icon', IconDemo],
  ['/image', ImageDemo],
  ['/input', InputDemo],
  ['/navigation', NavigationDemo],
  ['/number-input', NumberInputDemo],
  ['/radio', RadioDemo],
  ['/rate', RateDemo],
  ['/steps', StepsDemo],
  ['/switch', SwitchDemo],
  ['/tabs', TabsDemo],
  ['/tag', TagDemo],
  ['/textarea', TextareaDemo],
  ['/timeline', TimelineDemo],
  ['/toast', ToastDemo],
  ['/toolbar', ToolbarDemo],
  ['/tree', TreeDemo],
  ['/upload', UploadDemo],
  // 404
  // ['*', NotFound]
])
