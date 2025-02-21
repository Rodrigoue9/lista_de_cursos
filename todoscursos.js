const cursos = [
    // TECNÓLOGOS
    {
        nome: 'Agronegócio',
        duracao: '3 anos',
        tipo: 'tecnologo',
        classe: 'a',
        link: 'https://educacao.andrattibrasil.com.br/112-agronegocio'
    },
    {
        nome: 'Análise e Desenvolvimento De Sistemas',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'a',
        link: 'https://educacao.andrattibrasil.com.br/112-analise-e-desenvolvimento-de-sistemas'
    },
    {
        nome: 'Arquitetura De Dados',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'a',
        link: 'https://educacao.andrattibrasil.com.br/112-arquitetura-de-dados'
    },
    {
        nome: 'Blockchain, Criptomoedas e Finanças',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'b',
        link: 'https://educacao.andrattibrasil.com.br/112-blockchain-criptomoedas-e-financas'
    },
    {
        nome: 'Cibersegurança',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'c',
        link: 'https://educacao.andrattibrasil.com.br/112-ciberseguranca'
    },
    {
        nome: 'Ciência De Dados',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'c',
        link: 'https://educacao.andrattibrasil.com.br/112-ciencia-de-dados'
    },
    {
        nome: 'Coaching e Desenvolvimento Humano',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'c',
        link: 'https://educacao.andrattibrasil.com.br/112-coaching-e-desenvolvimento-humano'
    },
    {
        nome: 'Comércio Exterior',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'c',
        link: 'https://educacao.andrattibrasil.com.br/112-comercio-exterior'
    },
    {
        nome: 'Computação Em Nuvem',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'c',
        link: 'https://educacao.andrattibrasil.com.br/112-computacao-em-nuvem'
    },
    {
        nome: 'Desenvolvimento Back-end',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://educacao.andrattibrasil.com.br/112-desenvolvimento-back-end'
    },
    {
        nome: 'Desenvolvimento Mobile',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://educacao.andrattibrasil.com.br/112-desenvolvimento-mobile'
    },
    {
        nome: 'Desenvolvimento Web',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://educacao.andrattibrasil.com.br/112-desenvolvimento-web'
    },
    {
        nome: 'Design De Moda',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://educacao.andrattibrasil.com.br/112-design-de-moda'
    },
    {
        nome: 'Design Gráfico',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://educacao.andrattibrasil.com.br/112-design-grafico'
    },
    {
        nome: 'Design De Interiores',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://educacao.andrattibrasil.com.br/112-design-de-interiores'
    },
    {
        nome: 'Devops',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'd',
        link: 'https://educacao.andrattibrasil.com.br/112-devops'
    },
    {
        nome: 'Empreendedorismo',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/112-empreendedorismo'
    },
    {
        nome: 'Empreendedorismo E Novos Negócios',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/112-empreendedorismo-e-novos-negocios'
    },
    {
        nome: 'Eventos',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/112-eventos'
    },
    {
        nome: 'Fotografia',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'f',
        link: 'https://educacao.andrattibrasil.com.br/112-fotografia'
    },
    {
        nome: 'Gerontologia',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gerontologia'
    },
    {
        nome: 'Gestão Ambiental',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-ambiental'
    },
    {
        nome: 'Gestão Comercial',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-comercial'
    },
    {
        nome: 'Gestão Da Inovação',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-da-inovacao'
    },
    {
        nome: 'Gestão Da Produção Industrial',
        duracao: '3 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-da-producao-industrial'
    },
    {
        nome: 'Gestão Da Qualidade',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-da-qualidade'
    },
    {
        nome: 'Gestão Da Tecnologia Da Informação',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-da-tecnologia-da-informacao'
    },
    {
        nome: 'Gestão De Cooperativas',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-de-cooperativas'
    },
    {
        nome: 'Gestão De Produto',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-de-produto'
    },
    {
        nome: 'Gestão De Recursos Humanos',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-de-recursos-humanos'
    },
    {
        nome: 'Gestão De Saúde Pública',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-de-saude-publica'
    },
    {
        nome: 'Gestão De Turismo',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-de-turismo'
    },
    {
        nome: 'Gestão Financeira',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-financeira'
    },
    {
        nome: 'Gestão Hospitalar',
        duracao: '3 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-hospitalar'
    },
    {
        nome: 'Gestão Portuária',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-portuaria'
    },
    {
        nome: 'Gastronomia',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gastronomia'
    },
    {
        nome: 'Gestão Pública',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-publica'
    },
    {
        nome: 'Inteligência De Mercado E Análise De Dados',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'i',
        link: 'https://educacao.andrattibrasil.com.br/112-inteligencia-de-mercado-e-analise-de-dados'
    },
    {
        nome: 'Investigação E Perícia Criminal',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'i',
        link: 'https://educacao.andrattibrasil.com.br/112-investigacao-e-pericia-criminal'
    },
    {
        nome: 'Jogos Digitais',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'j',
        link: 'https://educacao.andrattibrasil.com.br/112-jogos-digitais'
    },
    {
        nome: 'Logística',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'l',
        link: 'https://educacao.andrattibrasil.com.br/112-logistica'
    },
    {
        nome: 'Marketing',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'm',
        link: 'https://educacao.andrattibrasil.com.br/112-marketing'
    },
    {
        nome: 'Marketing Digital',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'm',
        link: 'https://educacao.andrattibrasil.com.br/112-marketing-digital'
    },
    {
        nome: 'Mediação',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'm',
        link: 'https://educacao.andrattibrasil.com.br/112-mediacao'
    },
    {
        nome: 'Negócios Imobiliários',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'n',
        link: 'https://educacao.andrattibrasil.com.br/112-negocios-imobiliarios'
    },
    {
        nome: 'Processos Gerenciais',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'p',
        link: 'https://educacao.andrattibrasil.com.br/112-processos-gerenciais'
    },
    {
        nome: 'Produção Cervejeira',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'p',
        link: 'https://educacao.andrattibrasil.com.br/112-producao-cervejeira'
    },
    {
        nome: 'Produção Audiovisual',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'p',
        link: 'https://educacao.andrattibrasil.com.br/112-producao-audiovisual'
    },
    {
        nome: 'Redes De Computadores',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 'r',
        link: 'https://educacao.andrattibrasil.com.br/112-redes-de-computadores'
    },
    {
        nome: 'Secretariado',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 's',
        link: 'https://educacao.andrattibrasil.com.br/112-secretariado'
    },
    {
        nome: 'Segurança Pública (Apenas Concursados)',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 's',
        link: 'https://educacao.andrattibrasil.com.br/112-seguranca-publica'
    },
    {
        nome: 'Gestão de Segurança Privada',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/112-gestao-de-seguranca-privada'
    },
    {
        nome: 'Serviços Jurídicos Cartorários E Notariais',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 's',
        link: 'https://educacao.andrattibrasil.com.br/112-servicos-juridicos-cartorarios-e-notariais'
    },
    {
        nome: 'Sistemas Para Internet',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 's',
        link: 'https://educacao.andrattibrasil.com.br/112-sistemas-para-internet'
    },
    {
        nome: 'Segurança da Informação',
        duracao: '2,5 anos',
        tipo: 'tecnologo',
        classe: 's',
        link: 'https://educacao.andrattibrasil.com.br/112-seguranca-da-informacao'
    },
    {
        nome: 'Terapias Integrativas E Complementares',
        duracao: '2 anos',
        tipo: 'tecnologo',
        classe: 't',
        link: 'https://educacao.andrattibrasil.com.br/112-terapias-integrativas-e-complementares'
    },

    // BACHARELADOS
    {
        nome: 'Agronomia',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'a',
        link: 'https://educacao.andrattibrasil.com.br/110-agronomia'
    },
    {
        nome: 'Administração',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'a',
        link: 'https://educacao.andrattibrasil.com.br/110-administracao'
    },
    {
        nome: 'Administração Pública',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'a',
        link: 'https://educacao.andrattibrasil.com.br/110-administracao-publica'
    },
    {
        nome: 'Ciências Contábeis',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'c',
        link: 'https://educacao.andrattibrasil.com.br/110-ciencias-contabeis'
    },
    {
        nome: 'Ciências Econômicas',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'c',
        link: 'https://educacao.andrattibrasil.com.br/110-ciencias-economicas'
    },
    {
        nome: 'Ciência da Computação',
        duracao: '3,5 anos',
        tipo: 'bacharelado',
        classe: 'c',
        link: 'https://educacao.andrattibrasil.com.br/110-ciencia-da-computacao'
    },
    {
        nome: 'Criminologia',
        duracao: '3 anos',
        tipo: 'bacharelado',
        classe: 'c',
        link: 'https://educacao.andrattibrasil.com.br/110-criminologia'
    },
    {
        nome: 'Design',
        duracao: '3 anos',
        tipo: 'bacharelado',
        classe: 'd',
        link: 'https://educacao.andrattibrasil.com.br/110-design'
    },
    {
        nome: 'Enfermagem',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/110-enfermagem'
    },
    {
        nome: 'Educação Física',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/110-educacao-fisica'
    },
    {
        nome: 'Engenharia Da Computação',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/110-engenharia-da-computacao'
    },
    {
        nome: 'Engenharia Civil',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/110-engenharia-civil'
    },
    {
        nome: 'Engenharia De Produção',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/110-engenharia-de-producao'
    },
    {
        nome: 'Engenharia De Software',
        duracao: '3,5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/110-engenharia-de-software'
    },
    {
        nome: 'Engenharia Elétrica',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/110-engenharia-eletrica'
    },
    {
        nome: 'Engenharia Mecânica',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/110-engenharia-mecanica'
    },
    {
        nome: 'Jornalismo',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'j',
        link: 'https://educacao.andrattibrasil.com.br/110-jornalismo'
    },
    {
        nome: 'Publicidade e Propaganda',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'p',
        link: 'https://educacao.andrattibrasil.com.br/110-publicidade-e-propaganda'
    },
    {
        nome: 'Química',
        duracao: '3 anos',
        tipo: 'bacharelado',
        classe: 'q',
        link: 'https://educacao.andrattibrasil.com.br/110-quimica'
    },
    {
        nome: 'Serviço Social',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 's',
        link: 'https://educacao.andrattibrasil.com.br/110-servico-social'
    },
    {
        nome: 'Sistemas de Informação',
        duracao: '3,5 anos',
        tipo: 'bacharelado',
        classe: 's',
        link: 'https://educacao.andrattibrasil.com.br/110-sistemas-de-informacao'
    },
    {
        nome: 'Teologia',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 't',
        link: 'https://educacao.andrattibrasil.com.br/110-teologia'
    },
    {
        nome: 'Engenharia Sanitária',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/110-engenharia-sanitaria'
    },
    {
        nome: 'Engenharia Ambiental',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/110-engenharia-ambiental'
    },
    {
        nome: 'Engenharia De Controle E Automação',
        duracao: '5 anos',
        tipo: 'bacharelado',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/110-engenharia-de-controle-e-automacao'
    },
    {
        nome: 'Psicopedagogia',
        duracao: '3 anos',
        tipo: 'bacharelado',
        classe: 'p',
        link: 'https://educacao.andrattibrasil.com.br/110-psicopedagogia'
    },
    {
        nome: 'Relações Internacionais',
        duracao: '4 anos',
        tipo: 'bacharelado',
        classe: 'r',
        link: 'https://educacao.andrattibrasil.com.br/110-relacoes-internacionais'
    },

    // LICENCIATURAS
    {
        nome: 'Artes Visuais',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'a',
        link: 'https://educacao.andrattibrasil.com.br/111-artes-visuais'
    },
    {
        nome: 'Educação Física',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/111-educacao-fisica'
    },
    {
        nome: 'Educação Especial',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'e',
        link: 'https://educacao.andrattibrasil.com.br/111-educacao-especial'
    },
    {
        nome: 'Filosofia',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'f',
        link: 'https://educacao.andrattibrasil.com.br/111-filosofia'
    },
    {
        nome: 'Geografia',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'g',
        link: 'https://educacao.andrattibrasil.com.br/111-geografia'
    },
    {
        nome: 'História',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'h',
        link: 'https://educacao.andrattibrasil.com.br/111-historia'
    },
    {
        nome: 'Letras - Português',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'l',
        link: 'https://educacao.andrattibrasil.com.br/111-letras-portugues'
    },
    {
        nome: 'Letras - Português e Espanhol',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'l',
        link: 'https://educacao.andrattibrasil.com.br/111-letras-portugues-e-espanhol'
    },
    {
        nome: 'Letras - Português e Inglês',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'l',
        link: 'https://educacao.andrattibrasil.com.br/111-letras-portugues-e-ingles'
    },
    {
        nome: 'Matemática',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'm',
        link: 'https://educacao.andrattibrasil.com.br/111-matematica'
    },
    {
        nome: 'Pedagogia',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 'p',
        link: 'https://educacao.andrattibrasil.com.br/111-pedagogia'
    },
    {
        nome: 'Sociologia',
        duracao: '4 anos',
        tipo: 'licenciatura',
        classe: 's',
        link: 'https://educacao.andrattibrasil.com.br/111-sociologia'
    },
    {
        nome: '2ª Licenciatura',
        duracao: '1,5 anos',
        tipo: 'licenciatura',
        classe: '2',
        link: 'https://educacao.andrattibrasil.com.br/111-2-licenciatura'
    },
    {
        nome: 'Formação Pedagógica',
        duracao: '1 ano',
        tipo: 'licenciatura',
        classe: 'f',
        link: 'https://educacao.andrattibrasil.com.br/111-formacao-pedagogica'
    }
];