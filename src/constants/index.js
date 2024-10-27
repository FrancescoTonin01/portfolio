export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  
  export const myProjects = [
    {
      "title": "Pareto Solver - Web-based Multi-Objective Optimization",
      "desc": "Pareto Solver is an advanced web platform that allows users to execute MiniZinc models and find Pareto frontiers for multi-objective optimization problems. With real-time execution and efficient solving, it's a powerful tool for researchers and developers.",
      "subdesc": "Built using React for the frontend, Flask for the backend, and deployed on Heroku, Pareto Solver is designed for ease of use and scalability. It seamlessly integrates MiniZinc for optimization tasks, providing an intuitive interface to handle complex problem-solving.",
      "href": "https://shrouded-garden-81056-3558aaa7bceb.herokuapp.com/",
      "texture": "/textures/project/project-pareto.mp4",
      "logo": "/img/Zn.png",
      "logoStyle": {
        "backgroundColor": "#1A202C",
        "border": "0.2px solid #2D3748",
        "boxShadow": "0px 0px 60px 0px #4A5568"
      },
      "spotlight": "/img/1.png",
      "tags": [
        {
          "id": 1,
          "name": "React.js",
          "path": "/img/react.png"
        },
        {
          "id": 2,
          "name": "Flask",
          "path": "/img/flask.png"
        },
        {
          "id": 3,
          "name": "Heroku",
          "path": "/img/heroku.png"
        },
        {
          "id": 4,
          "name": "MiniZinc",
          "path": "/img/minizinc.png"
        },      {
          "id": 5,
          "name": "Tailwind",
          "path": "/img/tailwind.png"
        }
      ]
    }
    ,
    {
      "title": "Logistic Solutions - Local Logistics Frontend",
      "desc": "Logistic Solutions is a clean, responsive frontend website built for a local logistics company. The platform provides customers with an intuitive interface to explore the company's services and manage logistics efficiently.",
      "subdesc": "Developed using React.js and styled with TailwindCSS, the site is optimized for performance and responsiveness. Deployed on Vercel, it ensures a smooth user experience and fast loading times.",
      "href": "https://sito-william-cmd1.vercel.app/",
      "texture": "/textures/project/project-logistics.mp4",
      "logo": "/img/rosina.jpg",
      "logoStyle": {
        "backgroundColor": "#2C3E50",
        "border": "0.2px solid #34495E",
        "boxShadow": "0px 0px 60px 0px #95A5A6",
        "width": "",
      },
      "spotlight": "/img/2.png",
      "tags": [
        {
          "id": 1,
          "name": "React.js",
          "path": "/img/react.png"
        },
        {
          "id": 2,
          "name": "Tailwind",
          "path": "/img/tailwind.png"
        },
        {
          "id": 3,
          "name": "Vercel",
          "path": "/img/Vercel.png"
        }
      ]
    }
    ,
    {
      "title": "TechShop - Fullstack eCommerce Platform",
      "desc": "TechShop is a fully functional eCommerce platform that allows users to browse products, add items to their cart, and complete purchases. It also includes admin features to manage products, customers, and orders.",
      "subdesc": "Developed using HTML, CSS, and JavaScript for the frontend, and powered by Maven and MySQL on the backend, TechShop offers a smooth and scalable solution for online shopping. The platform supports user roles, enabling login as an admin or customer.",
      "href": "https://github.com/FrancescoTonin01/Ecommerce-JS",
      "texture": "/textures/project/project-ecommerce.mp4",
      "logo": "/img/shopping-cart.png",
      "logoStyle": {
        "backgroundColor": "#1E272E",
        "border": "0.2px solid #2F3640",
        "boxShadow": "0px 0px 60px 0px #718093"
      },
      "spotlight": "/assets/spotlight-techshop.png",
      "tags": [
        {
          "id": 1,
          "name": "HTML",
          "path": "/img/html.png"
        },
        {
          "id": 2,
          "name": "CSS",
          "path": "/img/css.png"
        },
        {
          "id": 3,
          "name": "JavaScript",
          "path": "/img/js.png"
        },
        {
          "id": 4,
          "name": "Maven",
          "path": "/img/maven.png"
        },
        {
          "id": 5,
          "name": "MySQL",
          "path": "/img/mysql.png"
        }
      ]
    }    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Freelance Web Development',
      pos: 'Web Developer',
      duration: '2023 - Present',
      title: "This year, I developed websites independently for businesses and individuals, focusing primarily on the frontend. I managed the entire process, from initial design to deployment, ensuring a smooth user experience."
      ,icon: '/img/browser.png',

    },
    {
      id: 2,
      name: 'MiniZinc',
      pos: 'Intern - University of Ferrara',
      duration: '2023 - 2024',
      title: "As part of my final year internship, I implemented the calculation of the Pareto frontier using MiniZinc. This involved multi-objective optimization and allowed me to gain significant experience with solvers and optimization models.",
      icon: '/img/minizinc.png',
    },

  ];