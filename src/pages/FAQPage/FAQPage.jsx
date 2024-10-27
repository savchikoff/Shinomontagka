import { Collapse, Divider } from 'antd';
import { FAQ_ITEMS } from '../../constants/faqItems';

function FAQPage() {
    return (
        <>
            <Divider orientation='center'>FAQ</Divider>
            <Collapse items={FAQ_ITEMS} size="large" />
        </>
    )
}

export default FAQPage