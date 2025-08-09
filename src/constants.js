// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";

import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import materialuiLogo from "./assets/tech_logo/materialui.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";

import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";

import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

import pandas from "./assets/tech_logo/pandas.png";
import pytorch from "./assets/tech_logo/pytorch.png";
import numpy from "./assets/tech_logo/numpy.png";
import scikitLearn from "./assets/tech_logo/scikit-learn.png";

// Education Section Logo's

import iiitsLogo from "./assets/education_logo/iiits.png";
import ratnaLogo from "./assets/education_logo/RatnaJunior.png";
import goodwillLogo from "./assets/education_logo/GoodWill.png";

// Project Section Logo's
import heartLogo from "./assets/work_logo/heartDieasePrediction.jpeg";
import cifarLogo from "./assets/work_logo/cifar10project.png";
import brainLogo from "./assets/work_logo/braintumorclassificationproject.jpg";

import swipeLogo from "./assets/work_logo/swipeProject.png";

import chasingLogo from "./assets/work_logo/chasingLogo.png";

import networkxLogo from "./assets/work_logo/networkx.png";

import rhynoLogo from "./assets/work_logo/RhynoProject.png";

import backroadsLogo from "./assets/work_logo/backroads.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },

      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },

      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },

      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },

      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
  {
    title: "ML & DL ",
    skills: [
      { name: "PyTorch", logo: pytorch },
      { name: "Scikit Learn", logo: scikitLearn },
      { name: "Pandas", logo: pandas },
      { name: "numpy", logo: numpy },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: iiitsLogo,
    school: "Indian Institute of Information Technology, Sri City",
    date: "Sept 2023 - June 2027",
    grade: "8.5 CGPA (ongoing)",
    desc: "Currently pursuing B.Tech in Computer Science and Engineering at IIIT Sri City. I'm exploring core areas including Machine Learning, Deep Learning, Data Structures & Algorithms, and Full Stack Development. Being part of research-driven and innovation-focused campus, I'm actively working on AI-based projects and contribute to open source and technical communities.",
    degree: "B.Tech in Computer Science and Engineering",
  },
  {
    id: 1,
    img: ratnaLogo,
    school: "Ratna Junior College, Narayanguda, Hyderabad",
    date: "June 2021 - May 2023",
    grade: "98.5%",
    desc: "Completed Intermediate (IPE) with MPC stream under the Telangana State Board of Intermediate Education. Built strong foundation in Mathematics, Physics, and Chemistry while also developing interest in Computer Science and logical reasoning.",
    degree: "Intermediate (MPC), IPE Board",
  },
  {
    id: 2,
    img: goodwillLogo,
    school: "Good Will Model High School, Begum Bazar, Hyderabad",
    date: "Till May 2021",
    grade: "10 GPA",
    desc: "Completed SSC under the Telangana State Board. Excelled academically and developed early interest in coding, problem-solving, and logical thinking. Participated in science exhibitions and computer olympiads.",
    degree: "Secondary School Certificate (SSC)",
  },
];
export const projects = [
  {
    id: 0,
    title: "Heart Disease Prediction",
    description:
      "A deep learning-based application that predicts the presence and severity of heart disease using clinical parameters from the UCI dataset. The model classifies severity from 0 to 4, aiding early diagnosis and treatment planning.",
    image: heartLogo,
    tags: ["Deep Learning", "PyTorch", "UCI Dataset", "Classification"],
    github: "https://github.com/Meghana-Kuruva/Heart-Disease-Prediction.git",
    webapp: "",
  },
  {
    id: 1,
    title: "CIFAR-10 Image Classifier",
    description:
      "A convolutional neural network built in PyTorch that classifies images from the CIFAR-10 dataset into ten categories. Achieves strong accuracy using data augmentation and regularization techniques.",
    image: cifarLogo,
    tags: ["CNN", "PyTorch", "Image Classification", "CIFAR-10"],
    github: "https://github.com/Meghana-Kuruva/CIFAR-10.git",
    webapp: "",
  },
  {
    id: 2,
    title: "Brain Tumor Detection",
    description:
      "A medical imaging project experimented using improved sparrow search algorithm .",
    image: brainLogo,
    tags: ["Deep Learning", "Medical Imaging", "PyTorch", "CNN"],
    github: "https://github.com/Meghana-Kuruva/Brain-tumor-classification.git",
    webapp: "",
  },
  {
    id: 3,
    title: "Swipe (Tinder Clone)",
    description:
      "A full-stack real-time dating app clone with swiping functionality, authentication, chat, and cloud image upload. Built using React, Node.js, Express, MongoDB, and Socket.io.",
    image: swipeLogo,
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Cloudinary"],
    github: "https://github.com/Meghana-Kuruva/tinderclone.git",
    webapp: "https://tinderclone-ten.vercel.app",
  },
  {
    id: 4,
    title: "Chasing Horizons",
    description:
      "An immersive travel blog and itinerary website showcasing travel destinations and experiences. Built with React and animated UI for a storytelling experience.",
    image: chasingLogo,
    tags: ["React", "Framer Motion", "CSS", "Responsive Design"],
    github: "https://github.com/ROHINSAI/FFSD-sem4.git",
    webapp: "",
  },
  {
    id: 5,
    title: "NetworkX Visualizer",
    description:
      "It is an real time  Chat application where people can find there people with similar interest .",
    image: networkxLogo,
    tags: ["React", "NetworkX", "Flask", "Graph Algorithms", "Python"],
    github: "https://github.com/vitesh-reddy/Networx.git",
    webapp: "",
  },
  {
    id: 6,
    title: "Rhyno EV Website",
    description:
      "Frontend for Rhyno's electric vehicle brand, showcasing products, purchase features, and user dashboards. Designed for performance and brand impact using Tailwind and Vite. Currently working on this project ",
    image: rhynoLogo,
    tags: ["React", "Tailwind CSS", "Vite", "Responsive UI"],
    github: "https://github.com/Meghana-Kuruva/RHYNO-EV__Project.git",
    webapp: "",
  },
  {
    id: 7,
    title: "Backroads Travel Site",
    description:
      "A responsive travel service website allowing users to browse curated tours, destinations, and bookings. Developed using React and Tailwind CSS.",
    image: backroadsLogo,
    tags: ["HTML", " CSS ", "Java Script ", "Responsive Design "],
    github: "https://github.com/Meghana-Kuruva/TourProject.git",
    webapp: "https://meghana-kuruva.github.io/TourProject/",
  },
];
