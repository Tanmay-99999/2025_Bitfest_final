import { useState } from "react";
import { galleryImages } from "@/lib/constants";
import GalleryItem from "@/components/ui/gallery-item";
import Lightbox from "@/components/ui/lightbox";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: "", alt: "" });

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  const openLightbox = (image: { src: string, alt: string }) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-pixel text-3xl text-center mb-12 text-navy">Gallery</h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <button 
            className={`gallery-filter px-4 py-2 rounded-sm ${filter === 'all' ? 'bg-navy text-white' : 'bg-gray-200 text-navy'}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button 
            className={`gallery-filter px-4 py-2 rounded-sm ${filter === 'events' ? 'bg-navy text-white' : 'bg-gray-200 text-navy'}`}
            onClick={() => handleFilterChange('events')}
          >
            Events
          </button>
          <button 
            className={`gallery-filter px-4 py-2 rounded-sm ${filter === 'workshops' ? 'bg-navy text-white' : 'bg-gray-200 text-navy'}`}
            onClick={() => handleFilterChange('workshops')}
          >
            Workshops
          </button>
          <button 
            className={`gallery-filter px-4 py-2 rounded-sm ${filter === 'highlights' ? 'bg-navy text-white' : 'bg-gray-200 text-navy'}`}
            onClick={() => handleFilterChange('highlights')}
          >
            Highlights
          </button>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <GalleryItem 
              key={index}
              src={image.src}
              alt={image.alt}
              category={image.category}
              onClick={() => openLightbox(image)}
            />
          ))}
        </div>
        
        {/* Lightbox */}
        <Lightbox 
          isOpen={lightboxOpen} 
          onClose={closeLightbox} 
          imageSrc={currentImage.src} 
          imageAlt={currentImage.alt} 
        />
      </div>
    </section>
  );
};

export default Gallery;
