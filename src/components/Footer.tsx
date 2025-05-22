
import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Britain After Empire</h3>
            <p className="text-sm text-gray-300">
              A learning resource about British imperialism
              and today's racial justice movements.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#introduction" className="text-gray-300 hover:text-burgundy transition-colors">Introduction</a></li>
              <li><a href="#timeline" className="text-gray-300 hover:text-burgundy transition-colors">Timeline</a></li>
              <li><a href="#connections" className="text-gray-300 hover:text-burgundy transition-colors">BLM Links</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Learn More</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://blackculturalarchives.org/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-300 hover:text-burgundy transition-colors inline-flex items-center"
                >
                  Black Cultural Archives
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.museumofbritishcolonialism.org/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-300 hover:text-burgundy transition-colors inline-flex items-center"
                >
                  Museum of British Colonialism
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://blacklivesmatter.uk/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-gray-300 hover:text-burgundy transition-colors inline-flex items-center"
                >
                  Black Lives Matter UK
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Britain After Empire Educational Resource. This is an educational project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
