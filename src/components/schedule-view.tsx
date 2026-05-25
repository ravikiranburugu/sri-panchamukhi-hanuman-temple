"use client";

import { useState } from "react";
import { darshanHours, poojaSchedule, specialSevas } from "@/data/temple-data";

const tabs = ["Today", "Weekly Sevas", "Monthly"] as const;

export function ScheduleView() {
  const [selected, setSelected] = useState<(typeof tabs)[number]>("Today");

  return (
    <>
      <section className="pageIntro">
        <div>
          <p className="eyebrow">VISIT &amp; WORSHIP</p>
          <h1>Darshan &amp; pooja schedules</h1>
        </div>
        <div aria-label="Schedule views" className="scheduleTabs" role="tablist">
          {tabs.map((tab) => (
            <button
              aria-selected={selected === tab}
              className={selected === tab ? "selected" : ""}
              key={tab}
              onClick={() => setSelected(tab)}
              role="tab"
              type="button"
            >
              {tab === "Weekly Sevas" ? (
                <>
                  Weekly<span className="desktopOnlyTabText"> Sevas</span>
                </>
              ) : tab}
            </button>
          ))}
        </div>
      </section>
      {selected === "Today" && (
        <div className="scheduleLayout" role="tabpanel">
          <div className="scheduleMain">
            <section className="schedulePanel">
              <header>
                <h2>Daily Darshan</h2>
                <span>Open today</span>
              </header>
              {darshanHours.map((slot) => (
                <div className={`darshanRow ${slot.closed ? "closed" : ""}`} key={slot.name}>
                  <strong>{slot.time}</strong>
                  <span>{slot.name}</span>
                  <small>{slot.detail}</small>
                </div>
              ))}
            </section>
            <section className="schedulePanel">
              <header>
                <h2>Daily Pooja<span className="desktopOnlyLabel"> Schedule</span></h2>
              </header>
              <div className="poojaRows">
                {poojaSchedule.map((ritual) => (
                  <div key={ritual.name}>
                    <strong>{ritual.time}</strong>
                    <span>{ritual.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <SpecialSevas />
        </div>
      )}
      {selected !== "Today" && (
        <div className="tabSchedule" role="tabpanel">
          <SpecialSevas />
          <p>
            Full {selected.toLowerCase()} calendar entries will be published after the temple office confirms
            official dates and participation details.
          </p>
        </div>
      )}
    </>
  );
}

function SpecialSevas() {
  return (
    <aside className="scheduleAside">
      <section className="sevaHighlight">
        <small>THIS WEEK</small>
        <h2>Special Friday Abhishekam</h2>
        <p>Friday - 06:15 AM<br />Main Sanctum</p>
        <button className="button buttonSaffron" type="button">
          View participation details
        </button>
      </section>
      <section className="sevaList">
        <h2>Weekly &amp; Monthly Sevas</h2>
        {specialSevas.map((seva) => (
          <div key={seva.day}>
            <strong>{seva.day}</strong>
            <span>{seva.name}<br /><small>{seva.time}</small></span>
          </div>
        ))}
      </section>
    </aside>
  );
}
