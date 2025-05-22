
import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ChevronRight, Clock } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'imperial' | 'post-imperial' | 'blm';
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1833",
    title: "Slavery Abolition Act",
    description: "Britain abolished slavery throughout most of its colonies, but compensated slave owners rather than enslaved people. This established patterns of economic inequality that persist today.",
    category: "imperial"
  },
  {
    year: "1865-1930s",
    title: "British Race Science & Eugenics",
    description: "Development of pseudo-scientific racial theories that justified imperial rule and created hierarchies of human value that continue to influence modern racism.",
    category: "imperial"
  },
  {
    year: "1948",
    title: "Arrival of Windrush Generation",
    description: "British Nationality Act granted citizenship to Commonwealth subjects. The Empire Windrush brought Caribbean immigrants to help rebuild post-war Britain.",
    category: "post-imperial"
  },
  {
    year: "1958",
    title: "Notting Hill Race Riots",
    description: "White violence against Caribbean communities in London revealed racial tensions in post-war Britain as imperial subjects claimed their rights to live in the 'mother country'.",
    category: "post-imperial"
  },
  {
    year: "1962-1971",
    title: "Immigration Acts",
    description: "Series of increasingly restrictive immigration laws that specifically targeted Commonwealth citizens, revealing post-imperial anxiety about race and belonging.",
    category: "post-imperial"
  },
  {
    year: "1981",
    title: "British Nationality Act",
    description: "Created different tiers of citizenship, further restricting immigration from former colonies and cementing the end of imperial citizenship rights.",
    category: "post-imperial"
  },
  {
    year: "1993",
    title: "Stephen Lawrence Murder",
    description: "The racist murder of Stephen Lawrence and the subsequent Macpherson Report exposed institutional racism in British policing and society.",
    category: "post-imperial"
  },
  {
    year: "2012",
    title: "Hostile Environment Policy",
    description: "Immigration policy targeting undocumented migrants that disproportionately affected Commonwealth citizens, leading to the Windrush Scandal.",
    category: "post-imperial"
  },
  {
    year: "2016",
    title: "Brexit Vote",
    description: "Campaign rhetoric often invoked imperial nostalgia and anxieties about immigration, revealing ongoing tensions around British identity after empire.",
    category: "post-imperial"
  },
  {
    year: "2020",
    title: "Black Lives Matter Protests in UK",
    description: "George Floyd's murder sparked protests across the UK, connecting to local issues of racial injustice and colonial legacy, including the removal of slave trader Edward Colston's statue in Bristol.",
    category: "blm"
  },
  {
    year: "2021",
    title: "Commission on Race and Ethnic Disparities Report",
    description: "Controversial government report downplayed structural racism, triggering criticism for minimizing Britain's colonial legacy and contemporary racial inequalities.",
    category: "blm"
  },
  {
    year: "2023",
    title: "Ongoing Decolonization Movements",
    description: "Continuing efforts to address colonial legacies in institutions, education, and public spaces, connecting historical injustice to contemporary racial equality movements.",
    category: "blm"
  }
];

const Timeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredEvents = activeFilter === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === activeFilter);

  return (
    <section id="timeline" className="content-section bg-lightgray">
      <div className="container mx-auto">
        <h2 className="text-navy font-serif mb-6 text-center">Historical Timeline</h2>
        <Separator className="bg-burgundy h-1 w-20 mx-auto mb-8" />
        
        <p className="text-center max-w-3xl mx-auto mb-10">
          This timeline traces key events from Britain's imperial past through to contemporary 
          racial justice movements, showing the persistent influence of imperial structures and attitudes.
        </p>
        
        <div className="flex justify-center mb-10 flex-wrap">
          <button 
            className={`px-4 py-2 rounded-md mx-2 mb-2 transition-colors ${activeFilter === 'all' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-gray-100'}`}
            onClick={() => setActiveFilter('all')}
          >
            All Events
          </button>
          <button 
            className={`px-4 py-2 rounded-md mx-2 mb-2 transition-colors ${activeFilter === 'imperial' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-gray-100'}`}
            onClick={() => setActiveFilter('imperial')}
          >
            Imperial Period
          </button>
          <button 
            className={`px-4 py-2 rounded-md mx-2 mb-2 transition-colors ${activeFilter === 'post-imperial' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-gray-100'}`}
            onClick={() => setActiveFilter('post-imperial')}
          >
            Post-Imperial Era
          </button>
          <button 
            className={`px-4 py-2 rounded-md mx-2 mb-2 transition-colors ${activeFilter === 'blm' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-gray-100'}`}
            onClick={() => setActiveFilter('blm')}
          >
            BLM & Contemporary
          </button>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="ml-4 pl-4">
            {filteredEvents.map((event, index) => (
              <div key={index} className="timeline-item animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <Card className="mb-6 hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="flex items-center">
                      <Clock size={16} className="text-burgundy mr-2" />
                      <CardDescription className="text-burgundy font-medium">
                        {event.year}
                      </CardDescription>
                    </div>
                    <CardTitle className="text-navy">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{event.description}</p>
                    
                    <div className="mt-2">
                      <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                        event.category === 'imperial' ? 'bg-navy text-white' : 
                        event.category === 'post-imperial' ? 'bg-burgundy text-white' : 
                        'bg-black text-white'
                      }`}>
                        {event.category === 'imperial' ? 'Imperial Era' : 
                         event.category === 'post-imperial' ? 'Post-Imperial' : 
                         'BLM Era'}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
