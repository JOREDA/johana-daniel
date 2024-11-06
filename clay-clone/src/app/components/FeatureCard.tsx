import React from 'react';
import styles from '../styles/FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
}

export default function FeatureCard({ title }: FeatureCardProps) {
  return (
    <div className={`${styles.featureCard} flex items-center justify-center text-gray-800 text-sm font-semibold`}>
      {title}
    </div>
  );
}
