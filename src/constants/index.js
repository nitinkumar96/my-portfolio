import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    figma,
    pclub,
    panjab,
    dic,
    gdsc,
    medichain,
    c,
    cplusplus,
    java,
    python,
    mysql,
    handgesture,
    solvemydoubt,
    linkedin,
    github,
    leetcode,
    codeforces,
  } from "../assets";
  
  export const navIcons = [
    { text: 'github', icon: github, url: 'https://github.com/nitinkumar96' },
    { text: 'linkedin', icon: linkedin, url: 'https://www.linkedin.com/in/nitinkumar96/' },
    { text: 'codeforces', icon: codeforces, url: 'https://codeforces.com/profile/nitinkumar96' },
    { text: 'leetcode', icon: leetcode, url: 'https://leetcode.com/pointbreak96/' },
  ];

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Competitive Programmer",
      icon: mobile,
    },
    {
      title: "Video Editor",
      icon: backend,
    },
    {
      title: "Creative Design",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cplusplus,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: mysql,
    },
    {
      name: "Figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Coordinator, Full Stack Developer",
      company_name: "Panjab University",
      icon: panjab,
      iconBg: "#383E56",
      date: "May 2023 - Dec 2023",
      points: [
        "Led a proficient team of 20 MERN developers in building a robust PhD Portal for Panjab University",
        "Designed and developed front-end for portal using ReactJS, delivering an engaging user experience",
        "Seamlessly integrated back-end functionalities, resulting in a 40% reduction in manual administrative tasks",
      ],
    },
    {
      title: "Machine Learning Intern",
      company_name: "Design Innovation Center, Panjab University",
      icon: dic,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Jan 2023",
      points: [
        "Built a CNN model to classify and segment brain tumors in 10000+ MRI scans using ML/DL techniques",
        "Reached 92% accuracy and 0.85 Dice coefficient for brain tumor identification in medical images",
      ],
    },
    {
      title: "CP / DSA Lead",
      company_name: "Google Developer Students Club",
      icon: gdsc,
      iconBg: "#383E56",
      date: "Jan 2023 - Dec 2023",
      points: [
        "Guided DSA bootcamps, elevating coding skills and problem-solving for 100+ students",
      ],
    },
    {
      title: "Core Member, Design Head",
      company_name: "Programming Club, UIET",
      icon: pclub,
      iconBg: "#1f1f1f",
      date: "Nov 2021 - Dec 2023",
      points: [
        "Organized Goonj & Software Freedom Day events, and spearheaded club design initiatives",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Medichain",
      description:
        "A Blockchain based Personal Health Record Management System for securely managing the PHRs of all the users while also allowing the interoperability between different users such as Patient - Doctor - Hospital",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: medichain,
      source_code_link: "https://github.com/Tech-MANiacs/blockchain-phr",
    },
    {
      name: "Hand Gesture Recognition",
      description:
        "A real-time hand gesture recognition system using CNN to predict ASL alphabets",
      tags: [
        {
          name: "machinelearning",
          color: "blue-text-gradient",
        },
        {
          name: "deeplearning",
          color: "green-text-gradient",
        },
      ],
      image: handgesture,
      source_code_link: "https://github.com/nitinkumar96/hand-gesture-recognition",
    },
    {
      name: "Solve My Doubt",
      description:
        "To facilitate mentor-mentee interactions for academic support and doubt clearing within the college community",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: solvemydoubt,
      source_code_link: "https://github.com/Tech-MANiacs/solve-my-doubt",
    },
  ];
  
  export { services, technologies, experiences, projects };