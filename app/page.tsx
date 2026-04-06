import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Phone as PhoneIcon,
  Mail,
  Shield,
  Lock,
  Eye,
  Brain,
  Globe,
  MessageSquare,
  Radio,
  BarChart3,
  Building2,
  Users,
  Briefcase,
  HeartHandshake,
  FileCheck,
  Layers,
  Workflow,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Clock,
  Send,
} from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 bg-mesh">

        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-16 md:pt-28 pb-20 md:pb-32">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-6 block font-medium">Trusted in 5+ countries</span>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-navy leading-none">
                    Digital Case Management for VAC, GBV &amp; Protection Response<span className="text-navy/40">.</span>
                  </h1>
                </div>
                <div className="lg:col-span-4 pb-3">
                  <p className="text-lg leading-relaxed text-gray-500">
                    OpenCHS helps governments and international partners run multilingual helplines and manage sensitive cases across voice, SMS, chat, and social—securely and at scale, including labor and immigrant complaints.
                  </p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-navy/5 mt-12">
                {[
                  "30,000+ contacts/month per country",
                  "Multi-channel intake: voice/SMS/chat/social",
                  "Case workflows + referrals + analytics",
                  "Secure by design",
                ].map((stat) => (
                  <p key={stat} className="text-sm font-medium text-navy/70">{stat}</p>
                ))}
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                {[
                  { title: "Multichannel Intake", desc: "Voice, SMS, WhatsApp, web, and social channels." },
                  { title: "Case Workflow", desc: "End-to-end lifecycle with referrals and follow-ups." },
                  { title: "Insights & Reporting", desc: "Real-time dashboards and configurable reports." },
                ].map((f) => (
                  <div key={f.title}>
                    <h3 className="text-base font-bold text-navy mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-base">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-10">
                <Link href="/contact?demo=true">
                  <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base px-8 py-6 font-medium">
                    Request Demo <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/case-studies" className="text-base text-navy/60 hover:text-navy flex items-center gap-2 font-medium transition-colors">
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>

          {/* Full-width hero image */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-20 md:pb-32">
            <div className="overflow-hidden rounded-xl shadow-ios-lg">
              <Image
                src="/Gemini_Generated_Image_bejuz2bejuz2beju.png"
                alt="OpenCHS Platform — Digital Case Management"
                width={1400}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Who We Serve ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Who We Serve</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Built for Protection Systems</h2>
          <p className="text-gray-500 text-lg mt-4 max-w-3xl">
            We understand the unique challenges of organizations working to protect the most vulnerable populations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy/5 mt-12">
            {[
              {
                icon: Building2,
                title: "Government Ministries",
                desc: "Struggling with fragmented systems, manual documentation, and limited visibility across departments.",
              },
              {
                icon: PhoneIcon,
                title: "National Helplines & Call Centers",
                desc: "High call volumes, limited counselors, multiple languages, and inconsistent case tracking.",
              },
              {
                icon: Globe,
                title: "UN/INGO Programs",
                desc: "Coordinating protection responses across partners with varying standards and reporting needs.",
              },
              {
                icon: Briefcase,
                title: "Labor & Immigration Units",
                desc: "Cross-border survivor support needs, tracking complaints from abroad, and inter-agency coordination.",
              },
            ].map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                  <Icon className="h-8 w-8 text-navy group-hover:text-white mb-6 transition-colors duration-500" />
                  <h3 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{card.title}</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{card.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Solutions ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Solutions</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Comprehensive Protection Solutions</h2>
          <p className="text-gray-500 text-lg mt-4 max-w-3xl">
            Modular solutions designed for the specific needs of protection programs, helplines, and government agencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/5 mt-12">
            {[
              {
                icon: HeartHandshake,
                title: "OpenCHS Helpline & Case Management",
                desc: "End-to-end case management for VAC, GBV, and child protection programs with multi-channel intake.",
                anchor: "helpline",
              },
              {
                icon: Shield,
                title: "PSEA Reporting & Case Handling",
                desc: "Confidential reporting mechanisms for protection against sexual exploitation and abuse.",
                anchor: "psea",
              },
              {
                icon: FileCheck,
                title: "Complaints & Grievance Mechanisms",
                desc: "Structured intake and resolution workflows for organizational accountability.",
                anchor: "complaints",
              },
              {
                icon: Briefcase,
                title: "Labor & Immigrant Protection",
                desc: "Cross-border case tracking connecting migrants abroad with home government support.",
                anchor: "labor",
              },
              {
                icon: Layers,
                title: "Interoperability & Integrations",
                desc: "Connect with telecom, SMS gateways, email, social channels, and existing systems.",
                anchor: "integrations",
              },
              {
                icon: Brain,
                title: "Responsible AI & Automation",
                desc: "Human-in-the-loop AI for triage, routing, and analytics\u2014never for high-risk decisions.",
                anchor: "ai",
              },
            ].map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                  <Icon className="h-8 w-8 text-navy group-hover:text-white mb-6 transition-colors duration-500" />
                  <h3 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{card.title}</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{card.desc}</p>
                  <Link href={`/solutions#${card.anchor}`} className="inline-flex items-center gap-1 text-sm text-navy/50 group-hover:text-white/60 mt-4 font-medium transition-colors duration-500">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="mt-10">
            <Link href="/solutions">
              <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base px-8 py-6 font-medium">
                Explore All Solutions <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* ── Consulting Services ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Consulting Services</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Strategic Advisory &amp; Implementation</h2>
          <p className="text-gray-500 text-lg mt-4 max-w-3xl">
            Beyond our flagship platform, we provide consulting services to help governments and development partners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/5 mt-12">
            {[
              {
                icon: BarChart3,
                title: "Digital Service Delivery Assessments",
                desc: "Assess e-service maturity, gaps, user journeys, and operational bottlenecks.",
              },
              {
                icon: FileCheck,
                title: "Manual Records & Digitization Strategy",
                desc: "Records audits, digitization roadmap, retention, and transition planning.",
              },
              {
                icon: Shield,
                title: "Governance, Security & Implementation Support",
                desc: "Operating models, cybersecurity guidance, PMO, and delivery assurance.",
              },
            ].map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                  <Icon className="h-8 w-8 text-navy group-hover:text-white mb-6 transition-colors duration-500" />
                  <h3 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{card.title}</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{card.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-10">
            <Link href="/consulting">
              <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base px-8 py-6 font-medium">
                Explore Consulting <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* ── OpenCHS Platform (dark section) ── */}
        <section className="bg-mesh-navy text-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block font-medium">The Platform</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">One Platform for End-to-End Case Management</h2>
            <p className="text-gray-400 text-lg mt-4 max-w-3xl">
              OpenCHS is a modular, open-source platform built specifically for protection systems. From first contact to case closure…
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-start">
              <ul className="space-y-4">
                {[
                  "Configurable workflows.",
                  "Referrals and follow-up tasks.",
                  "Role-based access control.",
                  "Dashboards and reporting.",
                  "Complete audit trail.",
                  "Multilingual + multi-channel.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white/60 mt-0.5 shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Active Cases", value: "1,247" },
                  { label: "Resolved", value: "3,892" },
                  { label: "Pending", value: "156" },
                  { label: "Live in", value: "5+ countries" },
                ].map((stat) => (
                  <div key={stat.label} className="border-t border-white/10 pt-6">
                    <div className="text-3xl md:text-4xl font-extrabold">{stat.value}</div>
                    <p className="text-base text-gray-400 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <Link href="/openchs">
                <Button className="bg-white hover:bg-gray-100 text-navy rounded-full text-base px-8 py-6 font-medium">
                  Learn About OpenCHS <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Featured Impact Story ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Featured Impact Story</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">
            Protecting Migrant Workers Through Cross-border Case Management
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-3xl">
            In Uganda, BITZ implemented a GIZ-funded Labor &amp; Immigrant Complaints system integrated with OpenCHS.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            {["Uganda", "GIZ-Funded", "Cross-border Protection"].map((tag) => (
              <span key={tag} className="text-xs uppercase tracking-wider font-medium bg-navy/5 text-navy px-4 py-2 rounded-full">{tag}</span>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-base font-semibold text-navy border-b border-navy pb-1 hover:gap-4 transition-all duration-300">
              Read Full Case Study <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-bold text-navy mb-4">Key Implementation Features</h3>
            <ul className="space-y-3">
              {[
                "Multi-channel reporting for migrants abroad.",
                "Structured case intake + secure tracking.",
                "Escalation and referral workflows to relevant government units.",
                "Survivor support pathway and follow-up.",
                "Reporting and oversight dashboards.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ChevronRight className="h-5 w-5 text-navy/40 mt-0.5 shrink-0" />
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Case Studies ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Proven Impact Across Africa</h2>
          <p className="text-gray-500 text-lg mt-4 max-w-3xl">
            Real implementations delivering measurable outcomes for governments and international partners.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-navy/5 mt-12">
            {[
              {
                country: "Uganda",
                partner: "GIZ",
                title: "Labor & Immigrant Complaints System",
                features: ["Cross-border case tracking", "Multi-channel migrant reporting", "Government coordination"],
                slug: "uganda-giz",
              },
              {
                country: "Kenya",
                partner: "UNICEF",
                title: "National Child Helpline Integration",
                features: ["30,000+ monthly contacts", "Multi-agency referrals", "Real-time dashboards"],
                slug: "kenya",
              },
              {
                country: "Tanzania",
                partner: "Government",
                title: "Social Welfare Case Management",
                features: ["Unified case tracking", "Workflow automation", "Reporting standardization"],
                slug: "tanzania",
              },
              {
                country: "Somalia",
                partner: "UNFPA",
                title: "Federal Protection Systems",
                features: ["GBV response coordination", "Multi-language support", "Partner network integration"],
                slug: "somalia",
              },
            ].map((cs) => (
              <div key={cs.title} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                <span className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-gray-400 transition-colors duration-500">
                  {cs.country} &bull; {cs.partner}
                </span>
                <h3 className="text-xl font-bold text-navy group-hover:text-white mt-3 mb-4 transition-colors duration-500">{cs.title}</h3>
                <ul className="space-y-2">
                  {cs.features.map((f) => (
                    <li key={f} className="text-gray-500 group-hover:text-gray-300 text-base transition-colors duration-500 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-navy/30 group-hover:text-white/40 transition-colors duration-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/case-studies/${cs.slug}`} className="inline-flex items-center gap-1 text-sm text-navy/50 group-hover:text-white/60 mt-4 font-medium transition-colors duration-500">
                  Read case study <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/case-studies">
              <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base px-8 py-6 font-medium">
                See All Case Studies <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* ── Partners ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Our Partners</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Trusted by Global Leaders</h2>
          <p className="text-gray-500 text-lg mt-4 max-w-3xl">
            Working alongside UN agencies, development partners, and governments to strengthen protection systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-lg font-bold text-navy mb-6">Development &amp; UN Partners</h3>
              <div className="space-y-4">
                {[
                  { name: "UNICEF", type: "UN Agency" },
                  { name: "UNFPA", type: "UN Agency" },
                  { name: "UNICEF Venture Fund", type: "Investor" },
                  { name: "GIZ", type: "Development Partner" },
                  { name: "World Bank", type: "Development Partner" },
                ].map((p) => (
                  <div key={p.name} className="flex items-center justify-between border-b border-navy/5 pb-3">
                    <span className="font-medium text-navy">{p.name}</span>
                    <span className="text-xs uppercase tracking-wider text-gray-400">{p.type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-6">Government Implementations</h3>
              <div className="flex flex-wrap gap-3">
                {["Kenya", "Uganda", "Tanzania", "Lesotho", "Somalia"].map((c) => (
                  <span key={c} className="bg-navy/5 text-navy px-5 py-3 rounded-full text-sm font-medium">{c}</span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 mt-8">Partner names shown for attribution. Logos used with permission where applicable.</p>

          <div className="mt-10">
            <Link href="/partners">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white rounded-full text-base px-8 py-6 font-medium">
                View all partners <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* ── Security & Compliance ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Security &amp; Compliance</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Built for Trust &amp; Safety</h2>
          <p className="text-gray-500 text-lg mt-4 max-w-3xl">
            Protection systems require the highest standards of security and ethical AI use.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-navy/5 mt-12">
            {[
              {
                icon: Eye,
                title: "Privacy by Design",
                desc: "Data minimization, secure hosting options, and privacy-first architecture.",
              },
              {
                icon: Lock,
                title: "Access Control & Audit",
                desc: "Role-based access with comprehensive audit logging for accountability.",
              },
              {
                icon: Shield,
                title: "Encryption",
                desc: "Data encrypted in transit and at rest with industry-standard protocols.",
              },
              {
                icon: Brain,
                title: "Responsible AI",
                desc: "Human-in-the-loop principles. No automated decisions for high-risk outcomes.",
              },
            ].map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="bg-white p-10 group hover:bg-navy transition-all duration-500">
                  <Icon className="h-8 w-8 text-navy group-hover:text-white mb-6 transition-colors duration-500" />
                  <h3 className="text-xl font-bold text-navy group-hover:text-white mb-3 transition-colors duration-500">{card.title}</h3>
                  <p className="text-gray-500 group-hover:text-gray-300 text-base leading-relaxed transition-colors duration-500">{card.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-8">
            <Link href="/security" className="inline-flex items-center gap-1 text-sm text-navy/50 hover:text-navy font-medium transition-colors">
              Learn about our security practices <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </section>

        {/* ── Global Footprint ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Global Footprint</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Where We Work</h2>
          <p className="text-gray-500 text-lg mt-4 max-w-3xl">
            Designed for multi-country deployments and cross-border protection workflows.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">
            {[
              { country: "Kenya", status: "Active" },
              { country: "Uganda", status: "Active" },
              { country: "Tanzania", status: "Active" },
              { country: "Lesotho", status: "Active" },
              { country: "Somalia", status: "Active" },
            ].map((c) => (
              <div key={c.country} className="border border-navy/10 rounded-xl p-6 text-center">
                <MapPin className="h-6 w-6 text-navy mx-auto mb-3" />
                <h4 className="font-bold text-navy">{c.country}</h4>
                <span className="text-xs uppercase tracking-wider text-green-600 font-medium">{c.status}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy/5 rounded-xl p-8 md:p-12">
            <h3 className="text-xl font-bold text-navy mb-3">Expanding to New Regions</h3>
            <p className="text-gray-500 text-base max-w-3xl">
              With proven deployments across Africa, we&apos;re ready to scale OpenCHS to additional regions. Our 3-month rapid rollout model means you can have a live system quickly.
            </p>
            <div className="mt-6">
              <Link href="/contact?demo=true">
                <Button className="bg-navy hover:bg-navy/90 text-white rounded-full text-base px-8 py-6 font-medium">
                  Partner With Us <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Integrations ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Integrations</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Connect Your Ecosystem</h2>
          <p className="text-gray-500 text-lg mt-4 max-w-3xl">
            OpenCHS integrates with your existing infrastructure and communication channels.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-navy/5 mt-12">
            {[
              { icon: Radio, title: "Telecom (SIP/E1/GSM)", label: "Voice" },
              { icon: MessageSquare, title: "SMS Gateways", label: "Messaging" },
              { icon: Mail, title: "Email Integration", label: "Email" },
              { icon: Globe, title: "Social Channels", label: "Social" },
              { icon: MessageSquare, title: "Chat Platforms", label: "Chat" },
              { icon: BarChart3, title: "Analytics & BI", label: "Reporting" },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-white p-6 text-center group hover:bg-navy transition-all duration-500">
                  <Icon className="h-8 w-8 text-navy group-hover:text-white mx-auto mb-4 transition-colors duration-500" />
                  <h4 className="text-sm font-bold text-navy group-hover:text-white mb-1 transition-colors duration-500">{item.title}</h4>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 uppercase tracking-wider transition-colors duration-500">{item.label}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Latest Thinking ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Insights</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Latest Thinking</h2>
            </div>
            <Link href="/insights" className="text-base text-navy/50 hover:text-navy transition-colors flex items-center gap-1">
              Read all insights <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy/5 mt-12">
            {[
              {
                category: "Child Protection",
                date: "Jan 2026",
                title: "Strengthening Child Protection Systems with Digital Case Management",
                slug: "child-protection-systems",
              },
              {
                category: "GBV Response",
                date: "Dec 2025",
                title: "Best Practices for GBV Response Workflows in Resource-Constrained Settings",
                slug: "gbv-response-workflows",
              },
              {
                category: "Labor Protection",
                date: "Nov 2025",
                title: "Cross-Border Protection: Supporting Migrant Workers Through Technology",
                slug: "migrant-worker-protection",
              },
            ].map((article) => (
              <Link key={article.title} href={`/insights/${article.slug}`} className="bg-white p-10 group hover:bg-navy transition-all duration-500 block">
                <span className="text-xs uppercase tracking-wider text-gray-400 group-hover:text-gray-400 transition-colors duration-500">
                  {article.category} | {article.date}
                </span>
                <h3 className="text-xl font-bold text-navy group-hover:text-white mt-4 transition-colors duration-500 leading-snug">
                  {article.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm text-navy/50 group-hover:text-white/60 mt-6 font-medium transition-colors duration-500">
                  Read more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA Section ── */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-28">
          <div className="bg-mesh-navy rounded-xl p-12 md:p-20 lg:p-32 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Ready to Strengthen Your Response Systems?
            </h2>
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
              Connect with our team to discuss how OpenCHS can support your protection programs, helplines, and case management needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link href="/contact?demo=true">
                <Button className="bg-white hover:bg-gray-100 text-navy rounded-full text-base px-8 py-6 font-medium">
                  Request Demo <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full text-base px-8 py-6 font-medium">
                  Contact Us
                </Button>
              </Link>
              <Link href="/capability-statement.pdf" target="_blank">
                <Button className="bg-transparent border border-white/30 text-white hover:bg-white/10 rounded-full text-base px-8 py-6 font-medium">
                  Capability Statement
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Contact Section ── */}
        <section id="contact" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 md:py-32">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 block font-medium">Contact</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy">Get in Touch</h2>
          <p className="text-gray-500 text-lg mt-4">Reach out for demos, partnerships, or general inquiries.</p>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-start mt-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base text-navy">General Inquiries</h3>
                    <p className="text-base text-gray-500">info@bitz-itc.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                    <Send className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base text-navy">OpenCHS / Product</h3>
                    <p className="text-base text-gray-500">openchs@bitz-itc.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-base text-navy">Response time</h3>
                    <p className="text-base text-gray-500">We typically respond within 1–2 business days.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-xl shadow-ios">
              <h3 className="text-xl font-bold text-navy mb-1">Send us a message</h3>
              <p className="text-base text-gray-400 mb-8">We&apos;ll get back to you shortly.</p>
              <div className="grid gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium text-gray-500">Name</label>
                    <input id="name" className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy" placeholder="Your name" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-gray-500">Email</label>
                    <input id="email" type="email" className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="organization" className="text-sm font-medium text-gray-500">Organization</label>
                    <input id="organization" className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy" placeholder="Your organization" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="country" className="text-sm font-medium text-gray-500">Country</label>
                    <input id="country" className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy" placeholder="Country" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="interest" className="text-sm font-medium text-gray-500">Interest Area</label>
                  <select id="interest" className="w-full p-3 text-base border border-navy/10 rounded-lg focus:outline-none focus:ring-1 focus:ring-navy bg-white text-gray-500">
                    <option value="">Select an area of interest</option>
                    <option value="helpline">Helpline &amp; Case Management</option>
                    <option value="psea">PSEA Reporting</option>
                    <option value="labor">Labor &amp; Immigration Protection</option>
                    <option value="complaints">Complaints &amp; Grievance</option>
                    <option value="demo">OpenCHS / Product Demo</option>
                    <option value="consulting">Consulting / Assessment / Proposal</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium text-gray-500">Message</label>
                  <textarea id="message" className="w-full p-3 text-base border border-navy/10 rounded-xl min-h-[120px] focus:outline-none focus:ring-1 focus:ring-navy" placeholder="How can we help you?" />
                </div>
                <Button className="w-full bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6">Send Message</Button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
