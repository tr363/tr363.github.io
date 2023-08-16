import React, { useState } from 'react';
import './Project.css';

function Project() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Real-Time Road Sign Detection, Recognition, and Driver Guidance System",
      date: "APRIL 2023",
      description: "Developed a system using YOLOv7 and a two-layer neural network for real-time road sign detection and recognition with high accuracy.",
      image: "path_to_image1.jpg" // Replace with your image path
    },
    {
      title: "News Classifier using Kafka",
      date: "FEB 2023",
      description: "Real-time news classification system to classify articles into different categories using NLP and ML algorithms. Utilized Kafka to consume, classify, and store news articles in real-time.",
      image: "path_to_image2.jpg" // Replace with your image path
    },
    {
      title: "AI-Powered Environmental Adaptive Assistant for the Visually Impaired",
      date: "DEC 2022",
      description: "AI-driven solution utilizing YOLOv5, empowers visually impaired individuals with enhanced mobility and safety by providing real-time object detection, recognition, and audio guidance for obstacle-free navigation.",
      image: "path_to_image3.jpg" // Replace with your image path
    },
    {
      title: "Cloud-based e-commerce application using flutter and firebase",
      date: "OCT 2021 - JUNE 2022",
      description: "Created a full-featured Flutter application with Firebase backend services, incorporating authentication, authorization, and in-app purchases.",
      image: "path_to_image4.jpg" // Replace with your image path
    },
    {
      title: "Software for polyclinic in python",
      date: "NOV 2021",
      description: "Developed a web application to manage appointments, prescriptions, and billing for a polyclinic.",
      image: "path_to_image5.jpg" // Replace with your image path
    }
  ];

  return (
    <div>
      <h2 style={{ color: '#59E2C5' }}>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="card project-box">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="card-content">
              {project.title} - {project.date}
            </div>
            <div className="card-action">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
