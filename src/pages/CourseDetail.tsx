import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Award, BookOpen, CheckCircle, ChevronRight } from 'lucide-react';

export default function CourseDetail() {
  const { slug } = useParams();

  const courseData: Record<string, any> = {
    'python-fullstack': {
      name: 'Python Full Stack Development',
      duration: '4 Months',
      level: 'Beginner to Advanced',
      rating: 4.8,
      students: 5420,
      description:
        'Become a full-stack Python developer. Learn Python, Django/Flask, REST APIs, frontend technologies, and databases to build end-to-end web applications.',
      highlights: [
        '100% Hands-on Full Stack Training',
        'Backend with Django / Flask',
        'Frontend with React / HTML, CSS, JS',
        'REST API Development & Integration',
        'Real-time Full Stack Projects',
        'Placement Assistance & Interview Prep',
      ],
      curriculum: [
        {
          module: 'Module 1: Python Fundamentals',
          topics: ['Variables & Data Types', 'Control Flow', 'Functions', 'Modules & Packages'],
        },
        {
          module: 'Module 2: Advanced Python & OOP',
          topics: ['OOP Concepts', 'File Handling', 'Error Handling', 'Working with Libraries'],
        },
        {
          module: 'Module 3: Backend with Django / Flask',
          topics: ['Django Basics', 'Models & Migrations', 'Templates & Views', 'REST APIs'],
        },
        {
          module: 'Module 4: Frontend Development',
          topics: ['HTML/CSS/JavaScript', 'React Basics', 'Components & Props', 'API Integration'],
        },
        {
          module: 'Module 5: Databases & Deployment',
          topics: ['MySQL/PostgreSQL', 'ORM Concepts', 'Git & GitHub', 'Basic Cloud Deployment'],
        },
        {
          module: 'Module 6: Full Stack Project',
          topics: ['Project Planning', 'Backend & Frontend Integration', 'Testing', 'Deployment'],
        },
      ],
      prerequisites: 'Basic computer knowledge. No prior programming experience required.',
      careerOptions: ['Python Full Stack Developer', 'Backend Developer', 'Web Developer', 'Django Developer'],
    },

    'data-science': {
      name: 'Data Science',
      duration: '4 Months',
      level: 'Intermediate to Advanced',
      rating: 4.9,
      students: 3850,
      description:
        'Become a Data Science professional. Learn Python, statistics, machine learning, and data visualization to analyze data and build predictive models.',
      highlights: [
        'Real Industry Projects',
        'Mentorship from Data Scientists',
        'End-to-End ML Pipelines',
        'Data Visualization & Storytelling',
        'Model Deployment Basics',
        'Career Support & Mock Interviews',
      ],
      curriculum: [
        {
          module: 'Module 1: Python for Data Science',
          topics: ['NumPy', 'Pandas', 'Data Manipulation', 'Data Cleaning'],
        },
        {
          module: 'Module 2: Statistics & Probability',
          topics: ['Descriptive Statistics', 'Inferential Statistics', 'Hypothesis Testing', 'A/B Testing'],
        },
        {
          module: 'Module 3: Data Visualization',
          topics: ['Matplotlib', 'Seaborn', 'Plotly Basics', 'Dashboard Concepts'],
        },
        {
          module: 'Module 4: Machine Learning',
          topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering'],
        },
        {
          module: 'Module 5: Advanced Topics',
          topics: ['Intro to Deep Learning', 'NLP Basics', 'Time Series Basics', 'Big Data Overview'],
        },
        {
          module: 'Module 6: Capstone Project',
          topics: ['Problem Definition', 'Data Collection', 'Model Building', 'Presentation'],
        },
      ],
      prerequisites: 'Basic Python knowledge and mathematics (statistics basics recommended).',
      careerOptions: ['Data Scientist', 'Data Analyst', 'ML Engineer', 'Business Intelligence Analyst'],
    },

    java: {
      name: 'Java Full Stack Development',
      duration: '3 Months',
      level: 'Intermediate',
      rating: 4.7,
      students: 4120,
      description:
        'Master full-stack development with Java and modern web technologies. Build end-to-end applications using Spring Boot, React, and industry-standard tools.',
      highlights: [
        'Complete Full Stack Training',
        'Spring Boot & REST APIs',
        'React JS Frontend',
        'Real-time Enterprise Projects',
        'Git, CI/CD Basics',
        'Placement Assistance',
      ],
      curriculum: [
        {
          module: 'Module 1: Core Java',
          topics: ['Java Basics', 'OOP Concepts', 'Collections', 'Exception Handling'],
        },
        {
          module: 'Module 2: Advanced Java',
          topics: ['JDBC', 'Servlets', 'JSP', 'Hibernate Basics'],
        },
        {
          module: 'Module 3: Spring Framework',
          topics: ['Spring Core', 'Spring Boot', 'Spring MVC', 'REST APIs'],
        },
        {
          module: 'Module 4: Frontend Development',
          topics: ['HTML/CSS/JavaScript', 'React JS', 'State Management', 'API Integration'],
        },
        {
          module: 'Module 5: Database & Deployment',
          topics: ['MySQL', 'MongoDB Overview', 'Git/GitHub', 'Basic Cloud Deployment'],
        },
      ],
      prerequisites: 'Basic programming knowledge. Understanding of Java basics is helpful.',
      careerOptions: ['Full Stack Developer', 'Java Developer', 'Backend Developer', 'Software Engineer'],
    },

    testing: {
      name: 'Software Testing',
      duration: '2.5 Months',
      level: 'Beginner to Intermediate',
      rating: 4.6,
      students: 2980,
      description:
        'Learn manual and automation testing for web and mobile applications. Get hands-on with Selenium, API testing, and testing tools used in the industry.',
      highlights: [
        'Manual & Automation Testing',
        'Selenium WebDriver Training',
        'API Testing with Postman',
        'Real-time Test Case Writing',
        'Bug Tracking Tools (JIRA)',
        'Interview Preparation',
      ],
      curriculum: [
        {
          module: 'Module 1: Software Testing Basics',
          topics: ['SDLC & STLC', 'Types of Testing', 'Test Case Design', 'Bug Life Cycle'],
        },
        {
          module: 'Module 2: Manual Testing',
          topics: ['Requirement Analysis', 'Test Scenarios', 'Test Execution', 'Reporting Defects'],
        },
        {
          module: 'Module 3: Automation with Selenium',
          topics: ['Selenium Basics', 'Locators', 'TestNG Basics', 'Framework Introduction'],
        },
        {
          module: 'Module 4: API & Tooling',
          topics: ['API Testing Basics', 'Postman', 'Introduction to JMeter', 'JIRA / Bugzilla Overview'],
        },
        {
          module: 'Module 5: Project & Interview Prep',
          topics: ['End-to-End Testing Project', 'Real-time Scenarios', 'Resume Building', 'Mock Interviews'],
        },
      ],
      prerequisites: 'Basic computer knowledge. No coding experience required (automation part will be taught from basics).',
      careerOptions: ['Manual Tester', 'Automation Test Engineer', 'QA Engineer', 'Test Analyst'],
    },

    mern: {
      name: 'MERN Stack Development',
      duration: '4 Months',
      level: 'Beginner to Intermediate',
      rating: 4.8,
      students: 3210,
      description:
        'Become a MERN stack developer. Learn MongoDB, Express.js, React, and Node.js to build modern, scalable full-stack web applications.',
      highlights: [
        'End-to-End MERN Training',
        'Real-time Full Stack Projects',
        'REST API Development',
        'Authentication & Authorization',
        'Deployment on Cloud Platforms',
        'Code Reviews & Mentoring',
      ],
      curriculum: [
        {
          module: 'Module 1: Web & JavaScript Basics',
          topics: ['HTML5/CSS3', 'Modern JavaScript (ES6+)', 'DOM Manipulation', 'Async JS'],
        },
        {
          module: 'Module 2: Frontend with React',
          topics: ['React Fundamentals', 'Hooks', 'Routing', 'State Management'],
        },
        {
          module: 'Module 3: Backend with Node & Express',
          topics: ['Node.js Basics', 'Express.js', 'REST APIs', 'Middleware'],
        },
        {
          module: 'Module 4: Database with MongoDB',
          topics: ['NoSQL Basics', 'CRUD Operations', 'Mongoose', 'Data Modeling'],
        },
        {
          module: 'Module 5: MERN Project',
          topics: ['Frontend & Backend Integration', 'JWT Authentication', 'Deployment', 'Best Practices'],
        },
      ],
      prerequisites: 'Basic understanding of HTML/CSS and programming logic is helpful.',
      careerOptions: ['MERN Stack Developer', 'Full Stack JavaScript Developer', 'Frontend Developer', 'Node.js Developer'],
    },

    mobile: {
      name: 'Mobile App Development',
      duration: '4 Months',
      level: 'Beginner to Intermediate',
      rating: 4.7,
      students: 2670,
      description:
        'Learn to build mobile applications for Android and iOS using React Native and Flutter. Understand app architecture, UI, and deployment to app stores.',
      highlights: [
        'React Native & Flutter Training',
        'Cross-platform App Development',
        'Hands-on UI Design',
        'API Integration in Mobile Apps',
        'Real Device Testing',
        'Guidance for Play Store / App Store',
      ],
      curriculum: [
        {
          module: 'Module 1: Mobile Fundamentals',
          topics: ['Mobile App Basics', 'Platform Overview', 'Development Environment Setup', 'UI/UX Basics'],
        },
        {
          module: 'Module 2: React Native',
          topics: ['Components & JSX', 'Navigation', 'State Management', 'API Calls'],
        },
        {
          module: 'Module 3: Flutter',
          topics: ['Dart Basics', 'Widgets', 'Stateful & Stateless Widgets', 'API Integration'],
        },
        {
          module: 'Module 4: Backend & Integration',
          topics: ['REST APIs', 'Firebase Basics', 'Authentication', 'Push Notifications (Overview)'],
        },
        {
          module: 'Module 5: Final Mobile Project',
          topics: ['End-to-End App', 'Testing on Devices', 'Optimization Basics', 'Publishing Overview'],
        },
      ],
      prerequisites: 'Basic programming knowledge is recommended. Knowledge of JavaScript is a plus.',
      careerOptions: ['Mobile App Developer', 'React Native Developer', 'Flutter Developer', 'Cross-Platform App Developer'],
    },

    devops: {
      name: 'DevOps Engineering',
      duration: '3.5 Months',
      level: 'Intermediate',
      rating: 4.8,
      students: 2450,
      description:
        'Learn DevOps tools and practices to automate and streamline software delivery. Work with Git, Docker, Kubernetes, CI/CD pipelines, and cloud platforms.',
      highlights: [
        'Hands-on DevOps Toolchain',
        'Real-time CI/CD Pipelines',
        'Docker & Kubernetes Basics',
        'Cloud Platforms (AWS / Azure Overview)',
        'Monitoring & Logging Basics',
        'Interview & Resume Support',
      ],
      curriculum: [
        {
          module: 'Module 1: DevOps Foundations',
          topics: ['DevOps Culture', 'SDLC vs DevOps', 'Version Control with Git', 'GitHub / GitLab'],
        },
        {
          module: 'Module 2: CI/CD',
          topics: ['CI/CD Concepts', 'Jenkins Basics', 'Pipeline Creation', 'Build & Deployment Automation'],
        },
        {
          module: 'Module 3: Containerization with Docker',
          topics: ['Docker Basics', 'Images & Containers', 'Dockerfile', 'Docker Compose Basics'],
        },
        {
          module: 'Module 4: Orchestration & Cloud',
          topics: ['Kubernetes Basics', 'Pods & Deployments', 'Services', 'Cloud Overview (AWS/Azure)'],
        },
        {
          module: 'Module 5: Monitoring & Final Project',
          topics: ['Monitoring Basics', 'Logging Overview', 'End-to-End DevOps Project', 'Best Practices'],
        },
      ],
      prerequisites: 'Basic knowledge of Linux, networking, and any programming language is helpful.',
      careerOptions: ['DevOps Engineer', 'Build & Release Engineer', 'Site Reliability Engineer (SRE)', 'Cloud Engineer (Entry Level)'],
    },
  };

  const course = courseData[slug || ''] || {
    name: 'Course Not Found',
    description: 'The course you are looking for does not exist.',
  };

  if (!courseData[slug || '']) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <Link
            to="/courses"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View All Courses
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-4">
              <Link to="/courses" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
                ← Back to Courses
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {course.name}
                </h1>
                <p className="text-xl text-gray-700 mb-6">{course.description}</p>

                <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>{course.students}+ Students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span>{course.level}</span>
                  </div>
                </div>
              </div>

              {/* Right side card WITHOUT course fee */}
              <div className="bg-white rounded-xl p-6 shadow-xl h-fit">
                <div className="text-center mb-4">
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    Talk to us for latest offers & fee details
                  </div>
                  <div className="text-xs text-gray-500">
                    Flexible batches and EMI options available.
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold mb-3"
                >
                  Enroll Now
                </Link>
                <Link
                  to="/contact"
                  className="block w-full bg-white text-blue-600 text-center px-6 py-3 rounded-lg hover:bg-gray-50 transition border-2 border-blue-600 font-semibold"
                >
                  Download Syllabus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.highlights?.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="border-2 border-gray-100 rounded-lg p-6 hover:border-blue-600 transition"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                        <h3 className="text-xl font-bold text-gray-900">{item.module}</h3>
                      </div>
                      <ul className="ml-9 space-y-2">
                        {item.topics.map((topic: string, idx: number) => (
                          <li key={idx} className="text-gray-600 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-600" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Prerequisites</h2>
                <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{course.prerequisites}</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <div className="flex flex-wrap gap-3">
                  {course.careerOptions?.map((career: string, index: number) => (
                    <span
                      key={index}
                      className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-medium"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Learn from Industry Experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Hands-on Project Experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Placement Assistance Guaranteed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Flexible Learning Options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Industry-Recognized Certificate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Need Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Talk to our counselors to find the best course for your career goals.
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
