import GallerySection from '../../components/GallerySection/GallerySection';
import classes from './GalleryPage.module.css';

function GalleryPage() {
    return (
        <div className={classes.galleryPage}>
            <GallerySection />
        </div>
    )
}

export default GalleryPage