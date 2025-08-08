// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'only-as19',
  },
  
  base: '/myprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['only-as/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Asad Latif', description: 'My personal developer portfolio', imageURL: '' },
  social: {
    linkedin: 'www.linkedin.com/in/malik-asad-707b2726b',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', 
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    discord: '',
    telegram: '',
    website: '',
    phone: '+92 3364468583',
    email: 'hellohello51981@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
    'CSS',
    'Tailwind',
    'HTML',
    'BootStrap',
  ],
  experiences: [
    {
      company: 'Fiver',
      position: 'Front-End Developer',
      from: 'June 2023',
      to: 'July 2023',
      ProjectLink: 'https://example.com',
    },
    {
      company: 'University of Sialkot',
      position: 'Full Stack Developer',
      from: 'April 2025',
      to: 'July 2025',
      ProjectLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'FRONTEND DEVELOPER CAREER PATH',
      body: 'Extensive professional training program focused on modern front-end development, encompassing semantic HTML, advanced CSS, JavaScript fundamentals and ES6+, React framework development, responsive design methodologies, and core UI/UX design principles.',
      year: 'Aug 2025',
      link: 'https://scrimba.com/certificate-cert2uNjfKA21CNdNerFWS6U4aKZNSRCdoTvMLt',
    },
        {
      name: 'LEARN REACT',
      body: 'In-depth course on React fundamentals, covering component-based architecture, JSX, state and props management, event handling, conditional rendering, list rendering, hooks, and best practices for building dynamic, reusable, and maintainable user interfaces',
      year: 'Aug 2025',
      link: 'https://scrimba.com/certificate-cert2uNjfKA21CNdNerFWS6U3LQcxzSkfa7rTKN',
    },
    {
      name: 'LEARN TAILWIND CSS',
      body: 'Specialized training in utility-first CSS development using Tailwind CSS, including responsive design techniques, component styling, customization through configuration, theme management, and best practices for building modern, consistent, and maintainable user interfaces.',
      year: 'Aug 2025',
      link: 'https://scrimba.com/certificate-cert24zAwJ78oRsCTYa4P4XsjtHCgjq9wc8C1GkHJ',
    },
    {
      name: 'Respponsive Web Design',
      body: 'Comprehensive training in responsive web design principles, covering fluid layouts, flexible grids, media queries, and mobile-first development strategies to ensure optimal user experiences across a wide range of devices and screen sizes',
      year: 'May 2025',
      link: 'https://www.freecodecamp.org/certification/asad_19/responsive-web-design',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-LHEC7T8HS9', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
