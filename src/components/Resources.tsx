
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { ExternalLink, BookOpen, Video, FileText, Newspaper } from 'lucide-react';

interface Resource {
  title: string;
  author: string;
  description: string;
  link: string;
  type: 'book' | 'article' | 'video' | 'report';
}

const resources: Resource[] = [
  {
    title: "Insurgent Empire: Anticolonial Resistance and British Dissent",
    author: "Priyamvada Gopal",
    description: "Explores how colonized peoples actively resisted British imperialism and how those movements shaped British critics of empire.",
    link: "https://www.penguinrandomhouse.com/books/608942/insurgent-empire-by-priyamvada-gopal/",
    type: "book"
  },
  {
    title: "Black and British: A Forgotten History",
    author: "David Olusoga",
    description: "Explores the long relationship between Britain and Black people, from Roman times to the present day.",
    link: "https://www.panmacmillan.com/authors/david-olusoga/black-and-british/9781447299769",
    type: "book"
  },
  {
    title: "Natives: Race and Class in the Ruins of Empire",
    author: "Akala",
    description: "Part biography, part analysis of history and politics, examining how imperial history shapes present-day Britain.",
    link: "https://www.akala.mobi/natives",
    type: "book"
  },
  {
    title: "The Windrush Betrayal: Exposing the Hostile Environment",
    author: "Amelia Gentleman",
    description: "Details the Windrush scandal and how Commonwealth citizens were wrongfully detained and deported.",
    link: "https://www.theguardian.com/books/2019/sep/21/the-windrush-betrayal-by-amelia-gentleman-review",
    type: "book"
  },
  {
    title: "The Rhodes Must Fall Movement",
    author: "The Guardian",
    description: "Analysis of student movements to remove colonial symbols from university campuses.",
    link: "https://www.theguardian.com/education/2016/mar/09/take-it-down-rhodes-must-fall-campaign-marches-through-oxford",
    type: "article"
  },
  {
    title: "Britain's Colonial Legacy",
    author: "BBC Radio 4",
    description: "Documentary exploring how Britain's imperial past continues to shape contemporary politics.",
    link: "https://www.bbc.co.uk/programmes/m000kfm1",
    type: "video"
  },
  {
    title: "The Legacies of British Slave-ownership Project",
    author: "University College London",
    description: "Database and analysis of the impact of slavery on British society and economy.",
    link: "https://www.ucl.ac.uk/lbs/",
    type: "report"
  },
  {
    title: "From Slavery to Windrush",
    author: "Black Cultural Archives",
    description: "Digital exhibition tracing Black British history from the era of slavery to post-war immigration.",
    link: "https://blackculturalarchives.org/",
    type: "article"
  }
];

const Resources: React.FC = () => {
  return (
    <section id="resources" className="content-section bg-lightgray">
      <div className="container mx-auto">
        <h2 className="text-navy font-serif mb-6 text-center">Further Resources</h2>
        <Separator className="bg-burgundy h-1 w-20 mx-auto mb-8" />
        
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-12">
            Explore these resources to deepen your understanding of Britain's imperial legacy and its 
            connections to contemporary racial justice movements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start">
                  {resource.type === 'book' && <BookOpen size={24} className="text-burgundy mr-3 flex-shrink-0" />}
                  {resource.type === 'article' && <Newspaper size={24} className="text-burgundy mr-3 flex-shrink-0" />}
                  {resource.type === 'video' && <Video size={24} className="text-burgundy mr-3 flex-shrink-0" />}
                  {resource.type === 'report' && <FileText size={24} className="text-burgundy mr-3 flex-shrink-0" />}
                  
                  <div>
                    <h3 className="font-serif text-navy mb-1">{resource.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">By {resource.author}</p>
                    <p className="mb-3 text-sm">{resource.description}</p>
                    <a 
                      href={resource.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center text-burgundy hover:text-navy transition-colors text-sm"
                    >
                      Explore Resource
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-navy text-white p-8 rounded-lg text-center">
            <h3 className="font-serif mb-4">Continue Your Learning Journey</h3>
            <p className="mb-6">
              This resource offers an introduction to this complex topic. We encourage you to explore 
              additional sources and perspectives to develop a deeper understanding of Britain's imperial 
              legacy and its connections to racial justice movements today.
            </p>
            <a 
              href="https://www.blacklivesmatter.uk/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center bg-burgundy hover:bg-opacity-80 text-white py-2 px-4 rounded-md transition-all"
            >
              Visit Black Lives Matter UK
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
