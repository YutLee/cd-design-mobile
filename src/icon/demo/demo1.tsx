import Icon from '../'
import store from './icons/store.svg'
import storeFill from './icons/store-fill.svg'
import list from './icons/list.svg'
import integrateFill from './icons/integrate-fill.svg'

export default () => {
  return (
    <>
      <div>
        <h4>图标</h4>
        <Icon src={list} />
        <Icon src={store} />
        <Icon src={storeFill} />
        <Icon src={integrateFill} />
      </div>
      <div>
        <h4>图标颜色</h4>
        <Icon src={list} childFill={['red', 'rgb(0, 0, 255)', '#0ff', 'rgba(255, 0, 255, .5)']} />
        <Icon src={store} color="inherit" />
        <Icon src={storeFill} />
        <Icon src={integrateFill} fill="#f00" />
      </div>
      <div>
        <h4>图标尺寸</h4>
        <Icon src={list} size="s" />
        <Icon src={store} size="l" />
        <Icon src={storeFill} size="xl" />
        <Icon src={integrateFill} size={40} />
      </div>
    </>
  )
}
