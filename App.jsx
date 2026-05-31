
import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <h1>My Portfolio</h1>
        <p>React Developer | Learner</p>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          Hello! I am a passionate learner interested in web development and
          React. I love building simple and user-friendly applications.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Calculator App</h3>
          <p>Simple calculator using HTML, CSS and JavaScript.</p>
        </div>
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>Personal portfolio built using React.</p>
        </div>
      </section>

      <section className="section">
        <h2>Contact</h2>
        <p>Email: abc@gmail.com</p>
        <p>Phone: +91 9876543210</p>
      </section>

      <footer className="footer">
        <p>© 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
