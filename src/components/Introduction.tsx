
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="content-section bg-cream">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-navy font-serif mb-6 text-center">Britain After Empire</h2>
          <Separator className="bg-burgundy h-1 w-20 mx-auto mb-8" />
          
          <div className="prose prose-lg mx-auto">
            <p className="mb-6">
              Britain's imperial past still affects society today. It shapes how people relate to each other,
              national identity, and politics. The term "post-imperial" refers to the time after the British Empire ended,
              looking at how imperial ideas and systems still exist in modern Britain.
            </p>
            
            <p className="mb-10">
              This resource shows how Britain's past connects to today's racial justice movements like Black Lives Matter,
              linking old colonial policies to current racial inequalities and cultural debates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-navy text-xl mb-3 font-serif">Colonial Legacy</h3>
                  <p className="text-sm">How empire still affects British institutions and society today.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-navy text-xl mb-3 font-serif">Racial Justice</h3>
                  <p className="text-sm">How past injustices connect to today's movements for racial equality.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-navy text-xl mb-3 font-serif">Cultural Identity</h3>
                  <p className="text-sm">How imperial history shapes modern British identity and citizenship.</p>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-4 border-burgundy pl-6 py-2 italic text-gray-700 my-8">
              "The past is never dead. It's not even past." — William Faulkner
            </blockquote>
            
            <p>
              By understanding these connections, we can see how today's challenges are rooted in history,
              and how movements like Black Lives Matter are responding to this legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
