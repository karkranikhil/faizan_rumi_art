import React from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

export default function CustomLightbox({ index= 0, images, closeHandler}) {
    const [photoIndex, setPhotoIndex] = React.useState(index)
    return (
        <div>

    
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => closeHandler(true)}
            onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        
      </div>
    )
}

