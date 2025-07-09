import { X } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const Lightbox = ({ isOpen, onClose, imageSrc, imageAlt }: LightboxProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    // Set body overflow to hidden when lightbox is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      <div className="relative max-w-4xl w-full">
        <button 
          className="absolute top-4 right-4 text-white text-3xl hover:text-[#f2c14e]"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <X size={32} />
        </button>
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="max-w-full max-h-[80vh] mx-auto"
        />
      </div>
    </div>
  );
};

export default Lightbox;
