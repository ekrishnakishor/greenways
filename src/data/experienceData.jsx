import boatPic1 from "../assets/boat-pic-1.webp";
import boatPic2 from "../assets/boat-pic-2.webp";
import boatInt1 from "../assets/boat-int-1.webp";
import boatInt2 from "../assets/boat-int-2.webp";
import sectionImg1 from "../assets/section-img-1.webp"; // Bathroom/Interior
import sectionImg2 from "../assets/section-img-2.webp"; // Vertical View
// import sectionImg4 from "../assets/section-img-4.webp"; // Aerial/Top View
import sectionImg5 from "../assets/section-img-5.webp"; // Bedroom
import sectionImg6 from "../assets/section-img-6.webp"; // Hallway

export const experienceData = [
  // --- ROW 1 ---
  {
    id: 1,
    type: "youtube",
    src: "2k06MmlAKfU", // Experience Video
    title: "The Full Greenway Experience",
    size: "wide",
  },
  {
    id: 2,
    type: "image",
    src: boatPic1,
    title: "Cruising through the mist",
    size: "wide",
  },

  // --- ROW 2 ---
  {
    id: 3,
    type: "image",
    src: sectionImg2, // Vertical Sunset
    title: "Sunset vibes from the deck",
    size: "tall",
  },
  {
    id: 4,
    type: "image",
    src: boatInt1, // Living Area
    title: "Luxury Living Area",
    size: "small",
  },
  {
    id: 5,
    type: "image",
    src: sectionImg1, // Washroom
    title: "Modern Amenities",
    size: "small",
  },
  {
    id: 6,
    type: "image",
    src: sectionImg6, // Hallway
    title: "Spacious Corridors",
    size: "tall",
  },

  // --- ROW 3 ---
  {
    id: 7,
    type: "youtube",
    src: "ZfVCEZ82tZY", // Ambient Video
    title: "Morning Calm on the Water",
    size: "wide",
  },
  {
    id: 8,
    type: "image",
    src: sectionImg5, // Bedroom
    title: "Comfortable A/C Bedrooms",
    size: "small",
  },
  {
    id: 9,
    type: "image",
    src: boatInt2, // Lounge
    title: "Relax in style",
    size: "small",
  },

  // --- ROW 4 (Adjusted) ---
  {
    id: 10,
    type: "image",
    src: boatPic2, // Boat angle
    title: "Ready for departure",
    size: "wide", // CHANGED TO WIDE to fill the gap
  },
];
