import React from 'react';
import FeatureCard from './FeatureCard';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <h1 className={`text-4xl sm:text-5xl md:text-6xl ${styles.heroTitle}`}>
      The future of business management an AI-driven platform that seamlessly orchestrates task
      </h1>
      <p className="mt-4 ${styles.Text} text-gray-600">
      Our mission is to create a friendly and flexible work environment where employees thrive. We prioritize their well-being by eliminating rigid structures and promoting a culture of collaboration and creativity. With over 180,000 hours of combined experience, our team is dedicated to building tools that enhance not only productivity but also job satisfaction.
      </p>

      <div className="mt-6 flex justify-center space-x-4">
        <a href="https://www.23bg.tech/" target="_blank" rel="noopener noreferrer">
          <button className={`${styles.heroButton} px-6 py-3 rounded-md`}>
            Start building for free →
          </button>
        </a>
      </div>

      <p className={`mt-6 ${styles.ratingText}`}>4.7 rating · 1k+ growth  · 15+ testimonials · Over 180,000 hours of experience</p>
      
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <FeatureCard title="Want to make something" />
        <FeatureCard title="Start building with us" />
        <FeatureCard title="Use our AI agent to help " />
        <FeatureCard title="Optimise workflow" />
      </div>
    </section>
  );
}
