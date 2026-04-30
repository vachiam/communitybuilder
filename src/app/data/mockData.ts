import image331 from '../../imports/image_331.jpg';
import image332 from '../../imports/image_332.jpg';
import image333 from '../../imports/image_333.jpg';
import image61 from '../../imports/image6_1.jpg';
import image62 from '../../imports/image6_2.jpg';
import image63 from '../../imports/image6_3.jpg';

export interface Expert {
  id: string;
  name: string;
  title: string;
  specialty: string;
  location: string;
  email?: string;
  image: string;
  bio: string;
  featuredContent?: string[];
}

export interface Article {
  id: string;
  title: string;
  featuredImage: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  excerpt: string;
  body: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  ctaLink: string;
  image: string;
}

export const mockExperts: Expert[] = [
  {
    id: "1",
    name: "Dr. Sarah Martinez",
    title: "MD, FACG",
    specialty: "Gastroenterology",
    location: "Boston, MA",
    email: "s.martinez@example.com",
    image: image62,
    bio: "Dr. Martinez is a board-certified gastroenterologist with over 15 years of experience specializing in inflammatory bowel disease. She leads the IBD clinic at Boston Medical Center and is actively involved in clinical research.",
    featuredContent: ["Managing IBD Through Diet", "New Treatments for Crohn's Disease"]
  },
  {
    id: "2",
    name: "Dr. James Chen",
    title: "MD, PhD",
    specialty: "Colorectal Surgery",
    location: "San Francisco, CA",
    image: image332,
    bio: "Dr. Chen specializes in minimally invasive surgical techniques for IBD patients. He has published extensively on surgical outcomes and patient quality of life.",
    featuredContent: ["When Surgery is Necessary for IBD"]
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    title: "NP, CNS",
    specialty: "IBD Nursing",
    location: "Chicago, IL",
    image: image63,
    bio: "As a certified IBD nurse specialist, Emily focuses on patient education and holistic care approaches for managing chronic inflammatory conditions.",
    featuredContent: ["Living Well with IBD"]
  },
  {
    id: "4",
    name: "Dr. Michael Thompson",
    title: "MD, FACP",
    specialty: "Internal Medicine",
    location: "New York, NY",
    image: image333,
    bio: "Dr. Thompson has dedicated his career to understanding autoimmune disorders and their connection to IBD. He practices at Mount Sinai Hospital.",
    featuredContent: []
  },
  {
    id: "5",
    name: "Dr. Lisa Patel",
    title: "PhD, RD",
    specialty: "Clinical Nutrition",
    location: "Los Angeles, CA",
    image: image61,
    bio: "Dr. Patel is a registered dietitian specializing in nutrition therapy for IBD patients. She helps patients develop personalized eating plans.",
    featuredContent: ["Nutrition Strategies for Flare Management"]
  },
  {
    id: "6",
    name: "Dr. Robert Kim",
    title: "MD, MSc",
    specialty: "Pediatric Gastroenterology",
    location: "Seattle, WA",
    image: image331,
    bio: "Dr. Kim focuses on treating children and adolescents with IBD, ensuring they receive age-appropriate care and support.",
    featuredContent: ["IBD in Children and Teens"]
  }
];

export const mockArticles: Article[] = [
  {
    id: "1",
    title: "Understanding Inflammatory Bowel Disease: A Comprehensive Guide",
    featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    category: "Education",
    author: "Dr. Sarah Martinez",
    publishDate: "2026-04-15",
    readTime: "8 min read",
    excerpt: "Learn about the fundamentals of IBD, including symptoms, diagnosis, and treatment options available today.",
    body: "Inflammatory Bowel Disease (IBD) is a term primarily used to describe two conditions: Crohn's disease and ulcerative colitis. Both involve chronic inflammation of the gastrointestinal tract, but they affect different areas and have distinct characteristics...",
    tags: ["IBD Basics", "Education", "Treatment"]
  },
  {
    id: "2",
    title: "Managing IBD Through Diet: Evidence-Based Strategies",
    featuredImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    category: "Nutrition",
    author: "Dr. Lisa Patel",
    publishDate: "2026-04-10",
    readTime: "6 min read",
    excerpt: "Discover how dietary modifications can help manage IBD symptoms and improve quality of life.",
    body: "While diet alone cannot cure IBD, research shows that certain dietary approaches can help manage symptoms and reduce inflammation. The key is finding what works for your individual body...",
    tags: ["Nutrition", "Diet", "Lifestyle"]
  },
  {
    id: "3",
    title: "New Biologic Treatments Show Promise for Crohn's Disease",
    featuredImage: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=500&fit=crop",
    category: "Research",
    author: "Dr. Sarah Martinez",
    publishDate: "2026-04-05",
    readTime: "5 min read",
    excerpt: "Recent clinical trials demonstrate significant improvements in remission rates with next-generation biologics.",
    body: "The landscape of IBD treatment continues to evolve with the development of targeted biologic therapies. Recent FDA approvals have given patients more options than ever before...",
    tags: ["Research", "Treatment", "Biologics"]
  },
  {
    id: "4",
    title: "When Surgery is Necessary for IBD: What to Expect",
    featuredImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    category: "Treatment",
    author: "Dr. James Chen",
    publishDate: "2026-03-28",
    readTime: "10 min read",
    excerpt: "A comprehensive look at surgical options for IBD patients and recovery expectations.",
    body: "While many IBD patients can manage their condition with medication, some may require surgery. Understanding when surgery becomes necessary and what to expect can help reduce anxiety...",
    tags: ["Surgery", "Treatment", "Recovery"]
  },
  {
    id: "5",
    title: "Living Well with IBD: Patient Success Stories",
    featuredImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop",
    category: "Patient Stories",
    author: "Dr. Emily Rodriguez",
    publishDate: "2026-03-20",
    readTime: "7 min read",
    excerpt: "Real patients share their journeys to finding balance and thriving despite their diagnosis.",
    body: "Living with IBD presents unique challenges, but many patients have found ways to live full, active lives. Here are inspiring stories from our community...",
    tags: ["Patient Stories", "Inspiration", "Lifestyle"]
  },
  {
    id: "6",
    title: "IBD in Children and Teens: A Parent's Guide",
    featuredImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
    category: "Pediatrics",
    author: "Dr. Robert Kim",
    publishDate: "2026-03-12",
    readTime: "9 min read",
    excerpt: "Essential information for parents navigating an IBD diagnosis in their child.",
    body: "When a child is diagnosed with IBD, it affects the entire family. Understanding pediatric IBD and how to support your child is crucial for their long-term wellbeing...",
    tags: ["Pediatrics", "Family", "Support"]
  }
];

export const mockEvents: Event[] = [
  {
    id: "1",
    title: "IBD Awareness Webinar: Latest Research Updates",
    date: "2026-05-15",
    time: "6:00 PM EST",
    location: "Virtual Event",
    description: "Join leading experts as they discuss the latest breakthroughs in IBD research and treatment.",
    ctaLink: "#register",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=500&fit=crop"
  },
  {
    id: "2",
    title: "Patient Support Group Meeting - Boston",
    date: "2026-05-20",
    time: "7:00 PM EST",
    location: "Boston Medical Center",
    description: "Monthly in-person support group for IBD patients and caregivers.",
    ctaLink: "#register",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop"
  },
  {
    id: "3",
    title: "Nutrition Workshop: Meal Planning for IBD",
    date: "2026-06-01",
    time: "2:00 PM EST",
    location: "Virtual Event",
    description: "Learn practical meal planning strategies from registered dietitians specializing in IBD.",
    ctaLink: "#register",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop"
  }
];
