// Data.jsx
import DockerMicroservices from '../pages/projects/DockerMicroservices/DockerMicroservices'
import JavaFieryDragons from '../pages/projects/JavaFieryDragons/JavaFieryDragons'
import ReactFrontend from '../pages/projects/ReactFrontend/ReactFrontend'
import SwiftPhotocard from '../pages/projects/SwiftPhotocard/SwiftPhotocard'



// Projects Data
import dockerIcon from '../assets/docker.svg';
import reactIcon from '../assets/react.svg';
import swiftIcon from '../assets/swift.svg';
import javaIcon from '../assets/java.svg';

export const projects = [
  { id: "docker-microservices", title: "Docker Microservices", icon: dockerIcon, description: "A cheap alternative of running web applications by leveraging Docker Compose", page: <DockerMicroservices/>},
  { id: "react-frontend", title: "React Frontend Webapp", icon: reactIcon, description: "A minimalistic developer portfolio, built using React.js", page: <ReactFrontend/>},
  { id: "swift-photocard", title: "iOS K-Pop Photocard Collection App", icon: swiftIcon, description: "An iOS application for the management of K-Pop Photocards", page: <SwiftPhotocard/>},
  { id: "java-fierydragons", title: "Java Fiery Dragons Board Game", icon: javaIcon, description: "A Java application for playing the Fiery Dragons Board Game", page: <JavaFieryDragons/>},
];

// Skills Data
export const skills = [
  { name: "Web Development", technologies: ["React.js","JavaScript","HTML","CSS"]},
  { name: "Databases",technologies: ["PostgreSQL","Oracle SQL"]},
  { name: "Cloud Technologies",technologies: ["Azure","Terraform"]},
  { name: "Version Control",technologies: ["Git", "Azure DevOps", "GitHub Repos", "GitLab Repos"]},
  { name: "CI/CD Tools",technologies: ["Azure DevOps Pipelines", "GitHub Actions", "GitHub Packages", "JFrog Artifactory", "SonarQube"]},
  { name: "Operating Systems",technologies: ["Windows","Linux","MacOS","iOS"]},
  { name: "Containerisation",technologies: ["Docker","Docker Compose"]},
  { name: "Server Backend Technologies",technologies: ["Nginx","Namecheap", "Infoblox", "Venafi"]},
  { name: "Scripting Languages",technologies: ["Python","Bash"]},
  { name: "Programming Languages",technologies: ["Java","C","Swift"]},
  { name: "API Development & Integration",technologies: ["Flask","FastAPI","RESTful APIs"]},
  { name: "Operational Tools",technologies: ["Jira","Confluence","Teams","Slack","PowerBI", "ServiceNow"]},
];

export default {
  projects,
  skills,
};