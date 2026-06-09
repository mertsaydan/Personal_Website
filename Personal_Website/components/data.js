const data = {
  en: {
    heroSection: {
      greeting: "Hi, I'm Mert",
      intro: "I am a\nFrontend Developer...",
      profileImage: "./src/assets/avatar.png",
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
      basicInfo: [
        { label: 'Birth Date', value: '07.03.1985' },
        { label: 'Location', value: 'Ankara' },
        { label: 'Education', value: 'Yeditepe Univ. Pharmacy | BSc' },
        { label: 'Role', value: 'Frontend, UI' },
      ],
      about: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc.',
      ],
      image: './src/assets/work.png',
    },
    skillsSection: {
      title: 'Skills',
      skills: [
        { name: 'JavaScript', logo: './src/assets/js_logo.png' },
        { name: 'React', logo: './src/assets/react_logo.png' },
        { name: 'Redux', logo: './src/assets/redux_logo.png' },
        { name: 'VS Code', logo: './src/assets/vscode_logo.png' },
        { name: 'Figma', logo: './src/assets/figma_logo.png' },
        { name: 'Tailwind CSS', logo: './src/assets/tail_logo.png' },
      ],
    },
    projectsSection: {
      title: 'Projects',
      projects: [
        {
          name: 'E-Commerce',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
          technologies: ['react', 'redux', 'vercel'],
          siteLink: '#',
          codeLink: '#',
          image: './src/assets/project_1.png',
        },
        {
          name: 'Journey',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
          technologies: ['react', 'redux', 'vercel'],
          siteLink: '#',
          codeLink: '#',
          image: './src/assets/project_2.png',
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
      profileImage: './src/assets/avatar.png',
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
      basicInfo: [
        { label: 'Doğum Tarihi', value: '07.03.1985' },
        { label: 'İkamet Şehri', value: 'Ankara' },
        { label: 'Eğitim', value: 'Yeditepe Ünv. Eczacılık | Lisans' },
        { label: 'Rol', value: 'Frontend, UI' },
      ],
      about: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc.',
      ],
      image: './src/assets/work.png',
    },
    skillsSection: {
      title: 'Yetenekler',
      skills: [
        { name: 'JavaScript', logo: './src/assets/js_logo.png' },
        { name: 'React', logo: './src/assets/react_logo.png' },
        { name: 'Redux', logo: './src/assets/redux_logo.png' },
        { name: 'VS Code', logo: './src/assets/vscode_logo.png' },
        { name: 'Figma', logo: './src/assets/figma_logo.png' },
        { name: 'Tailwind CSS', logo: './src/assets/tail_logo.png' },
      ],
    },
    projectsSection: {
      title: 'Projeler',
      projects: [
        {
          name: 'E-Ticaret',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
          technologies: ['react', 'redux', 'vercel'],
          siteLink: '#',
          codeLink: '#',
          image: './src/assets/project_1.png',
        },
        {
          name: 'Journey',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl.',
          technologies: ['react', 'redux', 'vercel'],
          siteLink: '#',
          codeLink: '#',
          image: './src/assets/project_2.png',
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
