import Tabs from '..'

export default () => {
  return (
    <>
      <div>
        <h4>简单展示</h4>
        <Tabs>
          <Tabs.Panel tab="选项卡1" key="1">
            选项卡 1 的内容
          </Tabs.Panel>
          <Tabs.Panel tab="选项卡2" key="2">
            选项卡 2 的内容
          </Tabs.Panel>
          <Tabs.Panel tab="选项卡3" key="3">
            选项卡 3 的内容
          </Tabs.Panel>
          <Tabs.Panel tab="选项卡4" key="4">
            选项卡 4 的内容
          </Tabs.Panel>
          <Tabs.Panel tab="选项卡5" key="5">
            选项卡 5 的内容
          </Tabs.Panel>
          <Tabs.Panel tab="选项卡6" key="6">
            选项卡 6 的内容
          </Tabs.Panel>
        </Tabs>
        <h4>标签居中展示</h4>
        <Tabs centered>
          <Tabs.Panel tab="选项卡1" key="1">
            选项卡 1 的内容
          </Tabs.Panel>
          <Tabs.Panel tab="选项卡2" key="2">
            选项卡 2 的内容
          </Tabs.Panel>
        </Tabs>
        <h4>默认选中2</h4>
        <Tabs centered init="2">
          <Tabs.Panel tab="选项卡1" key="1">
            选项卡 1 的内容
          </Tabs.Panel>
          <Tabs.Panel tab="选项卡2" key="2">
            选项卡 2 的内容
          </Tabs.Panel>
          <Tabs.Panel tab="选项卡3" key="3">
            选项卡 3 的内容
          </Tabs.Panel>
        </Tabs>
      </div>
    </>
  )
}
