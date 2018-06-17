
import { IBasicInfo } from './types';

export const model: IBasicInfo = {
  basic: {
    name: 'Mateusz Okulewicz',
    title: 'Full-stack developer',
    subtitle: 'node.js passionate'
  },
  contact: {
    email: 'momatoku@gmail.com',
    phoneNumber: '+61 449 182 543',
  },
  websites: {
    linkedIn: 'https://www.linkedin.com/in/mateusz-okulewicz',
    github: 'https://github.com/SirWojtek',
    stackOverflow: 'https://stackoverflow.com/users/8490932/sirwojtek'
  },
  workExperience: [
    {
      companyName: 'Citrus International',
      companyLogoUrl: 'assets/images/citrus.svg',
      position: 'Software Engineer',
      startDate: new Date(2017, 8),
      endDate: 'Present',
      description: [
      `
        The system helps to connect online retailers with product manufacturers. As an
        engineer, mainly responsible for design and implementation of the frontend of
        administration part includes wizards, reporting pages and user profile page - all in
        modern Angular 2 framework. Also involved in writing part of backend microservices
        using famous Java Spring framework and AWS infrastructure.
      `
      ]
    },
    {
      companyName: 'Gigaset Communications',
      companyLogoUrl: 'assets/images/gigaset.svg',
      position: 'Software Developer',
      startDate: new Date(2015, 10),
      endDate: new Date(2017, 5),
      description: [
        `
          Research and development logic of VoIP phone ("Maxwell 3"). I have to understand and
          enhance internal communication between software components and automatic update
          process. Also, write a small part of a graphical user interface using Qt framework.
        `,
        `
          A design of cordless VoIP system "Einstein 2". This project was starting from scratch
          and I have helped with the creation of system architecture based on MQTT and build
          system setup. Moreover, I was a person who implemented automatic update module.
        `,
        `
          Finally, I made part of system website mainly working with AngularJS framework in the
          frontend. I make couple pages which were responsible for changing system settings, for
          example, IP settings, LDAP settings, DECT communication settings.
        `
      ]
    },
    {
      companyName: 'Nokia',
      companyLogoUrl: 'assets/images/nokia.svg',
      position: 'Developer C/C++',
      startDate: new Date(2013, 12),
      endDate: new Date(2015, 10),
      description: [
        `
          Implementation and maintenance of feature for cellular phone base station (BTS) - part
          of software responsible for calculating antenna signal route through BTS during startup.
        `,
        `
          During first several months I was focused on implementing new features for LTE. After
          the successful introduction, I started finding and fixing bugs and taking part in the
          technical discussion with technical people from Finland, Germany, China and Philipines
          which greatly improves my technical language skills.
        `,
      ]
    },
    {
      companyName: 'Nokia',
      companyLogoUrl: 'assets/images/nokia.svg',
      position: 'Working Student',
      startDate: new Date(2013, 7),
      endDate: new Date(2013, 12),
      description: [
        `
        Working on tools helpful for development process:
        - customization of cpplint - coding guideline checker
        - script for automatic remove global "using namespace" from C header files
        - charts in R language for coding guideline errors visualization working with CI
        `
      ]
    },
  ],
  technicalSkills: {
    'Web Frontend': [
      {
        name: 'Angular',
        description: 'known also as Angular 2, Angular 4/5/6',
        level: 8
      },
      {
        name: 'Typescript',
        level: 8
      },
      {
        name: 'Javascript',
        level: 7
      },
      {
        name: 'Material',
        description: 'design and frontend frameworks',
        level: 7
      },
      {
        name: 'Bootstrap',
        description: 'worked with version 3',
        level: 7
      },
      {
        name: 'CSS3/LESS/SASS',
        level: 7
      },
      {
        name: 'HTML5',
        level: 7
      },
      {
        name: 'Angular.js',
        level: 6
      },
      {
        name: 'React',
        level: 4
      },
    ],
    'Web Backend': [
      {
        name: 'Node.js',
        level: 7
      },
      {
        name: 'Sequelize',
        description: 'Node.js ORM client',
        level: 7
      },
      {
        name: 'SQL',
        description: 'PostgreSQL, MySQL, SQLite',
        level: 6
      },
      {
        name: 'AWS Cloud',
        level: 6
      },
      {
        name: 'Spring Framework',
        level: 5
      },
      {
        name: 'GraphQL',
        description: 'with Node.js',
        level: 5
      },
      {
        name: 'Django',
        level: 4
      },
    ],
    'Communication': [
    ],
    'Testing': [
    ],
    'Tools': [
    ],
    'Workflow': [
    ],
    'Other': [
    ]
  }
};

