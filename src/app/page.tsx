import Image from "next/image";
import Link from "next/link";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Image
          alt="Ornate temple gopuram illuminated at sunset"
          className="heroImage"
          fill
          priority
          src={`${basePath}/images/hero-temple.avif`}
        />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="heroEyebrow">SRI PANCHAMUKHA HANUMAN DEVALAYAM</p>
          <h1>
            A luminous home for prayer<span className="desktopHeroText"> and tradition</span>
          </h1>
          <p className="heroText">
            <span className="desktopHeroText">
              Experience daily darshan, sacred sevas and festival celebrations in a welcoming spiritual home.
            </span>
            <span className="mobileHeroText">Daily darshan, sacred sevas and festivals.</span>
          </p>
          <div className="heroActions">
            <Link className="button buttonSaffron" href="/darshan-pooja">
              <span className="desktopHeroText">View </span>Today&apos;s Timings
            </Link>
            <Link className="button buttonOutline" href="/about">
              Explore Temple
            </Link>
          </div>
        </div>
        <div aria-hidden="true" className="sliderDots">
          <span className="selected" />
          <span />
          <span />
        </div>
      </section>
      <section className="glance">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">AT A GLANCE</p>
            <h2>Plan your<span className="desktopHeroText"> sacred</span> visit</h2>
          </div>
          <p>Everything devotees need today, organised with clarity and care.</p>
        </div>
        <div className="glanceCards">
          <Link className="specialCard" href="/events">
            <small>TODAY&apos;S SPECIAL</small>
            <h3>Ekadashi Alankara Seva</h3>
            <span>
              06:30 PM - Maha Mandapam <b>Details &rarr;</b>
            </span>
          </Link>
          <Link className="glanceCard" href="/darshan-pooja">
            <span className="cardIcon">{"\u25F7"}</span>
            <h3>Darshan Timings</h3>
            <span>Open until 8:30 PM &rarr;</span>
          </Link>
          <Link className="glanceCard" href="/events">
            <span className="cardIcon">{"\u2726"}</span>
            <h3>Festivals</h3>
            <span>Upcoming events &rarr;</span>
          </Link>
          <Link className="glanceCard" href="/donate">
            <span className="cardIcon">{"\u20B9"}</span>
            <h3>Donation Desk</h3>
            <span>Contribute securely &rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
