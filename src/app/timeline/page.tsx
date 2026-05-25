import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { milestones } from "@/data/temple-data";

export const metadata: Metadata = { title: "Temple Timeline" };

export default function TimelinePage() {
  return (
    <div className="innerPage">
      <PageIntro
        description="A recently established temple serving devotees in Nizampet, Hyderabad."
        eyebrow="TEMPLE TIMELINE"
        title="A growing place of devotion"
      />
      <section aria-label="Temple milestones" className="timelineTrack">
        {milestones.map((milestone) => (
          <article className="timelineItem" key={milestone.year}>
            <div className="timelineYear">{milestone.year}</div>
            <div className="timelineLine">
              <span />
            </div>
            <div className="timelineCopy">
              <h2>{milestone.title}</h2>
              <p>{milestone.description}</p>
            </div>
            <div className="archiveImage">ARCHIVAL PHOTO</div>
          </article>
        ))}
      </section>
    </div>
  );
}
