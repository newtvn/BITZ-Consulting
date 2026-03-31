'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronRight, Globe, Mail, MessageSquare, Headphones, Users, X, Linkedin, Instagram, Github } from 'lucide-react'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  expertise?: string[];
  accolades?: string[];
  linkedin?: string;
  instagram?: string;
  github?: string;
}

const teamMembers: TeamMember[] = [
  // Leadership team
  {
    id: 'james-kaminju',
    name: 'James Kaminju',
    role: 'Chief Executive Officer',
    description: 'Leading BITZ-itc with vision and expertise, driving our company\'s growth and innovation in technology solutions.',
    image: '/team-profiles/James-profile.jpg',
    expertise: ['Business Strategy', 'Leadership', 'Innovation'],
    accolades: ['Best CEO award - 2024'],
  },
  {
    id: 'mercy-kamau',
    name: 'Mercy Kamau',
    role: 'Head of Strategy',
    description: 'Developing and implementing strategic initiatives to drive business growth and market leadership.',
    image: '/team-profiles/Mercy-profile.jpg',
    expertise: ['Strategic Planning', 'Market Analysis', 'Growth Initiatives'],
    accolades: ['Planning ', 'Strategy and Innovation'],
  },
  {
    id: 'nelson-adagi',
    name: 'Nelson Adagi',
    role: 'Project Manager',
    description: 'Ensuring successful delivery of projects through effective planning, execution, and team leadership.',
    image: '/team-profiles/Nelson-profile.jpg',
    expertise: ['Project Management', 'Team Leadership', 'Execution'],
    accolades: ['Project Management']
  },
  {
    id: 'joseph-kimani',
    name: 'Joseph Kimani',
    role: 'Technical Lead',
    description: 'Leading technical innovation and ensuring the highest standards in our technology solutions.',
    image: '/team-profiles/Kimani-profile.jpg',
    expertise: ['Technical Leadership', 'Innovation', 'Software Architecture'],
    accolades: ['Aesterics', 'Php frameworks']
  },
  // Extended team
  {
    id: 'joan-njoki',
    name: 'Joan Njoki',
    role: 'Head of Finance',
    description: 'Managing financial operations and strategic financial planning for sustainable growth.',
    image: '/team-profiles/Joan-profile.jpg',
    expertise: ['Financial Management', 'Strategic Planning', 'Budgeting'],
    accolades: [],
  },
  {
    id: 'jimmy-wanyama',
    name: 'Jimmy Wanyama',
    role: 'Lead AI Developer',
    description: 'Spearheading AI initiatives and machine learning solutions for innovative applications.',
    image: '/team-profiles/Jimmy-profile.jpg',
    expertise: ['AI Development', 'Machine Learning', 'Data Science'],
    accolades: ['AI development'],
  },
  {
    id: 'miriam-shem',
    name: 'Miriam Shem',
    role: 'Head of Social Media and AI Developer',
    description: 'Combining social media expertise with AI development for enhanced digital presence.',
    image: '/team-profiles/Miriam-profile.jpg',
    expertise: ['Social Media Strategy', 'AI for Marketing', 'Content Creation'],
    accolades: [],
  },
  {
    id: 'franklin-karanja',
    name: 'Franklin Karanja',
    role: 'Model and Training',
    description: 'Specializing in AI model development and training for optimal performance.',
    image: '/team-profiles/Franklin-profile.jpg',
    expertise: ['AI Model Development', 'Model Training', 'Performance Optimization'],
    accolades: ['Finalist in A2SV'],
  },
  {
    id: 'phylis-kamau',
    name: 'Phylis Kamau',
    role: 'CI/CD and Deployment',
    description: 'Ensuring smooth and efficient deployment processes through robust CI/CD pipelines.',
    image: '/team-profiles/phylis-profile.jpg',
    expertise: ['CI/CD', 'DevOps', 'Cloud Deployment'],
    accolades: ['Certification Z'],
  },
  {
    id: 'jude-angedu',
    name: 'Jude Angedu',
    role: 'Backend Development',
    description: 'Building robust and scalable backend systems for our applications.',
    image: '/team-profiles/Jude-profile.jpg',
    expertise: ['Backend Development', 'APIs', 'Database Management'],
    accolades: [],
  },
  {
    id: 'peter-rogendo',
    name: 'Peter Rogendo',
    role: 'Backend Development',
    description: 'Contributing to the development of efficient and reliable backend services.',
    image: '/team-profiles/Rogendo-profile.jpg',
    expertise: ['Backend Development', 'Model training', 'Optimization'],
    accolades: [],
  },
  {
    id: 'newton-brian',
    name: 'Newton Brian',
    role: 'UI/UX and Frontend Development',
    description: 'Designing and implementing user-friendly interfaces and engaging frontend experiences.',
    image: '/team-profiles/Newton-profile.png',
    expertise: ['UI/UX Design', 'Frontend Development', 'Responsive Design'],
    accolades: ['Oracle Primavera P6 certification','Cisco Certified DevNet Associate','AWS Certified Cloud Practitioner','First-Aid and CPR Certified','Design lead-IndabaX'],
  },
  {
    id: 'Marlon',
    name: 'Marlon',
    role: 'Software-intern',
    description: 'Backend and design intern, contributing to the development of our applications.',
    image: '/team-profiles/Marlon-profile.jpg',
    expertise: ['Frontend development- React Native', 'Bootstrap(learning)', 'Django'],
    accolades: [],
  }
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleClosePanel = () => {
    setSelectedMember(null);
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-navy text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Our Team
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Meet the experts behind our innovative technology solutions
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-xl shadow-ios-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users className="h-24 w-24 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Leadership</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Meet Our Leadership Team
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-[900px]">
                  Experienced professionals guiding our company's vision and growth
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {teamMembers.filter(member => ['james-kaminju', 'mercy-kamau', 'nelson-adagi', 'joseph-kimani'].includes(member.id)).map(member => (
                 <Card 
                   key={member.id} 
                   className="border-0 shadow-ios rounded-xl overflow-hidden hover:shadow-ios-lg transition-all duration-300 cursor-pointer group"
                   onClick={() => handleCardClick(member)}
                 >
                   <div className="aspect-video relative bg-gray-100">
                     <img
                       src={member.image}
                       alt={member.name}
                       className="object-cover w-full h-full"
                     />
                     {/* Social Media Icons on Hover */}
                     {(member.linkedin || member.instagram || member.github) && (
                       <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         {member.linkedin && (
                           <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                             <Linkedin className="h-8 w-8 text-white hover:text-gray-300" />
                           </Link>
                         )}
                         {member.instagram && (
                           <Link href={member.instagram} target="_blank" rel="noopener noreferrer">
                             <Instagram className="h-8 w-8 text-white hover:text-gray-300" />
                           </Link>
                         )}
                         {member.github && (
                           <Link href={member.github} target="_blank" rel="noopener noreferrer">
                             <Github className="h-8 w-8 text-white hover:text-gray-300" />
                           </Link>
                         )}
                       </div>
                     )}
                   </div>
                   <CardContent className="p-8 flex flex-col md:flex-row items-center text-center md:text-left gap-6">
                     <div className="flex-shrink-0">
                       
                     </div>
                     <div className="flex-grow space-y-2">
                       <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                       <p className="text-lg text-gray-500 mb-4">{member.role}</p>
                       <p className="text-base text-gray-500">
                         {member.description}
                       </p>
                     </div>
                   </CardContent>
                 </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-28 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-navy hover:bg-navy/90 rounded-full px-4 py-1 text-sm">Extended Team</Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Our Specialized Teams
                </h2>
                <p className="text-lg md:text-xl text-gray-500 max-w-[900px]">
                  Dedicated professionals driving innovation across all aspects of our business
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {teamMembers.filter(member => !['james-kaminju', 'mercy-kamau', 'nelson-adagi', 'joseph-kimani'].includes(member.id)).map(member => (
                 <Card 
                   key={member.id} 
                   className="border-0 shadow-ios rounded-xl overflow-hidden hover:shadow-ios-lg transition-all duration-300 cursor-pointer group"
                   onClick={() => handleCardClick(member)}
                 >
                   <div className="aspect-video relative bg-gray-100">
                     <img
                       src={member.image}
                       alt={member.name}
                       className="object-cover w-full h-full"
                     />
                     {/* Social Media Icons on Hover */}
                     {(member.linkedin || member.instagram || member.github) && (
                       <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         {member.linkedin && (
                           <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                             <Linkedin className="h-8 w-8 text-white hover:text-gray-300" />
                           </Link>
                         )}
                         {member.instagram && (
                           <Link href={member.instagram} target="_blank" rel="noopener noreferrer">
                             <Instagram className="h-8 w-8 text-white hover:text-gray-300" />
                           </Link>
                         )}
                         {member.github && (
                           <Link href={member.github} target="_blank" rel="noopener noreferrer">
                             <Github className="h-8 w-8 text-white hover:text-gray-300" />
                           </Link>
                         )}
                       </div>
                     )}
                   </div>
                   <CardContent className="p-8 flex flex-col md:flex-row items-center text-center md:text-left gap-6">
                     <div className="flex-shrink-0">
                       
                     </div>
                     <div className="flex-grow space-y-2">
                       <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                       <p className="text-lg text-gray-500 mb-4">{member.role}</p>
                       <p className="text-base text-gray-500">
                         {member.description}
                       </p>
                     </div>
                   </CardContent>
                 </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Team Member Detail Panel */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={handleClosePanel}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md md:max-w-2xl lg:max-w-3xl mx-4 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClosePanel}
                className="absolute top-2 right-2 z-10 text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="aspect-square md:aspect-video relative bg-gray-100 md:w-1/3 flex-shrink-0">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 space-y-4 flex-grow overflow-y-auto">
                <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
                <p className="text-lg text-gray-600">{selectedMember.role}</p>
                <p className="text-base text-gray-500">{selectedMember.description}</p>

                {/* Social Media Links */}
                {(selectedMember.linkedin || selectedMember.instagram || selectedMember.github) && (
                  <div className="flex gap-4 mt-4">
                    {selectedMember.linkedin && (
                      <Link href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6 text-gray-500 hover:text-navy" />
                      </Link>
                    )}
                    {selectedMember.instagram && (
                      <Link href={selectedMember.instagram} target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-6 w-6 text-gray-500 hover:text-navy" />
                      </Link>
                    )}
                    {selectedMember.github && (
                      <Link href={selectedMember.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-6 w-6 text-gray-500 hover:text-navy" />
                      </Link>
                    )}
                  </div>
                )}

                {/* Expertise and Accolades */}
                {(selectedMember.expertise || selectedMember.accolades) && (
                  <div className="space-y-4 mt-4">
                    {selectedMember.expertise && selectedMember.expertise.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold">Expertise:</h4>
                        <ul className="list-disc list-inside text-base text-gray-500">
                          {selectedMember.expertise.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedMember.accolades && selectedMember.accolades.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold">Accolades:</h4>
                        <ul className="list-disc list-inside text-base text-gray-500">
                          {selectedMember.accolades.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 