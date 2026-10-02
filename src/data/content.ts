import { SpeakerItem, SponsorItem, FAQItemData, TestimonialItem } from "../types";

export const SPEAKERS: SpeakerItem[] = [
  {
    id: "1",
    name: "Sofia Rahman",
    role: "Production Manager",
    description: "With years of hands-on experience in event production, Sofia Rahman brings unmatched expertise in turning complex ideas into seamless sensory stages.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
    framerColor: "var(--color-selective-yellow)",
  },
  {
    id: "2",
    name: "Marcus Vance",
    role: "Head of Audio AI",
    description: "Pioneer in neural synthesizer architectures and real-time generative audio spaces for immersive world building.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80",
    framerColor: "var(--color-violet-pink)",
    isTopPadded: true,
  },
  {
    id: "3",
    name: "Elena Rostova",
    role: "Creative Technologist",
    description: "Exploring the boundary between robotic kinetic displays and algorithmic generative design languages.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
    framerColor: "var(--color-kiwi)",
  },
];

export const SPONSORS: SponsorItem[] = [
  {
    id: "pink",
    title: "Bush Babe Audio Tools",
    logoText: "BUSH BABE",
    bgColor: "var(--color-violet-pink)",
    detail: "Official audio partner powering our ultra-low latency wireless stage monitoring."
  },
  {
    id: "yellow",
    title: "Wilder Ness Hardware",
    logoText: "WILDER NESS",
    bgColor: "var(--color-selective-yellow)",
    detail: "Supporting emerging sound engineers with open micro-grant synthesis hardware."
  },
  {
    id: "terracotta",
    title: "EPYC Compute Network",
    logoText: "EPYC SYSTEMS",
    bgColor: "var(--color-light-salmon)",
    detail: "High-performance nodes powering the live interactive visual stages and shaders."
  },
  {
    id: "green",
    title: "Speckles Touch Controllers",
    logoText: "SPECKLES",
    bgColor: "var(--color-kiwi)",
    detail: "Tactile MIDI hardware and sensor kits provided for all 48-hour hackathon teams."
  },
];

export const FAQS: FAQItemData[] = [
  {
    question: "Where is the conference being held?",
    answer: "PIXEL 2025 will be held on 1st July at KOMCA DPS 1, School of Computer Sciences, Universiti Sains Malaysia in Penang.",
    rotation: -1.5,
  },
  {
    question: "What is PixelStage Conference all about 2025?",
    answer: "PIXEL stands for Project Innovation & eXploration in CS Education and Learning. It's an annual showcase for final-year Computer Science students at USM to present their projects, gain direct feedback from experts, and connect with tech companies.",
    rotation: 2.0,
  },
  {
    question: "How can I register for the event?",
    answer: "Registration opens on 26th May. Sign up through the official PIXEL USM portal using your student or developer email. Submitted projects must include slide decks and video demos.",
    rotation: -1.8,
  },
  {
    question: "Will there be networking opportunities?",
    answer: "Yes, PIXEL 2025 features dedicated breakout sessions, partner demo pods, portfolio reviews, and speed-interviews.",
    rotation: 1.6,
  },
  {
    question: "Are there any virtual attendance options?",
    answer: "The 2025 festival is an in-person event to prioritize physical hardware showcases. Keynote presentations will be uploaded to our YouTube channel post-event.",
    rotation: -2.0,
  },
  {
    question: "Can I get a refund if I can’t attend?",
    answer: "Ticket transfers are free of charge up to 72 hours before the doors open. Reach out to hello@pixelstage.org.",
    rotation: 1.5,
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote: "PixelStage delivered an unforgettable event experience. Every detail was crafted with excellence and the energy was electric.",
    name: "Sarah Mitchell",
    role: "Head of Marketing",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "2",
    quote: "The student hardware hacks were unreal. We hired two software architects straight from the stage lounge.",
    name: "David Kim",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80"
  },
  {
    id: "3",
    quote: "An energetic masterclass in neo-brutalist stage presence, technical depth, and community spirit.",
    name: "Ayesha Rahman",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
  }
];