// pages/index.tsx
import Header from '../app/components/Header';
import HeroSection from '../app/components/HeroSection';
import TrustedBy from '../app/components/TrustedBy';
import FeatureCard from '../app/components/FeatureCard';

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrustedBy />
      {/* Add more components as needed */}
    </div>
  );
}
