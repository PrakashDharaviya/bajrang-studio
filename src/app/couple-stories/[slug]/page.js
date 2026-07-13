import couplesData from '@/data/couples.json';
import CoupleStoryDetail from '@/components/CoupleStoryDetail';

export function generateStaticParams() {
  return couplesData.map((couple) => ({
    slug: couple.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const couple = couplesData.find(c => c.slug === slug);
  if (!couple) return { title: 'Story Not Found' };
  
  return {
    title: `${couple.names} - Love Story | Bajrang Studio`,
    description: couple.description,
  };
}

export default async function CoupleStorySingle({ params }) {
  const { slug } = await params;
  return <CoupleStoryDetail slug={slug} />;
}
