/*eslint-disable*/
import { Button, Col, Row } from 'antd';
import React, { lazy, useEffect, useRef, useState } from 'react';
import { Cards } from '../../components/cards/frame/cards-frame';
import { PageHeader } from '../../components/page-headers/page-headers';
import { Main } from '../styled';
import { FixedRow } from './style';

const Conversation = lazy(()=> import('../conversation/Conversation'))

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const aiAssistantRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (aiAssistantRef.current && !aiAssistantRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <PageHeader ghost title="" />
      <Main>
        <Row gutter={25}>
          <Col lg={24} xs={24}>
            <Cards headless>
              <div style={{ minHeight: 'calc(100vh - 320px)' }}>
                <h2>Welcome</h2>
              </div>
            </Cards>
          </Col>
        </Row>
        {isOpen && (
          <div ref={aiAssistantRef} style={{ position: 'fixed', width:'100%', right: '0', bottom: '600px', zIndex: 9999 }}>
            <FixedRow>
              <Col md={24} sm={24}><Conversation/></Col>
              <Cards headless>1</Cards>
            </FixedRow>
          </div>
        )}
        <Row>
          <Col>
            <Button style={{ display: 'flex', justifyContent: 'end', position: 'fixed', right: '20px', bottom: '60px' }} onClick={handleToggle} hidden={isOpen}>Chat</Button>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Dashboard;
