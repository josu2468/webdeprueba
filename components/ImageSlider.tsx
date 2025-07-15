import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1740&auto=format&fit=crop',
  'https://hospitalessanroque.com/public/uploads/posts/2025-02/ranking-newsweek-2025-1740658425175.jpeg',
  'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=1740&auto=format&fit=crop',
  'https://hospitalessanroque.com/public/uploads/posts/2025-06/img-5805-1749813395098.jpeg',
  'https://i.pinimg.com/736x/25/67/1d/25671d8e1e97f69655f0205c16354966.jpg',
];

const ImageSlider: React.FC = () => {
  const renderImages = () => images.map((src, index) => (
    <div key={index} className="flex-shrink-0 w-[60vw] md:w-[35vw] h-64 md:h-80 mx-2">
        <img src={src} alt={`Imagen de galería ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
    </div>
  ));

  return (
    <section className="w-full overflow-hidden bg-gray-200" aria-label="Galería de imágenes de Hospitales San Roque">
      <div className="w-full inline-flex flex-nowrap">
        <div className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-scroll">
            {renderImages()}
        </div>
        <div className="flex items-center justify-center md:justify-start [&_img]:max-w-none animate-scroll" aria-hidden="true">
            {renderImages()}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;