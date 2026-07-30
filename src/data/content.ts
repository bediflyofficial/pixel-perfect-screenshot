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
  { value: '₹99', label: 'Demo class' },
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

export type Tutor = { name: string; role: string; img: string };
export const TUTORS: Tutor[] = [
  {
    name: 'Dr. Meenu Ganju',
    role: 'Founder & Lead Coach',
    img: '/images/ChatGPT_Image_Jul_29,_2026,_04_24_27_PM.png',
  },
  {
    name: 'Aarav Mehta',
    role: 'Fluency & Speaking Coach',
    img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=720&fit=crop',
  },
  {
    name: 'Sara Khan',
    role: 'IELTS Specialist',
    img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600&h=720&fit=crop',
  },
  {
    name: 'Rohan Verma',
    role: 'Communication & Soft Skills',
    img: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600&h=720&fit=crop',
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
    q: 'How long are the courses?',
    a: 'The duration ranges from 1 to 6 months, depending on your specific requirements and learning goals.',
  },
  {
    q: 'Do I need to be fluent already to join?',
    a: 'No. We offer courses for beginners, intermediate, and advanced learners, so you can join based on your current proficiency level.',
  },
  {
    q: 'What do I need to attend sessions?',
    a: 'You will need a laptop or mobile device with a stable internet connection. Sessions are held entirely online.',
  },
  {
    q: 'Are the sessions really personalized?',
    a: 'Yes. Sessions are fully personalized and conducted one-on-one, tailored to your pace and goals.',
  },
  {
    q: 'Do you offer group sessions too?',
    a: 'Although core sessions are one-on-one, we run complimentary group sessions regularly so you can practice speaking in front of a larger audience and build public-speaking confidence.',
  },
  {
    q: 'Can I try a class before committing?',
    a: 'Yes. We offer a demo class for just ₹99 so you can experience the teaching style, atmosphere, and learning environment before committing to a course.',
  },
  {
    q: 'What if I do not connect with my tutor?',
    a: 'You will have a dedicated tutor for the entire course. If you are not comfortable with your assigned tutor, we are happy to assign an alternative that better suits your needs.',
  },
  {
    q: 'What skills do you train me in?',
    a: 'We train you in all aspects of communication — speaking, listening, and writing — plus specialized training in interview preparation, professional communication, and soft-skills development.',
  },
];

export const GALLERY = [
  'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
  'https://images.pexels.com/photos/5905749/pexels-photo-5905749.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
  'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
  'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
  'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
  'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
];

export const HERO_IMG =
  'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1100&h=1200&fit=crop';
export const COMMUNITY_IMG =
  'https://images.pexels.com/photos/5905749/pexels-photo-5905749.jpeg?auto=compress&cs=tinysrgb&w=1100&h=900&fit=crop';
export const FOUNDER_IMG = '/images/ChatGPT_Image_Jul_29,_2026,_04_24_27_PM.png';

export const CONTACTS = {
  phone: '+91 98765 43210',
  email: 'hello@eduvatee.com',
  whatsapp: 'https://wa.me/919876543210',
  instagram: 'https://instagram.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://linkedin.com',
};
