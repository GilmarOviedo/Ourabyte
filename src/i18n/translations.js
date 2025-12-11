// src/i18n/translations.js
export const translations = {
  en: {
    common: {
      loading: 'Loading...',
      verifyingAccess: 'Verifying access...'
    },
    header: {
      nav: {
        home: 'Home',
        work: 'Work',
        services: 'Services',
        projects: 'Projects',
        news: 'News'
      },
      languageAriaLabel: 'Toggle between Spanish and English',
      socialAlt: {
        facebook: 'Facebook',
        linkedin: 'LinkedIn'
      }
    },
    hero: {
      title: 'Professional\nservices for you',
      description:
        'Our goal is to help you achieve your goals and make your life easier. We offer a wide range of services that are designed to meet your needs and exceed your expectations.',
      cta: 'Contact us'
    },
    servicesCards: {
      heading: 'Our Services',
      description:
        'We offer a wide range of services that are designed to meet your needs and exceed your expectations.',
      cards: {
        service1: { title: 'Consulting in technological development' },
        service2: { title: 'Support for researchers' },
        service3: { title: 'Scalability for startups and companies' },
        service4: { title: 'Prototyping with Industry 4.0 tools' },
        service5: { title: 'Custom Hardware/Software Development' },
        service6: { title: 'Digital data collection' }
      },
      button: 'Read more'
    },
    testimonials: {
      title: 'Testimonials',
      cards: {
        testimonial1:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        testimonial2:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
      },
      videos: [
        {
          title: 'Innovation, technology and digital transformation',
          description: 'Highlights from our LinkedIn community sharing our latest innovation efforts.',
          link: 'https://www.linkedin.com/posts/ourabyte_innovation-technology-digitaltransformation-activity-7343693404813312000-SlMH'
        },
        {
          title: 'Technology, innovation and project execution',
          description: 'Showcase of how we execute projects with precision and impact.',
          link: 'https://www.linkedin.com/posts/ourabyte_technology-innovation-project-activity-7326616602068619265-kZBV'
        }
      ]
    },
    contactForm: {
      title: 'Contact our team',
      labels: {
        firstName: 'First Name',
        lastName: 'Last name',
        email: 'Email',
        message: 'Message'
      },
      placeholders: {
        firstName: 'First Name',
        lastName: 'Last name',
        email: 'Email',
        message: 'Leave us a message'
      },
      button: 'Send message',
      alertSuccess: 'Message sent successfully!'
    },
    footer: {
      rightsReserved: '© 2024 All rights reserved'
    },
    ourabyteFooter: {
      description:
        'Empowering innovation through timeless wisdom and cutting-edge technology. From idea to impact, solutions that evolve with you. OuraByte is where humans and technology co-create the future.',
      columns: {
        about: {
          title: 'We are',
          items: ['What is OuraByte', 'Our Team', 'Our mission', 'Our vision']
        },
        services: {
          title: 'Services',
          items: [
            'Technology Development Consulting',
            'Support for Researchers',
            'Support for Startups and Companies',
            'Prototyping with Industry 4.0 Tools',
            'Hardware/Software Development',
            'Digital Data Collection'
          ]
        },
        projects: {
          title: 'Projects',
          items: ['PRISMA']
        }
      }
    },
    workPage: {
      intro: {
        title: 'What is OuraByte?',
        description:
          "OuraByte is a technology company inspired by the Ouroboros—an ancient symbol of a serpent eating its tail, representing renewal and cyclical evolution. This reflects OuraByte's belief that technology starts and ends with the human, constantly evolving to solve real-world problems. The logo—a serpent forming a circle with a digitized tail—symbolizes the fusion of timeless wisdom and modern innovation in a continuous loop of progress."
      },
      teamTitle: 'Our Team',
      team: {
        paulo:
          'CEO of OuraByte, a Mechatronics Engineer with a Master’s degree in Biomedical Informatics. He specializes in data science applied to global health and has international experience in artificial intelligence, smart medical devices, and health surveillance.',
        alonso:
          'CMO at OuraByte. Biomedical graduate from the University of Technology (Sydney, Australia). Scientific Research Assistant at Sequence Laboratory. Focused on research related to physiology, bioinformatics, neuroscience, and endocrinology.',
        lewis:
          'COO at OuraByte, a Mechatronic Engineer, holds a Master’s in Biomedical Informatics, and is part of the TinyML4D community. He has consulted for the World Bank, leads data science programs, applies AI in health, and directs R&D at UPCH.'
      },
      mission: {
        title: 'Our Mission',
        description:
          'To provide innovative solutions in technological development using Industry 4.0 tools, offering support to researchers, startups, and companies in key sectors such as healthcare, agribusiness, and mining. Our goal is to become a regional benchmark in technological efficiency by combining hardware, software, and digital data collection with a specialized multidisciplinary team.'
      },
      vision: {
        title: 'Our Vision',
        description:
          'To be recognized as a leading consultancy in technological development and innovation, transforming ideas into efficient and sustainable solutions by using Industry 4.0 tools to drive the growth of researchers, startups, and companies in strategic sectors such as health, agribusiness, and mining at the regional level.'
      }
    },
    servicesPage: {
      sections: {
        technologyConsulting: {
          title: 'Technology Development Consulting',
          description:
            'We offer expert guidance for the digital transformation of your organization. Our multidisciplinary team supports companies, startups, and researchers in designing and implementing technological solutions that integrate innovation, scalability, and sustainability. From ideation to execution, we focus on generating real value through the strategic use of emerging technologies.'
        },
        researchers: {
          title: 'Support for Researchers',
          description:
            'We understand the challenges of academic and scientific environments. That’s why we provide specialized support in the development of technological research projects—from idea validation to building functional prototypes. We facilitate technology transfer and accelerate the process of turning science into applied solutions, ready for market or social implementation.'
        },
        startups: {
          title: 'Support for Startups and Companies',
          description:
            'We guide startups and businesses in their digital transformation, offering scalable technology solutions for rapid growth and competitive advantage in Industry 4.0.'
        },
        prototyping: {
          title: 'Prototyping with Industry 4.0 Tools',
          description:
            'We design and build functional prototypes using Industry 4.0 tools such as 3D printing, embedded electronics, CAD design, and IoT systems. This allows us to validate and improve products in shorter timeframes, reducing risks and development costs.'
        },
        development: {
          title: 'Hardware/Software Development',
          description:
            'We create tailored technological solutions that meet each client’s specific needs. From embedded systems and IoT devices to digital platforms and mobile applications, we combine design, functionality, and scalability. Our approach focuses on delivering intuitive, efficient tools adapted to real-world contexts.'
        },
        dataCollection: {
          title: 'Digital Data Collection',
          description:
            'We implement intelligent systems to capture, process, and visualize data in real time. Whether in industrial, academic, or commercial settings, our solutions enable evidence-based decision-making through sensors, cloud platforms, and accessible interfaces.'
        }
      }
    },
    projectsPage: {
      title: 'Ongoing Projects and Success Stories',
      subtitle:
        'At OuraByte, we turn ideas into applied technological solutions. Here are some of our projects that combine research, development, and innovation with real impact.',
      prisma: {
        name: 'Prisma',
        paragraphs: [
          'We streamline patient data collection by integrating WhatsApp with REDCap, allowing for efficient daily tracking. This system enables seamless information flow from messaging platforms into REDCap, ensuring timely and accurate monitoring of patient data while enhancing overall healthcare management and patient engagement.',
          'Additionally, it supports tracking over 1,000 participants through Power BI reports, providing powerful data visualization and analytics to facilitate informed decision-making.'
        ],
        highlight: 'Bridging REDCap with WhatsApp for Patient Data Delivery',
        cta: 'See more'
      }
    },
    projectPrisma: {
      title: 'Prisma',
      subtitle: 'Technological innovation for daily health monitoring in Peru',
      paragraphs: [
        'PRESIENTE (Peru Respiratory and Enteric infection Survey of IncidENce over TimE) is a public health study implemented in the Callao region of Peru. It aims to monitor the daily incidence of respiratory and gastrointestinal symptoms among the population.',
        'At OuraByte, we developed a comprehensive technological solution for this study, integrating automation, digital data collection, and analytical visualization. Our goal was clear: to maximize the efficiency of real-time monitoring, enabling medical and research teams to make fast, informed decisions.'
      ],
      resultsTitle: 'What did we do?',
      results: [
        {
          title: 'Chatbot Development',
          text:
            'We built an interactive WhatsApp chatbot that collects symptom data every day through conversational flows with automatic validations.'
        },
        {
          title: 'REDCap Integration',
          text:
            'All collected information is securely stored in REDCap, a trusted platform for clinical and research data management.'
        },
        {
          title: 'Power BI Reports',
          text:
            'We designed interactive dashboards to track data daily, monitor participation, and evaluate project performance.'
        },
        {
          title: 'Technology Consulting Implementation',
          text:
            'We provided expert consulting and scalable architecture to ensure robust data integration and smooth deployment.'
        },
        {
          title: 'Continuous Support and Guidance',
          text:
            'Our team offered ongoing assistance to maintain sustainable performance and an optimal user experience.'
        },
        {
          title: 'Training for the Health Team',
          text:
            'We delivered workshops so staff could efficiently use dashboards and analyze collected data.'
        }
      ]
    },
    newsPage: {
      badge: 'Coming Soon',
      title: 'Latest News',
      description: 'Stay updated with the latest events, collaborations, and research from OuraByte.',
      subtitle: "We're working on something exciting. Check back soon!",
      barcodeCard: {
        tag: 'Featured Tool',
        title: 'Barcode extraction • PRESIENTE Humans',
        description: 'Generate barcode lists for the PRESIENTE samples faster and without errors.',
        button: 'Access',
        link: 'https://labmuestras.streamlit.app'
      }
    },
    login: {
      title: 'Login',
      labels: {
        username: 'Username',
        password: 'Password'
      },
      submit: 'Submit',
      messages: {
        dashboard: 'Authorized access. Redirecting to the dashboard...',
        chatbot: 'Authorized access. Redirecting to the chatbot panel...',
        survey: 'Authorized access. Redirecting to the survey page...'
      },
      alerts: {
        failed: 'Login failed! Please check your credentials.',
        error: 'An error occurred.'
      }
    },
    protectedRoute: {
      noPermission: "You don't have permission to access this page."
    },
    dashboard: {
      unauthorized: 'Unauthorized access. Please log in.',
      logout: 'Log out',
      alerts: {
        noSession: 'No active session.',
        logoutSuccess: 'Session closed successfully.',
        logoutError: 'Error logging out.'
      }
    },
    chatbot: {
      unauthorized: 'Unauthorized access. Please log in.',
      logout: 'Log out',
      alerts: {
        noSession: 'No active session.',
        logoutSuccess: 'Session closed successfully.',
        logoutError: 'Error logging out.'
      }
    },
    sentFlow: {
      header: {
        sendTemplate: 'Send Template',
        sendSurvey: 'Send Survey'
      },
      survey: {
        title: 'Send Surveys',
        phoneLabel: 'Phone number:',
        phoneTitle: '9-digit phone number',
        countLabel: 'Number of people registered with the phone number:',
        countTitle: 'Number of surveys to send',
        submit: 'Send',
        creditInfoTitle: 'Credit information',
        refreshHint: 'Refresh the page to see changes',
        currentCredit: 'Current credit:',
        timesUsed: 'Times flow used:',
        logout: 'Log out'
      },
      template: {
        title: 'Send Template',
        phoneLabel: 'Phone number:',
        submit: 'Send Template',
        creditInfoTitle: 'Credit information',
        refreshHint: 'Refresh the page to see changes',
        currentCredit: 'Current credit:',
        timesUsed: 'Times flow used:',
        logout: 'Log out'
      },
      alerts: {
        unauthorized: 'Unauthorized access. Please log in.',
        creditError: 'An error occurred while loading credit data.',
        surveySuccess: 'Surveys sent successfully.',
        surveyError: 'Error sending surveys.',
      templateSuccess: 'Template sent successfully.',
      templateError: 'Error sending template.',
      logoutSuccess: 'Session closed successfully.',
      logoutError: 'Error logging out.',
      noSession: 'No active session.'
    }
    },
    contactPage: {
      title: 'Contact our team',
      subtitle: 'We’d love to hear from you. Fill out the form below and our team will get back to you shortly.'
    }
  },
  es: {
    common: {
      loading: 'Cargando...',
      verifyingAccess: 'Verificando acceso...'
    },
    header: {
      nav: {
        home: 'Inicio',
        work: 'Somos',
        services: 'Servicios',
        projects: 'Proyectos',
        news: 'Noticias'
      },
      languageAriaLabel: 'Cambiar entre español e inglés',
      socialAlt: {
        facebook: 'Facebook',
        linkedin: 'LinkedIn'
      }
    },
    hero: {
      title: 'Servicios profesionales\na tu medida',
      description:
        'Nuestro objetivo es ayudarte a alcanzar tus metas y hacer tu vida más sencilla. Ofrecemos servicios diseñados para cubrir tus necesidades y superar tus expectativas.',
      cta: 'Contáctanos'
    },
    servicesCards: {
      heading: 'Nuestros servicios',
      description:
        'Ofrecemos una amplia gama de servicios diseñados para cubrir tus necesidades y superar tus expectativas.',
      cards: {
        service1: { title: 'Consultoría en desarrollo tecnológico' },
        service2: { title: 'Acompañamiento para investigadores' },
        service3: { title: 'Escalabilidad para startups y empresas' },
        service4: { title: 'Prototipado con herramientas de la Industria 4.0' },
        service5: { title: 'Desarrollo a medida de hardware/software' },
        service6: { title: 'Captura digital de datos' }
      },
      button: 'Ver más'
    },
    testimonials: {
      title: 'Testimonios',
      cards: {
        testimonial1:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        testimonial2:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
      },
      videos: [
        {
          title: 'Innovación, tecnología y transformación digital',
          description: 'Momentos destacados de nuestra comunidad en LinkedIn compartiendo nuestros esfuerzos de innovación.',
          link: 'https://www.linkedin.com/posts/ourabyte_innovation-technology-digitaltransformation-activity-7343693404813312000-SlMH'
        },
        {
          title: 'Tecnología, innovación y ejecución de proyectos',
          description: 'Un vistazo a cómo ejecutamos proyectos con precisión e impacto.',
          link: 'https://www.linkedin.com/posts/ourabyte_technology-innovation-project-activity-7326616602068619265-kZBV'
        }
      ]
    },
    contactForm: {
      title: 'Contacta a nuestro equipo',
      labels: {
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo',
        message: 'Mensaje'
      },
      placeholders: {
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo',
        message: 'Déjanos un mensaje'
      },
      button: 'Enviar mensaje',
      alertSuccess: '¡Mensaje enviado con éxito!'
    },
    footer: {
      rightsReserved: '© 2024 Todos los derechos reservados'
    },
    ourabyteFooter: {
      description:
        'Impulsamos la innovación combinando sabiduría perdurable y tecnología de vanguardia. Del concepto al impacto, soluciones que evolucionan contigo. OuraByte es donde las personas y la tecnología co-crean el futuro.',
      columns: {
        about: {
          title: 'Somos',
          items: ['¿Qué es OuraByte?', 'Nuestro equipo', 'Nuestra misión', 'Nuestra visión']
        },
        services: {
          title: 'Servicios',
          items: [
            'Consultoría en desarrollo tecnológico',
            'Acompañamiento para investigadores',
            'Apoyo para startups y empresas',
            'Prototipado con herramientas de la Industria 4.0',
            'Desarrollo de hardware/software',
            'Captura digital de datos'
          ]
        },
        projects: {
          title: 'Proyectos',
          items: ['PRISMA']
        }
      }
    },
    workPage: {
      intro: {
        title: '¿Qué es OuraByte?',
        description:
          'OuraByte es una empresa tecnológica inspirada en el Ouroboros, símbolo ancestral de renovación y evolución cíclica. Representa nuestra convicción de que la tecnología inicia y termina en el ser humano, evolucionando para resolver problemas reales.'
      },
      teamTitle: 'Nuestro equipo',
      team: {
        paulo:
          'CEO de OuraByte. Ingeniero mecatrónico con maestría en Informática Biomédica. Especialista en ciencia de datos aplicada a salud global, con experiencia en IA, dispositivos médicos inteligentes y vigilancia en salud.',
        alonso:
          'CMO en OuraByte. Licenciado en Biomedicina por la University of Technology (Sydney, Australia). Asistente de investigación científica en Sequence Laboratory. Enfocado en estudios sobre fisiología, bioinformática, neurociencia y endocrinología.',
        lewis:
          'COO en OuraByte. Ingeniero mecatrónico con maestría en Informática Biomédica y miembro de TinyML4D. Ha sido consultor del Banco Mundial, lidera programas de ciencia de datos, aplica IA en salud y dirige I+D en la UPCH.'
      },
      mission: {
        title: 'Nuestra misión',
        description:
          'Brindar soluciones tecnológicas innovadoras con herramientas de la Industria 4.0, apoyando a investigadores, startups y empresas en sectores como salud, agroindustria y minería.'
      },
      vision: {
        title: 'Nuestra visión',
        description:
          'Ser reconocidos como una consultora líder en desarrollo tecnológico, transformando ideas en soluciones eficientes mediante herramientas de la Industria 4.0 que impulsen el crecimiento regional.'
      }
    },
    servicesPage: {
      sections: {
        technologyConsulting: {
          title: 'Consultoría en desarrollo tecnológico',
          description:
            'Ofrecemos acompañamiento experto para la transformación digital de tu organización. Nuestro equipo multidisciplinario apoya a empresas, startups e investigadores en el diseño e implementación de soluciones tecnológicas con innovación, escalabilidad y sostenibilidad. Desde la ideación hasta la ejecución, nos enfocamos en generar valor real mediante el uso estratégico de tecnologías emergentes.'
        },
        researchers: {
          title: 'Acompañamiento para investigadores',
          description:
            'Entendemos los retos de los entornos académicos y científicos. Por ello brindamos soporte especializado en el desarrollo de proyectos tecnológicos de investigación: desde la validación de la idea hasta la construcción de prototipos funcionales. Facilitamos la transferencia tecnológica y aceleramos la transformación de la ciencia en soluciones aplicadas listas para el mercado o el impacto social.'
        },
        startups: {
          title: 'Apoyo para startups y empresas',
          description:
            'Guiamos a startups y compañías en su transformación digital, ofreciendo soluciones tecnológicas escalables que impulsan un crecimiento rápido y una ventaja competitiva en la Industria 4.0.'
        },
        prototyping: {
          title: 'Prototipado con herramientas de la Industria 4.0',
          description:
            'Diseñamos y construimos prototipos funcionales utilizando herramientas de la Industria 4.0 como impresión 3D, electrónica embebida, diseño CAD y sistemas IoT. Esto nos permite validar y mejorar productos en plazos más cortos, reduciendo riesgos y costos de desarrollo.'
        },
        development: {
          title: 'Desarrollo de hardware/software',
          description:
            'Creamos soluciones tecnológicas a medida que responden a las necesidades específicas de cada cliente. Desde sistemas embebidos e IoT hasta plataformas digitales y aplicaciones móviles, combinamos diseño, funcionalidad y escalabilidad para entregar herramientas intuitivas y eficientes adaptadas a contextos reales.'
        },
        dataCollection: {
          title: 'Captura digital de datos',
          description:
            'Implementamos sistemas inteligentes para captar, procesar y visualizar datos en tiempo real. Ya sea en ámbitos industriales, académicos o comerciales, nuestras soluciones habilitan la toma de decisiones basada en evidencia mediante sensores, plataformas en la nube e interfaces accesibles.'
        }
      }
    },
    projectsPage: {
      title: 'Proyectos en marcha y casos de éxito',
      subtitle:
        'En OuraByte convertimos ideas en soluciones tecnológicas aplicadas. Aquí te mostramos algunos proyectos que combinan investigación, desarrollo e innovación con impacto real.',
      prisma: {
        name: 'Prisma',
        paragraphs: [
          'Optimizamos la recolección de datos de pacientes integrando WhatsApp con REDCap para permitir un seguimiento diario eficiente. Este sistema habilita un flujo de información continuo desde las plataformas de mensajería hacia REDCap, asegurando un monitoreo oportuno y preciso mientras fortalece la gestión de salud y el compromiso de los pacientes.',
          'Además, permite seguir a más de 1,000 participantes mediante reportes en Power BI, ofreciendo visualizaciones y analítica avanzadas para facilitar decisiones informadas.'
        ],
        highlight: 'Integración de REDCap con WhatsApp para la entrega de datos de pacientes',
        cta: 'Ver más'
      }
    },
    projectPrisma: {
      title: 'Prisma',
      subtitle: 'Innovación tecnológica para el monitoreo diario de salud en Perú',
      paragraphs: [
        'PRESIENTE (Peru Respiratory and Enteric infection Survey of IncidENce over TimE) es un estudio de salud pública implementado en la región Callao. Busca monitorear la incidencia diaria de síntomas respiratorios y gastrointestinales en la población.',
        'En OuraByte desarrollamos una solución tecnológica integral para este estudio, integrando automatización, captura digital de datos y visualización analítica. Nuestro objetivo fue maximizar la eficiencia del monitoreo en tiempo real, permitiendo que los equipos médicos y de investigación tomen decisiones rápidas e informadas.'
      ],
      resultsTitle: '¿Qué hicimos?',
      results: [
        {
          title: 'Desarrollo de chatbot',
          text:
            'Construimos un chatbot en WhatsApp que recopila datos de síntomas a diario mediante flujos conversacionales con validaciones automáticas.'
        },
        {
          title: 'Integración con REDCap',
          text:
            'Toda la información recopilada se almacena de forma segura en REDCap, plataforma confiable para la gestión de datos clínicos y de investigación.'
        },
        {
          title: 'Reportes en Power BI',
          text:
            'Diseñamos paneles interactivos para seguir los datos diarios, monitorear la participación y evaluar el desempeño del proyecto.'
        },
        {
          title: 'Implementación de consultoría tecnológica',
          text:
            'Brindamos consultoría experta y arquitectura escalable para asegurar una integración de datos robusta y un despliegue fluido.'
        },
        {
          title: 'Acompañamiento continuo',
          text:
            'Nuestro equipo ofreció asistencia permanente para mantener un desempeño sostenible y una experiencia de usuario óptima.'
        },
        {
          title: 'Capacitación al equipo de salud',
          text:
            'Realizamos talleres para que el personal utilice los paneles y analice la información recopilada de forma eficiente.'
        }
      ]
    },
    newsPage: {
      badge: 'Muy pronto',
      title: 'Últimas noticias',
      description: 'Mantente al día con los eventos, colaboraciones e investigaciones de OuraByte.',
      subtitle: 'Estamos trabajando en algo emocionante. ¡Vuelve pronto!',
      barcodeCard: {
        tag: 'Herramienta destacada',
        title: 'Extracción de códigos · PRESIENTE Humanas',
        description: 'Genera listas de códigos de barras del estudio PRESIENTE con mayor rapidez y sin errores.',
        button: 'Acceder',
        link: 'https://labmuestras.streamlit.app'
      }
    },
    login: {
      title: 'Inicio de sesión',
      labels: {
        username: 'Usuario',
        password: 'Contraseña'
      },
      submit: 'Ingresar',
      messages: {
        dashboard: 'Acceso autorizado. Redirigiendo al panel de control...',
        chatbot: 'Acceso autorizado. Redirigiendo al panel del chatbot...',
        survey: 'Acceso autorizado. Redirigiendo a la página de encuestas...'
      },
      alerts: {
        failed: '¡Inicio de sesión fallido! Verifica tus credenciales.',
        error: 'Ocurrió un error.'
      }
    },
    protectedRoute: {
      noPermission: 'No tienes permiso para acceder a esta página.'
    },
    dashboard: {
      unauthorized: 'Acceso no autorizado. Por favor, inicia sesión.',
      logout: 'Cerrar sesión',
      alerts: {
        noSession: 'No hay sesión activa.',
        logoutSuccess: 'Sesión cerrada correctamente.',
        logoutError: 'Error al cerrar sesión.'
      }
    },
    chatbot: {
      unauthorized: 'Acceso no autorizado. Por favor, inicia sesión.',
      logout: 'Cerrar sesión',
      alerts: {
        noSession: 'No hay sesión activa.',
        logoutSuccess: 'Sesión cerrada correctamente.',
        logoutError: 'Error al cerrar sesión.'
      }
    },
    sentFlow: {
      header: {
        sendTemplate: 'Enviar Plantilla',
        sendSurvey: 'Enviar Encuesta'
      },
      survey: {
        title: 'Enviar encuestas',
        phoneLabel: 'Número de teléfono:',
        phoneTitle: 'Número de teléfono de 9 dígitos',
        countLabel: 'Cantidad de personas registradas con el número:',
        countTitle: 'Cantidad de encuestas a enviar',
        submit: 'Enviar',
        creditInfoTitle: 'Información de crédito',
        refreshHint: 'Refresca la página para ver los cambios',
        currentCredit: 'Crédito actual:',
        timesUsed: 'Veces que se usó el flujo:',
        logout: 'Cerrar sesión'
      },
      template: {
        title: 'Enviar plantilla',
        phoneLabel: 'Número de teléfono:',
        submit: 'Enviar plantilla',
        creditInfoTitle: 'Información de crédito',
        refreshHint: 'Refresca la página para ver los cambios',
        currentCredit: 'Crédito actual:',
        timesUsed: 'Veces que se usó el flujo:',
        logout: 'Cerrar sesión'
      },
      alerts: {
        unauthorized: 'Acceso no autorizado. Por favor, inicia sesión.',
        creditError: 'Ocurrió un error al cargar los datos de crédito.',
        surveySuccess: 'Encuestas enviadas correctamente.',
        surveyError: 'Error al enviar las encuestas.',
      templateSuccess: 'Plantilla enviada correctamente.',
      logoutSuccess: 'Sesión cerrada correctamente.',
      templateError: 'Error al enviar la plantilla.',
      logoutError: 'Error al cerrar sesión.',
        noSession: 'No hay sesión activa.'
      }
    },
    contactPage: {
      title: 'Contacta a nuestro equipo',
      subtitle: 'Queremos saber de ti. Completa el formulario y nos pondremos en contacto pronto.'
    }
  }
};
