import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/shared/SectionTitle';
import { cn } from '@/lib/utils';
import { User, Mail, Phone, Calendar, Briefcase, Crown, Shield } from 'lucide-react';

interface Member {
  id: number;
  name: string;
  role: string;
  occupation?: string;
  email?: string;
  phone?: string;
  dateOfBirth?: string;
  nextOfKin?: string;
  isLeader?: boolean;
  leaderType?: 'chairman' | 'secretary';
}

const members: Member[] = [
  {
    id: 1,
    name: 'Adebisi Niyi Lawrence',
    role: 'Chairman',
    occupation: 'Business Executive',
    email: 'neyonaaa@gmail.com',
    phone: '+234 7065281999',
    dateOfBirth: 'April 29th',
    nextOfKin: 'Mrs. Adebisi Tolani',
    isLeader: true,
    leaderType: 'chairman',
  },
  {
    id: 2,
    name: 'Olayiwola Lawal',
    role: 'Secretary',
    occupation: 'business',
    email: 'secretary@feb24.org',
    phone: '+234 8135644814',
    dateOfBirth: 'December 13th',
    nextOfKin: 'Mr. Peter Okonkwo',
    isLeader: true,
    leaderType: 'secretary',
  },
  {
    id: 3,
    name: 'Adigun Abiola Segun',
    role: 'Treasurer',
    occupation: 'Business',
    email: 'abiolasadigun@gmail.com',
    phone: '+234 7012803390',
    nextOfKin: 'Mrs. abiola',
  },
  {
    id: 4,
    name: 'Ekerin kehinde',
    role: 'Financial Secretary',
    occupation: 'Banker',
    email: 'fatima.a@feb24.org',
    phone: '+234 808 546 3323',
    nextOfKin: 'Mr. Ahmed Abdullahi',
  },
  {
    id: 5,
    name: 'Ayansiji Gbenga',
    role: 'PRO',
    occupation: 'Media Consultant',
    email: 'david.okafor@feb24.org',
    phone: '+234 803 422 9775',
    nextOfKin: 'Mrs. Ada Okafor',
  },
  {
    id: 6,
    name: 'Fakorede Sola',
    role: 'Welfare Officer',
    occupation: 'Social Worker',
    email: 'chioma.n@feb24.org',
    phone: '+234 807 897 1818',
    nextOfKin: 'Mr. Emeka Nwachukwu',
  },
  {
    id: 7,
    name: 'Ajijola Hammed',
    role: 'Member',
    occupation: 'Engineer',
    email: 'emmanuel.t@feb24.org',
    phone: '+234 818 217 2805',
    nextOfKin: 'Mrs. Folake Taiwo',
  },
  {
    id: 8,
    name: 'Afolabi Yusuf',
    role: 'Member',
    occupation: 'Teacher',
    email: 'aisha.m@feb24.org',
    phone: '+234 708 411 8909',
    nextOfKin: 'Mr. Ibrahim Mohammed',
  },
  {
    id: 9,
    name: 'Balogun Tosin',
    role: 'Member',
    occupation: 'Doctor',
    email: 'samuel.o@feb24.org',
    phone: '+234 811 546 5887',
    nextOfKin: 'Mrs. Titi Ogundipe',
  },
  {
    id: 10,
    name: 'Adeniyi Adekunle',
    role: 'Member',
    occupation: 'Entrepreneur',
    email: 'blessing.a@feb24.org',
    phone: '+234 808 791 5960',
    nextOfKin: 'Mr. Chidi Agu',
  },
  {
    id: 11,
    name: 'Victor Uche',
    role: 'Member',
    occupation: 'IT Specialist',
    email: 'victor.u@feb24.org',
    phone: '+234 809 111 2222',
    nextOfKin: 'Mrs. Linda Uche',
  },
  {
    id: 12,
    name: 'Ngozi Ikenna',
    role: 'Member',
    occupation: 'Pharmacist',
    email: 'ngozi.i@feb24.org',
    phone: '+234 810 333 4444',
    nextOfKin: 'Mr. Obinna Ikenna',
  },
];

const MemberCard = ({ member }: { member: Member }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={cn(
        "group relative bg-card rounded-2xl overflow-hidden shadow-card hover-lift transition-all duration-300",
        member.isLeader && "border-2",
        member.leaderType === 'chairman' && "border-accent",
        member.leaderType === 'secretary' && "border-secondary"
      )}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      {/* Leader Badge */}
      {member.isLeader && (
        <div className={cn(
          "absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1",
          member.leaderType === 'chairman' ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"
        )}>
          {member.leaderType === 'chairman' ? <Crown className="w-3 h-3" /> : <Shield className="w-3 h-3" />}
          {member.role}
        </div>
      )}

      {/* Avatar Area */}
      <div className={cn(
        "aspect-square flex items-center justify-center transition-all duration-300",
        member.leaderType === 'chairman' ? "bg-gradient-accent" : 
        member.leaderType === 'secretary' ? "bg-secondary" : "bg-gradient-hero"
      )}>
        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <User className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
          {member.name}
        </h3>
        {!member.isLeader && (
          <p className="text-secondary font-medium text-sm mb-2">{member.role}</p>
        )}
        {member.occupation && (
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            {member.occupation}
          </p>
        )}
      </div>

      {/* Hover Details */}
      <div className={cn(
        "absolute inset-0 bg-card/95 backdrop-blur-sm p-6 flex flex-col justify-center transition-all duration-300",
        showDetails ? "opacity-100 visible" : "opacity-0 invisible"
      )}>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
          {member.name}
        </h3>
        <div className="space-y-3 text-sm">
          {member.occupation && (
            <div className="flex items-center gap-3 text-muted-foreground">
              <Briefcase className="w-4 h-4 text-secondary" />
              {member.occupation}
            </div>
          )}
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="w-4 h-4 text-secondary font-bold text-xs">ID</span>
            FEB24-{String(member.id).padStart(3, '0')}
          </div>
          {member.email && (
            <div className="flex items-center gap-3 text-muted-foreground">
              <Mail className="w-4 h-4 text-secondary" />
              {member.email}
            </div>
          )}
          {member.phone && (
            <a
              href={`https://wa.me/${member.phone.replace(/\s|\+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors"
            >
              <Phone className="w-4 h-4 text-secondary" />
              WhatsApp: {member.phone}
            </a>
          )}
          {member.isLeader && member.dateOfBirth && (
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="w-4 h-4 text-secondary" />
              {member.dateOfBirth}
            </div>
          )}
          {member.nextOfKin && (
            <div className="flex items-center gap-3 text-muted-foreground">
              <User className="w-4 h-4 text-secondary" />
              Next of Kin: {member.nextOfKin}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Members = () => {
  const leaders = members.filter((m) => m.isLeader);
  const otherMembers = members.filter((m) => !m.isLeader);

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
              Our People
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Meet Our Members
            </h1>
            <p className="text-xl text-primary-foreground/70">
              The dedicated individuals who make FEB24 Association a thriving community.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Leadership"
            title="Our Executive Team"
            description="Meet the leaders who guide our association with vision and dedication."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leaders.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* All Members Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            subtitle="Community"
            title="Our Valued Members"
            description="Every member plays a vital role in building our association."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Members;
