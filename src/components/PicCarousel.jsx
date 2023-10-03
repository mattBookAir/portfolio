import {useState, useEffect} from "react";

export default function PicCarousel(props) {
    const {images} = props;
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage) => {
                if (currentImage === images.length - 1) {
                    return 0;
                }
                return currentImage + 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="picCarousel">
            <img src={images[currentImage]} alt="" />
        </div>
    )
}