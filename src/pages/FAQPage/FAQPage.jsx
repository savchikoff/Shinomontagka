import { Collapse, Typography } from 'antd';
import { FAQ_ITEMS } from '../../constants/faqItems';
import classes from './FAQPage.module.css';

const { Title } = Typography;

function FAQPage() {
    return (
        <div className={classes.faqWrapper}>
            <Title level={1}>
                FAQ
            </Title>
            <Collapse items={FAQ_ITEMS} size="large" />
        </div>
    )
}

export default FAQPage