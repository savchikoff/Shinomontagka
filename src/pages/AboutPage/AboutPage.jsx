import { useState } from 'react';
import { Menu } from 'antd';
import {
    FileDoneOutlined,
    PaperClipOutlined,
    InfoCircleOutlined,
} from '@ant-design/icons';
import RequisitesSection from "../../components/RequisitesSection/RequisitesSection"
import classes from './AboutPage.module.css';
import EmptyView from '../../components/EmptyView/EmptyView';

const ITEMS = [
    { key: '1', icon: <InfoCircleOutlined />, label: 'О компании' },
    { key: '2', icon: <PaperClipOutlined />, label: 'Документы' },
    { key: '3', icon: <FileDoneOutlined />, label: 'Реквизиты' },
];


function AboutPage() {
    const [selectedKey, setSelectedKey] = useState('1');

    const renderContent = () => {
        switch (selectedKey) {
            case '1':
                return <RequisitesSection />;
            case '2':
                return <EmptyView />;
            case '3':
                return <EmptyView />;
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
                style={{ height: "calc(100dvh - 80px)" }}
            />
            <div>
                {renderContent()}
            </div>
        </div>
    )
}

export default AboutPage