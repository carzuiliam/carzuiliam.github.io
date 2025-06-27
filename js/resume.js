/************************* Resume information **************************/

class TechExperience {
  constructor(_name, _isProfessional, _startPeriod, _endPeriod, _stack, ) {
    this.name = _name;
    this.isProfessional = _isProfessional;
    this.startPeriod = _startPeriod;  
    this.endPeriod = _endPeriod;      
    this.stack = _stack;
  }
}

const experienceData = [
  // Professional
  new TechExperience(
    "XMOBOTS",
    true,
    new Date('2024-02-01'),
    new Date(),
    [ 
    	'Java',
      'SpringBoot',
      'React',
      'HtmlCss',
      'Javascript',
      'Typescript',
      'ArcGIS',
      'SQL',
      'RabbitMQ',
      'Docker',
      'Git',
      'ElasticStack',
    ],
  ),
  new TechExperience(
    "Codex",
    true,
    new Date('2020-11-01'),
    new Date('2023-11-30'),
    [
    	'Java',
      'Kotlin',
      'SpringBoot',
      'React',
      'HtmlCss',
      'Javascript',
      'Typescript',
      'ArcGIS',
      'SQL',
      'Git',
    ],
  ),
  new TechExperience(
    "Cobmais",
    true,
    new Date('2019-10-01'),
    new Date('2020-11-30'),
    [
    	'CSharp',
      'HtmlCss',
      'Javascript',
      'JQuery',
      'SQL',
      'Git',
      'ElasticStack',
    ],
  ),
  new TechExperience(
    "Expert",
    true,
    new Date('2018-10-01'),
    new Date('2019-09-30'),
    [
    	'CSharp',
      'Java',
      'Kotlin',
      'SQL',
      'Git',
    ],
  ),
  new TechExperience(
    "CEBRAC",
    true,
    new Date('2017-06-01'),
    new Date('2018-04-30'),
    [
    	'HtmlCss',
      'Java',
      'Javascript',
    ],
  ),  
  new TechExperience(
    "UFSCar",
    true,
    new Date('2014-03-01'),
    new Date('2017-02-17'),
    [
    	'Matlab',
      'Skill',
    ],
  ),
  new TechExperience(
    "LuzPropria360",
    true,
    new Date('2012-10-01'),
    new Date('2014-02-28'),
    [
    	'HtmlCss',
      'Javascript',
      'JQuery',
      'PHP',
      'WordPress',
      'SQL',
    ],
  ),
  // Education
  new TechExperience(
    "PUCMinas",
    false,
    new Date('2025-06-01'),
    new Date(),
    [
    	'Skill',
      'AWS',
      'Azure',
      'GCP',
    ],
  ),
  new TechExperience(
    "UNESP",
    false,
    new Date('2009-03-01'),
    new Date('2013-12-10'),
    [
      'C',
      'Java',
      'SQL',
      'Skill',
    	'Skill',
    ],
  ),
];

/*************************** Resume mapping ****************************/

const getResumeMap = () => {
  const yearDuration = 1000 * 60 * 60 * 24 * 365;
  const techSkillsMap = new Map();
  const formattedMap = new Map();

  experienceData.forEach((experience) => {    
    const yearsSpent = experience.isProfessional ?
      (experience.endPeriod - experience.startPeriod) / yearDuration :
      0;

    experience.stack.forEach((tech) => {
      if (techSkillsMap.has(tech)) {
        techSkillsMap.set(tech, techSkillsMap.get(tech) + yearsSpent);
      } else {
        techSkillsMap.set(tech, yearsSpent);
      }
    }); 
  });

  techSkillsMap.forEach((years, tech) => {
    const wholeYears = Math.floor(years);

    if (tech === 'Skill') {
      formattedMap.set(tech, 'Soft Skill');
    } else if (wholeYears == 0) {
      formattedMap.set(tech, 'Hands-on Experience');
    } else if (wholeYears <= 1) {
      formattedMap.set(tech, '1 year');
    } else {
      formattedMap.set(tech, `${wholeYears} years`);
    }    
  });

  return formattedMap;
};