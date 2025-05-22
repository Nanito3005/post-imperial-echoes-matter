
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
    description: "Britain ended slavery in most colonies, but paid slave owners rather than the enslaved people. This created wealth gaps that still exist today.",
    category: "imperial"
  },
  {
    year: "1865-1930s",
    title: "Race Science & Eugenics",
    description: "False scientific theories were used to justify imperial rule and rank people by race. These ideas still influence racism today.",
    category: "imperial"
  },
  {
    year: "1948",
    title: "Arrival of Windrush Generation",
    description: "British Nationality Act gave citizenship to Commonwealth people. Caribbean immigrants came to help rebuild Britain after WWII.",
    category: "post-imperial"
  },
  {
    year: "1958",
    title: "Notting Hill Race Riots",
    description: "Violence against Caribbean communities in London showed tensions as people from former colonies moved to Britain.",
    category: "post-imperial"
  },
  {
    year: "1962-1971",
    title: "Immigration Acts",
    description: "New laws restricted Commonwealth citizens from coming to Britain, showing concerns about race and belonging.",
    category: "post-imperial"
  },
  {
    year: "1981",
    title: "British Nationality Act",
    description: "Created different types of citizenship, further limiting immigration from former colonies and ending imperial citizenship rights.",
    category: "post-imperial"
  },
  {
    year: "1993",
    title: "Stephen Lawrence Murder",
    description: "The racist murder of Stephen Lawrence and the following investigation exposed widespread racism in British police and society.",
    category: "post-imperial"
  },
  {
    year: "2012",
    title: "Hostile Environment Policy",
    description: "Immigration policy targeting undocumented migrants mostly affected Commonwealth citizens, leading to the Windrush Scandal.",
    category: "post-imperial"
  },
  {
    year: "2016",
    title: "Brexit Vote",
    description: "The campaign often used imperial nostalgia and fears about immigration, showing ongoing tensions about British identity.",
    category: "post-imperial"
  },
  {
    year: "2020",
    title: "Black Lives Matter Protests in UK",
    description: "George Floyd's murder sparked UK protests about local racism and colonial history, including removing slave trader statues.",
    category: "blm"
  },
  {
    year: "2021",
    title: "Race and Ethnic Disparities Report",
    description: "Government report downplayed structural racism, causing criticism for minimizing Britain's colonial history and current racial problems.",
    category: "blm"
  },
  {
    year: "2023",
    title: "Ongoing Decolonization Movements",
    description: "Continuing efforts to address colonial history in education, public spaces, and institutions, connecting past injustice to today's equality movements.",
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
        <h2 className="text-navy font-serif mb-6 text-center">Key Events Timeline</h2>
        <Separator className="bg-burgundy h-1 w-20 mx-auto mb-8" />
        
        <p className="text-center max-w-3xl mx-auto mb-10">
          This timeline shows important events from Britain's imperial past to today's 
          racial justice movements, showing how history still affects us.
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
            BLM & Today
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
