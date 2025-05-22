
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
              Britain once ruled over a huge empire. Even though that empire is gone now, its effects 
              are still felt today. This affects how people in Britain think about race, identity, and who 
              "belongs" in Britain.
            </p>
            
            <p className="mb-10">
              This website looks at how Britain's past connects to movements like Black Lives Matter today.
              We'll explore how the history of empire still shapes current problems with racism and inequality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-navy text-xl mb-3 font-serif">Empire's Impact</h3>
                  <p className="text-sm">How the old ways of thinking from empire times still affect British society today.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-navy text-xl mb-3 font-serif">Fighting Racism</h3>
                  <p className="text-sm">How past wrongs connect to today's movements for equality and justice.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-navy text-xl mb-3 font-serif">Who We Are</h3>
                  <p className="text-sm">How empire history shapes how Britain sees itself and who counts as "British" today.</p>
                </CardContent>
              </Card>
            </div>

            <blockquote className="border-l-4 border-burgundy pl-6 py-2 italic text-gray-700 my-8">
              "The past isn't dead. It's not even past." — William Faulkner
            </blockquote>
            
            <p>
              By looking at these connections, we can better understand why movements like 
              Black Lives Matter matter in Britain today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
