/****************************** Variables ******************************/

const introText = 
  'I am a fullstack developer from Brazil. ' + 
  'Nice to meet you! 😀';

const banner = {
  art: $('.bannerArt'),
  content: $('.bannerContent'),
  name: $('.bannerName'),
  text: $('.bannerText'),
  blocks: [
    $('.bannerBlock1'),
    $('.bannerBlock2'),
    $('.bannerBlock3'),
    $('.bannerBlock4'),
    $('.bannerBlock5'),
    $('.bannerBlock6'),
  ],
  images: [
    $('.bannerImage1'),
    $('.bannerImage2'),
    $('.bannerImage3'),
    $('.bannerImage4'),
    $('.bannerImage5'),
  ]
};

const introBlock = $('.introBlock');

const sectionTitles = $$('.sectionTitle');
const sectionTexts = $$('.sectionTitleText');
const sectionBars = $$('.sectionTitleBar');
const sections = [];

for (let i = 0; i < sectionTitles.length; i++) {
  sections.push({
    title: sectionTitles[i],
    text: sectionTexts[i],
    bar: sectionBars[i],
  })
}

const experiences = $$('.expBlock');
const educations = $$('.eduBlock');
const publications = $$('.pubBlock');
const projects = [...$$('.projBlock'), $('.projViewMore')];

const contactButton = $('.contactButton');
const socialMedias = $$('.socialMedia');

const skillsTags = $$('.tagBlock');
const techSkillsMap = getResumeMap();

/**************************** Window events ****************************/

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
}

window.onload = () => {
  setTimeout(() => { 
    banner.name.replaceClass('hiddenElem', 'visibleElem');
  }, 0);

  setTimeout(() => { 
    banner.blocks[0].replaceClass('slideHidden', 'slideShow');
    banner.blocks[5].replaceClass('slideHidden', 'slideShow');
  }, 200);
    
  setTimeout(() => { 
    banner.blocks[1].replaceClass('slideHidden', 'slideShow');
    banner.blocks[4].replaceClass('slideHidden', 'slideShow');
  }, 400);

  setTimeout(() => {
    banner.blocks[2].replaceClass('slideHidden', 'slideShow');
    banner.blocks[3].replaceClass('slideHidden', 'slideShow');
  }, 600);

  setTimeout(() => {
    banner.images[0].replaceClass('hiddenElem', 'visibleElem');
  }, 1000);
  
  setTimeout(() => {
    banner.images[1].replaceClass('hiddenElem', 'visibleElem');
  }, 1100);

  setTimeout(() => {
    banner.images[2].replaceClass('hiddenElem', 'visibleElem');
  }, 1200);

  setTimeout(() => {
    banner.images[3].replaceClass('hiddenElem', 'visibleElem');
  }, 1300);

  setTimeout(() => {
    banner.images[4].replaceClass('hiddenElem', 'visibleElem');
  }, 1400);  

  setTimeout(() => {    
    runTypingEffect(banner.text, introText); 
  }, 1500);
};

window.onscroll = () => {
  sections.forEach((section) => {
    if (section.title.isOnScreen()) {
      section.text.replaceClass('hiddenElem', 'visibleElem');
      section.bar.replaceClass('slideHidden', 'slideShow');
    }
  });

  if (introBlock.isOnScreen()) {
    introBlock.replaceClass('hiddenElem', 'visibleElem');
  }

  experiences.forEach((experience) => {
    if (experience.isOnScreen()) {
      experience.replaceClass('hiddenElem', 'visibleElem');
    }
  });

  educations.forEach((education) => {
    if (education.isOnScreen()) {
      education.replaceClass('hiddenElem', 'visibleElem');
    }
  });

  projects.forEach((project) => {
    if (project.isOnScreen()) {
      project.replaceClass('hiddenElem', 'visibleElem');
    }
  });

  publications.forEach((publication) => {
    if (publication.isOnScreen()) {
      publication.replaceClass('hiddenElem', 'visibleElem');
    }
  });

  if (contactButton.isOnScreen()) {
    contactButton.replaceClass('hiddenElem', 'visibleElem');
  }

  socialMedias.forEach((socialMedia) => {
    if (socialMedia.isOnScreen()) {
      socialMedia.replaceClass('hiddenElem', 'visibleElem');
    }
  });
};

/************************** Components events **************************/

banner.content.onMouseMove((event) => {
  banner.images.forEach((image, index) => {    
    const factorX = (index + 1) * 60;
    const factorY = (index + 1) * 80;
    const threshold = index <= banner.images.length * .5 ? -1 : 1; 

    const value1X = event.pageX * threshold / factorX;
    const value1Y = event.pageY * threshold / factorY;

    image.getCssStyle().removeProperty('transition');
    image.getCssStyle().transform = `translate3d(${value1X}px, ${value1Y}px, 0)`;
  });
});

skillsTags.forEach((tag) => {
  tag.onMouseOver((event) => {
    const classes = tag.element.className.split(' ');
    const techClass = classes.find(c => c.startsWith('tag') && c !== 'tagBlock');
    
    if (!techClass) {
      return;
    }

    const techName = techClass.replace('tag', '');

    if (!techSkillsMap.has(techName)) {
      return;
    }

    tag._tooltip = buildToolTip(techSkillsMap.get(techName), event);

    skillsTags.forEach((other) => {
      const otherClasses = other.element.className.split(' ');
      const otherTechClass = otherClasses.find(c => c.startsWith('tag') && c !== 'tagBlock');
      const otherTechName = otherTechClass ? otherTechClass.replace('tag', '') : '';

      if (otherTechName !== techName) {
        other.element.style.opacity = '0.2';
      }
    });
  });

  tag.onMouseOut(() => {
    if (tag._tooltip) {
      tag._tooltip.remove();
      tag._tooltip = null;
    }

    skillsTags.forEach((other) => {
      other.element.style.opacity = '1';
    });
  });
});


