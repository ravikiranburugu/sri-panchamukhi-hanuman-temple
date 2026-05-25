export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Timeline", href: "/timeline" },
  { label: "Darshan & Pooja", href: "/darshan-pooja" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Donate", href: "/donate" },
] as const;

interface DarshanSlot {
  time: string;
  name: string;
  detail: string;
  closed?: boolean;
}

export const darshanHours: readonly DarshanSlot[] = [
  { time: "05:30 AM - 12:30 PM", name: "Morning Darshan", detail: "Main sanctum open" },
  { time: "12:30 PM - 04:30 PM", name: "Afternoon Closure", detail: "Sanctum closed", closed: true },
  { time: "04:30 PM - 08:30 PM", name: "Evening Darshan", detail: "Closes after Ekanta Seva" },
];

export const poojaSchedule = [
  { time: "06:00 AM", name: "Suprabhata Seva" },
  { time: "07:00 AM", name: "Daily Abhishekam" },
  { time: "12:30 PM", name: "Maha Naivedyam & Afternoon Closure" },
  { time: "06:30 PM", name: "Evening Aarti" },
  { time: "08:00 PM", name: "Ekanta Seva" },
] as const;

export const specialSevas = [
  { day: "FRIDAY", name: "Special Abhishekam", time: "06:15 AM" },
  { day: "PRADOSHA", name: "Pradosha Pooja", time: "05:45 PM" },
  { day: "POURNAMI", name: "Deepa Alankaram", time: "07:00 PM" },
] as const;

export const milestones = [
  {
    year: "APPROX. 3 YEARS AGO",
    title: "Temple Established",
    description:
      "Sri Panchamukha Hanuman Devalayam was built in Nizampet, Hyderabad, as a place for worship and community devotion.",
  },
  {
    year: "PRESENT",
    title: "Daily Worship & Seva",
    description:
      "The temple welcomes devotees for darshan and worship of Panchamukha Hanuman and the other deities in the complex.",
  },
] as const;

export const events = [
  {
    date: "12 June 2026",
    day: "12",
    month: "JUN",
    time: "05:30 AM",
    title: "Brahmotsavam Festival",
    venue: "Temple Processional Street",
    tag: "MAJOR FESTIVAL",
    description: "Join the ceremonial procession, alankaram and special prasadam distribution.",
    featured: true,
  },
  {
    date: "21 June 2026",
    day: "21",
    month: "JUN",
    time: "06:00 AM",
    title: "Ekadashi Seva",
    venue: "Main Sanctum",
    tag: "RITUAL",
    description: "Special morning worship and Vishnu Sahasranamam recitation.",
  },
  {
    date: "03 July 2026",
    day: "03",
    month: "JUL",
    time: "06:30 PM",
    title: "Spiritual Discourse",
    venue: "Sabha Hall",
    tag: "DISCOURSE",
    description: "An evening talk on devotion, dharma and temple tradition.",
  },
  {
    date: "16 August 2026",
    day: "16",
    month: "AUG",
    time: "07:00 PM",
    title: "Krishna Janmashtami",
    venue: "Maha Mandapam",
    tag: "FESTIVAL",
    description: "Night alankaram with bhajans and prasadam offerings.",
  },
] as const;

export const galleryCategories = [
  "Festivals",
  "Daily Rituals",
  "Temple Architecture",
  "Temple Moments",
  "Videos",
] as const;

type GalleryCategory = (typeof galleryCategories)[number];

interface GalleryItem {
  title: string;
  category: GalleryCategory;
  large?: boolean;
  wide?: boolean;
}

export const galleryMedia: readonly GalleryItem[] = [
  { title: "Brahmotsavam procession", category: "Festivals", large: true },
  { title: "Deepa Alankaram", category: "Festivals" },
  { title: "Temple tower", category: "Temple Architecture" },
  { title: "Festival decorations", category: "Festivals", wide: true },
  { title: "Morning Abhishekam", category: "Daily Rituals", large: true },
  { title: "Sacred Aarti", category: "Daily Rituals", wide: true },
  { title: "Sculpted pillars", category: "Temple Architecture", large: true },
  { title: "Temple mandapam", category: "Temple Moments", wide: true },
  { title: "Festival procession film", category: "Videos", large: true },
];

export const donationSchemes = [
  "Annadanam",
  "Nitya Pooja Fund",
  "Temple Maintenance",
  "Veda Pathashala Support",
] as const;
