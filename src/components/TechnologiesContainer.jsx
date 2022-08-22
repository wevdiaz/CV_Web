import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiGit,
  DiReact
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Conhecimento intermediário, semântico, modal" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Conhecimento Médio -flex, grid, Media query" },
  { id: "js", name: "Javascript", icon: <DiJsBadge />, description: "Variavéis, funções, classes,estruturas de dados, Promises" },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Conhecimento básico, pacotes npm, servidor, api, banco de dados" },
  { id: "git", name: "Git", icon: <DiGit />, description: "Conhecimento em comandos básico, commits, github, merge" },
  { id: "react", name: "React", icon: <DiReact />, description: "Conhecimento básico, componentes, hooks, api, props" }
];

export function TechnologiesContainer() {
  return(
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {
          technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>
                {tech.description}
                </p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}