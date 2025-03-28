/************************** Resume Generator ***************************/

class ProfessionalExperience {
  constructor(_name, _startPeriod, _endPeriod, _stack) {
    this.name = _name;
    this.startPeriod = _startPeriod;  
    this.endPeriod = _endPeriod;      
    this.stack = _stack;
  }
}

const experienceData = [
  new ProfessionalExperience(
    "xmobots",    
    new Date('2024-02-01'),
    new Date(),
    [ 
    	'Java',
      'Spring Boot',
      'React',
      'HTML5/CSS3',
      'JavaScript',
      'TypeScript',
      'ArcGIS',
      'SQL',
      'Git',
      'Docker',
      ],
  ),
  new ProfessionalExperience(
    "codex",
    new Date('2020-11-01'),
    new Date('2023-11-30'),
    [
    	'Java',
      'Kotlin',
      'Spring Boot',
      'React',
      'HTML5/CSS3',
      'JavaScript',
      'TypeScript',
      'ArcGIS',
      'SQL',
      'Git',
    ],
  ),
  new ProfessionalExperience(
    "cobmais",
    new Date('2019-10-01'),
    new Date('2020-11-30'),
    [
    	'C#',
      'HTML5/CSS3',
      'JavaScript',
      'jQuery',
      'SQL',
      'Git',
    ],
  ),
  new ProfessionalExperience(
    "expert",
    new Date('2018-10-01'),
    new Date('2019-09-30'),
    [
    	'C#',
      'Java',
      'Kotlin',
      'SQL',
      'Git',
    ],
  ),
  new ProfessionalExperience(
    "cebrac",
    new Date('2017-06-01'),
    new Date('2018-04-30'),
    [
    	'HTML5/CSS3',
      'Java',
      'JavaScript',
    ],
  ),
  new ProfessionalExperience(
    "ufscar",
    new Date('2014-03-01'),
    new Date('2017-02-28'),
    [
    	'MATLAB',
      'Digital Image Processing',
    ],
  ),
  new ProfessionalExperience(
    "codex",
    new Date('2012-10-01'),
    new Date('2014-02-28'),
    [
    	'HTML5/CSS3',
      'JavaScript',
      'jQuery',
      'PHP',
      'WordPress',
      'SQL',
    ],
  ),
];

const myTechStack = () => {
	const yearDuration = 1000 * 60 * 60 * 24 * 365;
	const techSkills = new Map();

  experienceData.forEach((experience) => {
    const yearsSpent = (experience.endPeriod - experience.startPeriod) / yearDuration;

		experience.stack.forEach((tech) => {
      if (techSkills.has(tech)) {
      	techSkills.set(tech, techSkills.get(tech) + yearsSpent);
      } else {
      	techSkills.set(tech, yearsSpent);
      }
    });
  });

	const sortedTechUsage = Array.from(techSkills.entries()).sort((a, b) => b[1] - a[1]);

  console.log('===== Stack Usage by Years (Descending Order) =====');

	sortedTechUsage.forEach(([skill, years]) => {
    console.log(`-- ${skill}: ${Math.floor(years)} year(s)`);    
  });
};