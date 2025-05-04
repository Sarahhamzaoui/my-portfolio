import React, { useContext } from "react";
import { VideoContext } from "../context/VideoContext";
import demoVideo from "../assets/work-demo.mp4"; // Place your video in /src/assets

function Projects() {
  const { likes, incrementLikes } = useContext(VideoContext);

  return (
    <section id="projects">
      <h2>My Work</h2>
      <video width="320" height="240" controls>
        <source src={demoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>Likes: {likes}</p>
      <button onClick={incrementLikes}>Like this project</button>
    </section>
  );
}

export default Projects;
