/************************* Resume information **************************/

const Stacks = Object.freeze({
  ARCGIS: 'ArcGIS',
  AZURE: 'Azure',
  GCP: 'GCP',
  AWS: 'AWS',
  C: 'C',
  CSHARP: 'CSharp',
  DOCKER: 'Docker',
  ELASTIC_STACK: 'ElasticStack',
  GIT: 'Git',
  HTML_CSS: 'HtmlCss',
  JAVA: 'Java',
  JAVASCRIPT: 'Javascript',
  JQUERY: 'JQuery',
  KOTLIN: 'Kotlin',
  MATLAB: 'Matlab',
  PHP: 'PHP',
  RABBITMQ: 'RabbitMQ',
  REACT: 'React',
  SPRING_BOOT: 'SpringBoot',
  SQL: 'SQL',
  TYPESCRIPT: 'Typescript',
  WORDPRESS: 'WordPress',
  SKILL: 'Skill',
});

/************************** Data Classes **************************/

class TechExperience {
  constructor(_name, _isProfessional, _startPeriod, _endPeriod, _stack) {
    this.name = _name;
    this.isProfessional = _isProfessional;
    this.startPeriod = _startPeriod;
    this.endPeriod = _endPeriod;
    this.stack = _stack;
  }
}

/*************************** Experience Data ****************************/

const experienceData = [
  // Professional
  new TechExperience(
    "XMOBOTS",
    true,
    new Date('2024-02-01'),
    new Date('2025-10-20'),
    [
      Stacks.JAVA,
      Stacks.SPRING_BOOT,
      Stacks.REACT,
      Stacks.HTML_CSS,
      Stacks.JAVASCRIPT,
      Stacks.TYPESCRIPT,
      Stacks.ARCGIS,
      Stacks.SQL,
      Stacks.RABBITMQ,
      Stacks.DOCKER,
      Stacks.GIT,
      Stacks.ELASTIC_STACK,
    ],
  ),
  new TechExperience(
    "Codex",
    true,
    new Date('2020-11-01'),
    new Date('2023-11-30'),
    [
      Stacks.JAVA,
      Stacks.KOTLIN,
      Stacks.SPRING_BOOT,
      Stacks.REACT,
      Stacks.HTML_CSS,
      Stacks.JAVASCRIPT,
      Stacks.TYPESCRIPT,
      Stacks.ARCGIS,
      Stacks.SQL,
      Stacks.GIT,
    ],
  ),
  new TechExperience(
    "Cobmais",
    true,
    new Date('2019-10-01'),
    new Date('2020-11-30'),
    [
      Stacks.CSHARP,
      Stacks.HTML_CSS,
      Stacks.JAVASCRIPT,
      Stacks.JQUERY,
      Stacks.SQL,
      Stacks.GIT,
      Stacks.ELASTIC_STACK,
    ],
  ),
  new TechExperience(
    "Expert",
    true,
    new Date('2018-10-01'),
    new Date('2019-09-30'),
    [
      Stacks.CSHARP,
      Stacks.JAVA,
      Stacks.KOTLIN,
      Stacks.SQL,
      Stacks.GIT,
    ],
  ),
  new TechExperience(
    "CEBRAC",
    true,
    new Date('2017-06-01'),
    new Date('2018-04-30'),
    [
      Stacks.HTML_CSS,
      Stacks.JAVA,
      Stacks.JAVASCRIPT,
    ],
  ),
  new TechExperience(
    "UFSCar",
    true,
    new Date('2014-03-01'),
    new Date('2017-02-17'),
    [
      Stacks.MATLAB,
      Stacks.SKILL,
    ],
  ),
  new TechExperience(
    "LuzPropria360",
    true,
    new Date('2012-10-01'),
    new Date('2014-02-28'),
    [
      Stacks.HTML_CSS,
      Stacks.JAVASCRIPT,
      Stacks.JQUERY,
      Stacks.PHP,
      Stacks.WORDPRESS,
      Stacks.SQL,
    ],
  ),
  // Education
  new TechExperience(
    "PUCMinas",
    false,
    new Date('2025-06-01'),
    new Date(),
    [
      Stacks.SKILL,
      Stacks.AWS,
      Stacks.AZURE,
      Stacks.GCP,
    ],
  ),
  new TechExperience(
    "UNESP",
    false,
    new Date('2009-03-01'),
    new Date('2013-12-10'),
    [
      Stacks.C,
      Stacks.JAVA,
      Stacks.SQL,
      Stacks.SKILL,
    ],
  ),
];

/*************************** Resume mapping ****************************/

const getResumeMap = () => {
  const yearDuration = 1000 * 60 * 60 * 24 * 365;
  const techSkillsMap = new Map();
  const formattedMap = new Map();

  experienceData.forEach((experience) => {
    const yearsSpent = experience.isProfessional
      ? (experience.endPeriod - experience.startPeriod) / yearDuration
      : 0;

    experience.stack.forEach((tech) => {
      techSkillsMap.set(tech, (techSkillsMap.get(tech) || 0) + yearsSpent);
    });
  });

  techSkillsMap.forEach((years, tech) => {
    const wholeYears = Math.floor(years);
    if (tech === Stacks.SKILL) {
      formattedMap.set(tech, 'Soft Skill');
    } else if (wholeYears === 0) {
      formattedMap.set(tech, 'Hands-on Experience');
    } else if (wholeYears === 1) {
      formattedMap.set(tech, '1 year');
    } else {
      formattedMap.set(tech, `${wholeYears} years`);
    }
  });

  return formattedMap;
};
