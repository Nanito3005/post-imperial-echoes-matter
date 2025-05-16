
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Timeline from '@/components/Timeline';
import BLMConnections from '@/components/BLMConnections';
import Resources from '@/components/Resources';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Introduction />
      <Timeline />
      <BLMConnections />
      <Resources />
      <Footer />
    </div>
  );
};

export default Index;
