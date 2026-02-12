import yam from "./images/yam.jpg";
import yami from "./images/yami.jpeg";
import Avatar1 from "./images/testimonial-avatars/avatar_1.jpg";
import Avatar2 from "./images/testimonial-avatars/avatar_2.jpg";
import Avatar3 from "./images/testimonial-avatars/avatar_3.jpg";
import Avatar4 from "./images/testimonial-avatars/avatar_4.jpg";

// Tech
import javascript from "./images/tech/js.png";
import react from "./images/tech/react.png";
import typescript from "./images/tech/typescript.png";
import python from "./images/tech/python.png";
import nodejs from "./images/tech/node-js.png";
import ruby from "./images/tech/ruby.png";
import cShatp from "./images/tech/c-sharp.png";
import html from "./images/tech/html-5.png";
import css from "./images/tech/css-3.png";
import mongodb from "./images/tech/mongodb.png";
import docker from "./images/tech/docker.png";
import git from "./images/tech/git.png";
import github from "./images/tech/github.png";

// Firmas
import squib from "./images/firma-logos/squib.png";
import qiibee from "./images/firma-logos/qiibee.png";
import mundus from "./images/firma-logos/mundus.png";
import famous from "./images/firma-logos/famous.png";
import alba from "./images/firma-logos/alba.jpeg";
import unesco from "./images/firma-logos/unesco.png";

// Schools
import brainnest from "./images/schools/brainnest.png";
import leWagon from "./images/schools/leWagon.png";
import constructorAca from "./images/schools/constructor1.jpeg";
import freeCodeCamp from "./images/schools/free_code_camp.png";
import udemy from "./images/schools/udemy.png";
import migros from "./images/schools/migros.png";
import havannaUni from "./images/schools/habanaUni.png";

// Projects
import port1 from "./images/projects/port_1.png";
import port2 from "./images/projects/port_2.png";
import port3 from "./images/projects/port_3.png";
import port4 from "./images/projects/port_4.png";

import googleMeet from "./images/meet.png";

interface IImage {
  [key: string]: string;
}

const images: IImage = {
  googleMeet,
  yam,
  yami,
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,

  javascript,
  react,
  typescript,
  python,
  nodejs,
  ruby,
  cShatp,
  html,
  css,
  mongodb,
  docker,
  git,
  github,

  squib,
  qiibee,
  mundus,
  famous,
  alba,
  unesco,

  brainnest,
  leWagon,
  constructorAca,
  freeCodeCamp,
  udemy,
  migros,
  havannaUni,

  port1,
  port2,
  port3,
  port4,
};

export default images;
