import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerBrand">
        <div className="footerTitle">Sri Panchamukha Hanuman Devalayam</div>
        <p>A sacred sanctuary welcoming devotees for daily darshan, seva and festivals.</p>
        <div className="socialLinks" aria-label="Social links">
          <span>f</span>
          <span>ig</span>
          <span>yt</span>
        </div>
      </div>
      <div className="footerLinks">
        <h2>Visit</h2>
        <Link href="/darshan-pooja">Daily Darshan</Link>
        <Link href="/darshan-pooja">Pooja Schedule</Link>
        <Link href="/events">Upcoming Festivals</Link>
        <Link href="/gallery">Photo Gallery</Link>
        <Link href="/donate">Donations</Link>
      </div>
      <address className="footerContact">
        <h2>Contact</h2>
        <span>G96H+7J4, Setwinabad, Nizampet</span>
        <span>Hyderabad, Telangana 500090</span>
        <span>Contact number to be announced</span>
        <strong>Open daily - 05:30 AM - 08:30 PM</strong>
      </address>
      <div className="mapPlaceholder" aria-label="Google Map placement area">
        <div className="mapSurface">
          <span className="mapPin" />
        </div>
        <div className="mapMeta">
          <span>G96H+7J4, Nizampet</span>
          <span>Get directions &rarr;</span>
        </div>
      </div>
    </footer>
  );
}
