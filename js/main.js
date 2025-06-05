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

const sections = [
  {
    title: $('.sectionTitle', 0),
    text: $('.sectionTitleText', 0),
    bar: $('.sectionTitleBar', 0),
  },
  {
    title: $('.sectionTitle', 1),
    text: $('.sectionTitleText', 1),
    bar: $('.sectionTitleBar', 1),
  },
  {
    title: $('.sectionTitle', 2),
    text: $('.sectionTitleText', 2),
    bar: $('.sectionTitleBar', 2),
  },
  {
    title: $('.sectionTitle', 3),
    text: $('.sectionTitleText', 3),
    bar: $('.sectionTitleBar', 3),
  },
  {
    title: $('.sectionTitle', 4),
    text: $('.sectionTitleText', 4),
    bar: $('.sectionTitleBar', 4),
  },
];

const experiences = [
  $('.expBlock', 0),
  $('.expBlock', 1),
  $('.expBlock', 2),
  $('.expBlock', 3),
  $('.expBlock', 4),
  $('.expBlock', 5),
  $('.expBlock', 6),
];

const educations = [
  $('.eduBlock', 0),
  $('.eduBlock', 1),
  $('.eduBlock', 2),
];

const projects = [
  $('.projBlock', 0),
  $('.projBlock', 1),
  $('.projBlock', 2),
  $('.projBlock', 3),
  $('.projBlock', 4),
  $('.projBlock', 5),
];

const publications = [
  $('.pubBlock', 0),
  $('.pubBlock', 1),
];

const contactButton = $('.contactButton');

const socialMedias = [
  $('.socialMedia', 0),
  $('.socialMedia', 1),
  $('.socialMedia', 2),
  $('.socialMedia', 3),
  $('.socialMedia', 4),
];

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