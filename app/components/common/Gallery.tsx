import Title from "../Title";
import GalleryGrid from "../GalleryGrid";

export default function Gallery() {
  return (
    <section
      className="py-20 px-6 md:px-10"
      id="gallery"
    >
      <div className="mx-auto max-w-[1200px]">
        <Title
          title="Nuestra galería"
          subtitle="Resultados que hablan por sí mismos"
        />
        <GalleryGrid />
      </div>
    </section>
  );
}