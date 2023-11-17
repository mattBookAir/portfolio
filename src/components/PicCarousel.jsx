import {useState, useEffect} from "react";

export default function PicCarousel(props) {
    const {images, id} = props;
    const [currentImage, setCurrentImage] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        let interval;
        if (!isHovering) {
            interval = setInterval(() => {
                setCurrentImage((currentImage) => {
                    if (currentImage === images.length - 1) {
                        return 0;
                    }
                    return currentImage + 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [images, isHovering]);

    return (
        <div className="picCarousel" id={id} onMouseEnter={()=>{setIsHovering(true)}} onMouseLeave={()=>setIsHovering(false)}>
            <img src={images[currentImage]} alt="" />
        </div>
    )
}