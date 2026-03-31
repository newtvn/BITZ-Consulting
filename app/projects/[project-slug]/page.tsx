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
          { src: "/placeholder.svg?height=300&width=600&text=Quality Assurance Image", alt: "Quality Assurance Feature", title: "Quality Assurance", description: "Call and Case Evaluation" },
          { src: "/placeholder.svg?height=300&width=600&text=Reporting Image", alt: "Reporting and Analytics Feature", title: "Reporting and Analytics", description: "Customizable Reports" }
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
          { src: "/placeholder.svg?height=300&width=600&text=Security Image", alt: "Security Feature", title: "Enhanced Data Security & Confidentiality", description: "Protect sensitive case information with built-in security protocols." },
          { src: "/placeholder.svg?height=300&width=600&text=Notifications Image", alt: "Notifications Feature", title: "Automated Notifications & Case Escalation", description: "Keep teams informed and responsive with automated notifications and alerts." },
        ],
      },
    ],
    overview: [
      "OPENCHS is a comprehensive child helpline system that provides a safe and confidential environment for children. It offers a range of services including 24/7 availability, a toll-free hotline, multilingual support, anonymity and confidentiality, and immediate response.",
      "The system is designed to streamline case management from intake to resolution with configurable workflows, real-time updates, and secure data management. It also integrates seamlessly with call centers and various communication channels, ensuring efficient triage and escalation.",
    ],
    challenges: {
      image: "projects/project1.png",
      content: [
        "Integrating with varying levels of technological infrastructure in target regions.",
        "Providing extensive user training across diverse skill levels.",
        "Ensuring data security and privacy in sensitive contexts.",
      ]
    },
    solution: {
      image: "projects/project1.png",
      content: [
        "Developed a user-friendly interface accessible via a mobile application with offline capabilities.",
        "Provided hands-on training and designed a user-friendly interface tailored to diverse skill levels.",
        "Implemented robust security measures, encryption, role-based access control, and secure backup and recovery processes.",
      ]
    },
    results: {
      image: "projects/project1.png",
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
          { src: "/placeholder.svg?height=300&width=600&text=Auth Image", alt: "Authentication & Authorization Feature", title: "Authentication & Authorization", description: "Secure User Access" },
          { src: "/placeholder.svg?height=300&width=600&text=Case Handling Image", alt: "Case Handling Feature", title: "Case Management & Profiling", description: "Comprehensive Case Handling" },
          { src: "/placeholder.svg?height=300&width=600&text=Parties Profiling Image", alt: "Case Parties Profiling Feature", title: "Case Parties Profiling", description: "Advocate & Magistrate Profiles" },
          { src: "/placeholder.svg?height=300&width=600&text=Court Profile Image", alt: "Court Profile Feature", title: "Court Profile", description: "Court Information Management" }
        ],
      },
      {
        title: "Tracking and Reporting",
        id: "tracking-reporting",
        images: [
          { src: "/placeholder.svg?height=300&width=600&text=File Tracking Image", alt: "File Tracking Feature", title: "Management Tracking of Files Movement", description: "Real-time Case File Tracking" },
          { src: "/placeholder.svg?height=300&width=600&text=Fees Management Image", alt: "Fees Management Feature", title: "Administration of Legal Fees", description: "Legal Fee Management" },
          { src: "/placeholder.svg?height=300&width=600&text=Legal Reports Image", alt: "Legal Reports Feature", title: "Reports", description: "Detailed Case Reporting" }
        ],
      },
    ],
    overview: [
      "The Case Management System is designed to streamline the process of managing legal cases by providing a centralized platform for case management and case-related data.",
      "It offers features for secure user access, comprehensive case handling with detailed history, and profiling for legal professionals and courts involved in cases.",
    ],
    challenges: { image: "projects/project1.png", content: ["Ensuring secure and authorized access to sensitive legal data.", "Managing and tracking a large volume of case files and their movement.", "Generating customized reports for various legal metrics."] },
    solution: { image: "projects/project1.png", content: ["Implemented robust authentication and authorization mechanisms.", "Developed a centralized platform with real-time tracking of case file movement.", "Provided customizable reporting tools for detailed case analysis."] },
    results: { image: "projects/project1.png", content: ["Improved efficiency in legal case management.", "Enhanced data security and access control.", "Streamlined tracking of case files and legal fees.", "Facilitated data-driven decision-making with comprehensive reporting."] },
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
          { src: "/placeholder.svg?height=300&width=600&text=Customer Management Image", alt: "Customer Management Feature", title: "Customer Management", description: "Comprehensive Member Database" },
          { src: "/placeholder.svg?height=300&width=600&text=Interaction Tracking Image", alt: "Interaction Tracking Feature", title: "Interaction Tracking", description: "Member Interaction History" },
          { src: "/placeholder.svg?height=300&width=600&text=Lead Management Image", alt: "Lead Management Feature", title: "Lead Management", description: "Lead Capture & Conversion" },
          { src: "/placeholder.svg?height=300&width=600&text=Campaign Management Image", alt: "Campaign Management Feature", title: "Campaign Management", description: "Marketing Campaign Automation" }
        ],
      },
      {
        title: "Support and Analytics",
        id: "support-analytics",
        images: [
          { src: "/placeholder.svg?height=300&width=600&text=Call Center Integration Image", alt: "Call Center Integration Feature", title: "Call Center Integration", description: "Seamless Call Center Integration" },
          { src: "/placeholder.svg?height=300&width=600&text=Ticketing System Image", alt: "Ticketing System Feature", title: "Ticketing System", description: "Member Support Ticketing" },
          { src: "/placeholder.svg?height=300&width=600&text=CRM Reporting Image", alt: "CRM Reporting and Analytics Feature", title: "Reporting and Analytics", description: "Data-Driven Insights" }
        ],
      },
    ],
    overview: [
      "CRM for SACCOS is a comprehensive software platform that simplifies and automates the entire lifecycle of Sacco operations.",
      "It provides features for comprehensive member management, interaction tracking, lead and campaign management to optimize member engagement and growth.",
    ],
    challenges: { image: "/placeholder.svg?height=400&width=600&text=CRM Challenges Image", content: ["Maintaining a detailed and organized database of Sacco members and their interactions.", "Tracking and converting potential leads effectively.", "Generating insightful reports on member behavior and campaign performance."] },
    solution: { image: "/placeholder.svg?height=400&width=600&text=CRM Solution Image", content: ["Implemented a centralized member database with detailed profiling and interaction history tracking.", "Developed automated lead nurturing and conversion processes.", "Provided comprehensive reporting and analytics tools for data-driven decision-making."] },
    results: { image: "/placeholder.svg?height=400&width=600&text=CRM Results Image", content: ["Improved member management and personalized service.", "Increased efficiency in lead capture and conversion.", "Enhanced marketing campaign effectiveness.", "Gained valuable insights into member behavior and Sacco performance."] },
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
          { src: "/placeholder.svg?height=300&width=600&text=Search Image", alt: "Search and Retrieval Feature", title: "Search and Retrieval", description: "Advanced Search Capabilities" },
          { src: "/placeholder.svg?height=300&width=600&text=Version Control Image", alt: "Version Control Feature", title: "Version Control", description: "Track Changes & Revisions" },
          { src: "/placeholder.svg?height=300&width=600&text=Storage Image", alt: "Storage and Organization Feature", title: "Storage and Organization", description: "Centralized Document Repository" },
          { src: "/placeholder.svg?height=300&width=600&text=Workflow Image", alt: "Workflow Automation Feature", title: "Workflow Automation", description: "Automated Document Workflows" }
        ],
      },
      {
        title: "Security and Compliance",
        id: "security-compliance",
        images: [
          { src: "/placeholder.svg?height=300&width=600&text=Document Capture Image", alt: "Document Capture Feature", title: "Document Capture", description: "Digitization & Electronic Import" },
          { src: "/placeholder.svg?height=300&width=600&text=Access Control Image", alt: "Access Control Feature", title: "Access Control", description: "Role-Based Permissions" },
          { src: "/placeholder.svg?height=300&width=600&text=Compliance Image", alt: "Compliance and Security Feature", title: "Compliance and Security", description: "Regulatory Compliance & Security" },
          { src: "/placeholder.svg?height=300&width=600&text=Audit Trails Image", alt: "Audit Trails Feature", title: "Audit Trails", description: "Detailed Document Access Logs" }
        ],
      },
    ],
    overview: [
      "The EDMS is designed to enhance document storage, retrieval, and security by providing an efficient platform for managing digital documents.",
      "It enables organizations to store, track, and manage electronic documents with advanced features for search, version control, organization, and workflow automation.",
    ],
    challenges: { image: "/placeholder.svg?height=400&width=600&text=EDMS Challenges Image", content: ["Ensuring efficient and secure storage and retrieval of digital documents.", "Maintaining version control and tracking changes to documents.", "Automating document workflows and ensuring compliance with regulations."] },
    solution: { image: "/placeholder.svg?height=400&width=600&text=EDMS Solution Image", content: ["Implemented a centralized document repository with advanced search and retrieval capabilities.", "Provided robust version control and audit trail features.", "Developed automated workflow and compliance monitoring tools."] },
    results: { image: "/placeholder.svg?height=400&width=600&text=EDMS Results Image", content: ["Improved efficiency in document management.", "Enhanced document security and compliance.", "Streamlined document workflows and collaboration.", "Gained better control and visibility over digital documents."] },
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
          { src: "/placeholder.svg?height=300&width=600&text=Contract Creation Image", alt: "Contract Creation Feature", title: "Contract Creation", description: "Request Initiation, Drafting, Collaboration Tools, Template Management" },
          { src: "/placeholder.svg?height=300&width=600&text=Contract Negotiation Image", alt: "Contract Negotiation Feature", title: "Contract Negotiation", description: "Term Negotiation, Commenting & Redlining, Version Control" },
          { src: "/placeholder.svg?height=300&width=600&text=Contract Review Image", alt: "Contract Review & Approval Feature", title: "Contract Review & Approval", description: "Approval Workflows, Automated Alerts, Audit Trails" },
          { src: "/placeholder.svg?height=300&width=600&text=Contract Signing Image", alt: "Contract Signing Feature", title: "Contract Signing", description: "E-signatures, Multi-party Signing, Signature Authentication" }
        ],
      },
      {
        title: "Management and Compliance",
        id: "management-compliance",
        images: [
          { src: "/placeholder.svg?height=300&width=600&text=Contract Storage Image", alt: "Contract Storage & Organization Feature", title: "Contract Storage & Organization", description: "Centralized Repository, Document Organization, Version Control" },
          { src: "/placeholder.svg?height=300&width=600&text=Compliance Monitoring Image", alt: "Contract Compliance Monitoring Feature", title: "Contract Compliance Monitoring", description: "Obligation Tracking, Automated Reminders, Risk Management" },
          { src: "/placeholder.svg?height=300&width=600&text=Contract Security Image", alt: "Contract Security Feature", title: "Document Security & Access Control", description: "Protect sensitive contract information with built-in security protocols." },
          { src: "/placeholder.svg?height=300&width=600&text=Contract Audit Image", alt: "Contract Audit Trails Feature", title: "Audit Trails & Tracking", description: "Maintain comprehensive audit logs to track contract access and history." }
        ],
      },
    ],
    overview: [
      "A comprehensive platform for managing contracts from creation through execution, compliance, renewal, and closeout, ensuring compliance and optimizing performance.",
      "It streamlines contract creation, negotiation, review, and signing with collaboration tools, version control, and e-signature capabilities.",
    ],
    challenges: { image: "/placeholder.svg?height=400&width=600&text=Contract Challenges Image", content: ["Managing the entire contract lifecycle efficiently from creation to closeout.", "Ensuring compliance with contractual obligations and regulatory requirements.", "Tracking contract performance and identifying potential risks."] },
    solution: { image: "/placeholder.svg?height=400&width=600&text=Contract Solution Image", content: ["Implemented a centralized platform with automated workflows for each stage of the contract lifecycle.", "Provided tools for obligation tracking, automated reminders, and risk management.", "Developed reporting and analytics capabilities to monitor contract performance."] },
    results: { image: "/placeholder.svg?height=400&width=600&text=Contract Results Image", content: ["Improved efficiency in contract management processes.", "Enhanced compliance with contractual obligations and regulations.", "Reduced risks associated with contracts.", "Gained better visibility and control over the contract portfolio."] },
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
