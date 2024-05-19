import { AllContent } from '../assets/interfaces';

const commonSkills = [
  {
    key: 1,
    name: 'TypeScript',
    logo: 'https://skillicons.dev/icons?i=typescript',
  },
  {
    key: 2,
    name: 'React',
    logo: 'https://skillicons.dev/icons?i=react',
  },
  {
    key: 3,
    name: 'Node',
    logo: 'https://skillicons.dev/icons?i=nodejs',
  },
  {
    key: 4,
    name: 'CSS3',
    logo: 'https://skillicons.dev/icons?i=css',
  },
  {
    key: 5,
    name: 'HTML',
    logo: 'https://skillicons.dev/icons?i=html',
  },
  {
    key: 6,
    name: 'Docker',
    logo: 'https://skillicons.dev/icons?i=docker',
  },
  {
    key: 14,
    name: 'neovim',
    logo: 'https://skillicons.dev/icons?i=neovim'
  },
  {
    key: 7,
    name: 'MySQL',
    logo: 'https://skillicons.dev/icons?i=mysql',
  },
  {
    key: 13,
    name: 'PostgreSQL',
    logo: 'https://skillicons.dev/icons?i=postgresql'
  },
  {
    key: 8,
    name: 'Figma',
    logo: 'https://skillicons.dev/icons?i=figma',
  },
  {
    key: 10,
    name: 'Vite',
    logo: 'https://skillicons.dev/icons?i=vite',
  },
  {
    key: 11,
    name: 'Webpack',
    logo: 'https://skillicons.dev/icons?i=webpack',
  },
  {
    key: 12,
    name: 'Astro',
    logo: 'https://skillicons.dev/icons?i=astro',
  },
];

export const websiteContent: AllContent = {
  EN: {
    Navbar: {
      name: 'Archit Dharod',
    },
    MainSection: {
      title: 'Creator of Websites & Destroyer of Bugs',
      description:
        'Hello, I am a Robotics Engineer by education and Front-End Developer by profession (and passion!) As a developer born in India & made in Germany, I strive to harness the best of both worlds - and channel it to create interactive, creative and Fachgerecht digital experiences! ',
    },
    SkillSection: {
      title: 'Tools and Technology',
      description:
        'In addition to training in languages like C++ and Python in the University, I learnt a lot of these frameworks and technologies on the job to fullfill Project requirements in the best possible way. Many of these projects were fully managed, coordinated and sucessfully completed by me!',
      skills: commonSkills,
    },
    ProjectSection: {
      title: 'Projects',
      project: [
        {
          key: 1,
          title: 'Jasmine Fan Portfolio Website',
          thumbnail: './jf.webp',
          source: 'https://jasminefan.de/',
          description:
            "A captivating, fully responsive website for artist and festival director Jasmine Fan, designed using Astro.js with a mobile-first approach. The project demonstrates adaptability to distinct artistic styles and successful creation of a digital platform that embodies the client's vision.",
          skills: 'Astro.js, Typescript, HTML, CSS3, Figma',
        },
        {
          key: 2,
          title: 'Personal Portfolio Website Using React.js',
          thumbnail: './my-site.gif',
          source: 'https://github.com/architdharod/personal-website-react-ts',
          description:
            'A self-designed and coded portfolio website using React.js to showcase my front-end development skills. The source code for this website is available on my GitHub.',
          skills: 'TypeScript, React.js, HTML, CSS3, Vite, Figma, Docker',
        },
        {
          key: 3,
          title: 'Telephone and Chat Bots',
          thumbnail: './bot.png',
          source: '',
          description:
            'I designed and deployed an integrated solution that features an IVR telephone answering bot and a chatbot to automate redundant customer service tasks. Additionally, I built a REST API interface for these bots to retrieve relevant data from a data bank for the customer.',
          skills:
            'TypeScript, Node.js, node-ari-client, Asterisk, MySQL, Docker',
        },
        {
          key: 4,
          title: 'Customer Service Agent Performance Dashboard',
          thumbnail: './dashboard.webp',
          source: '',
          description:
            'Developed a dashboard using React.js and third-party API endpoints to monitor key performance metrics of Customer Service agents. The dashboard helped managers make data-driven decisions to improve agent efficiency and customer satisfaction.',
          skills: 'TypeScript, React.js',
        },
        {
          key: 5,
          title: 'Internal Website for ZF Friedrichshafen AG',
          thumbnail: './zf.gif',
          source: '',
          description:
            "This was the first ever website that I coded! Although made with just HTML and CSS, I really enjoyed making it user friendly and visually appealing - while keeping the theme consistant with ZF's design system. This website helped in making the onboarding process for new interns simpler.",
          skills: 'HTML, CSS, Bootstrap',
        },
      ],
      description: 'Send me an email and we can arrange a time to talk!',
      email: 'mail@dharod.de',
    },
    FooterSection: {
      cvButtonText: 'Get a free copy of my CV!',
      description:
        'Designed and coded by me (with a little help from my friends)',
      inspiration: 'Heavily inspired from ',
    },
  },
  DE: {
    Navbar: {
      name: 'Archit Dharod',
    },
    MainSection: {
      title: 'Erschaffer von Webseites & Zerstörer von Bugs',
      description:
        'Moin, ich bin ausgebildeter Robotik-Ingenieur und beruflich (und leidenschaftlich!) Front-End Entwickler. Als in Indien geborener und in Deutschland gemachter Entwickler strebe ich danach, das Beste aus beiden Welten zu vereinen - und es zu nutzen, um interaktive, kreative und fachgerechte digitale Erlebnisse zu schaffen!',
    },
    SkillSection: {
      title: 'Technologien',
      description:
        'Neben der akademischen Ausbildung in Sprachen wie C++ und Python an der Universität, habe ich auf dem Job viele dieser Frameworks und Technologien erlernt, um Projektanforderungen bestmöglich zu erfüllen. Viele dieser Projekte wurden vollständig von mir verwaltet, koordiniert und erfolgreich abgeschlossen!',
      skills: commonSkills,
    },
    ProjectSection: {
      title: 'Projekte',
      project: [
        {
          key: 1,
          title: 'Jasmine Fan Portfolio Website',
          thumbnail: './jf.webp',
          source: 'https://jasminefan.de/',
          description:
            'Eine eindrucksvolle, responsive Website für die Künstlerin und Festivaldirektorin Jasmine Fan, die mit Astro.js und einem Mobile-First-Ansatz entwickelt wurde. Das Projekt zeigt die Anpassungsfähigkeit an unterschiedliche künstlerische Stile und die erfolgreiche Schaffung einer digitalen Plattform, die die Vision des Kunden verkörpert.',
          skills: 'Astro.js, Typescript, HTML, CSS3, Figma',
        },
        {
          key: 2,
          title: 'Personal Portfolio Website Using React.js',
          thumbnail: './my-site.gif',
          source: 'https://github.com/architdharod/personal-website-react-ts',
          description:
            'Eine selbst konzipierte und mit React.js umgesetzte Portfolio-Website, um meine Kenntnisse im Bereich Frontend-Entwicklung zu visualisieren. Der Source Code für diese Website ist auf meiner GitHub-Seite verfügbar.',
          skills: 'TypeScript, React.js, HTML, CSS3, Vite, Figma, Docker',
        },
        {
          key: 3,
          title: 'Telephone and Chat Bots',
          thumbnail: './bot.png',
          source: '',
          description:
            'Entwicklung und Bereitstellung einer integrierten Lösung mit einem IVR-Telefonbeantwortungsbot und einem Chatbot, um redundante Kundendienstaufgaben zu automatisieren. Zudem habe ich eine REST-API-Schnittstelle für diese Bots entwickelt, um relevante Daten aus einer Datenbank für den Kunden abzurufen.',
          skills:
            'TypeScript, Node.js, node-ari-client, Asterisk, MySQL, Docker',
        },
        {
          key: 4,
          title: 'Customer Service Agent Performance Dashboard',
          thumbnail: './dashboard.webp',
          source: '',
          description:
            'Entwicklung eines Dashboards mit React.js und Drittanbieter-API-Endpunkten zur Überwachung wichtiger Leistungskennzahlen von Kundenservice-Agenten. Das Dashboard half Führungskräften, datengestützte Entscheidungen zu treffen, um die Effizienz der Mitarbeiter und die Kundenzufriedenheit zu verbessern.',
          skills: 'TypeScript, React.js',
        },
        {
          key: 5,
          title: 'Internal Website for ZF Friedrichshafen AG',
          thumbnail: './zf.gif',
          source: '',
          description:
            'Das war die allererste Website, die ich programmiert habe! Obwohl ich nur HTML und CSS verwendet habe, hat es mir wirklich Spaß gemacht, sie benutzerfreundlich und ästhetisch ansprechend zu gestalten - und dabei das Designsystem von ZF beizubehalten. Diese Website hat dazu beigetragen, den Einarbeitungsprozess für neue Praktikanten zu vereinfachen.',
          skills: 'HTML, CSS, Bootstrap',
        },
      ],
      description:
        'Senden Sie mir eine E-Mail und wir können einen Gesprächstermin vereinbaren!',
      email: 'mail@dharod.de',
    },
    FooterSection: {
      cvButtonText: 'kostenlose Kopie meines Lebenslaufs!',
      description:
        'Designed und entwickelt von mir ( mit einem Hauch von Unterstützung von Freunden).',
      inspiration: 'Inspiriert von ',
    },
  },
};
