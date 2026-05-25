import type { Metadata } from "next";
import { GalleryView } from "@/components/gallery-view";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Photo & Video Gallery" };

export default function GalleryPage() {
  return (
    <div className="innerPage galleryPage">
      <PageIntro
        description="Browse celebrations, rituals and temple moments through our visual gallery."
        eyebrow="MEDIA GALLERY"
        title="Temple moments"
      />
      <GalleryView />
    </div>
  );
}
