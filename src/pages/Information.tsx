import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import { cn } from '@/lib/utils';
import { Target, Music, BookOpen, AlertTriangle, ChevronDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const aims = [
  'To promote unity, love, and understanding among members',
  'To encourage mutual financial and moral support',
  'To foster personal and professional growth',
  'To organize social and community development activities',
  'To uphold the highest standards of integrity and discipline',
  'To create a platform for networking and collaboration',
];

const codeOfConduct = [
  { title: 'Respect', content: 'All members must treat each other with respect and dignity at all times. Disrespectful behavior, insults, or discrimination will not be tolerated.' },
  { title: 'Punctuality', content: 'Members are expected to arrive at meetings and events on time. Chronic lateness without valid reason will attract penalties.' },
  { title: 'Confidentiality', content: 'Matters discussed during meetings, especially personal issues of members, must remain confidential within the association.' },
  { title: 'Financial Obligations', content: 'All dues, levies, and contributions must be paid promptly as specified. Failure to meet financial obligations will result in sanctions.' },
  { title: 'Participation', content: 'Active participation in association activities is mandatory. Members should contribute ideas and support initiatives.' },
  { title: 'Dress Code', content: 'Members must dress appropriately for all official association events. The approved association uniform must be worn during formal gatherings.' },
  { title: 'Conflict Resolution', content: 'Disputes among members must be reported to the executive committee for resolution. Taking matters into personal hands is prohibited.' },
  { title: 'Communication', content: 'Official communication channels must be used for association matters. Members should respond to official messages within 24 hours.' },
];

const penalties = [
  { offense: 'Late arrival to meetings (first 15 minutes)', fine: '₦500' },
  { offense: 'Late arrival to meetings (after 15 minutes)', fine: '₦1,000' },
  { offense: 'Absence from meeting without notice', fine: '₦2,000' },
  { offense: 'Late payment of dues (per week)', fine: '₦500' },
  { offense: 'Disrespectful behavior to members', fine: '₦5,000' },
  { offense: 'Breach of confidentiality', fine: '₦10,000 + Suspension' },
  { offense: 'Non-compliance with dress code', fine: '₦1,000' },
  { offense: 'Failure to attend 3 consecutive meetings', fine: 'Review of Membership' },
  { offense: 'Violence or threats', fine: 'Immediate Suspension' },
];

const anthemLyrics = `We are one in FEB24
We are focus elite brothers group
We share love and grow together
We are united and discipline
We are strong in our plans
And in one accord we are strong`;

const Information = () => {
  const [activeTab, setActiveTab] = useState('aims');

  const tabs = [
    { id: 'aims', label: 'Aims & Objectives', icon: Target },
    { id: 'anthem', label: 'Our Anthem', icon: Music },
    { id: 'conduct', label: 'Code of Conduct', icon: BookOpen },
    { id: 'penalties', label: 'Penalties & Fines', icon: AlertTriangle },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Resources
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Association Information
            </h1>
            <p className="text-xl text-primary-foreground/70">
              Everything you need to know about FEB24 Association—our goals, guidelines, and values.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 bg-background sticky top-16 z-30 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                  activeTab === tab.id
                    ? "bg-secondary text-secondary-foreground shadow-card"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Aims & Objectives */}
          <div className={cn("max-w-4xl mx-auto", activeTab !== 'aims' && 'hidden')}>
            <SectionTitle
              subtitle="Our Purpose"
              title="Aims & Objectives"
              description="The guiding principles and goals that drive everything we do at FEB24 Association."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aims.map((aim, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-soft hover-lift transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <span className="text-secondary font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-foreground">{aim}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Anthem */}
          <div className={cn("max-w-3xl mx-auto", activeTab !== 'anthem' && 'hidden')}>
            <SectionTitle
              subtitle="Our Song"
              title="FEB24 Anthem"
              description="Sing along to our association anthem that embodies our unity and spirit."
            />
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <Music className="w-8 h-8 text-accent" />
                </div>
              </div>
              <pre className="whitespace-pre-wrap text-center font-serif text-lg text-foreground leading-relaxed">
                {anthemLyrics}
              </pre>
            </div>
          </div>

          {/* Code of Conduct */}
          <div className={cn("max-w-3xl mx-auto", activeTab !== 'conduct' && 'hidden')}>
            <SectionTitle
              subtitle="Guidelines"
              title="Code of Conduct"
              description="The standards and expectations that all members must uphold."
            />
            <Accordion type="single" collapsible className="space-y-4">
              {codeOfConduct.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl shadow-soft border-none px-6"
                >
                  <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <span className="text-secondary font-semibold text-sm">{index + 1}</span>
                      </div>
                      {item.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-12">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 text-center">
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Download Full Document
              </Button>
            </div>
          </div>

          {/* Penalties & Fines */}
          <div className={cn("max-w-3xl mx-auto", activeTab !== 'penalties' && 'hidden')}>
            <SectionTitle
              subtitle="Sanctions"
              title="Penalties & Fines"
              description="A clear structure of consequences for violations to maintain order and discipline."
            />
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="grid grid-cols-[1fr_auto] gap-4 p-4 bg-primary text-primary-foreground font-semibold">
                <span>Offense</span>
                <span className="text-right">Penalty</span>
              </div>
              <div className="divide-y divide-border">
                {penalties.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr_auto] gap-4 p-4 items-center hover:bg-muted/50 transition-colors"
                  >
                    <span className="text-foreground">{item.offense}</span>
                    <span className={cn(
                      "font-semibold text-right",
                      item.fine.includes('Suspension') ? "text-destructive" : "text-accent"
                    )}>
                      {item.fine}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-6">
              * All penalties are subject to review by the executive committee. Repeat offenses may result in increased sanctions.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Information;
