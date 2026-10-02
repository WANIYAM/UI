export interface SpeakerItem {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  framerColor: string;
  isTopPadded?: boolean;
}

export interface SponsorItem {
  id: string;
  title: string;
  logoText: string;
  bgColor: string;
  detail: string;
}

export interface FAQItemData {
  question: string;
  answer: string;
  rotation: number;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: string;
}