"use client";

import { useEffect, useMemo, useState } from "react";
import { galleryCategories, galleryMedia } from "@/data/temple-data";

export function GalleryView() {
  const [category, setCategory] = useState<(typeof galleryCategories)[number]>("Festivals");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const filtered = useMemo(() => galleryMedia.filter((item) => item.category === category), [category]);
  const selected = activeIndex === null ? null : filtered[activeIndex];

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((current) => ((current ?? 0) + 1) % filtered.length);
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) => ((current ?? 0) - 1 + filtered.length) % filtered.length);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [filtered.length, selected]);

  function selectCategory(nextCategory: (typeof galleryCategories)[number]) {
    setCategory(nextCategory);
    setActiveIndex(null);
  }

  return (
    <>
      <div aria-label="Gallery categories" className="galleryTabs" role="tablist">
        {galleryCategories.map((item) => (
          <button
            aria-selected={category === item}
            className={category === item ? "selected" : ""}
            key={item}
            onClick={() => selectCategory(item)}
            role="tab"
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="galleryLayout">
        <div className="mediaMosaic" role="tabpanel">
          {filtered.map((item, index) => (
            <button
              className={`${item.large ? "large" : ""} ${item.wide ? "wide" : ""}`}
              key={item.title}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span>{item.title}</span>
            </button>
          ))}
          <div className="lightboxHint">Click image to open full-screen lightbox</div>
        </div>
        {selected ? (
          <Lightbox
            count={filtered.length}
            index={activeIndex ?? 0}
            onClose={() => setActiveIndex(null)}
            onNext={() => setActiveIndex(((activeIndex ?? 0) + 1) % filtered.length)}
            onPrevious={() => setActiveIndex(((activeIndex ?? 0) - 1 + filtered.length) % filtered.length)}
            title={selected.title}
          />
        ) : (
          <Lightbox
            count={filtered.length}
            index={0}
            onClose={() => undefined}
            onNext={() => setActiveIndex(filtered.length > 1 ? 1 : 0)}
            onPrevious={() => setActiveIndex(filtered.length - 1)}
            preview
            title={filtered[0]?.title ?? category}
          />
        )}
      </div>
    </>
  );
}

interface LightboxProps {
  title: string;
  count: number;
  index: number;
  preview?: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

function Lightbox({ title, count, index, preview, onClose, onNext, onPrevious }: LightboxProps) {
  return (
    <section aria-label={preview ? "Lightbox interaction preview" : "Selected gallery image"} className="lightboxCard">
      <div className="lightboxHeader">
        <span>LIGHTBOX {preview ? "PREVIEW" : "OPEN"} - {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
        <button aria-label="Close image viewer" disabled={preview} onClick={onClose} type="button">
          &times;
        </button>
      </div>
      <div className="lightboxImage">
        <button aria-label="Previous image" onClick={onPrevious} type="button">&lsaquo;</button>
        <span>Full-screen photo</span>
        <button aria-label="Next image" onClick={onNext} type="button">&rsaquo;</button>
      </div>
      <div className="lightboxFooter">
        <div>
          <h2>{title}</h2>
          <p>Swipe or use arrow keys to navigate</p>
        </div>
        <div className="lightboxDots"><span /><span /><span /></div>
      </div>
    </section>
  );
}
