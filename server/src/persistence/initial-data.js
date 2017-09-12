const initalData = [{
    username: 'oarias',
    firstName: 'Orlando',
    lastName: 'Arias',
    skills: ["Logo Design", "Web Design", "User Interface Design", "Adobe Creative Suite", "Typography", "Illustrator", "Photoshop", "Graphic Design", "Interaction Design", "InDesign", "Dreamweaver", "Web Development", "Art Direction", "WordPress", "Layout", "Information Architecture", "Illustration", "CSS", "Corporate Identity", "Graphics", "Social Media", "User Experience", "HTML", "Website Development", "Brand Development", "Mac", "Branding & Identity", "Creative Direction", "Newsletters", "Advertising", "Visual Communication", "PowerPoint", "Corporate Branding", "Adobe Acrobat", "Wordpress Multisite", "Foundation Framework", "SASS", "Bootstrap", "Branding", "Front-end Development", "Github", "Git", "jQuery", "Sketch App", "Agile Methodologies", "Invision"]
}, {
    username: 'dartus',
    firstName: 'Daniel',
    lastName: 'Artus',
    skills: ["Business Analysis", "Requirements Analysis", "Agile Methodologies", "Project Management", "Business Strategy", "Technical Writing", "Technical Documentation", "Requirements Gathering", "Analysis", "Management Consulting", "Microsoft Office", "Program Management", "Business Process Improvement", "Research", "Editing", "Regulatory Requirements", "User Acceptance Testing", "Process Engineering", "Integration", "Management", "Process Improvement", "Visio"]
}, {
    username: 'cbelyea',
    firstName: 'Chris',
    lastName: 'Belyea',
    skills: ["Cloud Computing", "Amazon Web Services (AWS)", "Puppet", "Chef", "PowerShell", "ITIL", "Enterprise Architecture", "Integration", "IT Service Management", "BMC Remedy", "Virtualization", "VMware", "Program Management", "Requirements Analysis", "Project Management", "SQL", "Management", "Windows Server", "Visio", "Active Directory", "Agile Methodologies", "VMware ESX", "HTML", "BMC ProactiveNet", "BMC Portal", "CMDB", "vSphere", "Group Policy", "Cloud Lifecycle Management", "Continuous Integration", "Continuous Delivery", "ADDM", "Remedy AR System", "BEM", "SIM", "BladeLogic", "SNMP", "WMI", "Altiris", "WhatsUp Gold", "CSS", "Consulting"]
}, {
    username: 'jbennett',
    firstName: 'Jeff',
    lastName: 'Bennett',
    skills: ["Business Analysis", "Change Management", "Process Improvement", "Consulting", "Program Management", "Management Consulting", "Project Management", "Business Process Improvement", "Strategic Planning", "Business Process Re-engineering", "SDLC", "IT Strategy", "Agile Methodologies", "Integration", "Business Process Design", "Visio", "Six Sigma", "Process Engineering", "Business Process Management", "Financial Services", "Secretarial Skills", "Gift Baskets", "Cake Decorating"]
}, {
    username: 'kblake',
    firstName: 'Kristen',
    lastName: 'Blake',
    skills: ['Agile Methodologies', 'Scrum', 'Agile Project Management', 'Process Improvement', 'Coaching', 'Business Analysis', 'User Acceptance Testing', 'Business Process Improvement', 'Analysis', 'CRM', 'Team Building', 'Team Leadership', 'SDLC', 'Program Management', 'Requirements Analysis', 'Software Project Management', 'Agile', 'PMP', 'Project Management', 'Software Development', 'Leadership', 'Conflict Resolution', 'Integration']
}, {
    username: 'cbuckley',
    firstName: 'Catlin',
    lastName: 'Buckley',
    skills: ['Angular 4', 'JavaScript', 'Response Web Design', 'HTML 5', 'Git', 'SQL', 'Adobe Creative Suite', 'CSS', 'Content Management', 'WordPress', 'InDesign', 'CSS3', 'Node.js', 'AngularJS', 'Agile Methodologies', 'MySQL', 'Drupal', 'Photoshop', 'SASS', 'ASP.NET MVC', 'PHP', 'Web Development', 'PostgreSQL', 'Web Design', 'Illustrator']
}, {
    username: 'bbyrd',
    firstName: 'Bill',
    lastName: 'Byrd',
    skills: ["Leadership", "Strategy", "Building Relationships", "Leadership Development", "Process Improvement", "Project Management", "Management", "Sales", "Program Management", "Technical Recruiting", "Training", "Vendor Management", "Marketing", "Strategic Planning", "Team Synergy"]
}, {
    username: 'bcheatham',
    firstName: 'Blake',
    lastName: 'Cheatham',
    skills: ["Disaster Recovery", "System Administration", "SQL", "Virtualization", "Active Directory", "DNS", "Apache", "Servers", "Network Administration", "Linux", "VMware", "VMware ESX", "Unix"]
}, {
    username: 'jchou',
    firstName: 'Jimmy',
    lastName: 'Chou',
    skills: ["Strategy", "Program Management", "Management", "Leadership", "Process Improvement", "Business Process Improvement", "Consulting", "IT Strategy", "Business Analysis", "CRM", "Strategic Planning", "Change Management", "Project Management", "Management Consulting", "Financial Services", "Investments", "Financial Analysis", "Portfolio Management", "Fundraising", "Enterprise Architecture", "Agile Methodologies", "Business Strategy", "Customer Relationship Management (CRM)", "Team Leadership", "Business Process Re-engineering", "Analytics", "Valuation", "Entrepreneurship", "Business Process", "Organizational Development", "Data Analysis", "Acquisition Integration", "Agile Project Management", "Six Sigma"]
}, {
    username: 'kcooper',
    firstName: 'Kate',
    lastName: 'Cooper',
    skills: ["Consulting", "Content Strategy", "Management Consulting", "Content Development", "Digital Strategy", "Digital Communication Strategy", "Digital Marketing", "Copywriting", "Copy Editing", "Online Publishing", "Editing", "Proofreading", "Blogging", "Social Media", "Social Media Marketing", "Writing", "Published Author"]
}, {
    username: 'dcoppinger',
    firstName: 'Dustin',
    lastName: 'Coppinger',
    skills: ["Intelligence", "SIGINT", "Military", "Intelligence Analysis", "National Security", "DoD", "Defense", "Team Leadership", "Military Experience", "Military Operations", "Information Assurance", "Signals Intelligence", "mIRC", "FalconView", "Concept of Operations", "Organizational Effectiveness", "Windows Vista", "Microsoft Excel", "Microsoft Word", "Reporting", "Training", "Top Secret", "Security Clearance"]
}, {
    username: 'kcoppinger',
    firstName: 'Kelly',
    lastName: 'Coppinger',
    skills: ["Change Management", "Strategy", "Business Process", "Process Improvement", "Cross-functional Team Leadership", "Management", "Project Management", "Leadership", "Management Consulting", "Business Process Improvement", "Business Analysis", "Strategic Planning", "Analysis", "Team Building", "Vendor Management", "Organizational Development", "Consulting", "Program Management", "Insurance", "Integration", "Requirements Analysis", "Risk Management", "Analytics", "SDLC", "Six Sigma", "Business Intelligence", "Business Process Re-engineering", "Workshop Facilitation", "IT Strategy", "Team Leadership", "Training", "PMO", "Business Process Design", "Business Transformation", "Visio", "Public Speaking", "Process Engineering", "Software Development", "Enterprise Software", "Project Portfolio Management", "Performance Management", "Requirements Gathering", "PMP", "Business Strategy", "Governance"]
}, {
    username: 'ecox',
    firstName: 'Emily',
    lastName: 'Cox',
    skills: ["Creative Strategy", "Advertising", "Integrated Marketing", "Brand Management", "Digital Strategy", "Brand Development", "Copywriting", "Brand Architecture", "Leadership", "Digital Marketing", "Social Media Marketing", "Interactive Advertising", "Management", "Customer Insight", "Creative Briefs"]
}, {
    username: 'bcrouse',
    firstName: 'Ben',
    lastName: 'Crouse',
    skills: ["C#", "LINQ", "ASP.NET", "JavaScript", "Web Services", "SQL", "jQuery", "HTML", "ASP.NET MVC", ".NET", "Visual Studio", "XML", "T-SQL", "VB.NET", "WCF", "TFS", "AJAX", "Visual Basic .NET (VB.NET)", "Language Integrated Query (LINQ)", "Windows Communication Foundation (WCF)", "Team Foundation Server (TFS)", "Transact-SQL (T-SQL)", "Test Driven Development", ".NET Framework"]
}, {
    username: 'ldunning',
    firstName: 'Laura',
    lastName: 'Dunning',
    skills: ["Human Resources", "Recruiting", "Technical Recruiting", "Talent Acquisition", "Management", "Onboarding", "College Recruiting", "Change Management", "Employee Relations", "Vendor Management", "Talent Management", "Performance Management", "Staffing Services", "Employee Benefits", "Sourcing", "Interviews", "Benefits Negotiation", "Leadership", "Program Management"]
}, {
    username: 'aelmore',
    firstName: 'Andrew',
    lastName: 'Elmore',
    skills: ["Project Management", "Process Improvement", "Program Management", "Management", "Strategic Planning", "Analysis", "Project Planning", "Management Consulting", "Training", "Microsoft Excel", "Budgets", "Public Speaking", "Healthcare", "Change Management", "Business Development", "Teamwork", "Contract Negotiation", "Business Acumen", "Time Management", "Staff Development", "Process Scheduler", "Negotiation", "Scrum", "Executive Positions", "Projects"]
}, {
    username: 'destabrook',
    firstName: 'Darrell',
    lastName: 'Estabrook',
    skills: ["Art Direction", "UX", "Web Application Design", "User Interface Design", "Web Design", "Graphic Design", "Information Architecture", "Usability Engineering", "Agile Methodologies", "Web Development", "XHTML", "CSS", "jQuery", "SharePoint", "User Experience", "Agile Project Management", "Business Analysis", "Software Development", "User Interface", "Advertising", "Scrum", "Online Marketing", "Usability Testing"]
}, {
    username: 'jgarrity',
    firstName: 'Jim',
    lastName: 'Garrity',
    skills: ["Project Management", "Engagement Management", "Requirements Analysis", "Business Analysis", "Agile Methodologies", "Scrum", "Analysis", "Team Leadership", "Data Analysis", "Consulting", "Management", "Program Management", "Spatial Analysis", "GIS", "Requirements Gathering", "Software Development", "Strategic Planning", "Leadership"]
}, {
    username: 'dgodwin',
    firstName: 'David',
    lastName: 'Godwin',
    skills: ["Microsoft SQL Server", "C#", "WCF", "Team Leadership", "HTML + CSS", "JavaScript", "SQL Server", "Database Design", "SSRS", "Scuba Diving", "ASP.NET MVC", "jQuery", "Enterprise Architecture", "Application Development", "Application Architecture", "Web Design", "Web Development", "Photoshop", "Photography", "Commercial Photography", "Small Business", "Agile Methodologies", "Web Services", ".NET", "WPF", "Xamarin", "Microsoft Azure", "Business Intelligence", "Management", "Microsoft CRM", "SDLC", "Wedding Photography"]
}, {
    username: 'khall',
    firstName: 'Kate',
    lastName: 'Hall',
    skills: ["Leadership", "Strategy", "Social Media Marketing", "Management", "Social Media", "Marketing", "Project Management", "Strategic Planning", "Training", "Recruiting", "Public Speaking", "Advertising", "Vendor Management", "Social Networking", "Cross-functional Team Leadership", "Change Management", "Blogging", "Team Building", "Team Leadership", "Entrepreneurship", "Marketing Communications", "Email Marketing", "Marketing Strategy", "Public Relations", "Sales Management", "Event Planning", "Online Marketing", "Integration", "Coaching", "Small Business", "Copywriting", "Market Research", "New Business Development", "Account Management", "Leadership Development", "Onboarding", "PMP", "Temporary Placement", "Start-ups", "Facebook", "Corporate Communications", "Business Strategy", "Lead Generation", "Marketing Management", "Content Strategy", "Online Advertising", "Strategic Communications", "Internal Communications", "Brand Development", "Brand Management"]
}, {
    username: 'jhansen',
    firstName: 'Jeff',
    lastName: 'Hansen',
    skills: ["CMS", "Web Content Management", "Scrum", "Agile Methodologies", "ASP.NET", "Web Services", "Web Development", ".NET", "C#", "Enterprise Architecture", "Agile Project Management", "Project Management", "Sitecore", "SDLC", "Content Management", "Integration", "XSLT", "Agile", "jQuery", "Software Development", "Content Strategy", "Visual Studio", "CQ5", "Coveo", "SOA", "Collaboration Solutions", "Enterprise Content Management", "Portals", "Ektron", "Tridion", "AJAX", "SQL Server", "ASP.NET MVC", "JavaScript", "XML", "Visio", "LINQ", "Database Design", "SQL", "CSS", "IIS", "Test Driven Development", "Requirements Analysis", "Information Architecture", "Software Project Management", "Requirements Gathering", "HTML", "IT Strategy", "SharePoint", "Microsoft SQL Server"]
}, {
    username: 'ghatzikotelis',
    firstName: 'George',
    lastName: 'Hatzikotelis',
    skills: ["Agile Methodologies", "Test Automation", "Testing", "Agile Testing", "Scrum", "Requirements Analysis", "Quality Assurance", "Selenium", "Test Driven Development", "SQL", "Agile Project Management", "SharePoint", "Continuous Integration", "Cucumber", "Automated Software Testing", "Jenkins", "SDLC", "Software Quality Assurance", "Performance Testing", "TFS", "Business Analysis", "Fitnesse", "Kanban", "Quality Center", "System Testing", "Software Deployment", "Certified Scrum Master CSM", "Team Foundation Server", "Chef", "Ruby", "RubyMine"]
}, {
    username: 'jhaun',
    firstName: 'Jeremy',
    lastName: 'Haun',
    skills: ["Sitecore", ".NET", "ASP.NET", "Microsoft SQL Server", "C#", "Agile Methodologies", "jQuery", "JavaScript", "AJAX", "XML", "SQL", "Web Development", "CSS"]
}, {
    username: 'khauser',
    firstName: 'Keith',
    lastName: 'Hauser',
    skills: ["Banking", "Portfolio Management", "Financial Services", "Strategy", "Management", "Strategic Planning", "Finance", "Risk Management", "Process Improvement", "Mergers & Acquisitions", "Leadership", "Team Building", "Mortgage Lending", "Business Development", "Credit", "Operations Management", "Loans", "CRM", "Start-ups", "Business Strategy", "Executive Management", "Strategic Consulting", "Entrepreneurship", "Business Process Improvement", "Change Management", "Venture Capital", "Project Management", "Program Management", "Financial Analysis", "Management Consulting", "Small Business", "Negotiation", "Business Planning", "Product Management", "Cross-functional Team Leadership", "Financial Risk", "Insurance", "Analysis", "Budgets", "Underwriting", "Mortgage", "Entrepreneurial Experience"]
}, {
    username: 'khendricks',
    firstName: 'Kate',
    lastName: 'Hendricks',
    skills: ["Marketing Communications", "Marketing", "Marketing Strategy", "Integrated Marketing", "Strategy", "Product Development", "Leadership", "New Business Development", "Management", "Product Marketing", "Email Marketing", "Advertising", "Sales", "Market Planning", "Business Strategy", "Account Management", "Social Media Marketing", "Strategic Planning", "Public Relations", "Project Management", "Cross-functional Team Leadership", "Product Management", "Copywriting", "Event Management", "B2B", "Corporate Communications", "Team Leadership", "Selling", "Market Analysis", "Marketing Management", "Team Building", "Media Relations", "Competitive Analysis", "Key Account Management", "Sales Process", "Social Media", "Negotiation", "Brand Management", "Brand Development", "Direct Sales", "Sales Operations", "Digital Marketing", "Sales Management", "Business Development", "Budgets", "Sales Presentations", "Product Launch", "Market Research", "Lead Generation", "Press Releases"]
}, {
    username: 'lhobbs',
    firstName: 'Luke',
    lastName: 'Hobbs',
    skills: ["Amazon Web Services (AWS)", "Continuous Integration", "Go", "Chef", "Terraform", "Development of CLI tools", "Unix", "Docker", "Ruby", "Agile Methodologies", "Git", "Java", "Linux System Administration"]
}, {
    username: 'jhogan',
    firstName: 'Jay',
    lastName: 'Hogan',
    skills: ["Java", "Web Applications", "Software Development", "Web Development", "JavaScript", "AngularJS", "Groovy", "Agile Methodologies", "Test Driven Development", "SQL", "Hibernate", "NodeJS", "ASP.NET MVC", "Integration", "Ruby on Rails", "Spring", "Agile", "Scrum", "HTML", "jQuery", "Programming", "Grails", "C#", "Open Source", "Continuous Integration", "Agile Project Management", "Microsoft SQL Server", "Web Services", "Continuous Delivery", "Spring Framework"]
}, {
    username: 'ghollins',
    firstName: 'Gray',
    lastName: 'Hollins',
    skills: ["Business Process Improvement", "Business Process", "Process Improvement", "Change Management", "Program Management", "Business Analysis", "Requirements Gathering", "Visio", "Cross-functional Team Leadership", "Project Management", "SDLC", "Process Engineering", "Team Building", "Document Management", "Consulting", "Business Intelligence", "Integration", "Requirements Analysis", "Software Implementation", "Training Delivery", "Leadership", "Collaborative Problem Solving", "Training Documentation", "Business Process Documentation", "Web-based Training", "Business Metrics", "Project Facilitation", "Relationship Management", "Developing Training Programs", "Workflow Design"]
}, {
    username: 'ehurleybrown',
    firstName: 'Erin',
    lastName: 'Hurley-Brown',
    skills: ["Graphic Design", "Logo Design", "Typography", "Art Direction", "Advertising", "Illustration", "Adobe Creative Suite", "Creative Direction", "Illustrator", "Photoshop", "Multimedia", "Brochures", "Web Design", "Graphics", "Branding & Identity", "Visual Communication", "InDesign", "Art", "Adobe Illustrator", "Newsletters", "Brand Development", "Concept Development", "Digital Illustration", "Corporate Identity", "Online Marketing", "Corporate Branding", "Collateral", "Adobe Photoshop", "Page Layout", "Layout", "User Interface Design", "Interaction Design", "Image Manipulation", "Mac", "Logos", "Invitations", "Posters", "Non-profits", "Flyers", "Business Cards", "Packaging", "Banners", "Stationery", "Direct Mail", "Annual Reports", "Retouching", "Postcards", "Letterhead", "Print Production", "UX"]
}, {
    username: 'jkabel',
    firstName: 'Jay',
    lastName: 'Kabel',
    skills: ["Software Development", "Databases", "Enterprise Software", "Perl", "Integration", "Linux", ".NET", "Testing", "Software Project Management", "High Performance Computing", "Mobile Applications", "C#", "Java", "Python", "ASP.NET", "Agile Methodologies", "Shell Scripting", "IIS", "SDLC", "Microsoft SQL Server", "Visio", "WCF", "Information Technology Strategy", "Business Strategy", "Organizational Management", "Team Management", "Process Improvement", "Pricing Strategy", "Web Applications", "Fortran", "Ruby", "Enterprise Content Management", "Scientific Applications", "C++", "Presentations", "Management", "Parallel Programming", "Distributed Systems", "SQL"]
}, {
    username: 'ckeeton',
    firstName: 'Chrissy',
    lastName: 'Keeton',
    skills: ["Process Improvement", "Change Management", "Team Leadership", "Agile Project Management", "Customer Experience", "Account Management", "Process Management", "Business Relationship Management", "Lean Initiatives", "Strategic Planning Facilitation", "Kaizen Facilitation"]
}, {
    username: 'clittle',
    firstName: 'Chris',
    lastName: 'Little',
    skills: ["Leadership", "Entrepreneurship", "Start-ups", "Business Analysis", "Program Management", "Professional Services", "E-commerce", "Strategy", "Strategic Planning", "Management Consulting", "Business Development", "Business Intelligence", "Process Improvement", "Consulting", "Team Building", "Business Process Improvement", "Vendor Management", "Business Strategy", "Business Process", "Marketing", "Strategic Partnerships", "Software Development", "Enterprise Software", "New Business Development", "Outsourcing", "Analytics", "Product Management", "Team Leadership", "Account Management", "Information Technology", "Leadership Development", "Change Management", "IT Strategy"]
}, {
    username: 'blowe',
    firstName: 'Brittany',
    lastName: 'Lowe',
    skills: ["Human Resources", "Customer Service", "Microsoft Office", "PowerPoint", "Military", "Leadership", "Security Clearance", "Team Building", "Microsoft Excel", "Government", "Project Management", "Microsoft Word", "Research", "Outlook", "Sales", "Program Management", "Management", "Process Improvement", "Project Planning"]
}, {
    username: 'tmalkus',
    firstName: 'Tyler',
    lastName: 'Malkus',
    skills: ["Agile Methodologies", "Software Development", "Requirements Analysis"]
}, {
    username: 'cmassie',
    firstName: 'Chris',
    lastName: 'Massie',
    skills: ["Agile Methodologies", "ASP.NET MVC", "REST", "ASP.NET", "Microsoft SQL Server", "Scrum", "Sitecore", "Coveo", "Web Services", "TFS", "C#", "WCF", "Web Development", "LINQ", "Software Development", "Database Design", "JSON", "SOA", "XML", "SQL Server", "jQuery", "NHibernate", "Visual Studio", "SQL", "Agile", "Database Development", "Github", "Oracle", "MongoDB", ".NET", "Management", "SDLC", "JavaScript", "Leadership", "Requirements Analysis", "Consulting"]
}, {
    username: 'jmcveigh',
    firstName: 'Josh',
    lastName: 'McVeigh',
    skills: ["Program Management", "Process Improvement", "Visio", "Project Management", "Leadership"]
}, {
    username: 'cmieczakowski',
    firstName: 'Cass',
    lastName: 'Mieczakowski',
    skills: ["Visio", "Integration", "Unix", "Requirements Analysis", "SQL", "Business Analysis", "Requirements Gathering", "Enterprise Software", "Visual Basic", "Access", "Software Project Management", "SDLC", "Business Intelligence", "Databases", "Enterprise Architecture", "HP Exstream", "Crystal Reports", "Business Objects", "Software Development", "SharePoint", "XML", "Oracle", "Microsoft SQL Server", "Training", "COBOL", "Data Warehousing", "VB.NET", "Data Modeling", "DB2", "Solution Architecture", "Shell Scripting", "OSX", "System Migration", "HP Exstream System Architect"]
}, {
    username: 'dmills',
    firstName: 'Don',
    lastName: 'Mills',
    skills: ["Information Security", "Cloud Security", "Cloud Computing IaaS", "Private Cloud", "Cloud Computing", "Hybrid Cloud", "Virtualization", "Data Center Virtualization", "Storage Virtualization", "Network Security", "Network Design", "VMware Certified Professional", "VMware vSphere", "VMware Infrastructure", "Cisco Certified", "Cisco ASA", "Cisco Nexus", "Cisco Security", "Cisco IOS", "Cisco Routers", "CCNP", "CCDP", "CCDA", "CCNP Security", "Amazon EC2", "Amazon S3", "Amazon EBS", "Amazon RDS", "Amazon Web Services (AWS)", "Amazon VPC", "IP VPN", "Python", "EMC Storage", "Network Forensics", "Computer Forensics", "Brocade Certified Network Engineer", "Intrusion Detection", "Solaris", "FreeBSD", "OpenBSD", "Linux", "Unix", "Xen", "Linux KVM", "Docker", "Linux Clustering", "ZFS", "CoreOS", "Software Defined Networking", "Linux Containers"]
}, {
    username: 'lmurray',
    firstName: 'Liam',
    lastName: 'Murray',
    skills: ["Political Science", "Politics", "Public Speaking", "Leadership", "Social Media", "Customer Service"]
}, {
    username: 'nnicolosi',
    firstName: 'Nick',
    lastName: 'Nicolosi',
    skills: [".NET", "ASP.NET MVC", "C#", "AngularJS", "JavaScript", "jQuery", "SignalR", "Agile Methodologies", "Software Development", "Microsoft Visual Studio", "Integration", "HTML", "CSS", "Databases", "Microsoft SQL Server", "Oracle", "SQL", "Unix", "Agile Project Management", "Testing", "Java", "Business Analysis", "Agile", "Eclipse", "Java Enterprise Edition", "Scrum", "Solution Architecture", "TCL", "Subversion", "Jenkins", "Grails", "Groovy", "Microsoft CRM", "Software Engineering", "Requirements Gathering", "SDLC", "Microsoft Dynamics CRM 2011", "TFS", "Git", "Visual Studio", "Requirements Analysis"]
}, {
    username: 'bpeppers',
    firstName: 'Brenda',
    lastName: 'Peppers',
    skills: ["Process Improvement", "Program Management", "Project Management", "Leadership", "Operations Management", "Management", "Management Consulting", "Business Process Improvement", "Project Planning", "Change Management", "Team Leadership", "Six Sigma", "Strategy", "Business Analysis", "Cross-functional Team Leadership", "Business Strategy", "Risk Management", "Vendor Management", "Integration", "MS Project", "Strategic Planning", "Business Intelligence", "IT Strategy", "SDLC", "Account Management", "Financial Modeling", "Training", "Team Building", "Performance Management", "Process Engineering", "Insurance", "Data Analysis", "Sales Management", "Outsourcing"]
}, {
    username: 'jrobertson',
    firstName: 'Jason',
    lastName: 'Robertson',
    skills: ["Change Management", "PMO", "Analysis", "Project Portfolio Management", "Strategic Planning", "Agile Coaching", "Scrum", "Strategy", "RFP", "Management", "Business Process", "Regulatory Affairs", "RFP Preparation", "Compliance", "Budgeting", "Fixed Income Trading", "Business Process Improvement", "Business Analysis"]
}, {
    username: 'ssmith',
    firstName: 'Sam',
    lastName: 'Smith',
    skills: ["Networking", "Active Directory", "Cisco Technologies", "Troubleshooting", "Disaster Recovery", "Data Center", "VPN", "Servers", "Routing", "VMware", "Switches", "Security", "Windows Server", "Virtualization", "Network Security", "Computer Hardware", "Cisco Call Manager", "VMware Infrastructure", "VMware ESX", "Management", "CCNA"]
}, {
    username: 'csnyder',
    firstName: 'Chris',
    lastName: 'Snyder',
    skills: ["Integration", "Solution Architecture", "Microsoft CRM", "Software Development", "Microsoft SQL Server", "CRM", ".NET", "Requirements Analysis", "Cloud Computing", "SOA", "ASP.NET", "SQL", "SharePoint", "Java", "Enterprise Architecture", "Business Intelligence", "Agile Methodologies", "SSRS", "C#", "SDLC", "Microsoft Dynamics", "Web Services", "Software Project Management", "Visual Studio", "IIS", "SSIS", "TFS", "Virtualization", "T-SQL"]
}, {
    username: 'mspeed',
    firstName: 'Marc',
    lastName: 'Speed',
    skills: ["Business Analysis", "Process Improvement", "Project Management", "Insurance", "Integration", "Business Process Improvement", "Management", "User Acceptance Testing", "SDLC", "Requirements Analysis", "Underwriting", "SQL", "Property & Casualty Insurance", "Analysis", "Business Requirements", "Visio", "Consulting", "Requirements Gathering", "General Insurance", "Business Process", "Business Transformation", "Business Intelligence", "Commercial Insurance", "Testing", "Financial Services", "Agile Project Management", "Change Management", "Reinsurance", "Workers Compensation", "Business Process Re-engineering", "Risk Management", "Access", "SharePoint", "Agile Methodologies", "Liability", "Scrum", "Software Project Management", "IT Strategy", "Software Development Life Cycle (SDLC)", "Business Process Mapping", "Certified Scrum Master CSM", "Billing", "Umbrella Insurance"]
}, {
    username: 'ctan',
    firstName: 'Craig',
    lastName: 'Tan',
    skills: ["Digital Strategy", "Cross-functional Team Leadership", "Strategic Partnerships", "Strategy", "Business Development", "Leadership", "Management", "Analytics", "Strategic Planning", "Business Case", "Program Management", "Customer Experience", "Process Improvement", "Product Management", "P&L Management", "Marketing", "Outsourcing", "Business Strategy", "Six Sigma", "Business Process Improvement"]
}, {
    username: 'jtashner',
    firstName: 'Julie',
    lastName: 'Tashner',
    skills: ["Business Analysis", "Software Implementation", "Project Management", "Management", "Databases", "Requirements Gathering", "Enterprise Software", "Process Improvement", "Training Delivery", "Testing", "Quality Assurance", "Analysis", "Consulting", "Integration", "Visio", "Software Quality Assurance", "SaaS", "Project Coordination", "Technical Support", "Staffing Industry", "Integrations", "Public Speaking", "Scheduling", "Gap Analysis", "Project Planning", "User Documentation", "Process Engineering", "Debugging Code", "Software Development Life Cycle (SDLC)"]
}, {
    username: 'ktuskey',
    firstName: 'Kevin',
    lastName: 'Tuskey',
    skills: ["Adobe Creative Suite", "Art Direction", "Interaction Design", "Graphic Design", "User Interface Design", "Web Design", "User Experience", "Web Development", "Advertising", "Logo Design", "Typography", "Creative Direction", "Brand Development", "Digital Media", "CSS", "SEO", "Illustrator", "Email Marketing", "Photoshop", "Microsoft Office", "Mobile Design", "Responsive Web Design", "Creative Strategy", "Layout", "Website Development", "XHTML", "JavaScript", "Social Media", "Twitter", "Facebook", "LinkedIn", "YouTube", "Web Analytics", "Google Analytics", "Google Adwords", "SEM", "Dreamweaver", "InDesign", "Keynote", "Corporate Identity", "Strategic Planning", "Information Architecture", "Flash", "ActionScript", "QuarkXPress", "User Interface", "Illustration", "Photography", "Copywriting", "Final Cut Express"]
}, {
    username: 'kvanlandingham',
    firstName: 'Karen',
    lastName: 'Van Landingham',
    skills: ["Process Improvement", "Change Management", "Leadership", "Management", "Vendor Management", "Program Management", "Training", "Business Analysis", "Agile Methodologies", "Project Planning", "Business Process Improvement", "Financial Services", "PMP", "Agile Project Management", "Risk Management", "Coaching", "Project Portfolio Management", "Project Management"]
}, {
    username: 'awenzel',
    firstName: 'Anthony',
    lastName: 'Wenzel',
    skills: ["Agile Methodologies", "Program Management", "Integration", "Management", "Leadership", "Business Analysis", "Software Development", "Management Consulting", "Business Development", "Consulting", "Team Leadership", "Product Development", "SDLC", "Software Project Management", "Enterprise Architecture", "Scrum", "SharePoint", "IT Strategy", "Agile Project Management", "Microsoft SQL Server", "Coaching", "Architectures"]
}, {
    username: 'ayoung',
    firstName: 'Aretina',
    lastName: 'Young',
    skills: ["Business Analysis", "Business Process Improvement", "Project Management", "Process Engineering", "Agile Methodologies", "Integration", "IT Strategy", "Change Management", "Risk Management", "Requirements Analysis", "Agile Project Management", "Leadership", "Strategy", "Visio"]
}];

initalData.sort((a, b) => {
    if(a.username < b.username) {
        return -1;
    }
    else if(a.username > b.username) {
        return 1;
    }
    return 0;
});

module.exports = initalData;