import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { donationSchemes } from "@/data/temple-data";

export const metadata: Metadata = { title: "Donate" };

const bankFields = [
  ["Account Holder", "[Official Temple Trust Name]"],
  ["Bank & Branch", "[Bank Name, Branch Name]"],
  ["Account Number", "[Insert Account Number]"],
  ["IFSC Code", "[Insert IFSC Code]"],
  ["Account Type", "[Savings / Current]"],
] as const;

export default function DonatePage() {
  return (
    <div className="innerPage donationPage">
      <PageIntro
        description="Every contribution helps sustain daily worship, annadanam and maintenance of the temple."
        eyebrow="OFFERING & SEVA"
        title="Support the temple"
      />
      <section className="donationLayout">
        <article className="bankCard">
          <header>
            <h2><span className="desktopOnlyLabel">Official </span>Bank details</h2>
            <span>DETAILS PENDING</span>
          </header>
          <div className="bankRows">
            {bankFields.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <button className="button buttonPrimary bankButton" disabled type="button">
            Copy bank details
          </button>
        </article>
        <article className="qrCard">
          <h2>Scan to donate</h2>
          <p>UPI payment via GPay, PhonePe, Paytm or BHIM</p>
          <div aria-label="High-resolution UPI QR code placeholder" className="qrPlaceholder">
            {Array.from({ length: 10 }, (_, index) => <span key={index} />)}
          </div>
          <strong>HIGH-RES UPI QR PLACEHOLDER</strong>
          <p>UPI ID: [Official UPI ID]</p>
        </article>
        <aside className="donationSide">
          <section className="schemeCard">
            <h2>Donation schemes</h2>
            {donationSchemes.map((scheme) => (
              <span key={scheme}>{scheme} &rarr;</span>
            ))}
          </section>
          <section className="taxNotice">
            <strong>80G TAX EXEMPTION</strong>
            <p>Tax exemption details will apply only if officially approved and published by the Trust.</p>
          </section>
        </aside>
      </section>
    </div>
  );
}
