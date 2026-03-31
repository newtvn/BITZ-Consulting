import ProjectDetailClient from './project-detail-client'

const projectsData: { [key: string]: any } = {
  "openchs": {
    title: "OPENCHS - A Child Helpline System",
    writtenBy: "BITZ-itc Team",
    publishedOn: "4th July 2023",
    sections: [
      {
        title: "Key Features",
        id: "features",
        images: [
          { src: "/projects/project1.png", alt: "Call Management Feature", title: "Call Management", description: "Inbound and Outbound Call Handling" },
          { src: "/projects/project1.png", alt: "Case Management Feature", title: "Case Management", description: "Case Creation and Tracking" },
          { src: "/projects/placeholders/openchs-quality-assurance.svg", alt: "Quality Assurance Feature", title: "Quality Assurance", description: "Call and Case Evaluation" },
          { src: "/projects/placeholders/openchs-reporting.svg", alt: "Reporting and Analytics Feature", title: "Reporting and Analytics", description: "Customizable Reports" }
        ],
      },
      {
        title: "Integration Capabilities",
        id: "integrations",
        images: [
          { src: "/projects/project1.png", alt: "Dashboards Feature", title: "Dashboards", description: "Real-Time Dashboards" },
          { src: "/projects/project1.png", alt: "CRM Integration Feature", title: "3rd Party Integrations", description: "CRM Integration" },
          { src: "/projects/project1.png", alt: "API Integration Feature", title: "Secure & Scalable API Integrations", description: "Securely exchange data with other key systems." },
          { src: "/projects/project1.png", alt: "Chatbot Integration Feature", title: "Mental Health Support & Chatbot Integration", description: "Integrates with mental health support systems, including AI-driven chatbots." }
        ],
      },
      {
        title: "System Capabilities",
        id: "system-capabilities",
        images: [
          { src: "/projects/placeholders/openchs-security.svg", alt: "Security Feature", title: "Enhanced Data Security & Confidentiality", description: "Protect sensitive case information with built-in security protocols." },
          { src: "/projects/placeholders/openchs-notifications.svg", alt: "Notifications Feature", title: "Automated Notifications & Case Escalation", description: "Keep teams informed and responsive with automated notifications and alerts." },
        ],
      },
    ],
    overview: [
      "OPENCHS is a comprehensive child helpline system that provides a safe and confidential environment for children. It offers a range of services including 24/7 availability, a toll-free hotline, multilingual support, anonymity and confidentiality, and immediate response.",
      "The system is designed to streamline case management from intake to resolution with configurable workflows, real-time updates, and secure data management. It also integrates seamlessly with call centers and various communication channels, ensuring efficient triage and escalation.",
    ],
    challenges: {
      image: "/projects/placeholders/openchs-challenges.svg",
      content: [
        "Integrating with varying levels of technological infrastructure in target regions.",
        "Providing extensive user training across diverse skill levels.",
        "Ensuring data security and privacy in sensitive contexts.",
      ]
    },
    solution: {
      image: "/projects/placeholders/openchs-solution.svg",
      content: [
        "Developed a user-friendly interface accessible via a mobile application with offline capabilities.",
        "Provided hands-on training and designed a user-friendly interface tailored to diverse skill levels.",
        "Implemented robust security measures, encryption, role-based access control, and secure backup and recovery processes.",
      ]
    },
    results: {
      image: "/projects/placeholders/openchs-results.svg",
      content: [
        "Enhanced the efficiency and responsiveness of child protection services.",
        "Improved case handling, real-time monitoring, and data-driven decision-making.",
        "Increased capacity to handle child protection cases efficiently.",
        "Leading to faster case resolution and better outcomes for vulnerable children.",
      ]
    },
  },
  "case-management-legal": {
    title: "Case Management - Legal",
    writtenBy: "BITZ-itc Team",
    publishedOn: "",
    sections: [
      {
        title: "Key Features",
        id: "features",
        images: [
          { src: "/projects/placeholders/legal-auth.svg", alt: "Authentication & Authorization Feature", title: "Authentication & Authorization", description: "Secure User Access" },
          { src: "/projects/placeholders/legal-case-handling.svg", alt: "Case Handling Feature", title: "Case Management & Profiling", description: "Comprehensive Case Handling" },
          { src: "/projects/placeholders/legal-parties.svg", alt: "Case Parties Profiling Feature", title: "Case Parties Profiling", description: "Advocate & Magistrate Profiles" },
          { src: "/projects/placeholders/legal-court.svg", alt: "Court Profile Feature", title: "Court Profile", description: "Court Information Management" }
        ],
      },
      {
        title: "Tracking and Reporting",
        id: "tracking-reporting",
        images: [
          { src: "/projects/placeholders/legal-file-tracking.svg", alt: "File Tracking Feature", title: "Management Tracking of Files Movement", description: "Real-time Case File Tracking" },
          { src: "/projects/placeholders/legal-fees.svg", alt: "Fees Management Feature", title: "Administration of Legal Fees", description: "Legal Fee Management" },
          { src: "/projects/placeholders/legal-reports.svg", alt: "Legal Reports Feature", title: "Reports", description: "Detailed Case Reporting" }
        ],
      },
    ],
    overview: [
      "The Case Management System is designed to streamline the process of managing legal cases by providing a centralized platform for case management and case-related data.",
      "It offers features for secure user access, comprehensive case handling with detailed history, and profiling for legal professionals and courts involved in cases.",
    ],
    challenges: { image: "/projects/placeholders/legal-challenges.svg", content: ["Ensuring secure and authorized access to sensitive legal data.", "Managing and tracking a large volume of case files and their movement.", "Generating customized reports for various legal metrics."] },
    solution: { image: "/projects/placeholders/legal-solution.svg", content: ["Implemented robust authentication and authorization mechanisms.", "Developed a centralized platform with real-time tracking of case file movement.", "Provided customizable reporting tools for detailed case analysis."] },
    results: { image: "/projects/placeholders/legal-results.svg", content: ["Improved efficiency in legal case management.", "Enhanced data security and access control.", "Streamlined tracking of case files and legal fees.", "Facilitated data-driven decision-making with comprehensive reporting."] },
  },
  "crm-saccos": {
    title: "CRM for SACCOS",
    writtenBy: "BITZ-itc Team",
    publishedOn: "",
    sections: [
      {
        title: "Core CRM Features",
        id: "core-crm",
        images: [
          { src: "/projects/placeholders/crm-customer.svg", alt: "Customer Management Feature", title: "Customer Management", description: "Comprehensive Member Database" },
          { src: "/projects/placeholders/crm-interaction.svg", alt: "Interaction Tracking Feature", title: "Interaction Tracking", description: "Member Interaction History" },
          { src: "/projects/placeholders/crm-leads.svg", alt: "Lead Management Feature", title: "Lead Management", description: "Lead Capture & Conversion" },
          { src: "/projects/placeholders/crm-campaigns.svg", alt: "Campaign Management Feature", title: "Campaign Management", description: "Marketing Campaign Automation" }
        ],
      },
      {
        title: "Support and Analytics",
        id: "support-analytics",
        images: [
          { src: "/projects/placeholders/crm-callcenter.svg", alt: "Call Center Integration Feature", title: "Call Center Integration", description: "Seamless Call Center Integration" },
          { src: "/projects/placeholders/crm-ticketing.svg", alt: "Ticketing System Feature", title: "Ticketing System", description: "Member Support Ticketing" },
          { src: "/projects/placeholders/crm-reporting.svg", alt: "CRM Reporting and Analytics Feature", title: "Reporting and Analytics", description: "Data-Driven Insights" }
        ],
      },
    ],
    overview: [
      "CRM for SACCOS is a comprehensive software platform that simplifies and automates the entire lifecycle of Sacco operations.",
      "It provides features for comprehensive member management, interaction tracking, lead and campaign management to optimize member engagement and growth.",
    ],
    challenges: { image: "/projects/placeholders/crm-challenges.svg", content: ["Maintaining a detailed and organized database of Sacco members and their interactions.", "Tracking and converting potential leads effectively.", "Generating insightful reports on member behavior and campaign performance."] },
    solution: { image: "/projects/placeholders/crm-solution.svg", content: ["Implemented a centralized member database with detailed profiling and interaction history tracking.", "Developed automated lead nurturing and conversion processes.", "Provided comprehensive reporting and analytics tools for data-driven decision-making."] },
    results: { image: "/projects/placeholders/crm-results.svg", content: ["Improved member management and personalized service.", "Increased efficiency in lead capture and conversion.", "Enhanced marketing campaign effectiveness.", "Gained valuable insights into member behavior and Sacco performance."] },
  },
  "edms": {
    title: "Electronic Document Management System (EDMS)",
    writtenBy: "BITZ-itc Team",
    publishedOn: "",
    sections: [
      {
        title: "Core Document Management Features",
        id: "core-features",
        images: [
          { src: "/projects/placeholders/edms-search.svg", alt: "Search and Retrieval Feature", title: "Search and Retrieval", description: "Advanced Search Capabilities" },
          { src: "/projects/placeholders/edms-version.svg", alt: "Version Control Feature", title: "Version Control", description: "Track Changes & Revisions" },
          { src: "/projects/placeholders/edms-storage.svg", alt: "Storage and Organization Feature", title: "Storage and Organization", description: "Centralized Document Repository" },
          { src: "/projects/placeholders/edms-workflow.svg", alt: "Workflow Automation Feature", title: "Workflow Automation", description: "Automated Document Workflows" }
        ],
      },
      {
        title: "Security and Compliance",
        id: "security-compliance",
        images: [
          { src: "/projects/placeholders/edms-capture.svg", alt: "Document Capture Feature", title: "Document Capture", description: "Digitization & Electronic Import" },
          { src: "/projects/placeholders/edms-access.svg", alt: "Access Control Feature", title: "Access Control", description: "Role-Based Permissions" },
          { src: "/projects/placeholders/edms-compliance.svg", alt: "Compliance and Security Feature", title: "Compliance and Security", description: "Regulatory Compliance & Security" },
          { src: "/projects/placeholders/edms-audit.svg", alt: "Audit Trails Feature", title: "Audit Trails", description: "Detailed Document Access Logs" }
        ],
      },
    ],
    overview: [
      "The EDMS is designed to enhance document storage, retrieval, and security by providing an efficient platform for managing digital documents.",
      "It enables organizations to store, track, and manage electronic documents with advanced features for search, version control, organization, and workflow automation.",
    ],
    challenges: { image: "/projects/placeholders/edms-challenges.svg", content: ["Ensuring efficient and secure storage and retrieval of digital documents.", "Maintaining version control and tracking changes to documents.", "Automating document workflows and ensuring compliance with regulations."] },
    solution: { image: "/projects/placeholders/edms-solution.svg", content: ["Implemented a centralized document repository with advanced search and retrieval capabilities.", "Provided robust version control and audit trail features.", "Developed automated workflow and compliance monitoring tools."] },
    results: { image: "/projects/placeholders/edms-results.svg", content: ["Improved efficiency in document management.", "Enhanced document security and compliance.", "Streamlined document workflows and collaboration.", "Gained better control and visibility over digital documents."] },
  },
  "contract-management": {
    title: "Contract Management System",
    writtenBy: "BITZ-itc Team",
    publishedOn: "",
    sections: [
      {
        title: "Contract Lifecycle Stages",
        id: "lifecycle-stages",
        images: [
          { src: "/projects/placeholders/contract-creation.svg", alt: "Contract Creation Feature", title: "Contract Creation", description: "Request Initiation, Drafting, Collaboration Tools, Template Management" },
          { src: "/projects/placeholders/contract-negotiation.svg", alt: "Contract Negotiation Feature", title: "Contract Negotiation", description: "Term Negotiation, Commenting & Redlining, Version Control" },
          { src: "/projects/placeholders/contract-review.svg", alt: "Contract Review & Approval Feature", title: "Contract Review & Approval", description: "Approval Workflows, Automated Alerts, Audit Trails" },
          { src: "/projects/placeholders/contract-signing.svg", alt: "Contract Signing Feature", title: "Contract Signing", description: "E-signatures, Multi-party Signing, Signature Authentication" }
        ],
      },
      {
        title: "Management and Compliance",
        id: "management-compliance",
        images: [
          { src: "/projects/placeholders/contract-storage.svg", alt: "Contract Storage & Organization Feature", title: "Contract Storage & Organization", description: "Centralized Repository, Document Organization, Version Control" },
          { src: "/projects/placeholders/contract-compliance.svg", alt: "Contract Compliance Monitoring Feature", title: "Contract Compliance Monitoring", description: "Obligation Tracking, Automated Reminders, Risk Management" },
          { src: "/projects/placeholders/contract-security.svg", alt: "Contract Security Feature", title: "Document Security & Access Control", description: "Protect sensitive contract information with built-in security protocols." },
          { src: "/projects/placeholders/contract-audit.svg", alt: "Contract Audit Trails Feature", title: "Audit Trails & Tracking", description: "Maintain comprehensive audit logs to track contract access and history." }
        ],
      },
    ],
    overview: [
      "A comprehensive platform for managing contracts from creation through execution, compliance, renewal, and closeout, ensuring compliance and optimizing performance.",
      "It streamlines contract creation, negotiation, review, and signing with collaboration tools, version control, and e-signature capabilities.",
    ],
    challenges: { image: "/projects/placeholders/contract-challenges.svg", content: ["Managing the entire contract lifecycle efficiently from creation to closeout.", "Ensuring compliance with contractual obligations and regulatory requirements.", "Tracking contract performance and identifying potential risks."] },
    solution: { image: "/projects/placeholders/contract-solution.svg", content: ["Implemented a centralized platform with automated workflows for each stage of the contract lifecycle.", "Provided tools for obligation tracking, automated reminders, and risk management.", "Developed reporting and analytics capabilities to monitor contract performance."] },
    results: { image: "/projects/placeholders/contract-results.svg", content: ["Improved efficiency in contract management processes.", "Enhanced compliance with contractual obligations and regulations.", "Reduced risks associated with contracts.", "Gained better visibility and control over the contract portfolio."] },
  },
  "icta-kdeap": {
    title: "ICTA-KDEAP — World Bank Government Digitization Consultancy",
    writtenBy: "BITZ-itc Team",
    publishedOn: "2024",
    sections: [
      {
        title: "Project Milestones",
        id: "milestones",
        images: [
          { src: "/projects/placeholders/kdeap-milestone1.svg", alt: "Milestone 1 - Inception", title: "Milestone 1 — Inception & Scoping", description: "Stakeholder mapping, project charter development, and baseline assessment framework design across all MDAs." },
          { src: "/projects/placeholders/kdeap-milestone2.svg", alt: "Milestone 2 - Assessment", title: "Milestone 2 — MDA Assessment", description: "On-ground evaluation of record management systems, digital maturity, and infrastructure readiness across Ministries, Departments, and Agencies." },
          { src: "/projects/placeholders/kdeap-milestone3.svg", alt: "Milestone 3 - Matrix Development", title: "Milestone 3 — Digitization Matrix", description: "Development of the comprehensive digitization and automation matrix mapping current vs. target states for each MDA." },
          { src: "/projects/placeholders/kdeap-milestone4.svg", alt: "Milestone 4 - Recommendations", title: "Milestone 4 — Strategic Recommendations", description: "Formulation of prioritized recommendations, cost-benefit analyses, and phased implementation roadmaps." },
          { src: "/projects/placeholders/kdeap-milestone5.svg", alt: "Milestone 5 - Final Delivery", title: "Milestone 5 — Final Delivery & Handover", description: "Presentation of final reports, knowledge transfer sessions, and stakeholder validation workshops." },
        ],
      },
      {
        title: "Key Deliverables",
        id: "deliverables",
        images: [
          { src: "/projects/placeholders/kdeap-matrix.svg", alt: "Digitization Matrix", title: "Digitization & Automation Matrix", description: "A comprehensive framework mapping the digital readiness and automation potential of all MDAs." },
          { src: "/projects/placeholders/kdeap-records.svg", alt: "Record Management Evaluation", title: "Record Management Evaluation Report", description: "Detailed assessment of the current state of record management across all government MDAs." },
          { src: "/projects/placeholders/kdeap-roadmap.svg", alt: "Implementation Roadmap", title: "Implementation Roadmap", description: "Phased strategy for digital transformation prioritized by impact and feasibility." },
        ],
      },
    ],
    overview: [
      "The ICTA Kenya Digital Economy Acceleration Project (KDEAP) is a World Bank-funded initiative aimed at accelerating Kenya's digital economy. BITZ-itc served as the lead consultants on this landmark engagement, tasked with assessing and accelerating the digitization of government services across Kenya. Learn more at kdeap.icta.go.ke.",
      "Over 6 months, the team conducted a comprehensive evaluation of record management systems across all Ministries, Departments, and Agencies (MDAs), identifying gaps, inefficiencies, and opportunities for digital transformation.",
      "The project culminated in the development of a digitization and automation matrix — a decision-making tool that maps each MDA's current digital maturity against target states, enabling the government to prioritize investments and interventions with precision.",
    ],
    challenges: {
      image: "/projects/placeholders/kdeap-challenges.svg",
      content: [
        "Coordinating assessments across dozens of Ministries, Departments, and Agencies with varying levels of digital maturity and cooperation.",
        "Standardizing evaluation criteria across MDAs with vastly different record management practices — from fully manual paper systems to partially digitized workflows.",
        "Delivering actionable, prioritized recommendations within a tight 6-month timeline while managing complex stakeholder dynamics across government bodies.",
      ]
    },
    solution: {
      image: "/projects/placeholders/kdeap-solution.svg",
      content: [
        "Designed a structured 5-milestone delivery framework that ensured consistent progress tracking, stakeholder alignment, and iterative validation at each phase.",
        "Developed a standardized assessment toolkit with scoring rubrics tailored to capture the unique characteristics of each MDA's record management ecosystem.",
        "Created the digitization and automation matrix — a strategic planning tool that maps current-state capabilities against target-state goals, enabling data-driven prioritization of digital interventions.",
      ]
    },
    results: {
      image: "/projects/placeholders/kdeap-results.svg",
      content: [
        "Successfully evaluated the state of record management across all targeted MDAs within the 6-month engagement period.",
        "Delivered a comprehensive digitization and automation matrix adopted by ICTA as a strategic planning instrument for government digital transformation.",
        "Provided a phased implementation roadmap that enables the government to sequence digital investments based on impact, feasibility, and urgency.",
        "Strengthened BITZ-itc's position as the lead technology consultancy for government-scale digital transformation projects in Kenya.",
      ]
    },
  },
};

export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    'project-slug': slug,
  }))
}

export default function ProjectOverviewPage({
  params,
}: {params: { "project-slug": string }}) {
  const projectData = projectsData[params['project-slug']] || null;
  return <ProjectDetailClient projectData={projectData} />
}
