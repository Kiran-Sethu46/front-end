import { dark } from "@material-ui/core/styles/createPalette";
import React from "react";
import ImageGallery from "react-image-gallery";
import "../App.css";

const ImageGallerys = ({ black }) => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div
      className={`${black}`}
      style={{ padding: "40px", textAlign: "center" }}
    >
      <h2>Gallery</h2>
      <ImageGallery items={images} />
    </div>
  );
};

export default ImageGallerys;
