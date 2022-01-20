import { ReactEventHandler } from 'react'
import Image from '..'
import './demo1.css'

export default () => {
  const handleError: ReactEventHandler<HTMLImageElement> = (event: any) => {
    alert(`图片${event.target.src}加载出错`)
  }

  return (
    <>
      <div>
        <h4>普通图片</h4>
        <Image loading="eager" src="https://www.runoob.com/images/mountainskies.jpeg" />
        <div>加载图片出错</div>
        <img
          loading="eager"
          src="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Web/HTML/Element/img/favicon.png"
          alt="这是一张出错图片"
          onError={handleError}
        />
        <br />
        <br />
        <div>加载图片出错使用fallback</div>
        <Image
          loading="eager"
          src="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Web/HTML/Element/img/favicon.png"
          fallback="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Web/HTML/Element/img/favicon144.png"
        />
        <div>懒加载图片</div>
        <div style={{height: '2000px'}}></div>
        <Image src="https://yari-demos.prod.mdn.mozit.cloud/zh-CN/docs/Web/HTML/Element/img/favicon144.png" /><br />
        <Image src="https://www.runoob.com/images/wedding.jpeg" /><br />
        <Image src="https://www.runoob.com/images/rocks.jpeg" /><br />
        <Image src="https://www.runoob.com/images/paris.jpeg" /><br />
        <Image src="https://www.runoob.com/images/nature.jpeg" /><br />
        <Image src="https://www.runoob.com/images/underwater.jpeg" />
      </div>
    </>
  )
}
