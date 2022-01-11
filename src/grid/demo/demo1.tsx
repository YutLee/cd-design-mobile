import { Col, Row } from '..'

export default () => {
  return (
    <>
      <div>
        <h4>flex</h4>
        <Row>
          <Col>Column</Col>
          <Col flex={1}>Column</Col>
        </Row>
        <h4>around</h4>
        <Row justify="space-around">
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
        <h4>between</h4>
        <Row justify="space-between">
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </div>
    </>
  )
}
