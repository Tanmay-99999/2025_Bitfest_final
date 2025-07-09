interface GalleryItemProps {
  src: string;
  alt: string;
  category: string;
  onClick: () => void;
}

const GalleryItem = ({ src, alt, category, onClick }: GalleryItemProps) => {
  return (
    <div 
      className="gallery-item hover:transform hover:scale-[1.03] transition-all duration-300 z-10 cursor-pointer"
      data-category={category}
      onClick={onClick}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-64 object-cover rounded shadow-md hover:shadow-xl"
      />
    </div>
  );
};

export default GalleryItem;
