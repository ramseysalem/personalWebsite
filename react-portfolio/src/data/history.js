import pvIcon from "/assets/history/pleasantValley.png";
import deltaSolutionsIcon from "/assets/history/deltaSolutions.png"
import knackIcon from "/assets/about/knack.png"

const history = [
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
  },
  {
    role: "Outdoor Operations",
    organisation: "Pleasant Valley Country Club",
    startDate: "Apr, 2020",
    endDate: "Present",
    experiences: [
    "Seasonal outdoor operations employee at Pleasant Valley Country Club in Sutton, MA.",
    "I focus on providing exceptional customer service and building great relationships with the members.",
    "Duties include valet service, club maintenance, and bag room management."
    ],
    imageSrc: pvIcon,
  }
];

export default history;
