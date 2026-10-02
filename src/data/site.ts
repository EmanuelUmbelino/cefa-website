import type { ImageMetadata } from 'astro';
import type { IconName } from '@/components/Icon.astro';
import julianaPhoto from '@/assets/team/juliana-janot.webp';
import taylorPhoto from '@/assets/team/taylor-nitzsche.webp';
import fernandaPhoto from '@/assets/team/fernanda-tomaselli.webp';

/**
 * All site copy lives here. Components only handle layout.
 * Sources: CEFA's mission/vision statements and @climateeducation4all posts.
 */

const email = 'climateeducationforall@gmail.com';
const instagramUrl = 'https://www.instagram.com/climateeducation4all/';

export const site = {
  name: 'Climate Education for All',
  shortName: 'CEFA',
  title: 'Climate Education for All (CEFA)',
  description:
    'CEFA is a student-led movement expanding climate education to every university student — empowering a generation of climate-conscious professionals to drive change in their fields.',
  email,
  instagram: {
    handle: '@climateeducation4all',
    url: instagramUrl,
  },
  linktree: 'https://linktr.ee/climateeducationforall',
  foundedYear: 2025,
};

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'what-we-do', label: 'What we do' },
  { id: 'values', label: 'Values' },
  { id: 'team', label: 'Team' },
  { id: 'get-involved', label: 'Get involved' },
] as const;

export const hero = {
  tagline: 'Climate education for every university student.',
  lead: 'A student-led network expanding climate literacy across universities — from Canada to the world — so every graduate is ready to act on the climate emergency in their field.',
};

export const about = {
  title: 'A student-led movement for climate literacy',
  paragraphs: [
    'Climate Education for All (CEFA) is an organization dedicated to expanding climate literacy across universities. We believe that understanding the climate emergency — its causes and its impacts — should not be limited to environmental degrees.',
    'Engineers, nurses, economists, artists, lawyers: every profession will shape how we respond to the climate crisis. CEFA brings students together to make climate education part of every university experience.',
  ],
  stats: [
    { value: '2025', label: 'Founded by students in Canada' },
    { value: '9', label: 'Universities in our ambassador trainings' },
    { value: '2', label: 'Campus campaigns, at UBC and Acadia' },
  ],
};

export const mission = {
  mission:
    'To inspire a student-led movement that expands climate education to all university students, empowering a generation of climate-conscious professionals to make actionable change in their fields.',
  vision:
    'Every young professional understands the climate emergency — its causes and impacts — and is actively engaged in driving climate solutions.',
};

export const programs: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'graduation',
    title: 'Ambassador trainings',
    text: 'We train student ambassadors to lead climate education on their own campuses. Our first workshops brought together ambassadors from nine universities.',
  },
  {
    icon: 'megaphone',
    title: 'Campus campaigns',
    text: 'CEFA chapters campaign for climate education to reach every student in their university, with actions and wins already at UBC and Acadia University.',
  },
  {
    icon: 'message',
    title: 'Community spaces',
    text: 'Climate conversations too often happen in silos. We host gatherings, like our community potluck at the UBC Farm, where people share food, ideas and resources.',
  },
];

export const values: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'users',
    title: 'Community',
    text: 'Our work feeds stronger communities, and CEFA is only possible with many community hands working together.',
  },
  {
    icon: 'sunrise',
    title: 'Hope',
    text: 'The through-line that keeps us moving. We must keep believing that positive change is possible.',
  },
  {
    icon: 'zap',
    title: 'Action',
    text: 'Through action, we do the work that needs to get done and lead transformative change.',
  },
  {
    icon: 'heart',
    title: 'Love',
    text: 'The heart of how we move: the value guiding compassion and service in everything we do.',
  },
  {
    icon: 'ear',
    title: 'Listening',
    text: 'The key to communication and collaboration. We stay open to new ideas and look for common ground.',
  },
  {
    icon: 'lightbulb',
    title: 'Collaboration',
    text: 'Together we are stronger. We need everyone’s ideas to inspire the creativity CEFA’s goals demand.',
  },
];

export const symbol = {
  title: 'The story behind our logo',
  lead: 'Our logo blends all the elements of nature into one shape. What do you see?',
  meanings: [
    {
      title: 'A tree',
      text: 'Rooted in a strong mission and vision.',
    },
    {
      title: 'A helping hand',
      text: 'For each other, and for climate action.',
    },
    {
      title: 'A wave',
      text: 'The CEFA movement, growing across campuses.',
    },
    {
      title: 'A bird’s wing',
      text: 'A symbol of peace, hope, justice and a climate-safe future.',
    },
  ],
  credit: { name: '@arts_so.m', url: 'https://www.instagram.com/arts_so.m/' },
};

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** Add a portrait by importing it from src/assets/team/. Initials are shown until then. */
  photo?: ImageMetadata;
}

export const team: TeamMember[] = [
  {
    name: 'Juliana Janot',
    role: 'Executive Director',
    photo: julianaPhoto,
    bio: 'A Top 25 Environmentalist Under 25 in Canada and student at UBC, Juliana started her socio-environmental journey at age 11. She co-founded several initiatives, including the nonprofit Construindo o Futuro (CF), which empowers youth across Brazil to promote community sustainable development.',
  },
  {
    name: 'Taylor Nitzsche',
    role: 'Program Director',
    photo: taylorPhoto,
    bio: 'A Climate75 fellow with the Starfish Canada and George Kennedy Prize graduate from UBC in environmental management and sustainable development. Her projects span from climate communications to impact evaluation. Outside, she is a yoga teacher and avid practitioner.',
  },
  {
    name: 'Dr. Fernanda Tomaselli',
    role: 'Lead Advisor',
    photo: fernandaPhoto,
    bio: 'UBC Assistant Professor with expertise in climate pedagogies, environmental communication, ecological economics, and conservation.',
  },
];

export const involve = {
  title: 'Join the movement',
  lead: 'CEFA grows one campus at a time. Whether you are a student, an educator or an organization, there is a place for you in this network.',
  ways: [
    {
      icon: 'sprout',
      title: 'Become an ambassador',
      text: 'Bring CEFA to your university. We will train you and connect you with students leading campaigns across the country.',
      cta: 'Get in touch',
      href: `mailto:${email}?subject=Becoming%20a%20CEFA%20ambassador`,
    },
    {
      icon: 'handshake',
      title: 'Partner with us',
      text: 'Educators, nonprofits and institutions: help us make climate education part of every degree.',
      cta: 'Start a conversation',
      href: `mailto:${email}?subject=Partnering%20with%20CEFA`,
    },
    {
      icon: 'instagram',
      title: 'Follow along',
      text: 'Recruitment calls, events and campaign wins are shared first on our Instagram.',
      cta: '@climateeducation4all',
      href: instagramUrl,
    },
  ] satisfies { icon: IconName; title: string; text: string; cta: string; href: string }[],
};

export const credits = {
  heroPhoto: {
    author: 'Dan Otis',
    url: 'https://unsplash.com/photos/OYFHT4X5isg',
  },
};
