const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/dannmf.png',
        name: 'Daniel',
        role: 'Front-end Developer',
      },
      content: [
        {type: 'paragraph', content: 'Fala galera 👋'},
        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio.'},
        {type:'link', content:'dannmf.com'},
      ],
      publishedAt: new Date('2023-07-06 07:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/Lucas4dum.png',
        name: 'Lucas Adum',
        role: 'Back-end Developer',
      },
      content: [
        {type: 'paragraph', content: 'Fala pessoal 👋'},
        {type: 'paragraph', content: 'Acabei de construir mais uma API em node.'},
        {type:'link', content:'github.com/Lucas4dum'},
      ],
      publishedAt: new Date('2023-07-04 07:00')
    },
  ];