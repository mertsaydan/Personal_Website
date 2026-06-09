const data = {
  en: {
    heroSection: {
      greeting: "Hi, I'm Mert",
      intro: "I am a\nFrontend Developer...",
      profileImage: "/assets/avatar.png",
      socials: [
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/mertsaydan/',
        },
        {
          name: 'GitHub',
          link: 'https://github.com/mertsaydan',
        },
      ],
      headerText: "...who likes to craft solid and scalable\nfrontend products with great user experiences.",
    },
    profileSection: {
      title: 'Profile',
      subtitle: 'Basic Information',
      subtitle2: 'About Me',
      basicInfo: [
        { label: 'Birth Date', value: '07.03.1985' },
        { label: 'Location', value: 'Ankara' },
        { label: 'Education', value: 'Yeditepe Univ. Pharmacy | BSc' },
        { label: 'Role', value: 'Frontend, UI' },
      ],
      about: [
        'After graduating from Yeditepe University Faculty of Pharmacy in 2009, I worked as a pharmacist for 17 years.',
        'In 2026, I decided to follow my passion for coding and started developing my skills in Frontend Development.',
      ],
      image: '/assets/work.png',
    },
    skillsSection: {
      title: 'Skills',
      skills: [
        { name: 'JavaScript', logo: '/assets/js_logo.png' },
        { name: 'React', logo: '/assets/react_logo.png' },
        { name: 'Redux', logo: '/assets/redux_logo.png' },
        { name: 'VS Code', logo: '/assets/vscode_logo.png' },
        { name: 'Figma', logo: '/assets/figma_logo.png' },
        { name: 'Tailwind CSS', logo: '/assets/tail_logo.png' },
      ],
    },
    projectsSection: {
      title: 'Projects',
      projects: [
        {
          name: 'Pizza Project',
          description: 'A platform where users can explore, order, and customize various types of pizzas.',
          technologies: ['react', 'redux', 'vercel'],
          siteLink: 'https://pizza-two-cyan.vercel.app/',
          codeLink: 'https://github.com/mertsaydan/S8-Pizza-Challenge',
          image: '/assets/pizza.png',
        },
        {
          name: 'Journey',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
          technologies: ['react', 'redux', 'vercel'],
          siteLink: '#',
          codeLink: '#',
          image: '/assets/project_2.png',
        },
      ],
    },
    contactSection: {
      title: 'Send me a message!',
      description: 'Got a question or proposal, or just want\nto say hello? Go ahead.',
      email: 'mertsaydan@squaremd.co.uk',
    },
  },
  tr: {
    heroSection: {
      greeting: 'Merhaba, Ben Mert',
      intro: 'Frontend\nGeliştiricisiyim...',
      profileImage: '/assets/avatar.png',
      socials: [
        {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/mertsaydan/',
        },
        {
          name: 'GitHub',
          link: 'https://github.com/mertsaydan',
        },
      ],
      headerText: '...sağlam ve ölçeklenebilir ön uç\nürünler oluşturmayı seven biriyim.',
    },
    profileSection: {
      title: 'Profil',
      subtitle: 'Kişisel Bilgiler',
      subtitle2: 'Hakkımda',
      basicInfo: [
        { label: 'Doğum Tarihi', value: '07.03.1985' },
        { label: 'İkamet Şehri', value: 'Ankara' },
        { label: 'Eğitim', value: 'Yeditepe Ünv. Eczacılık | Lisans' },
        { label: 'Rol', value: 'Frontend, UI' },
      ],
      about: [
        '2009 yılında Yeditepe Üniversitesi Eczacılık Fakültesi’nden mezun olduktan sonra, 17 yıl serbest eczacılık yaptım. ',
        '2026 yılının başında, kodlama tutkumun peşinden gitmeye karar verdim ve Frontend Development alanında kendimi geliştirmeye başladım.',
      ],
      image: '/assets/work.png',
    },
    skillsSection: {
      title: 'Yetenekler',
      skills: [
        { name: 'JavaScript', logo: '/assets/js_logo.png' },
        { name: 'React', logo: '/assets/react_logo.png' },
        { name: 'Redux', logo: '/assets/redux_logo.png' },
        { name: 'VS Code', logo: '/assets/vscode_logo.png' },
        { name: 'Figma', logo: '/assets/figma_logo.png' },
        { name: 'Tailwind CSS', logo: '/assets/tail_logo.png' },
      ],
    },
    projectsSection: {
      title: 'Projeler',
      projects: [
        {
          name: 'Pizza Projesi',
          description: 'Kullanıcıların çeşitli pizza türlerini keşfedebileceği, sipariş verebileceği ve özelleştirebileceği bir platform.',
          technologies: ['react', 'redux', 'vercel'],
          siteLink: 'https://pizza-two-cyan.vercel.app/',
          codeLink: 'https://github.com/mertsaydan/S8-Pizza-Challenge',
          image: '/assets/pizza.png',
        },
        {
          name: 'Journey',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
          technologies: ['react', 'redux', 'vercel'],
          siteLink: '#',
          codeLink: '#',
          image: '/assets/project_2.png',
        },
      ],
    },
    contactSection: {
      title: 'Bana bir mesaj gönder!',
      description: 'Bir sorunuz veya öneriniz mi var,\nyoksa sadece merhaba demek mi istiyorsunuz? Hadi bakalım.',
      email: 'mertsaydan@squaremd.co.uk',
    },
  },
}

export default data
