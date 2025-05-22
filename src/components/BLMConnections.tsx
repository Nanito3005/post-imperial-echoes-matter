
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from 'lucide-react';

const BLMConnections: React.FC = () => {
  return (
    <section id="connections" className="content-section bg-cream">
      <div className="container mx-auto">
        <h2 className="text-navy font-serif mb-6 text-center">Links to Black Lives Matter</h2>
        <Separator className="bg-burgundy h-1 w-20 mx-auto mb-8" />
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-12">
            The Black Lives Matter movement in Britain connects to the country's imperial past, 
            challenging unfair systems that began during colonial times.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-navy font-serif mb-6">Colonial Connections</h3>
              <p className="mb-6">
                Many issues that BLM UK addresses are directly linked to Britain's imperial history. 
                The movement challenges both current racism and older systems created during 
                colonial times that still exist today.
              </p>
              
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle2 size={20} className="text-burgundy mr-2 flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-navy">Policing Issues</strong>: UK police practices 
                    like stop and search target Black Britons more often, similar to how colonial police 
                    controlled local populations.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-burgundy mr-2 flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-navy">Immigration Rules</strong>: The Windrush scandal showed 
                    how Britain's treatment of Commonwealth citizens reveals attitudes about who "belongs" in Britain.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-burgundy mr-2 flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-navy">Cultural Issues</strong>: Campaigns to update 
                    museums, statues, and education challenge the cleaned-up version of empire 
                    that still shapes national identity.
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-navy font-serif mb-6">BLM UK's Special Focus</h3>
              <p className="mb-6">
                While connected to the global movement that started in the US, BLM UK addresses 
                specific British issues of racism linked to the country's imperial history.
              </p>
              
              <Card className="bg-white shadow-md mb-4">
                <CardContent className="p-6">
                  <h4 className="font-serif text-navy mb-2">Statue Removals</h4>
                  <p className="text-sm">
                    The toppling of slave trader Edward Colston's statue in Bristol highlighted how 
                    Britain's cities still honor people who profited from slavery and exploitation.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md mb-4">
                <CardContent className="p-6">
                  <h4 className="font-serif text-navy mb-2">Education Changes</h4>
                  <p className="text-sm">
                    Campaigns to update education seek to address how British schools often teach 
                    a cleaned-up version of imperial history that downplays harm done.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h4 className="font-serif text-navy mb-2">Making Amends</h4>
                  <p className="text-sm">
                    Calls for Britain to acknowledge and make amends for slavery and colonialism 
                    connect past wrongs to today's inequalities facing Black Britons.
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
            <h3 className="font-serif mb-4">Why It Matters Today</h3>
            <p>
              The Black Lives Matter movement in Britain continues earlier anti-colonial and 
              anti-racist struggles. By addressing both historical wrongs and current problems, 
              BLM UK challenges Britain to face its imperial past and build fairer systems for the future. 
              This link between past and present makes BLM especially important in Britain, 
              where the legacy of empire still shapes society and attitudes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BLMConnections;
