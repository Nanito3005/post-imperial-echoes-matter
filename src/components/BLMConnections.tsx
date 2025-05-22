
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
            Black Lives Matter in the UK is tied to Britain's empire history. The movement addresses 
            unfair treatment that has roots in old colonial attitudes.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-navy font-serif mb-6">Old Problems, New Movement</h3>
              <p className="mb-6">
                Many issues that BLM UK fights against come from Britain's imperial past. 
                The movement challenges both today's racism and the old systems from colonial times 
                that still affect British society.
              </p>
              
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle2 size={20} className="text-burgundy mr-2 flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-navy">Unfair Policing</strong>: UK police stop and search Black Britons 
                    much more often than white people, similar to how colonial police treated local populations.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-burgundy mr-2 flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-navy">Immigration Problems</strong>: The Windrush scandal showed how Britain 
                    still treats Commonwealth citizens as if they don't truly belong.
                  </span>
                </li>
                <li className="flex">
                  <CheckCircle2 size={20} className="text-burgundy mr-2 flex-shrink-0 mt-1" />
                  <span>
                    <strong className="text-navy">Cultural Stories</strong>: Campaigns to change museums, remove statues, 
                    and update history lessons challenge the sugar-coated version of empire many British people grew up with.
                  </span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-navy font-serif mb-6">BLM UK is Different</h3>
              <p className="mb-6">
                While connected to the movement that started in America, BLM UK tackles specifically British 
                problems that come from Britain's own history of empire and racism.
              </p>
              
              <Card className="bg-white shadow-md mb-4">
                <CardContent className="p-6">
                  <h4 className="font-serif text-navy mb-2">Statue Removals</h4>
                  <p className="text-sm">
                    The pulling down of slave trader Edward Colston's statue in Bristol highlighted how 
                    Britain still honors people who got rich from slavery and exploitation.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md mb-4">
                <CardContent className="p-6">
                  <h4 className="font-serif text-navy mb-2">Changing What We Learn</h4>
                  <p className="text-sm">
                    Campaigns to update education want to fix how British schools teach a cleaned-up 
                    version of empire history that leaves out violence and mistreatment.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h4 className="font-serif text-navy mb-2">Making Things Right</h4>
                  <p className="text-sm">
                    Calls for Britain to acknowledge and make up for slavery and colonialism 
                    connect past wrongs to current inequalities facing Black Britons.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <blockquote className="border-l-4 border-burgundy pl-6 py-2 italic text-gray-700 my-10 max-w-2xl mx-auto">
            "You can't have capitalism without racism... We have to talk about freeing minds as well as freeing society."
            <footer className="text-right mt-2">— Angela Davis</footer>
          </blockquote>
          
          <div className="bg-navy text-white p-8 rounded-lg">
            <h3 className="font-serif mb-4">Why This Matters Now</h3>
            <p>
              Black Lives Matter in the UK continues earlier struggles against racism and colonialism. 
              By addressing both historical wrongs and today's problems, BLM UK pushes Britain to face its 
              past honestly and build fairer systems for everyone. This link between past and present makes 
              BLM especially important in Britain, where empire's shadow still affects how society works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BLMConnections;
