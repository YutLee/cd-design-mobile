import Timeline from '..'

export default () => {
  return (
    <>
      <div>
        <h4>简单展示</h4>
        <div style={{width: '300px'}}>
          <Timeline>
            <Timeline.Item>已签收 02-15 09:34</Timeline.Item>
            <Timeline.Item>运输中 02-15 08:09</Timeline.Item>
            <Timeline.Item>已发货 02-14 10:30</Timeline.Item>
            <Timeline.Item>已下单 02-14 09:34</Timeline.Item>
          </Timeline>
        </div>
        <h4>带标签</h4>
        <div style={{width: '300px'}}>
          <Timeline active={1}>
            <Timeline.Item label="02-15 09:34">已签收</Timeline.Item>
            <Timeline.Item label="02-15 08:09">运输中</Timeline.Item>
            <Timeline.Item label="02-14 10:30">已发货</Timeline.Item>
            <Timeline.Item label="02-14 09:34">已下单</Timeline.Item>
          </Timeline>
        </div>
        <h4>反向</h4>
        <div style={{width: '300px'}}>
          <Timeline reverse active={1}>
            <Timeline.Item label="02-15 09:34">已签收</Timeline.Item>
            <Timeline.Item label="02-15 08:09">运输中</Timeline.Item>
            <Timeline.Item label="02-14 10:30">已发货</Timeline.Item>
            <Timeline.Item label="02-14 09:34">已下单</Timeline.Item>
          </Timeline>
        </div>
      </div>
    </>
  )
}
