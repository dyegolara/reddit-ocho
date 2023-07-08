import React, { useState } from "react";
import styles from "./Gallery.module.css";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ImageCarousel = ({
  images,
}: {
  images: { id: string; media_id: string }[];
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newIndex = currentImageIndex + 1;
    setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex);
  };

  const prevImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const newIndex = currentImageIndex - 1;
    setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex);
  };

  return (
    <div data-testid={"gallery"} className={styles.gallery}>
      <button onClick={prevImage} className={styles.button}>
        <ChevronLeft size={32} />
      </button>

      <img
        src={`https://i.redd.it/${images[currentImageIndex]?.media_id}.jpg`}
        alt="Imagen de carrusel"
        className={styles.img}
      />

      <button onClick={nextImage} className={styles.button}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default ImageCarousel;
