const projectAImage = "/assets/projects/threeTrios.png";
const projectBImage = "/assets/projects/spotify.png";
const projectCImage = "/assets/projects/LSTMPicture.png";
const projectDImage = "/assets/projects/selection.png";
const projectEImage = "/assets/projects/fireClaim.png";

const projects = [

  {
    title: "Selection",
    imageSrc: projectDImage,
    description: "Outfit selection application that helps users pick outfits based on weather and occasion.",
    skills: ["Typescript", "Node.js", "Postgres", "AWS", "OpenAI API"],
    source: "https://www.github.com"
  }, 

  {
    title: "Three Trios Game",
    imageSrc: projectAImage,
    description: "Three Trios Interactive Game, P v P or P v AI",
    skills: ["Java", "Github", "OOD", "IntelliJ"],
    source: "https://www.github.com"
  },
  {
    title: "Spotify Splitter",
    imageSrc: projectBImage,
    description: "Full stack app with intergrated ML to create playlists based off of liked songs.",
    skills: ["Python", "SQL", "Javascript", "Flask"],
    source: "https://www.github.com"
  },
  {
    title: "Stock Prediction Model",
    imageSrc: projectCImage,
    description: "Long-Short Term Memory stock prediction Model",
    skills: ["Python", "SQL", "Streamlit"],
    source: "https://www.github.com"
  },
  
  {
    title: "Fire Claim",
    imageSrc: projectEImage,
    description: "Currently a work in progress, uses computer vision to help people affected by fire damages to claim" + 
    " items with more ease",
    skills: ["Python", "Javascript", "React", "SQL", "MongoDB"],
    source: "https://www.github.com"
  }

];

export default projects;
