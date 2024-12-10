import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import classes from './ContactsPage.module.css';

const { Title, Text } = Typography;

function ContactsPage() {
    return (
        <div className={classes.contactsWrapper}>
            <Title level={2} className={classes.pageTitle}>
                Контактная информация
            </Title>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                    <Card hoverable className={classes.contactCard}>
                        <Title level={4} className={classes.cardTitle}>Свяжитесь с нами</Title>
                        <div className={classes.contactItem}>
                            <Text>
                                <PhoneOutlined /> Телефон: <a href="tel:+1234567890">+1 234 567 890</a>
                            </Text>
                        </div>
                        <div className={classes.contactItem}>
                            <Text>
                                <MailOutlined /> Email: <a href="mailto:info@example.com">info@example.com</a>
                            </Text>
                        </div>
                        <div className={classes.contactItem}>
                            <Text>
                                <EnvironmentOutlined /> Адрес: 123 Main St, Москва, Россия
                            </Text>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ContactsPage;
