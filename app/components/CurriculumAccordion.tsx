"use client";

import { useState, type KeyboardEvent, type MouseEvent } from "react";

type CurriculumModule = {
  index: string;
  title: string;
  summary: string;
  topics: string[];
};

export function CurriculumAccordion({ modules }: { modules: CurriculumModule[] }) {
  const [openModules, setOpenModules] = useState<string[]>(modules[0] ? [modules[0].index] : []);

  const toggleModule = (index: string) => {
    setOpenModules((current) => current.includes(index)
      ? current.filter((item) => item !== index)
      : [...current, index]);
  };

  const handleClick = (event: MouseEvent<HTMLElement>, index: string) => {
    event.preventDefault();
    toggleModule(index);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index: string) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleModule(index);
  };

  return (
    <div className="curriculum-accordion" data-reveal="stagger">
      {modules.map((module) => {
        const isOpen = openModules.includes(module.index);
        const panelId = `curriculum-panel-${module.index}`;
        return (
          <details key={module.index} open={isOpen}>
            <summary
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={(event) => handleClick(event, module.index)}
              onKeyDown={(event) => handleKeyDown(event, module.index)}
            >
              <span className="mono">MODULE {module.index}</span>
              <h3>{module.title}</h3>
              <b aria-hidden="true">{isOpen ? "−" : "+"}</b>
            </summary>
            <div id={panelId}>
              <p>{module.summary}</p>
              <ul>{module.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
            </div>
          </details>
        );
      })}
    </div>
  );
}
