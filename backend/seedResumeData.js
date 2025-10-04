const mongoose = require('mongoose');
const Resume = require('./models/Resume');

const mongoURI = 'mongodb://localhost:27017/resumeDB';

const sampleResumeData = {
  personalDetails: {
    name: "PRASAD BARGAL",
    title: "Full Stack Developer",
    email: "prasadbargal11@gmail.com",
    phone: "+91 7378404032",
    location: "Sangamner"
  },
  skills: [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "React",
    "Express.js",
    "Node.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Postman"
  ],
  summary: "To secure a Full Stack Developer role where I can apply my React.js and MERN stack skills, utilize my IT diploma from Amrutvahini Polytechnic, and build impactful solutions. Experienced intern at Sumago Pvt. Ltd. with a live e-commerce website project.",
  experience: [
    {
      startDate: "Jun 2025",
      endDate: "Aug 2025",
      title: "Full Stack Development Internship",
      company: "Sumago Pvt. Ltd., Nashik",
      description: "Built responsive UI components using React.js and integrated them with backend APIs. Learnt real-world development workflows, including Git version control and deployment practices. Collaborated with senior developers to debug and optimize code for performance and scalability. Conceptualized and developed features for a live e-commerce shopping website project."
    }
  ],
  education: [
    {
      startYear: "2023",
      endYear: "2026",
      degree: "Diploma in Information Technology",
      institution: "Amrutvahini Polytechnic, Sangamner",
      percentage: "76.00%"
    }
  ],
  achievements: [
    "Developed a full-stack e-commerce site using MERN stack with user auth and product features.",
    "Interned at Sumago Pvt. Ltd., Nashik on live projects.",
    "Maintaining GitHub portfolio with multiple apps.",
    "Quick learner exploring new tech and workflows."
  ],
  hobbies: [
    "Portfolio & Personal Branding"
  ],
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/prasadbargal/" },
    { platform: "Linkedin", url: "https://www.linkedin.com/in/prasad-bargal-7a7a4b1b7/" }
  ]
};

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('MongoDB connected for seeding data');

  await Resume.deleteMany({});
  const resume = new Resume(sampleResumeData);
  await resume.save();

  console.log('Sample resume data inserted');
  mongoose.disconnect();
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
