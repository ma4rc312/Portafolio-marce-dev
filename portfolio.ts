import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  // FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Marce Lucio',
  title: "Hi",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with Laravel, Angular, React.js, Next.js and android whit java, kotlin",
  resumeLink:
    'https://drive.google.com/file/d/1NJL3Rwe8UdMzA7pGFvj5qaiMfCWiL-hG/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'ma4rc312',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/marcela-lucio-b52ab5260',
  github: 'https://github.com/ma4rc312',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Full Stack developer passionate about exploring various technologies in the world of development.',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive progressive web applications (PWA) in React.js. I have developed applications for React with authentication, access control and permissions.'
        ),
        // emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Creation of RESTful API Node.js, Laravel, Java using Frameworks such as Next.js, React, Angular etc.'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },

        {
          skillName: 'Yarn',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        // emoji(
        //   '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        // ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        // {
        //   skillName: 'Azure',
        //   iconifyTag: 'logos:microsoft-azure',
        // },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Linux',
          iconifyTag: 'logos:linux-tux',
        },
        // {
        //   skillName: 'Cloudinary',
        //   iconifyTag: 'logos:cloudinary',
        // },
        // {
        //   skillName: 'Nginx',
        //   iconifyTag: 'logos:nginx',
        // },
        // {
        //   skillName: 'Sentry',
        //   iconifyTag: 'logos:sentry-icon',
        // },
      ],
    },
//     {
//       title: 'Blockchain',
//       lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
//       skills: [
//         emoji(
//           '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
//         ),
//         emoji(
//           '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
//         ),
//         emoji(
//           '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
//         ),
//         emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
//         emoji(
//           '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
//         ),
//       ],
//       softwareSkills: [
//         {
//           skillName: 'Ethereum',
//           iconifyTag: 'logos:ethereum',
//         },
//         {
//           skillName: 'Solidity',
//           iconifyTag: 'logos:solidity',
//         },
//         {
//           skillName: 'Web3js',
//           iconifyTag: 'logos:web3js',
//         },
//         {
//           skillName: 'Metamask',
//           iconifyTag: 'logos:metamask-icon',
//         },
//         {
//           skillName: 'Ganache',
//           iconifyTag: 'logos:ganache-icon',
//         },
//       ],
//     },
 ],
 };

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'SENA',
    subHeader: 'Technologist in Analysis and Development of Information Systems',
    duration: 'July 2021 - November 2022',
    desc: 'Member in a web and mobile application called beeApp',
    grade: 'Grade A',
    descBullets: [
      'Java languages ​​used on mobile devices in Laravel web by services',
      'Frameworks boostrap authentication with laravel auth',
      'Database with mysql',

    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Full-Stack',
    company: 'Sena software factory',
    companyLogo: '/img/icons/common/Recurso 9.png',
    date: 'Feb 2023 – Aug 2023',
    desc: 'Work as a full-stack developer to build and design SENA benefits applications in a web-based application called SIGPA (Information System for Management and Programming Environments), GPF (Training Project Management) for multiple applications using Bootstrap, jQuery, Chart.js and some other libraries also do security testing and documentation..',
  },
  // {
  //   role: 'API Engineer',
  //   company: 'Duseca Software',
  //   companyLogo: '/img/icons/common/dusecaSoftware.jpg',
  //   date: 'Jan 2022 – Mar 2022',
  //   desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
  //   // descBullets: [
  //   // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
  //   // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  //   // ],
  // },
  // {
  //   role: 'Full Stack Developer',
  //   company: 'Bleed-AI',
  //   companyLogo: '/img/icons/common/bleedAI.jpg',
  //   date: 'Sept 2021 - Oct 2021',
  //   desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
  // },
  // {
  //   role: 'Backend Developer',
  //   company: 'Wapidu',
  //   companyLogo: '/img/icons/common/wapidu.jpg',
  //   date: 'Sept 2021',
  //   desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
  // },
];

export const projects: ProjectType[] = [
  {
    name: 'Portafolio-marce-dev',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/ma4rc312/Portafolio-marce-dev',
    // link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'Patojito Market',
    desc: 'A small marketplace was part of the training carried out by me',
    github: 'https://github.com/ma4rc312/Patojito-market',
  },
  {
    name: 'Imagenes 3d',
    desc: 'A personal exercise to entertain yourself',
    github: 'https://github.com/ma4rc312/Animacion_3D_imagenes',
  },
  {
    name: 'Blog de tareas',
    desc: 'Personal project efficient task blog',
    github: 'https://github.com/ma4rc312/blog-tareas-vue3-typescript-pinia',
  },
  {
    name: 'ApiRest NodeJs',
    desc: 'Personal project efficient',
    github: 'https://github.com/ma4rc312/Crud-con-Angular-Y-NodeJs',
  },
  {
    name: 'Object-oriented programming',
    desc: 'Personal project efficient ',
    github: 'https://github.com/ma4rc312/POO',
  },
  {
    name: 'Carrito compras android studio',
    desc: 'Personal project efficient ',
    github: 'https://github.com/ma4rc312/Carro-compras-Android/tree/master',
  },
  {
    name: 'GPF',
    desc: 'It is a system for the management of training projects ',
    github: 'https://github.com/ma4rc312/GPF',
  },
];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Marce Lucio',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Marce Lucio',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  // url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Marce Lucio',
    'Portfolio',
    'Marce Lucio Portfolio',
  ],
};
