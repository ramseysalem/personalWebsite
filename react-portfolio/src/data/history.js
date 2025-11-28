import pvIcon from "/assets/history/verisk.png";
import deltaSolutionsIcon from "/assets/history/deltaSolutions.png"
import knackIcon from "/assets/about/knack.png"

const history = [

    {
    role: "Software Engineering",
    organisation: "Verisk",
    startDate: "July 2025",
    endDate: "December 2025",
    experiences: [
    "Synthetic data research and developement for testing and modeling teams",
    "Creation of internal tool to deidentify sensitive information in huge datasets",
    "Automation of testing and data validation processes"
    ],
    imageSrc: pvIcon,
  }, 

  {
    role: "Data Engineer",
    organisation: "Delta Solutions",
    startDate: "June 2024",
    endDate: "August 2024",
    experiences: [
      "Increased leads on new properties by 19% with email automation",
      "Developed a PostgreSQL database to organize real estate leads.",
      "Created a Python-based data pipeline using Pandas to clean data."
    ],
    imageSrc: deltaSolutionsIcon,
  },
  {
    role: "Knack Tutor",
    organisation: "Northeastern",
    startDate: "December",
    endDate: "Present",
    experiences: [
      "Tutored students in Data Science and Algorithms",
      "Helped other students become tutors."
    ],
    imageSrc: knackIcon,
  }
];

export default history;
