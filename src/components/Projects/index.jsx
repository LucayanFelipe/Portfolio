import React from 'react';
import './Projects.css';

const Projects = () => {
  
  const projects = [
    { name: 'Projeto em desenvolvimento com apoio ao IFRO', description: 'Do Sequencial ao Paralelo: Análise de Desempenho Computacional em Arquiteturas MIMD', link: '#' },
    { name: 'Projetos pessoais', description: 'lista simples de coisas a se fazer antes de morrer', link: 'https://lucayanfelipe.github.io/' },
    
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projetos</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Ver Projeto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;