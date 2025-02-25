import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js'
, 'C#', 'mySQL', 'C'];

  return (
    <section id="skills" className="skills">
      <h2>Habilidades</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;