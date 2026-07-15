export interface StatItem {
  value: string;
  label: string;
}

export interface PillarItem {
  title: string;
  description: string;
  iconName: string;
  badgeText?: string;
  badgeVal?: string;
  extraType?: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  target: string;
  price: string;
  originalPrice?: string;
  description: string;
  deliveryTime: string;
  revisionCount: string;
  benefits: string[];
  popular?: boolean;
}

export interface PricingAddon {
  id: string;
  name: string;
  price: number;
  description: string;
  checked: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  name: string;
  badge: string;
  heroTitle: string;
  heroHighlight: string;
  heroSub: string;
  heroStats: StatItem[];
  pillarsLabel: string;
  pillarsTitle: string;
  pillarsHighlight: string;
  pillarsSub: string;
  pillarsItems: PillarItem[];
  pricingLabel: string;
  pricingTitle: string;
  pricingHighlight: string;
  pricingSub: string;
  pricingPackages: PricingPackage[];
  pricingAddons: PricingAddon[];
  faqItems: FAQItem[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  clientName: string;
  image: string;
  category: string;
  techStack: string[];
  liveUrl: string;
  videoUrl?: string;
  service: string;
}

export interface SocialProofItem {
  id: string;
  name: string;
  city: string;
  action: string;
  product: string;
  timeAgo: string;
}

