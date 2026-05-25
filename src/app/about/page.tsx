import type { Metadata } from "next";

export const metadata: Metadata = { title: "About & Deities" };

export default function AboutPage() {
  return (
    <div className="contentPage">
      <section className="aboutIntro">
        <div className="aboutTitle">
          <p className="eyebrow">ABOUT THE TEMPLE</p>
          <h1>A new sanctuary for prayer and seva</h1>
          <span className="goldRule" />
        </div>
        <div className="aboutStory">
          <p>
            Sri Panchamukha Hanuman Devalayam is a recently established place of worship in Nizampet,
            Hyderabad, welcoming devotees for prayer, pooja and seva.
          </p>
          <p>
            Built approximately three years ago, the temple is dedicated to Panchamukha Hanuman and houses
            several revered deities within the complex.
          </p>
          <div className="heritageStats">
            <div>
              <strong>3</strong>
              <span>YEARS SINCE BUILT</span>
            </div>
            <div>
              <strong>06</strong>
              <span>DEITIES</span>
            </div>
          </div>
        </div>
      </section>
      <section className="deities">
        <div className="sectionHeading compact">
          <h2>Deities of the sanctum</h2>
          <p>Moolavirat and Parivara Devatas</p>
        </div>
        <div className="deityGrid">
          <article className="deityFeatured">
            <div className="assetLabel">HIGH-RES DEITY PHOTO</div>
            <div>
              <small>MOOLAVIRAT</small>
              <h3>Panchamukha Hanuman</h3>
              <p>The principal deity of Sri Panchamukha Hanuman Devalayam.</p>
            </div>
          </article>
          <article className="deityCard">
            <div className="deityPlaceholder">DEITY IMAGE<br />PLACEMENT</div>
            <div>
              <small>SANCTUM DEITY</small>
              <h3>Marakatha Shiva Lingam</h3>
              <p>Deity housed within the temple complex.</p>
            </div>
          </article>
          <article className="deityCard">
            <div className="deityPlaceholder darker">DEITY IMAGE<br />PLACEMENT</div>
            <div>
              <small>SANCTUM DEITY</small>
              <h3>Lalitha Parameswari Devi</h3>
              <p>Deity housed within the temple complex.</p>
            </div>
          </article>
          <article className="deityCard">
            <div className="deityPlaceholder">DEITY IMAGE<br />PLACEMENT</div>
            <div>
              <small>SANCTUM DEITY</small>
              <h3>Valli Devasena Sametha Subramanya Swamy</h3>
              <p>Deity housed within the temple complex.</p>
            </div>
          </article>
          <article className="deityCard">
            <div className="deityPlaceholder darker">DEITY IMAGE<br />PLACEMENT</div>
            <div>
              <small>SANCTUM DEITY</small>
              <h3>Lakshmi Ganapathi</h3>
              <p>Deity housed within the temple complex.</p>
            </div>
          </article>
          <article className="deityCard">
            <div className="deityPlaceholder">DEITY IMAGE<br />PLACEMENT</div>
            <div>
              <small>SANCTUM DEITY</small>
              <h3>Naga Deva</h3>
              <p>Deity housed within the temple complex.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
