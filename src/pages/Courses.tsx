import { Code, Database, Brain, CheckCircle, Layout, Smartphone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Courses() {
  const courses = [
  {
    name: 'Python Full Stack',
    icon: <Code className="w-12 h-12" />,
    slug: 'python-fullstack',
    topics: ['Python Basics', 'OOP', 'Django/Flask', 'React/Frontend', 'MySQL'],
    description: 'Become a full-stack Python developer with both backend and frontend skills.'
  },
  {
    name: 'Java Full Stack',
    icon: <Code className="w-12 h-12" />,
    slug: 'java',
    topics: ['Core Java', 'Spring Boot', 'React JS', 'MySQL'],
    description: 'Become a full-stack developer with expertise in Java backend and React frontend.'
  },
  {
    name: 'Data Science',
    icon: <Database className="w-12 h-12" />,
    slug: 'data-science',
    topics: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization'],
    description: 'Learn to analyze data and build predictive models using cutting-edge tools.'
  },
  {
    name: 'Software Testing',
    icon: <CheckCircle className="w-12 h-12" />,
    slug: 'testing',
    topics: ['Manual Testing', 'Automation', 'Selenium', 'API Testing'],
    description: 'Learn comprehensive testing strategies for web and mobile applications.'
  },
  {
    name: 'MERN Stack Development',
    icon: <Code className="w-12 h-12" />,
    slug: 'mern',
    topics: ['MongoDB', 'Express', 'React', 'Node.js'],
    description: 'Master the complete MERN stack and build scalable full-stack applications.'
  },
  {
    name: 'Mobile App Development',
    icon: <Smartphone className="w-12 h-12" />,
    slug: 'mobile',
    topics: ['React Native', 'Flutter', 'Android', 'iOS'],
    description: 'Create cross-platform mobile applications for Android and iOS.'
  },
  {
    name: 'DevOps Engineering',
    icon: <Database className="w-12 h-12" />,
    slug: 'devops',
    topics: ['Docker', 'Kubernetes', 'CI/CD', 'AWS/Azure'],
    description: 'Learn DevOps practices and tools to streamline software development lifecycle.'
  },
];


  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Training Programs</span>
            </h1>
            <p className="text-xl text-gray-600">
              Industry-relevant courses designed to make you job-ready with expert guidance and hands-on projects
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-600 hover:shadow-xl transition group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition">{course.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, idx) => (
                      <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/courses/${course.slug}`}
                  className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Details <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Not Sure Which Course to Choose?
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              Our career counselors are here to help you find the perfect course based on your goals and experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-center font-semibold">
                Get Free Counseling
              </Link>
              <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition border-2 border-blue-600 text-center font-semibold">
                Download Syllabus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
