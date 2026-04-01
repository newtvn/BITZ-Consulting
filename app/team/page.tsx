'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Terminal, ChevronRight, Mail } from 'lucide-react'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TeamMember {
  id: string;
  index: string;
  name: string;
  role: string;
  description: string;
  image: string;
  stack?: string[];
  expertise?: string[];
  accolades?: string[];
}

const leadershipMembers: TeamMember[] = [
  {
    id: 'james-kaminju',
    index: '001',
    name: 'James Kaminju',
    role: 'Chief Executive Officer',
    description: 'Leading BITZ-itc with vision and expertise, driving the company\'s growth and innovation across East Africa. Spearheads strategic partnerships with government agencies, UNICEF, and the World Bank to deliver transformative technology solutions at scale.',
    image: '/team-profiles/James-profile.jpg',
    stack: ['Strategy', 'Operations', 'Business Development'],
    expertise: ['Business Strategy', 'Leadership', 'Innovation', 'Enterprise Architecture'],
    accolades: ['Best CEO award - 2024'],
  },
  {
    id: 'nelson-adagi',
    index: '002',
    name: 'Nelson Adagi',
    role: 'Business Lead — Technical',
    description: 'Bridges the gap between business requirements and technical execution. Oversees project delivery pipelines, ensures technical feasibility of proposals, and manages cross-functional engineering teams to deliver on-time, on-spec solutions.',
    image: '/team-profiles/Nelson-profile.jpg',
    stack: ['Project Architecture', 'Technical Analysis', 'Agile'],
    expertise: ['Technical Project Management', 'Systems Analysis', 'Stakeholder Management', 'Agile Delivery'],
    accolades: ['Project Management Professional'],
  },
  {
    id: 'franklin-karanja',
    index: '003',
    name: 'Franklin Karanja',
    role: 'Technical Lead',
    description: 'Architects and oversees the technical foundation of all BITZ-itc products. Leads code reviews, defines engineering standards, and ensures systems are built for performance, security, and scalability from day one.',
    image: '/team-profiles/Franklin-profile.jpg',
    stack: ['Python', 'TensorFlow', 'Docker', 'PostgreSQL'],
    expertise: ['Software Architecture', 'AI/ML Engineering', 'System Design', 'Performance Optimization'],
    accolades: ['Finalist — A2SV'],
  },
  {
    id: 'newton-brian',
    index: '004',
    name: 'Newton Brian',
    role: 'Business Lead — Commercial & Design Engineer',
    description: 'Drives commercial strategy and design engineering across all client-facing products. Combines deep technical knowledge with business acumen to architect solutions that are both commercially viable and technically elegant.',
    image: '/team-profiles/Newton-profile.png',
    stack: ['React', 'Next.js', 'Figma', 'TypeScript', 'AWS'],
    expertise: ['UI/UX Design', 'Frontend Architecture', 'Commercial Strategy', 'Design Systems'],
    accolades: ['Oracle Primavera P6 Certification', 'Cisco Certified DevNet Associate', 'AWS Certified Cloud Practitioner', 'Design Lead — IndabaX'],
  },
];

const engineeringMembers: TeamMember[] = [
  {
    id: 'ruth-ikamba',
    index: '005',
    name: 'Ruth Ikamba',
    role: 'Finance & HR',
    description: 'Manages all financial operations, budgeting, and human resource strategy. Ensures the company maintains fiscal health while building a world-class engineering culture through strategic hiring and team development.',
    image: '/team-profiles/Ruth Ikamba.jpeg',
    stack: ['Financial Planning', 'HR Systems', 'Compliance'],
    expertise: ['Financial Management', 'Human Resources', 'Payroll & Benefits', 'Organizational Development'],
    accolades: [],
  },
  {
    id: 'peter-rogendo',
    index: '006',
    name: 'Peter Rogendo',
    role: 'AI Lead',
    description: 'Leads the AI research and deployment pipeline. Specializes in building production-grade ML systems, model optimization, and integrating AI capabilities into enterprise software for maximum business impact.',
    image: '/team-profiles/Rogendo-profile.jpg',
    stack: ['Python', 'TensorFlow', 'Kubernetes', 'MLflow'],
    expertise: ['AI Strategy', 'Model Deployment', 'MLOps', 'Research & Development'],
    accolades: [],
  },
  {
    id: 'brenda-ogutu',
    index: '007',
    name: 'Brenda Ogutu',
    role: 'ML Engineer',
    description: 'Builds and fine-tunes machine learning models that power intelligent features across BITZ-itc products. Focuses on data preprocessing, feature engineering, model training, and deployment to production environments.',
    image: '/team-profiles/brenda profile.jpeg',
    stack: ['Python', 'Vue.js', 'TypeScript'],
    expertise: ['Data Engineering', 'Frontend Development', 'Machine Learning'],
    accolades: [],
  },
  {
    id: 'miriam-shem',
    index: '008',
    name: 'Miriam Shem',
    role: 'AI Solutions Software Engineer',
    description: 'Passionate about building intelligent systems that solve real-world problems at scale. With a strong foundation in full-stack development and machine learning, she designs and implements AI-driven solutions such as case triage systems, language translation tools, and data-powered decision support platforms for vulnerable communities. Her work contributes to digital transformation initiatives in child protection and social services across East Africa, bridging the gap between complex data and human-centered impact.',
    image: '/team-profiles/Miriam Shem .jpeg',
    stack: ['Python', 'JavaScript (TypeScript)', 'SQL'],
    expertise: ['AI/ML Engineering', 'Full-Stack Development', 'Data-Driven Solutions', 'Digital Transformation'],
    accolades: [],
  },
  {
    id: 'joseph-kimani',
    index: '009',
    name: 'Joseph Kimani',
    role: 'Senior Software Engineer',
    description: 'Veteran engineer with deep expertise in backend systems and full-stack architecture. Builds the core services and APIs that power enterprise applications across government and international organization deployments.',
    image: '/team-profiles/Kimani-profile.jpg',
    stack: ['PHP', 'Laravel', 'MySQL', 'Node.js'],
    expertise: ['Full-Stack Development', 'Software Architecture', 'API Design', 'Database Engineering'],
    accolades: ['Asterics', 'PHP Frameworks'],
  },
  {
    id: 'phylis-kamau',
    index: '010',
    name: 'Phylis Kamau',
    role: 'DevOps & Site Reliability Engineer',
    description: 'Leads the design and operation of BITZ\'s deployment infrastructure and reliability systems. Architects and scales CI/CD pipelines that enable rapid, consistent releases while maintaining high availability, performance, and production stability.',
    image: '/team-profiles/phylis-profile.jpg',
    stack: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'Grafana', 'Prometheus', 'AWS', 'Terraform', 'Ansible'],
    expertise: ['CI/CD & Automation', 'Containerization & Orchestration', 'Monitoring & Observability', 'Cloud & Infrastructure'],
    accolades: [],
  },
  {
    id: 'mark-kungu',
    index: '011',
    name: 'Mark Kungu',
    role: 'Frontend Developer',
    description: 'Crafts responsive, performant user interfaces using modern frontend frameworks. Translates design specifications into pixel-perfect, accessible web applications with a focus on user experience and performance.',
    image: '/team-profiles/mark kungu .png',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    expertise: ['Frontend Development', 'React Ecosystem', 'Responsive Design', 'Web Performance'],
    accolades: [],
  },
  {
    id: 'marlon',
    index: '012',
    name: 'Marlon',
    role: 'Software Engineer',
    description: 'Contributing to frontend and backend development across the stack. Works on real-world enterprise projects delivering full-stack solutions.',
    image: '/team-profiles/Marlon-profile.jpg',
    stack: ['React Native', 'Django'],
    expertise: ['AI Engineering', 'Mobile Development', 'Backend Fundamentals'],
    accolades: [],
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-28 pb-20 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 block font-medium">The Team</span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-navy leading-none">
                Built by<br />engineers<span className="text-navy/40">.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <p className="text-lg leading-relaxed text-gray-500">
                Since 2007, we have been engineering high-impact digital solutions that bridge the gap between technical precision and human-centric design across East Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-32 md:mb-48 bg-gray-50 -mx-0 px-6 md:px-12 lg:px-24 py-20 md:py-32">
          <div className="max-w-7xl mx-auto space-y-32 md:space-y-48">
            <div className="flex flex-col md:flex-row gap-8 md:gap-24">
              <div className="w-24 shrink-0">
                <span className="text-base font-bold border-b-2 border-navy/20 pb-2">01. Vision</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-[1.1] max-w-4xl">
                  To define the architectural standards of the <span className="text-gray-300">digital frontier</span> through relentless precision.
                </h2>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-24">
              <div className="w-24 shrink-0 md:text-right">
                <span className="text-base font-bold border-b-2 border-navy/20 pb-2">02. Mission</span>
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-navy leading-[1.1] max-w-4xl">
                  Empowering enterprises with <span className="text-gray-300">uncompromising technology</span> that scales beyond tomorrow.
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership — Terminal Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">sys.leadership</span>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">The Architects</h3>
            </div>
            <span className="font-mono text-base text-navy/30">nodes: {leadershipMembers.length} / active</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:pb-48">
            {leadershipMembers.map((member, index) => {
              const stairOffsets = ['lg:translate-y-0', 'lg:translate-y-16', 'lg:translate-y-32', 'lg:translate-y-48'];
              return (
              <div
                key={member.id}
                className={`group relative bg-white cursor-pointer overflow-hidden border border-navy/10 ${stairOffsets[index] || ''}`}
                onClick={() => setSelectedMember(member)}
              >
                {/* Photo */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    src={member.image}
                  />
                  {/* Terminal overlay on hover */}
                  <div className="absolute inset-0 bg-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="font-mono text-sm text-green-400 mb-3 opacity-60">$ cat profile.json</div>
                    <div className="space-y-1">
                      {member.stack?.map((tech) => (
                        <span key={tech} className="inline-block mr-2 mb-1 px-2 py-0.5 text-sm font-mono text-cyan-300 border border-cyan-400/30 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-white text-base font-medium">
                      View profile <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                  {/* Index badge */}
                  <div className="absolute top-4 left-4 font-mono text-xs text-white/50 bg-black/40 px-2 py-1 rounded">
                    [{member.index}]
                  </div>
                </div>

                {/* Info bar */}
                <div className="p-5 border-t border-navy/5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-navy leading-tight">{member.name}</h4>
                      <p className="text-sm text-navy/50 font-mono mt-1">{member.role}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0" title="Active"></div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </section>

        {/* Engineering Team — Terminal Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-32 md:mb-48">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-baseline gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">sys.engineering</span>
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">The Engineers</h3>
            </div>
            <span className="font-mono text-base text-navy/30">nodes: {engineeringMembers.length} / active</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:pb-32">
            {engineeringMembers.map((member, index) => {
              const colIndex = index % 3;
              const stairOffsets = ['lg:translate-y-0', 'lg:translate-y-16', 'lg:translate-y-32'];
              return (
              <div
                key={member.id}
                className={`group relative bg-white cursor-pointer overflow-hidden border border-navy/10 ${stairOffsets[colIndex] || ''}`}
                onClick={() => setSelectedMember(member)}
              >
                {/* Photo */}
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    src={member.image}
                  />
                  {/* Terminal overlay on hover */}
                  <div className="absolute inset-0 bg-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="font-mono text-sm text-green-400 mb-3 opacity-60">$ cat profile.json</div>
                    <div className="space-y-1">
                      {member.stack?.map((tech) => (
                        <span key={tech} className="inline-block mr-2 mb-1 px-2 py-0.5 text-sm font-mono text-cyan-300 border border-cyan-400/30 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-white text-base font-medium">
                      View profile <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                  {/* Index badge */}
                  <div className="absolute top-4 left-4 font-mono text-xs text-white/50 bg-black/40 px-2 py-1 rounded">
                    [{member.index}]
                  </div>
                </div>

                {/* Info bar */}
                <div className="p-5 border-t border-navy/5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-navy leading-tight">{member.name}</h4>
                      <p className="text-sm text-navy/50 font-mono mt-1">{member.role}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0" title="Active"></div>
                  </div>
                </div>
              </div>
              );
            })}

            {/* Join the Team — fills remaining grid cell */}
            <div className="relative bg-mesh-card overflow-hidden flex flex-col border border-navy/10 lg:translate-y-32">
              <div className="aspect-[3/4] relative flex flex-col justify-center items-center p-8">
                <div className="font-mono text-xs text-navy/30 mb-6 tracking-wider">$ ./join-team.sh</div>
                <h4 className="text-2xl font-extrabold text-navy tracking-tight mb-2 text-center">Join the Team</h4>
                <p className="text-base text-navy/40 font-mono mb-8 text-center">We&apos;re hiring</p>
                <div className="space-y-2 w-full max-w-[220px]">
                  {['Full-Stack Developer', 'UI/UX Designer', 'DevOps Engineer', 'Data Analyst', 'Project Manager'].map((role) => (
                    <div key={role} className="flex items-center gap-2.5 text-sm text-navy/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                      <span className="font-mono">{role}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-navy/10 w-full max-w-[220px]">
                  <Link href="mailto:info@bitz-itc.com" className="flex items-center gap-2 text-navy font-semibold text-base hover:text-navy/70 transition-colors">
                    <Mail className="h-4 w-4" />
                    info@bitz-itc.com
                  </Link>
                </div>
              </div>
              <div className="p-5 border-t border-navy/5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-navy leading-tight">Open Positions</h4>
                    <p className="text-sm text-navy/50 font-mono mt-1">Apply Now</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0 animate-pulse" title="Hiring"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-navy relative">
                {/* Animated grid background */}
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
                {/* Glowing orb */}
                <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-indigo-500/15 rounded-full blur-[60px]" />

                {/* Terminal window */}
                <div className="absolute inset-8 md:inset-12 flex flex-col">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex-1 p-6 flex flex-col">
                    {/* Terminal header */}
                    <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                      </div>
                      <span className="font-mono text-xs text-white/30 ml-2">methodology.sh</span>
                    </div>
                    {/* Terminal content */}
                    <div className="font-mono text-sm space-y-3 flex-1">
                      <div><span className="text-green-400/70">$</span> <span className="text-white/60">cat ./approach</span></div>
                      <div className="text-cyan-300/60 text-xs leading-relaxed pl-2 border-l border-cyan-400/20">
                        Precision-driven engineering<br />
                        for scalable enterprise systems
                      </div>
                      <div className="pt-2"><span className="text-green-400/70">$</span> <span className="text-white/60">ls ./principles</span></div>
                      <div className="grid grid-cols-2 gap-2 pl-2">
                        <span className="text-amber-300/50 text-xs">clean-architecture/</span>
                        <span className="text-amber-300/50 text-xs">test-driven/</span>
                        <span className="text-amber-300/50 text-xs">continuous-delivery/</span>
                        <span className="text-amber-300/50 text-xs">human-centered/</span>
                      </div>
                      <div className="pt-2"><span className="text-green-400/70">$</span> <span className="text-white/40 animate-pulse">_</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -top-6 -right-6 bg-white p-6 md:p-8 shadow-ios-lg hidden md:block max-w-[220px] rounded-xl border border-navy/5">
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4">
                  <Terminal className="h-5 w-5 text-navy" />
                </div>
                <h5 className="text-lg font-bold mb-1.5 text-navy">Technical Purity</h5>
                <p className="text-sm text-gray-500 leading-relaxed">Clean code as architectural art.</p>
              </div>

              {/* Bottom-left floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 shadow-ios-lg hidden md:flex items-center gap-3 rounded-xl border border-navy/5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-sm text-navy/70">all systems operational</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 block font-medium">Our Methodology</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy mb-8 leading-tight">Sculpting the Future with Purpose</h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-12">
                We don't just build software. We craft digital environments that serve as the backbone for enterprises across East Africa. Our approach eliminates the unnecessary to amplify the essential.
              </p>
              <div className="grid grid-cols-3 gap-8 border-t border-navy/10 pt-12">
                <div>
                  <span className="block text-3xl font-bold text-navy mb-1">18Y+</span>
                  <span className="text-sm uppercase text-gray-400 tracking-wider">Expertise</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-navy mb-1">450+</span>
                  <span className="text-sm uppercase text-gray-400 tracking-wider">Deployments</span>
                </div>
                <div>
                  <span className="block text-3xl font-bold text-navy mb-1">{leadershipMembers.length + engineeringMembers.length}</span>
                  <span className="text-sm uppercase text-gray-400 tracking-wider">Engineers</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Team Member Detail Panel — Side-by-side with mesh */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl mx-4 bg-mesh-card rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-20 text-gray-400 hover:text-navy hover:bg-navy/5"
              >
                <X className="h-5 w-5" />
              </Button>

              {/* Photo — left side, full height */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full md:w-2/5 shrink-0 min-h-[300px] md:min-h-[500px] bg-mesh-card"
              >
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-contain object-center"
                />
                {/* Index + status overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-4 left-4 flex items-center gap-3"
                >
                  <span className="font-mono text-xs text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
                    [{selectedMember.index}]
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    active
                  </span>
                </motion.div>
              </motion.div>

              {/* Content — right side, scrollable */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
                {/* Name + Role */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">{selectedMember.name}</h3>
                  <p className="text-base font-mono text-navy/40 mt-1">{selectedMember.role}</p>
                </motion.div>

                {/* Bio */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-500 leading-relaxed"
                >
                  {selectedMember.description}
                </motion.p>

                {/* Terminal-style tech stack */}
                {selectedMember.stack && selectedMember.stack.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-xl p-5 border border-navy/5 shadow-ios"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                      </div>
                      <span className="font-mono text-xs text-gray-400 ml-2">tech_stack.sh</span>
                    </div>
                    <div className="font-mono text-sm text-green-600/70 mb-3">
                      <span className="text-gray-400">$</span> ls ./capabilities
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.stack.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + index * 0.08 }}
                          className="px-3 py-1.5 text-sm font-mono text-navy bg-navy/5 border border-navy/10 rounded-lg"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Expertise — grid */}
                {selectedMember.expertise && selectedMember.expertise.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                  >
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-mono">// expertise</h4>
                    <div className="grid grid-cols-2 gap-[1px] bg-navy/5 rounded-xl overflow-hidden">
                      {selectedMember.expertise.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 + index * 0.06 }}
                          className="bg-white p-4 flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-navy shrink-0"></div>
                          <span className="text-sm text-navy/80">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Accolades */}
                {selectedMember.accolades && selectedMember.accolades.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-3 font-mono">// accolades</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.accolades.map((item, index) => (
                        <span key={index} className="px-3 py-1.5 text-sm text-navy bg-navy/5 border border-navy/10 rounded-lg font-mono">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
