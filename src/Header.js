import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const Header = () => {
  return (
    <Row style={{marginBottom: 30}}>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <Col xs={6} md={4}>
        <div>
          <h1 style={{marginBottom: 0}}>Hello Floyd Mullins</h1>
          <p style={{textAlign: 'left', color: 'rgb(191, 190, 186)', fontSize: 15, marginTop: 2}}>You have 3 tasks</p>
        </div>
      </Col>
      <Col xs={6} md={{ span: 4, offset: 4 }}>
        <div style={{paddingTop: 33}}>
          <Image style={{width: 50, height: 50, borderRadius: '50%'}} src="https://www.w3schools.com/howto/img_avatar.png" />
        </div>
      </Col>
      </div>
    </Row>
  );
}

export default Header;
