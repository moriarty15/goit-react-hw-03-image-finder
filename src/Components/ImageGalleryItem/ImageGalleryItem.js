import style from "./ImageGalleryItem.module.css"

export default function ImageGalleryItem(props) {
  const {src, alt, key} = props
    return (<li key={key} className={style.ImageGalleryItem}>
  <img  src={src} alt={alt} className={style.ImageGalleryItem_image}  />
</li>)
}