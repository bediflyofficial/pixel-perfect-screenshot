import founderAsset from '@/assets/founder.png.asset.json';
import fatemaAsset from '@/assets/fatema-yellow.png.asset.json';
import class1 from '@/assets/class-image-9.png.asset.json';
import class2 from '@/assets/class-image-10.png.asset.json';
import class3 from '@/assets/class-image-11.png.asset.json';
import class4 from '@/assets/class-image-12.png.asset.json';
import profiAsset from '@/assets/profi.png.asset.json';
import communityAsset from '@/assets/community.jpg.asset.json';
import {
  Video,
  UserRound,
  Trophy,
  Sparkles,
  CalendarClock,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'IELTS', href: '#ielts' },
  { label: 'Founder', href: '#founder' },
  { label: 'Tutors', href: '#tutors' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQs', href: '#faqs' },
];

export const STATS = [
  { value: '12,000+', label: 'Students coached' },
  { value: '4.9/5', label: 'Average rating' },
  { value: '1-on-1', label: 'Live sessions' },
  { value: '1×', label: 'Demo class' },
];

export type Feature = { icon: LucideIcon; title: string; desc: string };
export const FEATURES: Feature[] = [
  {
    icon: Video,
    title: 'Live & Interactive Learning',
    desc: 'Engage in real-time conversations with seasoned educators for immediate feedback and practical application.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Learning Plans',
    desc: 'Choose from 1-month, 3-month, or 6-month courses tailored to fit your schedule and learning pace.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Resources',
    desc: 'Access class recordings, practice materials, and a supportive community to accelerate your progress.',
  },
  {
    icon: UserRound,
    title: 'Personalized 1-on-1',
    desc: 'Fully personalized sessions conducted one-on-one, held entirely online around your goals.',
  },
  {
    icon: Trophy,
    title: 'Proven Success Record',
    desc: 'Thousands of learners have achieved their fluency goals and grown in confidence with EDUVATEE.',
  },
  {
    icon: Sparkles,
    title: 'Beyond Grammar',
    desc: 'Speaking, listening, writing, interview prep, professional communication and soft-skills training.',
  },
];

export type Plan = {
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  cta: string;
};

export const SPOKEN_PLANS: Plan[] = [
  {
    name: 'Starter Package',
    tagline: 'Build your foundation',
    price: '₹4,999',
    period: '/ 1 month',
    features: [
      '8 live 1-on-1 sessions',
      'Basic grammar & vocabulary',
      'Speaking confidence drills',
      'Class recordings access',
      'WhatsApp doubt support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth Package',
    tagline: 'Most popular choice',
    price: '₹11,999',
    period: '/ 3 months',
    popular: true,
    features: [
      '24 live 1-on-1 sessions',
      'Advanced fluency training',
      'Interview & soft-skills prep',
      'Complimentary group sessions',
      'Personalized practice material',
      'Progress tracking reports',
    ],
    cta: 'Choose Growth',
  },
  {
    name: 'Pro Package',
    tagline: 'Master complete fluency',
    price: '₹19,999',
    period: '/ 6 months',
    features: [
      '48 live 1-on-1 sessions',
      'Professional communication',
      'Public speaking mastery',
      'Dedicated tutor throughout',
      'Capstone fluency review',
      'Lifetime resource access',
    ],
    cta: 'Go Pro',
  },
];

export const IELTS_PLANS: Plan[] = [
  {
    name: 'Quick Plan',
    tagline: 'Last-mile polishing',
    price: '₹6,999',
    period: '/ 2 weeks',
    features: [
      '6 intensive sessions',
      'Band 7+ strategies',
      'Mock tests & feedback',
      'Speaking cue cards',
    ],
    cta: 'Start Quick Plan',
  },
  {
    name: 'Transitional Plan',
    tagline: 'Balanced preparation',
    price: '₹14,999',
    period: '/ 4 weeks',
    popular: true,
    features: [
      '16 focused sessions',
      'All four modules drilled',
      'Writing task reviews',
      'Weekly mock band scores',
      'Vocabulary booster pack',
    ],
    cta: 'Choose Transitional',
  },
  {
    name: 'Sustainable Plan',
    tagline: 'Full score transformation',
    price: '₹29,999',
    period: '/ 8 weeks',
    features: [
      '32 comprehensive sessions',
      'Targeted band 8 roadmap',
      'Unlimited writing reviews',
      'Speaking fluency intensive',
      'Personal mentor + planner',
    ],
    cta: 'Go Sustainable',
  },
];

export type Tutor = { name: string; role: string; note: string; img: string };
export const TUTORS: Tutor[] = [
  {
    name: 'Dr. Meenu Ganju',
    role: 'Founder · Digital Marketing & AI Trainer',
    note: 'Trained 1000+ students',
    img: founderAsset.url,
  },
  {
    name: 'Ms. Profi',
    role: 'Spoken English Trainer',
    note: 'Trained 800+ students',
    img: profiAsset.url,
  },
  {
    name: 'Ms. Fatema',
    role: 'Certified English Trainer',
    note: 'Trained 800+ students',
    img: fatemaAsset.url,
  },
];

export type Review = {
  name: string;
  role: string;
  text: string;
  img: string;
};
export const REVIEWS: Review[] = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer, Pune',
    text: 'I went from hesitating to speak in meetings to leading client calls in English. The 1-on-1 attention made all the difference.',
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Karan Patel',
    role: 'IELTS Student, Band 8',
    text: 'The Transitional Plan was exactly what I needed. My writing score jumped from 6 to 7.5 in four weeks. Worth every rupee.',
    img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Anjali Reddy',
    role: 'College Student, Hyderabad',
    text: 'I always feared speaking English in public. The group sessions helped me overcome that fear completely. Now I present confidently.',
    img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Vikram Singh',
    role: 'Sales Professional, Mumbai',
    text: 'Flexible timings meant I could learn after work. My sales calls in English feel natural now. The Growth package is perfect.',
    img: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Neha Gupta',
    role: 'Homemaker, Jaipur',
    text: 'At 42 I thought it was too late. Dr. Meenu and the team made me believe otherwise. I can now help my kids with their English homework.',
    img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Aditya Nair',
    role: 'Job Seeker, Kochi',
    text: 'The interview preparation module was a game-changer. I cracked three interviews after the course. The mock sessions are gold.',
    img: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];

export type Faq = { q: string; a: string };
export const FAQS: Faq[] = [
  {
    q: 'What is the duration of the spoken English course?',
    a: 'The duration of the course ranges from 1 to 6 months, depending on your specific requirements and learning goals.',
  },
  {
    q: 'Do I need to know any English before joining?',
    a: 'No, we offer courses for beginners, intermediate, and advanced learners, so you can join based on your current proficiency level.',
  },
  {
    q: 'What do I need for the course?',
    a: 'You will need a laptop or mobile device with a stable internet connection.',
  },
  {
    q: 'How are the classes conducted?',
    a: 'The sessions are fully personalized, conducted one-on-one, and held entirely online.',
  },
  {
    q: 'With one-on-one sessions, how can I improve my public speaking?',
    a: 'Although the sessions are one-on-one, we also conduct complimentary group sessions regularly. These allow you to practice speaking in front of a larger audience and enhance your public speaking skills.',
  },
  {
    q: 'Do I get a trial before enrolling?',
    a: 'Yes, we offer a Demo Class before enrollment. It allows you to experience the teaching style, atmosphere, and learning environment before committing to the course.',
  },
  {
    q: 'Will I have the same tutor throughout the entire course, or will it change?',
    a: "You will have a dedicated tutor for the entire course. However, if you're not comfortable with your assigned tutor, we're happy to assign an alternative that better suits your needs.",
  },
  {
    q: 'Will I be trained solely in spoken English, or are other areas covered as well?',
    a: 'We train you in all aspects of communication, including speaking, listening, and writing. Additionally, we offer specialized training in interview preparation, professional communication, and soft skills development.',
  },
];

export type GalleryItem = { src: string; alt: string };
export const GALLERY: GalleryItem[] = [
  { src: class1.url, alt: 'EDUVATEE live group English class on Zoom' },
  { src: class2.url, alt: 'One-on-one EDUVATEE spoken English session' },
  { src: class3.url, alt: 'Students practising speaking in a live EDUVATEE batch' },
  { src: class4.url, alt: 'EDUVATEE trainer coaching a learner live' },
];

export const HERO_IMG = '/assets/hero-desk.png';
export const COMMUNITY_IMG = communityAsset.url;
export const FOUNDER_IMG = founderAsset.url;

export const CONTACTS = {
  phone: '+91 63573 48400',
  email: 'support@eduvatee.com',
  whatsapp: 'https://wa.link/35ukxk',
  instagram: 'https://instagram.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://linkedin.com',
};
