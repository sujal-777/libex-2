import React from "react";
import { Star, CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { Check } from "lucide-react";
import CourseCards from "../components/CourseCards";

const CourseDetails = () => {
  const courseDataa = [
    {
      id: "ui-ux",
      title: "The Complete UI/UX Designer Course",
      instructor: {
        img: "/Images/jonathan.jpeg",
        img1: "/Images/UI.jpeg",
        name: "Jonathan Carter",
        role: "UX Designer",
        experience: "8 Years",
        students: 180,
        rating: "4.56",
        reviews: 36,
        bio: "Jonathan is a seasoned UI/UX Designer with over 8 years of experience crafting intuitive and visually compelling digital interfaces. He specializes in user-centered design, blending creativity with functionality to enhance user engagement. His expertise spans web and mobile applications, delivering solutions that align seamlessly with client goals.",
      },
      courseInfo: {
        level: "Expert",
        duration: "09h 30m",
        lessons: 20,
        students: 180,
        certifications: "Yes",
        language: "English",
        price: 19999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      overview: {
        part1:
          "Our Web Development course is designed to transform beginners into professional developers with industry-ready skills. Covering both front-end and back-end development, the program includes modules on HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB. With hands-on projects, you'll build real-world applications, gaining the confidence to tackle complex web solutions.",
        part2:
          "Led by industry expert instructors, the course ensures students stay updated with the latest trends and tools in web development. You'll learn best practices for responsive design, performance optimization, and secure coding standards.",
        part3:
          "A foundational understanding of technology and a passion for learning are all you need to start your journey in web development. No prior coding experience is required, but familiarity with basic computer operations is helpful",
        requirements: [
          "A Laptop or Desktop",
          "Basic Computer Skills",
          "Time Commitment",
          "Willingness to Learn",
        ],
      },
    },
    {
      id: "webdev",
      title: "The Complete Web Development Course",
      instructor: {
        img: "/Images/Nandha.png",
        img1: "/Images/wd.png",
        name: "Nandha Kishore",
        role: "Web Developer",
        experience: "10 Years",
        students: 185,
        rating: "4.54",
        reviews: 36,
        bio: "Our industry expert instructors bring years of professional experience in web development, ensuring you learn from the best. They specialize in modern frameworks like React, Node.js, and more, delivering practical insights alongside technical knowledge. Their mentorship includes hands-on guidance, project reviews, and tailored feedback to help you excel.",
      },
      courseInfo: {
        level: "Expert",
        duration: "8h 30m",
        lessons: 15,
        students: 120,
        certifications: "Yes",
        language: "English",
        price: 15999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      overview: {
        part1:
          "Our Web Development course is designed to transform beginners into professional developers with industry-ready skills. Covering both front-end and back-end development, the program includes modules on HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB. With hands-on projects, you'll build real-world applications, gaining the confidence to tackle complex web solutions.",
        part2:
          "Led by industry expert instructors, the course ensures students stay updated with the latest trends and tools in web development. You'll learn best practices for responsive design, performance optimization, and secure coding standards.",
        part3:
          "A foundational understanding of technology and a passion for learning are all you need to start your journey in web development. No prior coding experience is required, but familiarity with basic computer operations is helpful",
        requirements: [
          "A Laptop or Desktop",
          "Basic Computer Skills",
          "Time Commitment",
          "Willingness to Learn",
        ],
      },
    },
    {
      id: "data-science",
      title: "The Complete Data Science Course",
      instructor: {
        img: "/Images/ramesh.jpeg",
        img1: "/Images/DS.jpeg",
        name: "Ramesh Yadav",
        role: "Data Analyst",
        experience: "12 Years",
        students: 180,
        rating: "4.54",
        reviews: 36,
        bio: "Udex's expert instructors in data analysis bring extensive industry experience and cutting-edge knowledge to the classroom. These professionals guide learners through practical projects, real-world case studies, and advanced analytical tools. Their mentorship ensures students gain job-ready skills and excel in dynamic data roles.",
      },
      courseInfo: {
        level: "Expert",
        duration: "10h 30m",
        lessons: 20,
        students: 190,
        certifications: "Yes",
        language: "English",
        price: 17999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      overview: {
        part1:
          "Our Web Development course is designed to transform beginners into professional developers with industry-ready skills. Covering both front-end and back-end development, the program includes modules on HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB. With hands-on projects, you'll build real-world applications, gaining the confidence to tackle complex web solutions.",
        part2:
          "Led by industry expert instructors, the course ensures students stay updated with the latest trends and tools in web development. You'll learn best practices for responsive design, performance optimization, and secure coding standards.",
        part3:
          "A foundational understanding of technology and a passion for learning are all you need to start your journey in web development. No prior coding experience is required, but familiarity with basic computer operations is helpful",
        requirements: [
          "Basic understanding of mathematics and statistics",
          "Familiarity with programming languages such as Python",
          "Knowledge of database management systems and SQL",
          "Access to a computer with internet for online resources and software tools",
        ],
      },
      curriculum: {
        sectionTitle: "Introduction To Data",
        lessons: [
          {
            title: "Data Base and process",
            duration: "5.00 Min",
            completed: true,
          },
          {
            title: "Statistics",
            duration: "13.00 Min",
            completed: true,
          },
          {
            title: "Machine Learning",
            duration: "12.00 Min",
            completed: true,
          },
          {
            title: "Visualization",
            duration: "15.00 Min",
            completed: true,
          },
          {
            title: "Data Mining",
            duration: "11.00 Min",
            completed: true,
          },
        ],
      },
      reviews: {
        totalReviews: 2,
        reviewsList: [
          {
            name: "Chance Mango",
            date: "March 20, 2024",
            comment:
              "Libex's hands-on approach and expert instructors helped me land my dream job in Data Analyst i gain more skills .Thank you soo mcuh",
            rating: 5,
          },
          {
            name: "Desirae Donin",
            date: "June 10, 2024",
            comment:
              "Libex's hands-on approach and expert instructors helped me land my dream job in Data Analyst i gain more skills .Thank you soo mcuh",
            rating: 5,
          },
        ],
      },
    },
    {
      id: "artificial-intelligence",
      title: "The Complete Artificial Intelligence Course",
      instructor: {
        img: "/Images/john.jpeg",
        img1: "/Images/ai1.jpeg",
        name: "Dr. John",
        role: "Chief AI Scientist",
        experience: "15 Years",
        students: 180,
        rating: "4.54",
        reviews: 36,
        bio: "Dr. John Smith is a renowned expert in Artificial Intelligence, currently serving as the Chief AI Scientist at Tech Innovations Inc. With over 15 years of experience, he has contributed extensively to advancements in machine learning and natural language processing. Dr. Smith has authored numerous influential papers and is a sought-after speaker at international AI conferences.",
      },
      courseInfo: {
        level: "Expert",
        duration: "10h 30m",
        lessons: 20,
        students: 190,
        certifications: "Yes",
        language: "English",
        price: 19999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },

      // requirements: [
      //   "Basic Programming Skills",
      //   "Mathematical Knowledge",
      //   "Analytical Thinking",
      //   "Access to Tools"
      // ],
      // description: "Artificial Intelligence (AI) is a transformative field of computer science that enables machines to simulate human intelligence. This course provides an in-depth understanding of core AI concepts, including machine learning, natural language processing, computer vision, and robotics. Students will explore algorithms, data-driven decision-making, and ethical considerations in AI development. Through hands-on projects and real-world applications, learners will gain practical skills to design and implement intelligent systems."
    },
    {
      id: "java",
      title: "The Complete Java Course",
      instructor: {
        img: "/Images/john.jpeg",
        img1: "/Images/java.jpeg",
        name: "John Doe",
        role: "Java Software Engineer",
        experience: "10 Years",
        students: 180,
        rating: "4.56",
        reviews: 36,
        bio: "John Doe is a seasoned Java Software Engineer with over 10 years of experience in developing robust and scalable applications. He specializes in object-oriented design, microservices architecture, and optimizing code performance. His expertise lies in building enterprise-grade solutions while maintaining high coding standards and best practices.",
      },
      courseInfo: {
        level: "Expert",
        duration: "10h 30m",
        lessons: 20,
        students: 190,
        certifications: "Yes",
        language: "English",
        price: 18999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      // requirements: [
      //   "Familiarity with basic computer operations",
      //   "Access to a computer with Java Development Kit (JDK) and IDE",
      //   "An understanding of basic math concepts like variables and logic",
      //   "Commitment to practice coding exercises and assignments regularly"
      // ],
      // description: "The Java Programming course is designed to provide a comprehensive introduction to one of the most widely used programming languages. This course covers core concepts such as object-oriented programming, data structures, and multithreading, while also exploring advanced topics like Java frameworks and APIs. Participants will gain hands-on experience through practical coding exercises, real-world projects, and debugging techniques."
    },
    {
      id: "python",
      title: "The Complete Python Course",
      instructor: {
        img: "/Images/harish.jpeg",
        img1: "/Images/python.jpeg",
        name: "Dr. Harish",
        role: "Lead Python Developer",
        experience: "8 Years",
        students: 180,
        rating: "4.56",
        reviews: 36,
        bio: "Dr. Harish is a seasoned Python developer with over 10 years of experience in building robust applications. He specializes in machine learning, data analytics, and software architecture. His expertise extends to optimizing code for performance and scalability in large-scale systems.",
      },
      courseInfo: {
        level: "Expert",
        duration: "09h 30m",
        lessons: 20,
        students: 180,
        certifications: "Yes",
        language: "English",
        price: 18999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      // requirements: [
      //   "Basic Computer Skills",
      //   "No Prior Coding Knowledge",
      //   "Software Setup",
      //   "Motivation to Practice"
      // ],
      // description: "The Python Programming course is designed to equip learners with a solid foundation in one of the most versatile and widely-used programming languages. This course covers essential topics including Python syntax, data types, control structures, functions, and modules. Students will also explore advanced concepts such as file handling, object-oriented programming, and working with libraries like NumPy and Pandas."
    },
    {
      id: "cybersecurity",
      title: "The Complete Cyber Security Course",
      instructor: {
        img: "/Images/rajesh.jpeg",
        img1: "/Images/CYBER.jpeg",
        name: "Dr. Rajesh",
        role: "Cybersecurity Expert",
        experience: "15 Years",
        students: 180,
        rating: "4.54",
        reviews: 36,
        bio: "Dr. Rajesh is a seasoned cybersecurity professional with over 15 years of experience in securing enterprise networks and systems. He specializes in threat intelligence, incident response, and risk management. His expertise in developing robust security strategies has helped organizations mitigate potential cyber threats and protect sensitive data.",
      },
      courseInfo: {
        level: "Expert",
        duration: "10h 30m",
        lessons: 20,
        students: 190,
        certifications: "Yes",
        language: "English",
        price: 19999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
    },
    {
      id: "machine-learning",
      title: "The Complete Machine Learning Course",
      instructor: {
        img: "/Images/smith.jpeg",
        img1: "/Images/ML.jpeg",
        name: "Dr. John Smith",
        role: "Senior Machine Learning Engineer",
        experience: "10 Years",
        students: 180,
        rating: "4.56",
        reviews: 36,
        bio: "Dr. John Smith is an expert in machine learning and artificial intelligence with over 10 years of experience in developing cutting-edge algorithms for predictive analytics and natural language processing. He has led several high-impact projects in both the tech and healthcare sectors. His work focuses on advancing the capabilities of AI models to improve decision-making and automation processes.",
      },
      courseInfo: {
        level: "Expert",
        duration: "09h 30m",
        lessons: 20,
        students: 180,
        certifications: "Yes",
        language: "English",
        price: 18999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
    },
  ];

  const reviews = [
    {
      src: "https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
      name: "Kevin Martin",
      Date: "March 20,2024",
    },
    {
      src: "https://images.unsplash.com/photo-1734533992947-44970e6e5010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sarah Aibert",
      Date: "June 10,2024",
    },
  ];

  const courseItems = [
    {
      title: "Introduction to JavaScript, Run JavaScript in VSCode",
      duration: "5.00 Min",
      completed: true,
    },
    {
      title: "What is variable, five things you need to declare a variable",
      duration: "13.00 Min",
      completed: true,
    },
    {
      title: "Variable type, Numeric, String, Boolean",
      duration: "12.00 Min",
      completed: true,
    },
    {
      title: "Simple Mathematical operations in JavaScript",
      duration: "15.00 Min",
      completed: true,
    },
    {
      title: "(advanced) Mathematical operation shorthand",
      duration: "11.00 Min",
      completed: true,
    },
  ];

  const { courseid } = useParams();
  const courseData = courseDataa.find((course) => course.id === courseid);

  if (!courseData) {
    return <div className="text-center">Course not found</div>;
  }

  const { title, instructor, courseInfo } = courseData;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const CustomTabPanel = ({ children, value, index }) => {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    value: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Header Section */}
      <div className="bg-gray-300 h-80 flex flex-col justify-center items-center text-center">
        <div className="bg-white rounded-2xl p-3">
          <div className="text-orange-400 font-bold">OUR COURSES: {title}</div>
        </div>
        <div className="text-2xl font-semibold mt-2">{title}</div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-8">
        {/* Left Section */}
        <div className="lg:w-3/4">
          <div className="text-3xl font-bold mb-5">{title}</div>

          <div className="flex flex-wrap items-center gap-4 text-lg mb-5">
            <div className="flex items-center gap-2">
              <img
                src={instructor.img}
                alt="Instructor"
                className="h-12 w-12 rounded-full"
              />
              <div>{instructor.name}</div>
            </div>
            <div>{courseInfo.classes} Classes</div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" /> {courseInfo.rating} (
              {courseInfo.reviews} Reviews)
            </div>
          </div>

          <img
            src={instructor.img1}
            alt="Course Banner"
            className="rounded-lg w-full object-cover mb-5"
          />

          <Tabs value={value} onChange={handleChange} aria-label="Course Tabs">
            <Tab label="Overview" />
            <Tab label="Curriculum" />
            <Tab label="Reviews" />
          </Tabs>

          <CustomTabPanel value={value} index={0}>
            <Typography>{courseData.overview.part1}</Typography>
            <Typography>{courseData.overview.part2}</Typography>
            <div>
              <div className="font-bold text-4xl mt-6 my-3 text-gray-800">
                Requirements For The Course
              </div>
              <div className="text-gray-400 text-lg">
                <div className="mb-4">{courseData.overview.part3}</div>
                {courseData.overview.requirements.map((req, index) => (
                  <div key={index}>✔️ {req}</div>
                ))}
              </div>
            </div>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <div className="space-y-4">
              {courseItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-gray-700">{item.title}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-purple-600 bg-purple-50 px-3 py-1 rounded-full text-sm">
                      {item.duration}
                    </span>
                    {item.completed && <Check className="text-purple-600" />}
                  </div>
                </div>
              ))}
            </div>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <div>
              <h1 className="font-semibold text-2xl mb-4">
                {reviews.length} Reviews
              </h1>
              {reviews.map((r, i) => (
                <div key={i} className="flex gap-4 mb-5">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={r.src}
                    alt="Reviewer"
                  />
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-gray-500">{r.Date}</div>
                    <div className="mt-2 text-gray-700">{r.comment}</div>
                    <div className="flex text-yellow-500 mt-2">
                      {[...Array(5)].map((_, index) => (
                        <Star key={index} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CustomTabPanel>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/4 border border-gray-200 p-5 rounded-lg">
          <div className="text-center font-bold mb-5">Course Includes:</div>
          {Object.entries(courseInfo).map(([key, value]) => (
            <div key={key} className="flex justify-between py-2">
              <span className="font-semibold capitalize">{key}:</span>
              <span>{value}</span>
            </div>
          ))}
          <button
            className="bg-blue-500 text-white w-full py-3 mt-5 rounded-lg"
            onClick={() => (window.location.href = "/payment")}
          >
            Enroll Now - ₹{courseInfo.price.toFixed(2)}
          </button>
        </div>
      </div>

      {/* Instructor Section */}
      <div className="flex justify-center mt-20">
        <div className="flex flex-col sm:flex-row w-full lg:w-3/4 gap-6 p-6 border border-gray-200 rounded-lg">
          {/* Instructor Image */}
          <img
            src={instructor.img}
            alt="Instructor"
            className="h-48 w-48 rounded-lg object-cover mx-auto sm:mx-0"
          />
          {/* Instructor Details */}
          <div className="text-center sm:text-left">
            <h1 className="text-xl font-bold mt-4 sm:mt-0">
              {instructor.name}
            </h1>
            <div className="text-sm text-gray-500 mb-3">{instructor.role}</div>
            {/* Bio shown beneath the image for mobile */}
            <div className="text-gray-700 mb-3">{instructor.bio}</div>
            <div className="flex flex-col sm:flex-row gap-4 text-gray-500 justify-center sm:justify-start">
              <div>Experience: {instructor.experience}</div>
              <div>{instructor.students} Students</div>
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400" /> {instructor.rating} (
                {instructor.reviews} Reviews)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col items-center mt-20 gap-6">
        <div className="text-orange-500 font-bold">OUR COURSES</div>
        <div className="text-3xl font-bold">
          Our Most Popular <span className="text-cyan-400">Courses</span>
        </div>
        <CourseCards />
        <br /><br /><br />
      </div>
    </div>
  );
};

export default CourseDetails;
