import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Award, BookOpen, CheckCircle, ChevronRight } from 'lucide-react';

export default function CourseDetail() {
  const { slug } = useParams();

  const courseData: Record<string, any> = {
    python: {
      name: 'Python Programming',
      duration: '2 Months',
      level: 'Beginner to Advanced',
      price: '₹15,000',
      rating: 4.8,
      students: 5420,
      description: 'Master Python programming from the ground up. This comprehensive course covers everything from basic syntax to advanced concepts like OOP, data structures, and web development frameworks.',
      highlights: [
        '100% Hands-on Training',
        'Live Project Experience',
        'Industry Expert Trainers',
        'Job Placement Assistance',
        'Flexible Batch Timings',
        'Lifetime Course Access',
      ],
      curriculum: [
        {
          module: 'Module 1: Python Fundamentals',
          topics: ['Variables & Data Types', 'Control Flow', 'Functions', 'Modules & Packages']
        },
        {
          module: 'Module 2: Object-Oriented Programming',
          topics: ['Classes & Objects', 'Inheritance', 'Polymorphism', 'Encapsulation']
        },
        {
          module: 'Module 3: Data Structures',
          topics: ['Lists & Tuples', 'Dictionaries & Sets', 'Algorithms', 'File Handling']
        },
        {
          module: 'Module 4: Web Development',
          topics: ['Django Framework', 'Flask', 'REST APIs', 'Database Integration']
        },
        {
          module: 'Module 5: Real-World Project',
          topics: ['Project Planning', 'Implementation', 'Testing', 'Deployment']
        },
      ],
      prerequisites: 'Basic computer knowledge. No prior programming experience required.',
      careerOptions: ['Python Developer', 'Backend Developer', 'Data Analyst', 'Automation Engineer'],
    },
    'data-science': {
      name: 'Data Science',
      duration: '4 Months',
      level: 'Intermediate to Advanced',
      price: '₹30,000',
      rating: 4.9,
      students: 3850,
      description: 'Become a certified Data Scientist. Learn to analyze complex data, build predictive models, and derive actionable insights using Python, Machine Learning, and advanced analytics tools.',
      highlights: [
        'Real Industry Projects',
        'Mentorship from Data Scientists',
        'Python & R Programming',
        'Machine Learning Algorithms',
        'Data Visualization Tools',
        'Career Support & Interview Prep',
      ],
      curriculum: [
        {
          module: 'Module 1: Python for Data Science',
          topics: ['NumPy', 'Pandas', 'Data Manipulation', 'Data Cleaning']
        },
        {
          module: 'Module 2: Statistics & Probability',
          topics: ['Descriptive Statistics', 'Inferential Statistics', 'Hypothesis Testing', 'A/B Testing']
        },
        {
          module: 'Module 3: Data Visualization',
          topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Dashboard Creation']
        },
        {
          module: 'Module 4: Machine Learning',
          topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering']
        },
        {
          module: 'Module 5: Advanced Topics',
          topics: ['Deep Learning Basics', 'NLP', 'Time Series', 'Big Data Tools']
        },
        {
          module: 'Module 6: Capstone Project',
          topics: ['Problem Definition', 'Data Collection', 'Model Building', 'Presentation']
        },
      ],
      prerequisites: 'Basic Python knowledge and mathematics (statistics basics recommended).',
      careerOptions: ['Data Scientist', 'Data Analyst', 'ML Engineer', 'Business Intelligence Analyst'],
    },
    java: {
      name: 'Java Full Stack Development',
      duration: '3 Months',
      level: 'Intermediate',
      price: '₹25,000',
      rating: 4.7,
      students: 4120,
      description: 'Master full-stack development with Java and modern web technologies. Build end-to-end applications using Spring Boot, React, and industry-standard tools.',
      highlights: [
        'Complete Full Stack Training',
        'Spring Boot & Microservices',
        'React JS Frontend',
        'Real-time Projects',
        'Cloud Deployment',
        '100% Job Assistance',
      ],
      curriculum: [
        {
          module: 'Module 1: Core Java',
          topics: ['Java Basics', 'OOP Concepts', 'Collections', 'Exception Handling']
        },
        {
          module: 'Module 2: Advanced Java',
          topics: ['JDBC', 'Servlets', 'JSP', 'Hibernate']
        },
        {
          module: 'Module 3: Spring Framework',
          topics: ['Spring Core', 'Spring Boot', 'Spring MVC', 'REST APIs']
        },
        {
          module: 'Module 4: Frontend Development',
          topics: ['HTML/CSS/JavaScript', 'React JS', 'Redux', 'API Integration']
        },
        {
          module: 'Module 5: Database & Deployment',
          topics: ['MySQL', 'MongoDB', 'Git/GitHub', 'AWS/Cloud']
        },
      ],
      prerequisites: 'Basic programming knowledge. Understanding of Java basics is helpful.',
      careerOptions: ['Full Stack Developer', 'Java Developer', 'Backend Developer', 'Software Engineer'],
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
          <Link to="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
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
                <p className="text-xl text-gray-700 mb-6">
                  {course.description}
                </p>

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

              <div className="bg-white rounded-xl p-6 shadow-xl h-fit">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{course.price}</div>
                  <div className="text-sm text-gray-600">Complete Course Fee</div>
                </div>

                <Link to="/contact" className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold mb-3">
                  Enroll Now
                </Link>
                <Link to="/contact" className="block w-full bg-white text-blue-600 text-center px-6 py-3 rounded-lg hover:bg-gray-50 transition border-2 border-blue-600 font-semibold">
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
                    <div key={index} className="border-2 border-gray-100 rounded-lg p-6 hover:border-blue-600 transition">
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
                <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">
                  {course.prerequisites}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Opportunities</h2>
                <div className="flex flex-wrap gap-3">
                  {course.careerOptions?.map((career: string, index: number) => (
                    <span key={index} className="bg-green-50 text-green-700 px-4 py-2 rounded-lg font-medium">
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
                <Link to="/contact" className="block w-full bg-blue-600 text-center px-4 py-2 rounded-lg hover:bg-blue-700 transition">
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
