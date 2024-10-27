import { useState } from 'react';
import { Menu } from 'antd';
import {
    ContainerOutlined,
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import RequisitesSection from "../../components/RequisitesSection/RequisitesSection"
import classes from './AboutPage.module.css';

const ITEMS = [
    { key: '1', icon: <PieChartOutlined />, label: 'О компании' },
    { key: '2', icon: <DesktopOutlined />, label: 'Документы' },
    { key: '3', icon: <ContainerOutlined />, label: 'Реквизиты' },
];


function AboutPage() {
    const [selectedKey, setSelectedKey] = useState('1');

    const renderContent = () => {
        switch (selectedKey) {
            case '1':
                return <RequisitesSection />;
            case '2':
                return <div>Контент для Option 2</div>;
            case '3':
                return <div>Контент для Option 3</div>;
            default:
                return null;
        }
    };

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    };
    return (
        <div className={classes.aboutPageContainer}>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['1']}
                items={ITEMS}
                onClick={handleMenuClick}
                style={{ height: "calc(100dvh - 64px)" }}
            />
            <div>
                {renderContent()}
            </div>
        </div>
    )
}

export default AboutPage