
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from 'lucide-react';

const BLMConnections: React.FC = () => {
  return (
    <section id="connections" className="content-section bg-cream">
      <div className="container mx-auto">
        <h2 className="text-navy font-serif mb-6 text-center">Connections to Black Lives Matter</h2>
        <Separator className="bg-burgundy h-1 w-20 mx-auto mb-8" />
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-12">
            The Black Lives Matter movement in the UK connects directly to Britain's imperial legacy, addressing 
            structural inequalities that have roots in colonial policies and attitudes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-navy font-serif mb-6">Colonial Continuities</h3>
              <p className="mb-6">
                Many of the issues addressed by BLM UK have direct links to Britain's imperial past. 
                The movement challenges not only present-day racism but also the structures and attitudes 
                that were formed during the colonial era and continue to shape British society.
              </p>
              
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle2 size={20} className="text-burgundy mr-2 flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-navy">Racial Profiling and Policing</strong>: UK police practices 
                    like stop and search disproportionately target Black Britons, echoing colonial policing methods 
                    used to control colonized populations.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-burgundy mr-2 flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-navy">Immigration Policies</strong>: The Windrush scandal revealed 
                    how Britain's treatment of Commonwealth citizens reflects ongoing post-imperial attitudes about 
                    who "belongs" in Britain.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-burgundy mr-2 flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-navy">Cultural Representation</strong>: Campaigns to address 
                    Britain's imperial history in museums, statues, and education challenge the sanitized 
                    version of empire that still influences national identity.
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-navy font-serif mb-6">BLM UK's Distinct Character</h3>
              <p className="mb-6">
                While connected to the global movement that began in the United States, BLM UK addresses 
                specifically British contexts and histories of racism that are directly linked to the country's 
                imperial past.
              </p>
              
              <Card className="bg-white shadow-md mb-4">
                <CardContent className="p-6">
                  <h4 className="font-serif text-navy mb-2">Statue Removals</h4>
                  <p className="text-sm">
                    The toppling of slave trader Edward Colston's statue in Bristol highlighted how 
                    Britain's built environment continues to honor colonial figures who profited from 
                    exploitation and slavery.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md mb-4">
                <CardContent className="p-6">
                  <h4 className="font-serif text-navy mb-2">Curriculum Reform</h4>
                  <p className="text-sm">
                    Campaigns to decolonize education seek to address how British schools and universities 
                    often present a sanitized version of imperial history that downplays violence and exploitation.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h4 className="font-serif text-navy mb-2">Reparative Justice</h4>
                  <p className="text-sm">
                    Calls for Britain to acknowledge and make reparations for slavery and colonialism 
                    connect historical injustices to present-day inequalities facing Black Britons.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-burgundy pl-6 py-2 italic text-gray-700 my-10 max-w-2xl mx-auto">
            "You can't have capitalism without racism... We have to talk about liberating minds as well as liberating society."
            <footer className="text-right mt-2">— Angela Davis</footer>
          </blockquote>
          
          <div className="bg-navy text-white p-8 rounded-lg">
            <h3 className="font-serif mb-4">Contemporary Relevance</h3>
            <p>
              The Black Lives Matter movement in the UK represents a continuation of earlier anti-colonial and 
              anti-racist struggles. By addressing both historical injustices and their contemporary manifestations, 
              BLM UK challenges Britain to fully reckon with its imperial past and build more equitable institutions 
              for the future. This connection between past and present makes BLM uniquely significant in the British context, 
              where the legacies of empire continue to shape social structures and attitudes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BLMConnections;
