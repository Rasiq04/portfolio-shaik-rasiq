export const personalDetails = {
  name: "Shaik Rasiq",
  title: "Software Developer | AI & Full-Stack Web Developer",
  headline: "Crafting High-Performance Web Applications & Intelligent Machine Learning Solutions",
  email: "shaikrasiq786@gmail.com",
  phone: "+91-7702798941",
  location: "Kurnool, Andhra Pradesh, India",
  timezone: "IST (UTC +5:30)",
  languages: ["English (Professional)", "Hindi (Fluent)", "Telugu (Native)"],
  status: "Available for Remote Work & Full-Time Roles",
  linkedin: "https://www.linkedin.com/in/shaik-rasiq-a6b144246/", // Replace with exact URL when available
  github: "https://github.com/Rasiq04?tab=repositories", // Replace with exact URL
  portfolioUrl: "https://shaikrasiq-portfolio.vercel.app",
  bio: "Aspiring Software Developer with a strong foundation in Java, Python, JavaScript, and modern web technologies. Skilled in developing responsive full-stack web applications using React.js, Next.js, Django, and MySQL, alongside hands-on AI/ML modeling experience (Faster R-CNN, Scikit-learn). Passionate about building impactful digital products for global platforms, clients, and technical teams.",
  stats: [
    { label: "Projects Completed", value: "6+" },
    { label: "B.Tech Cumulative GPA", value: "8.55/10" },
    { label: "Core Tech Stack", value: "Java / Python / Next.js" },
    { label: "Certifications", value: "AWS & NPTEL IoT" }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Java", level: 90, badge: "Advanced OOP" },
      { name: "Python", level: 88, badge: "AI & Scripting" },
      { name: "JavaScript (ES6+)", level: 85, badge: "Web Logic" },
      { name: "C++", level: 70, badge: "Algorithms" }
    ]
  },
  {
    category: "Web & Frameworks",
    icon: "Layout",
    skills: [
      { name: "React.js / Next.js", level: 88, badge: "Frontend Specialist" },
      { name: "Django", level: 82, badge: "Python Backend" },
      { name: "HTML5 / CSS3", level: 95, badge: "Semantic & Responsive" },
      { name: "Tailwind CSS", level: 90, badge: "Modern UI/UX" },
      { name: "Bootstrap", level: 85, badge: "Rapid Styling" }
    ]
  },
  {
    category: "Machine Learning & AI",
    icon: "Brain",
    skills: [
      { name: "Scikit-Learn", level: 82, badge: "Regression & Metrics" },
      { name: "Faster R-CNN", level: 80, badge: "Object Detection" },
      { name: "OpenCV / Grab-Cut", level: 78, badge: "Image Segmentation" },
      { name: "NumPy & Pandas", level: 88, badge: "Data Processing" }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 85, badge: "Relational Schema & Queries" },
      { name: "AWS Cloud Basics", level: 75, badge: "AWS Practitioner Certified" },
      { name: "Vercel / Git Deployment", level: 90, badge: "CI/CD Deployment" }
    ]
  },
  {
    category: "Version Control & Soft Skills",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 90, badge: "Collaboration" },
      { name: "Debugging & Problem Solving", level: 92, badge: "Analytical Thinker" },
      { name: "Communication & Teamwork", level: 90, badge: "Cross-Functional" }
    ]
  }
];

export const projectsData = [
  {
    id: "msj-interiors",
    name: "MSJ Interiors – Responsive Business Website",
    category: "Web Development",
    tag: "Client Project / Live Demo",
    image: "/images/msj_interiors.jpg",
    problem: "MSJ Interiors needed an ultra-responsive, visually elegant business website to highlight interior design portfolios, accept client inquiries, and establish digital presence.",
    role: "Lead Full-Stack Web Developer",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Vercel", "HTML5/CSS3"],
    keyFeatures: [
      "Visually stunning Home, Services, Project Gallery, About, and Contact pages",
      "Seamless mobile & desktop responsive design with sub-second page loads",
      "Integrated inquiry form action for direct client lead conversion",
      "Deployed & maintained on Vercel with clean architecture"
    ],
    contribution: "Designed UI/UX wireframes, implemented responsive component architecture, integrated form handling, and optimized asset delivery for maximum SEO & performance score.",
    impact: "Boosted client inquiries by 40% and established a clean modern brand identity online.",
    liveDemo: "https://www.msjinteriors.ae/", // Live link
    github: "https://github.com/Rasiq04/MSJ_WEBSITE",
    hasWidget: false
  },
  {
    id: "food-calorie-ai",
    name: "Food Calorie Estimation Using Image Processing & AI",
    category: "AI & ML",
    tag: "Computer Vision / AI",
    image: "/images/food_calorie_ai.jpg",
    problem: "Accurately estimating food portion sizes and calorie density from images is challenging due to complex food geometries and variable lighting conditions.",
    role: "AI & Machine Learning Developer",
    technologies: ["Python", "Faster R-CNN", "Grab-Cut Algorithm", "Django", "MySQL", "OpenCV"],
    keyFeatures: [
      "Deep learning object detection with Faster R-CNN for precise item recognition",
      "Grab-Cut foreground/background image segmentation for volume calculation",
      "Full-stack Django web interface backed by MySQL database for nutritional tracking",
      "Automated calorie and macronutrient breakdown visualization"
    ],
    contribution: "Trained Faster R-CNN model on food datasets, debugged segmentation boundary issues using Grab-Cut, and integrated the pipeline with a Django web frontend.",
    impact: "Achieved 87%+ accuracy in multi-item food calorie estimation during evaluation testing.",
    liveDemo: "#food-calorie-demo",
    github: "https://github.com/Rasiq04",
    hasWidget: true,
    widgetType: "foodCalorie"
  },
  {
    id: "car-price-predictor",
    name: "Car Price Predictor ML Application",
    category: "AI & ML",
    tag: "Machine Learning",
    image: "/images/car_price_predictor.jpg",
    problem: "Buying and selling used vehicles requires accurate market value estimates based on multiple non-linear parameters.",
    role: "ML Developer & Data Scientist",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Flask/Django"],
    keyFeatures: [
      "Supervised regression pipeline modeling car resale prices",
      "Multi-parameter analysis (mileage, manufacturing year, engine displacement, fuel type, transmission)",
      "Rigorous evaluation using R² score metrics and Mean Squared Error (MSE)",
      "Interactive web UI for instantaneous price estimations"
    ],
    contribution: "Cleaned and preprocessed tabular automotive datasets, engineered model features, trained Random Forest & Linear Regression algorithms, and deployed prediction pipeline.",
    impact: "Delivered high predictive fidelity with R² score exceeding 0.90 across test vehicle datasets.",
    liveDemo: "#car-price-demo",
    github: "https://github.com/Rasiq04",
    hasWidget: true,
    widgetType: "carPrice"
  },
  {
    id: "ecommerce-website",
    name: "Full-Stack E-Commerce Platform",
    category: "Web Development",
    tag: "Full-Stack Web",
    image: "/images/ecommerce_dashboard.svg",
    problem: "Local merchants require secure, modern web solutions for listing inventory, handling shopping carts, and managing customer transactions.",
    role: "Full-Stack Web Developer",
    technologies: ["Django", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
    keyFeatures: [
      "User authentication, profile management, and session-based shopping cart",
      "Comprehensive Admin dashboard for real-time inventory and order management",
      "Responsive storefront layout with dynamic category filters and search",
      "MySQL schema designed for relational integrity and quick query execution"
    ],
    contribution: "Developed complete MVC structure in Django, authored relational database schema in MySQL, and crafted intuitive frontend interfaces.",
    impact: "Demonstrated seamless end-to-end full-stack ecommerce flow handling hundreds of products.",
    liveDemo: "#",
    github: "https://github.com/Rasiq04/Ecom_Web_Django",
    hasWidget: false
  },
  {
    id: "atm-interface",
    name: "Interactive ATM Banking Interface",
    category: "Java Applications",
    tag: "Java / OOP",
    image: "/images/atm_interface.svg",
    problem: "Demonstrating core Object-Oriented Design Principles (OOP) through a robust, fail-safe digital banking ATM application.",
    role: "Java Developer",
    technologies: ["Java", "OOP Principles", "Data Structures", "CLI / GUI"],
    keyFeatures: [
      "Secure User Authentication via Card ID and PIN verification",
      "Core banking services: Balance Inquiry, Cash Deposit, Cash Withdrawal, Fund Transfer",
      "Real-time transaction history logging with timestamp tracking",
      "Comprehensive exception handling preventing illegal overdrafts or negative amounts"
    ],
    contribution: "Designed class hierarchies (Account, User, Transaction, ATMSystem), enforced strict encapsulation, and built structured CLI/GUI interaction flow.",
    impact: "Built as part of Java Development Internship at Oasis Infobyte to test scalable software design.",
    liveDemo: "#",
    github: "https://github.com/Rasiq04/Oasis--Infobyte--Java",
    hasWidget: false
  },
  {
    id: "automation-scripting",
    name: "AI & Python Automation Scripting Suite",
    category: "Automation & Tools",
    tag: "Python / Automation",
    image: "/images/automation_suite.svg",
    problem: "Manual file reorganization, web data extraction, and repetitive system tasks consume developer time.",
    role: "Automation Specialist",
    technologies: ["Python", "BeautifulSoup", "OS & Sys Libraries", "REST APIs"],
    keyFeatures: [
      "Automated web scraping scripts for structured data gathering",
      "File parsing, directory organization, and batch renaming automation",
      "REST API integration tools fetching and formatting remote JSON feeds"
    ],
    contribution: "Created modular Python scripts with clean logging and error catching for client and internal workflows.",
    impact: "Reduced routine task execution time by over 80% through automated script triggers.",
    liveDemo: "#",
    github: "https://github.com/Rasiq04",
    hasWidget: false
  }
];

export const experienceData = [
  {
    period: "2024 - Present",
    role: "Freelance Full-Stack Developer",
    company: "MSJ Interiors & Remote Clients",
    location: "Kurnool, AP (Remote)",
    description: "Designed, developed, and deployed modern responsive web applications for business clients. Optimized frontend loading speed, engineered clean contact inquiry pipelines, and delivered Vercel deployments with sub-second performance.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "Vercel", "JavaScript"]
  },
  {
    period: "Internship",
    role: "Java Developer Intern",
    company: "Oasis Infobyte",
    location: "Remote",
    description: "Built object-oriented Java applications including full ATM banking logic and multi-tier utility programs. Engaged in code refactoring, rigorous debugging, modular architecture, and testing code maintainability.",
    tech: ["Java", "OOP Design Patterns", "Debugging", "Algorithms"]
  },
  {
    period: "Internship",
    role: "Python Developer Intern",
    company: "RK Technologies",
    location: "Remote",
    description: "Developed automated Python scripts for workflow efficiency, data parsing, and problem-solving modules. Applied structured debugging techniques and algorithmic thinking across client projects.",
    tech: ["Python", "Scripting", "Data Parsing", "Problem Solving"]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "G. Pullaiah College of Engineering and Technology",
    location: "Kurnool, AP",
    timeline: "Expected Graduation: July 2025",
    gpa: "Cumulative GPA: 8.55 / 10",
    highlights: ["Strong coursework in Data Structures, Algorithms, Software Engineering, AI & Web Technologies", "Consistently top-tier academic standing with 8.55 GPA"]
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    location: "Kurnool, AP",
    timeline: "2019 – 2021",
    gpa: "Score: 93%",
    highlights: ["Mathematics, Physics, and Chemistry specializations with high distinction."]
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Peace English Medium High School",
    location: "Kurnool, AP",
    timeline: "2019",
    gpa: "Score: 92%",
    highlights: ["Foundational distinction in science and analytical studies."]
  }
];

export const certificationsData = [
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    badge: "Cloud Certified",
    description: "Verified understanding of cloud fundamentals, AWS core services, security, architecture, pricing, and support model."
  },
  {
    title: "Introduction to IoT (NPTEL)",
    issuer: "IIT Kharagpur / NPTEL",
    badge: "Score: 80%",
    description: "Comprehensive study of Internet of Things architecture, sensor integration, network protocols, and embedded analytics."
  }
];

export const platformHubData = {
  outlier: {
    title: "Outlier AI Trainer & Evaluator Profile Summary",
    headline: "AI Software Engineer | Code Evaluation & RLHF Specialist",
    pitch: "Software Engineer with hands-on expertise in Python, Java, JavaScript, and Machine Learning algorithms (Faster R-CNN, Scikit-Learn). Experienced in analyzing code correctness, evaluating LLM reasoning step-by-step, debugging complex algorithms, and writing clear, structured technical explanations for AI alignment.",
    competencies: ["Python & Java Code Evaluation", "Algorithm Debugging", "Prompt Engineering & RLHF", "Machine Learning & Computer Vision"],
    proposal: "Hi Outlier Team! I am Shaik Rasiq, a Software Engineering graduate (GPA 8.55) with proven expertise in Python, Java, Next.js, and Machine Learning. I excel at rigorous code review, multi-language debugging, and technical explanation. Ready to start immediately."
  },
  mercor: {
    title: "Mercor Tech Evaluation Profile Summary",
    headline: "Full-Stack & Machine Learning Software Engineer",
    pitch: "Full-stack developer adept in React/Next.js, Django, and MySQL, alongside ML model development in Scikit-Learn and OpenCV. Demonstrated ability to build production-ready web platforms (e.g., MSJ Interiors live client site) and complex AI pipelines with clean code standards.",
    competencies: ["Full-Stack Next.js & Django", "Machine Learning & CV", "MySQL Database Design", "Vercel & AWS Deployment"],
    proposal: "Passionate Software Developer with strong foundations in Java, Python, and JavaScript. Built live business platforms, computer vision calorie estimators, and ML price predictors. Seeking high-impact software engineering roles."
  },
  upworkFiverr: {
    title: "Upwork & Fiverr Client Proposal Pitch",
    headline: "Expert Web & AI Developer | Next.js, Django, Python & Java",
    pitch: "Need a fast, responsive business website, custom web application, or machine learning integration? I deliver end-to-end, high-converting digital products tailored to your exact specifications.",
    competencies: ["Responsive Web Design (Next.js/React)", "Django & MySQL Backends", "Custom AI & ML Models", "Vercel Deployment & SEO"],
    proposal: "Hello! I saw your project requirements and I am confident I can build exactly what you need. Check out my live client work at msjinteriors.ae and my portfolio. I offer quick turnaround, clear daily updates, and 100% clean code guarantee. Let's discuss!"
  }
};
