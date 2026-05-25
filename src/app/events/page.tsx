import type { Metadata } from "next";
import Link from "next/link";
import { events } from "@/data/temple-data";

export const metadata: Metadata = { title: "Events & Festivals" };

export default function EventsPage() {
  const [featured, ...upcoming] = events;
  return (
    <div className="innerPage eventPage">
      <section className="eventsHeading">
        <div>
          <p className="eyebrow">CELEBRATIONS</p>
          <h1>Upcoming events &amp; festivals</h1>
        </div>
        <Link className="textLink" href="/gallery">
          View past events gallery &rarr;
        </Link>
      </section>
      <section className="eventsLayout">
        <article className="featuredEvent">
          <div className="festivalAsset">Festival Image</div>
          <div className="featuredCopy">
            <div className="eventTags">
              <span>{featured.tag}</span>
              <span className="highlight">UPCOMING</span>
            </div>
            <h2>{featured.title}</h2>
            <p>{featured.date} - {featured.time}<br />{featured.venue}</p>
            <p>{featured.description}</p>
          </div>
        </article>
        <div className="eventList">
          {upcoming.map((event) => (
            <article className="eventCard" key={event.title}>
              <div className="dateBlock">
                <span>{event.month}</span>
                <strong>{event.day}</strong>
              </div>
              <div className="eventBody">
                <h2>{event.title}</h2>
                <p>{event.time} - {event.venue}</p>
                <p>{event.description}</p>
              </div>
              <small>{event.tag}</small>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
