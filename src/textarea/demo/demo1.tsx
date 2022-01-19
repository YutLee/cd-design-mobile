import Textarea from '..'

export default () => {
  return (
    <>
      <div>
        <h4>无边框</h4>
        <Textarea defaultValue="无边框" bordered={false} />
        <h4>禁用</h4>
        <Textarea disabled defaultValue="禁用" />
        <h4>只读</h4>
        <Textarea readOnly defaultValue="只读" />
        <h4>默认值</h4>
        <Textarea defaultValue="默认值" />
        <h4>placeholder</h4>
        <Textarea placeholder="请输入" />
        <h4>clear</h4>
        <Textarea placeholder="请输入" clear value="clear" />
        <h4>计数</h4>
        <Textarea placeholder="请输入" clear value="clear" count={true} />
        <Textarea placeholder="请输入" clear value="clear" count={true} maxLength={20} />
        <Textarea placeholder="请输入" value="clear" maxLength={100} count={({count, maxLength}) => <div style={{textAlign: 'right'}}>这里是计数:{count}/{maxLength}</div>} />
      </div>
    </>
  )
}
