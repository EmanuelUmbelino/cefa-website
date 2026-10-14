import type { ImageMetadata } from 'astro';
import onboardingParty from '@/assets/campaigns/ubc/onboarding-party.jpg';
import sustainabilityFellows from '@/assets/campaigns/ubc/sustainability-fellows-2024.jpg';
import survey from '@/assets/campaigns/ubc/survey-2025.jpg';
import artsCommittee from '@/assets/campaigns/ubc/arts-committee.jpg';
import lfsFacultyCouncil from '@/assets/campaigns/ubc/lfs-faculty-council.jpg';
import comm105 from '@/assets/campaigns/ubc/comm105-win.jpg';
import scienceDean from '@/assets/campaigns/ubc/science-associate-dean.jpg';
import volunteerSocial from '@/assets/campaigns/ubc/volunteer-social.jpg';
import lfsSymposium from '@/assets/campaigns/ubc/lfs-symposium.jpg';
import sustainabilityHub from '@/assets/campaigns/ubc/sustainability-hub.jpg';

/**
 * Campaign pages. Each campaign gets a card on /campaigns/ and its own page.
 * Photos come from CEFA's shared Drive folder (UBC CEFA Pictures).
 */

export interface TimelineEntry {
  date: string;
  text: string;
  /** Marks a milestone for the whole CEFA network (shown with a star). */
  milestone?: boolean;
  /** Marks a confirmed campaign win. */
  win?: boolean;
  url?: string;
}

export interface Photo {
  src: ImageMetadata;
  alt: string;
  caption: string;
}

export const ubc = {
  slug: 'ubc-vancouver',
  name: 'University of British Columbia Vancouver',
  shortName: 'UBC Vancouver',
  location: 'Vancouver, BC',
  since: 'Fall 2024',
  summary:
    'Where the CEFA network began. Students at UBC Vancouver have surveyed thousands of their peers and brought the case for climate education to deans, Faculty councils and course instructors across campus.',
  intro: [
    'The campaign at the University of British Columbia Vancouver started with a handful of students in the fall of 2024 and grew into the model behind the whole CEFA network. Its goal is simple: every UBC student, in every degree, should learn the basics of the climate emergency — its causes, its impacts and how their field can help solve it.',
    'Working Faculty by Faculty, our volunteers collect evidence of student demand, meet with deans and associate deans, present to Faculty councils and work with instructors to bring climate content into core courses.',
  ],
  cover: {
    src: onboardingParty,
    alt: 'A large group of students posing in front of a projected CEFA logo at the campaign’s first volunteer onboarding party',
  },
  stats: [
    {
      value: '90%',
      label: 'of 2,700+ surveyed UBC undergraduates support mandatory climate education',
    },
    { value: '37', label: 'volunteers at our second onboarding party, in October 2026' },
    { value: '2', label: 'years of student organizing, since our first meeting in fall 2024' },
  ],
  timeline: [
    { date: 'Oct 2024', text: 'Juliana meets student organizers from UC San Diego in California.' },
    { date: 'Oct–Nov 2024', text: 'First campaign meeting.', milestone: true },
    { date: 'Nov 2024', text: 'Strategizing and researching the university context.' },
    { date: 'Oct 2024 – Oct 2025', text: 'Student survey collection.' },
    { date: 'Mar 2025', text: 'Meeting with the Dean of Forestry.' },
    { date: 'Mar 2025', text: 'The CEFA Network is created.', milestone: true },
    {
      date: 'Mar 2025',
      text: 'Meeting with the Dean and Associate Dean of Land and Food Systems (LFS).',
    },
    {
      date: 'May 2025',
      text: 'CEFA is featured in Canada’s National Observer.',
      url: 'https://www.nationalobserver.com/2025/05/07/opinion/juliana-janot-youth-climate-education',
    },
    { date: 'Nov 2025', text: 'Meeting with the Dean of the Sauder School of Business.' },
    { date: 'Dec 2025', text: 'Meeting with the Associate Dean of Arts.' },
    { date: 'Jan 2026', text: 'First volunteer onboarding party, with about 17 new volunteers.' },
    { date: 'Feb 2026', text: 'Presentation to the LFS Faculty Council.' },
    { date: 'Feb 2026', text: 'Second meeting with the Associate Dean of Arts.' },
    { date: 'Mar 2026', text: 'Meeting with the COMM 105 coordinator (Business).', win: true },
    { date: 'Apr 2026', text: 'Meeting with the Associate Dean of Science.', win: true },
    { date: 'May 2026', text: 'Presentation to the Arts Faculty Council.' },
    { date: 'May 2026', text: 'LFS Climate Education Symposium.', win: true },
    { date: 'Jun 2026', text: 'Meeting with the CIVL 250 instructor (Engineering).', win: true },
    { date: 'Jun 2026', text: 'Partnership meeting with the AMS, UBC’s student society.' },
    { date: 'Jul 2026', text: 'Meeting with the EDST 201 coordinator (Education).', win: true },
    { date: 'Aug 2026', text: 'Creation of the CEFA Teaching Resource.' },
    { date: 'Aug 2026', text: 'Meeting with the Economics Director.' },
    { date: 'Oct 2026', text: 'Second volunteer onboarding party, with 37 volunteers.' },
  ] satisfies TimelineEntry[],
  throughout:
    'Throughout the campaign, our partnership with the UBC Sustainability Hub has brought joint events, mutual support and connections with professors.',
  gallery: [
    {
      src: sustainabilityFellows,
      alt: 'Two CEFA organizers presenting at a lectern in front of a UBC Sustainability backdrop',
      caption: 'Presenting the campaign to UBC Sustainability Fellows, November 2024',
    },
    {
      src: survey,
      alt: 'A full event hall facing a screen that asks “Do you support climate education?” next to a QR code',
      caption: 'Collecting survey responses at a campus event, 2025',
    },
    {
      src: artsCommittee,
      alt: 'Five students standing beside a screen showing the CEFA logo',
      caption: 'The Arts committee after meeting the Associate Dean of Arts, fall 2025',
    },
    {
      src: lfsFacultyCouncil,
      alt: 'A CEFA organizer presenting to a room of faculty members next to projected slides',
      caption: 'Presenting to the LFS Faculty Council, February 2026',
    },
    {
      src: comm105,
      alt: 'Three students standing next to a screen showing “Climate Education for All (CEFA), UBC Chapter”',
      caption: 'After meeting the COMM 105 coordinator, March 2026',
    },
    {
      src: scienceDean,
      alt: 'Four students in a meeting room holding printed documents, with the CEFA logo on screen',
      caption: 'After presenting to the Associate Dean of Science, April 2026',
    },
    {
      src: volunteerSocial,
      alt: 'A group of CEFA volunteers smiling together in a lounge',
      caption: 'Volunteer social, April 2026',
    },
    {
      src: lfsSymposium,
      alt: 'An audience in a lecture hall watching a presentation at the LFS Climate Education Symposium',
      caption: 'LFS Climate Education Symposium, May 2026',
    },
    {
      src: sustainabilityHub,
      alt: 'Four people holding a CEFA sign in a bright atrium',
      caption: 'With the UBC Sustainability Hub, our partner throughout the campaign',
    },
  ] satisfies Photo[],
};

/** CEFA's theory of change for campus campaigns (from the 2025 Theory of Change slide). */
export const theoryOfChange = [
  {
    stage: 'Inputs',
    title: 'Students organize',
    points: ['Volunteers', 'A professor ally', 'Knowledge of the university context', 'Time'],
  },
  {
    stage: 'Outputs',
    title: 'A campaign',
    points: ['A student survey', 'Meetings with deans'],
  },
  {
    stage: 'Immediate outcome',
    title: 'A climate course requirement',
    points: ['More students aware of climate change and how to act'],
  },
  {
    stage: 'Intermediate outcome',
    title: 'Graduates take climate action',
    points: [
      'Transforming their professional fields',
      'Voting and advocating for climate policies',
    ],
  },
  {
    stage: 'Impact',
    title: 'An end to climate inaction',
    points: ['Climate policies', 'Low-carbon sectors'],
  },
];

/** Universities where ambassadors from CEFA's first cohort are building campaigns. */
export const network = [
  { university: 'Acadia University', place: 'Wolfville, NS' },
  { university: 'Mount Allison University', place: 'Sackville, NB' },
  { university: 'University of Calgary', place: 'Calgary, AB' },
  { university: 'University of Guelph', place: 'Guelph, ON' },
  { university: 'University of Toronto', place: 'Toronto, ON' },
  { university: 'Okanagan College', place: 'Kelowna, BC' },
  { university: 'Simon Fraser University', place: 'Burnaby, BC' },
  { university: 'Ludwig Maximilian University of Munich', place: 'Munich, Germany' },
];
