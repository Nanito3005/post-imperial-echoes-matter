
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="content-section bg-cream">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-navy font-serif mb-6 text-center">Understanding Post-Imperial Britain</h2>
          <Separator className="bg-burgundy h-1 w-20 mx-auto mb-8" />
          
          <div className="prose prose-lg mx-auto">
            <p className="mb-6">
              The legacy of British imperialism continues to shape contemporary British society and politics,
              influencing everything from racial relations to national identity. Post-imperialism refers to the
              period following the formal dissolution of the British Empire, examining how imperial structures and
              mindsets persist in modern Britain.
            </p>
            
            <p className="mb-10">
              This educational resource examines how Britain's imperial past connects to present-day racial justice
              movements like Black Lives Matter, tracing the threads between historical colonial policies and
              contemporary racial inequalities, immigration debates, and cultural tensions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-navy text-xl mb-3 font-serif">Colonial Legacy</h3>
                  <p className="text-sm">How the structures and attitudes of empire continue to influence modern British institutions and society.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-navy text-xl mb-3 font-serif">Racial Justice</h3>
                  <p className="text-sm">Examining how historical injustices connect to contemporary movements for racial equality and recognition.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-navy text-xl mb-3 font-serif">Cultural Identity</h3>
                  <p className="text-sm">Understanding how imperial history shapes modern British identity, multiculturalism, and citizenship debates.</p>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-4 border-burgundy pl-6 py-2 italic text-gray-700 my-8">
              "The past is never dead. It's not even past." — William Faulkner
            </blockquote>
            
            <p>
              Through examining these connections, we can better understand how British society's present challenges
              are shaped by its imperial past, and how movements like Black Lives Matter are responding to this legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
