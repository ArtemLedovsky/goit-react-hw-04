import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, handleOpenModal }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => {
        return (
          <li
            className={s.item}
            key={image.id}
            onClick={() => handleOpenModal(image.urls.regular)}
          >
            <ImageCard src={image.urls.small} alt={image.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
