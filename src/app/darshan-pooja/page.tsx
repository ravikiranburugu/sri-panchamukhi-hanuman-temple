import type { Metadata } from "next";
import { ScheduleView } from "@/components/schedule-view";

export const metadata: Metadata = { title: "Darshan & Pooja Schedules" };

export default function DarshanPoojaPage() {
  return (
    <div className="innerPage schedulePage">
      <ScheduleView />
    </div>
  );
}
