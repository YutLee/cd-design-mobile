import Rate from '..'
import { Icon } from '../..'
import favoriteFillSVG from '../icons/favorite-fill.svg'

export default () => {
  const handleChange = (value: number) => {
    alert(`评分：${value}`)
  }

  return (
    <>
      <div>
        <h4>基本展示</h4>
        <Rate /><br />
        <Rate onChange={handleChange} />
        <h4>不可清除</h4>
        <Rate allowClear={false} />
        <h4>允许半选</h4>
        <Rate allowHalf />
        <h4>自定义图标</h4>
        <Rate icon={<Icon src={favoriteFillSVG} />} /><br />
        <Rate allowHalf icon={<Icon src={favoriteFillSVG} />} value={3.5} />
        <h4>只读</h4>
        <Rate disabled /><br />
        <Rate disabled defaultValue={3} /><br />
        <Rate disabled value={5} />
      </div>
    </>
  )
}
