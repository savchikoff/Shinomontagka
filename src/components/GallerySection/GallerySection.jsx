import { Typography, Carousel } from 'antd';
import classes from './GallerySection.module.css';

const { Title, Text } = Typography;

const contentStyle = {
    margin: 0,
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#364d79',
};

function GallerySection() {
    return (
        <div className={classes.gallerySectionWrapper}>
            <Title level={1}>
                Галерея
            </Title>
            <Carousel arrows dotPosition="left" infinite={false}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    )
}

export default GallerySection;