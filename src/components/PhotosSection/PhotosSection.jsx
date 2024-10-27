import { Typography, Carousel } from 'antd';
import classes from './PhotosSection.module.css';

const { Title, Text } = Typography;

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function PhotosSection() {
    return (
        <section>
            <div className={classes.photosSectionTextWrapper}>
                <Title level={2}>Фотогалерея</Title>
                <Text>Фотографии могут рассказать больше, чем тексты. Посмотрите реальные фотографии и звоните по телефону +375 (25) 918-08-08 в будние дни с 9:00 до 21:00 или оставьте заявку на сайте в режиме 24/7. </Text>
            </div>

            <Carousel autoplay>
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
        </section>
    )
}

export default PhotosSection