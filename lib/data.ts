import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaChalkboardTeacher, FaLaptopCode, FaPython, FaReact, FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aasmatechImg from "@/public/aasmatech.png";
import satelliteAnalysisImg from "@/public/PV.png";
import cpuSimulatorImg from "@/public/cpuScheduling.png";
import sparkFoodDelivery from "@/public/sparkFoodDelivery.png";
import genAILLMImg from "@/public/genAILLMImg.png"
import asuccessful from "@/public/asu-ccessfulMatch.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Teaching Fellow – Computer Information Systems",
    location: "Arizona State University, Tempe, AZ",
    description:
      "Conducting instructional sessions on AWS Cloud Foundations for high school students across the U.S. under the National Education Equity Lab (NEEL) initiative and fostering engagement in cloud computing fundamentals.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "July 2025 – Present",
  },
  {
    title: "Teaching Aide - Physics Lab",
    location: "Arizona State University, Tempe, AZ",
    description:
      "Currently managing laboratory operations, assisting students in understanding physics concepts and lab techniques, and providing constructive feedback on lab reports.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "August 2024 - May 2025",
  },
  {
    title: "Website Development Intern",
    location: "Aasma Technology Solutions, Ahmedabad, India",
    description:
      "Worked with AasmaTech during my final year Internship where I designed and developed the company's website using React.js and Node.js",
    icon: React.createElement(FaLaptopCode),
    date: "January 2024 - June 2024",
  },
  {
    title: "Software Development Intern",
    location: "Capgemini, Gandhinagar, India",
    description:
      "Collaborated on building a Python library using Flask for ABHA APIs, enabling secure handling of medical health records in compliance with healthcare protocols.",
    icon: React.createElement(FaPython),
    date: "June 2023 - July 2023",
  },
  {
    title: "Backend Development Intern",
    location: "Gainserv Technologies, Surat, India",
    description:
      "Developed dynamic web pages using EJS templates, integrated MongoDB databases and implemented user authentication.",
    icon: React.createElement(FaServer),
    date: "May 2022 - July 2022",
  },
] as const;

export const projectsData = [
  {
    title: "ASU-ccessful-Match",
    description:
      "Peer-learning platform using Zoom API for automated study session creation with personalized matching, one-click scheduling, and resource sharing.",
    tags: ["EdTech", "Zoom API", "Automation", "Peer Learning"],
    imageUrl: asuccessful,
    link: "https://asu-ccessful-match.vercel.app/"
  },
  {
    title: "GenAI-LLM Email Generator",
    description:
      "A generative AI tool for automating personalized email creation using LangChain, Groq LLM, and ChromaDB, achieving 80% reduction in drafting time.",
    tags: ["AI", "NLP", "LangChain", "Groq LLM", "ChromaDB"],
    imageUrl: genAILLMImg,
    link: "https://github.com/Jem1D/GenAI-LLM-email-generator"
  },
  {
    title: "Review Analysis of Food Delivery Apps",
    description:
      "Analyzed 1.6M Google Play Store reviews for DoorDash, Uber Eats, and Grubhub using Apache Spark on Databricks.",
    tags: ["Apache Spark", "Databricks", "AWS S3", "SparkSQL", "Visualization"],
    imageUrl: sparkFoodDelivery,
    link: "https://databricks-prod-cloudfront.cloud.databricks.com/public/4027ec902e239c93eaaa8714f173bcfc/1567321552716792/4456928712193064/7280967672729326/latest.html"
  },
  {
    title: "Aasmatech Website",
    description:
      "I developed the official website for Aasmatech during my internship. The site facilitates scalable content management and showcases the company’s services effectively.",
    tags: ["React.js", "Node.js", "Git", "Contentful", "Vercel", "Agile"],
    imageUrl: aasmatechImg,
    link: "https://aasmatech.com/"
  },
  {
    title: "Photovoltaic Satellite Image Analysis",
    description:
      "A deep learning framework using U-Net for pixel-level segmentation and ResNet18 for binary classification on photovoltaic satellite imagery.",
    tags: ["Python", "Deep Learning", "U-Net", "ResNet18", "AI"],
    imageUrl: satelliteAnalysisImg,
    link: "/"
  },
  {
    title: "CPU Scheduling Algorithm Simulator",
    description:
      "A web-based simulator for visualizing CPU scheduling algorithms. Includes Gantt Chart visualizations and key performance metrics computation.",
    tags: ["Algorithm", "OS", "JavaScript", "React.js", "Chart.js"],
    imageUrl: cpuSimulatorImg,
    link: "https://github.com/Jem1D/CpuScheduling-Simulation"
  },
] as const;

export const skillsData = [
  "Python",
  "C++",
  "JAVA",
  "Langchain",
  "Databricks",
  "CI/CD pipelines",
  "HTML",
  "JavaScript",
  "TypeScript",
  "REST APIs",
  "React",
  "Express",
  "Next.js",
  "Node.js",
  "Flask",
  "Git",
  "MongoDB",
  "MySQL",
  "AWS",
  "Google Colaboratory",
  "Apache Spark",
  "Docker",
  "MS Office",
  "VMWare Workstation",
  "Agile"
] as const;
