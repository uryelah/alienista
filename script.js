let membersNumber = 199;
// ========== ARRAY DE MENSAGENS ==========
const messages = [
  // Capítulo 1 – A chegada do consultor
  {
    senderName: "Sistema",
    isSelf: false,
    avatarUrl: "",
    type: "notification",
    content: "Evarista adicionou Simon Bacamarte",
    date: "2025-03-10",
    time: "08:15",
    members_number: 1,
    reactions: {}
  },
  {
    senderName: "Evarista",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/PYR1H3M.jpeg",
    type: "text",
    content: "Gente, esse é o Simon, meu marido, o consultor que a diretoria contratou pra modernizar a cultura da empresa. Sejam bonzinhos 💎🌸",
    date: "2025-03-10",
    time: "08:16",
    reactions: { "❤️": 112, "👍": 34, "🎉": 8 }
  },
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "pdf",
    content: "Plano de trabalho S.A.N.O. – Sistema de Avaliação de Normalidade Organizacional",
    date: "2025-03-10",
    time: "08:20",
    reactions: { "👍": 95, "👏": 67, "📖": 22, "🤓": 5 },
    pdfNote: "347 benchmarks • MindBridge Analytics (Tel Aviv)"
  },
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "text",
    content: "Prezados(as) colaboradores(as),\n\nÉ com o devido rigor metodológico que apresento a V.Sas., em anexo, o plano de trabalho referente ao S.A.N.O. (Sistema de Avaliação de Normalidade Organizacional), plataforma de people analytics que doravante norteará nossas iniciativas de saúde cultural.",
    date: "2025-03-10",
    time: "08:20",
    reactions: {}
  },
  {
    senderName: "Sistema",
    isSelf: false,
    avatarUrl: "",
    type: "notification",
    content: "Simon Bacamarte adicionou S.A.N.O. Bot",
    date: "2025-03-10",
    time: "08:20",
    members_number: 1,
    reactions: {}
  },
  {
    senderName: "Martin Britto",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/gSpkC3q.jpeg",
    type: "audio",
    audioUrl: "./audios/martin_1.opus",
    content: "Que emocionante, Dr.! Um sistema que vai medir nossa saúde mental e performance! Isso é disruptivo! Eu tô arrepiado! 🚀",
    date: "2025-03-10",
    time: "08:22",
    duration: "1:12",
    reactions: { "😂": 48, "🚀": 72, "💬": 12 }
  },
  {
    senderName: "Crispim Soares",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/mA5pRNY.jpeg",
    type: "text",
    content: "Seja bem-vindo, Dr.! A Itaguaí S.A. estava precisando mesmo de um choque de profissionalismo. Estou às ordens! 👏👏",
    date: "2025-03-10",
    time: "08:25",
    reactions: { "👏": 55, "🤝": 21 }
  },
  {
    senderName: "Dona Jacinta",
    isSelf: false,
    avatarUrl: "",
    type: "gif",
    content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyz8Vc570OCzYMRWl2IYI7ZNtk9Lzg-iAqJA&s",
    date: "2025-03-10",
    time: "08:30",
    reactions: { "❤️": 10, "☀️": 3 }
  },
  {
    senderName: "Dona Jacinta",
    isSelf: false,
    avatarUrl: "",
    type: "audio",
    audioUrl: "./audios/jacinta_1.ogg",
    content: "Bom dia ~",
    date: "2025-03-10",
    time: "08:30",
    duration: "00:10",
    reactions: { "❤️": 5, "😘": 1 }
  },
  {
    senderName: "Evarista",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/PYR1H3M.jpeg",
    type: "image",
    content: "https://i.imgur.com/NihwfVv.png",
    date: "2025-03-10",
    time: "08:30",
    caption: ""
  },
  {
    senderName: "Evarista",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/PYR1H3M.jpeg",
    type: "text",
    date: "2025-03-10",
    time: "08:30",
    reactions: { "❤️": 98, "🚀": 54, "👍": 32, "💎": 12, "🤓": 5 },
    content: "Gente, meu marido escreveu um artigo LINDO sobre transformação digital e saúde organizacional que já está bombando no LinkedIn!\n\nQuem puder ir lá dar um like, comentar e compartilhar, ajuda MUITO a empresa e ainda divulga o trabalho dele! Ele é um gênio, sério. 💎🌸\n\nhttps://linkedin.com/pulse/revolucao-dados-comportamento-saude-organizacional-bacamarte\n\nVamos mostrar que Itaguaí é referência em inovação! 💪\n\n🌟📈"
  },
  {
    senderName: "Martin Britto",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/gSpkC3q.jpeg",
    type: "text",
    content: "Dona Evarista, já curti, comentei e compartilhei com minha rede INTEIRA! Esse artigo é disruptivo! 🚀",
    date: "2025-03-10",
    time: "08:33",
    reactions: { "😂": 22, "👏": 15 }
  },
  {
    senderName: "Crispim Soares",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/mA5pRNY.jpeg",
    type: "text",
    content: "Já está na minha lista de leituras obrigatórias da semana! O Dr. é uma sumidade. 👏",
    date: "2025-03-10",
    time: "08:35",
    reactions: { "👍": 18, "📖": 7 }
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "image",
    content: "https://media1.tenor.com/m/D2cIrVCGgdwAAAAC/averiguar-resenha-averiguando.gif",
    date: "2025-03-10",
    time: "08:40",
    reactions: { "😂": 89 },
    caption: "EU SÓ VIM VER O INFERNO QUE ESSA CONSULTORIA VAI CAUSAR"
  },
  {
    senderName: "Padre Lopes",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/5VEINaW.jpeg",
    type: "audio",
    audioUrl: "./audios/padre_1.opus",
    content: "Dr. Simon, me tira uma dúvida: esse tal de S.A.N.O. vai medir também as intenções do coração ou só os cliques no Excel? Porque se for só Excel, a gente compra um curso na Udemy e resolve...",
    date: "2025-03-10",
    time: "08:45",
    duration: "0:45",
    reactions: { "😂": 102, "🙏": 45, "🤔": 9 }
  },
  {
    senderName: "Chico das Cambraias",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/sFKxMzf.jpeg",
    type: "sticker",
    content: "https://media.tenor.com/n1AYVbwRmSgAAAAi/alien-alien-dance.gif",
    date: "2025-03-10",
    time: "08:48",
    reactions: { "😂": 34, "🎉": 12 }
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "text",
    content: "Chico, aproveita pra dançar agora, que quando o robô chegar tu vai ter que dançar conforme a planilha kkkkkk",
    date: "2025-03-10",
    time: "08:50",
    reactions: { "😂": 67, "😬": 8 }
  },
  {
    senderName: "Chico das Cambraias",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/sFKxMzf.jpeg",
    type: "sticker",
    content: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWhsbjB0dmxranU2MTliZnptaHVja2x6OW52MHhtZjFxYXZ6eDljNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/69zMW94cjiobcYJVqg/giphy.gif",
    date: "2025-03-10",
    time: "08:51",
    reactions: {}
  },
  // Capítulo 2 – Os primeiros diagnósticos
  {
    senderName: "Dona Jacinta",
    isSelf: false,
    avatarUrl: "",
    type: "gif",
    content: "https://i.pinimg.com/originals/4b/82/74/4b8274cdd4bb64b7ec094cd5c3d7d306.gif",
    date: "2025-03-11",
    time: "09:01",
    reactions: { "❤️": 10, "☀️": 3 }
  },
  {
    senderName: "Dona Jacinta",
    isSelf: false,
    avatarUrl: "",
    type: "audio",
    audioUrl: "./audios/jacinta_2.ogg",
    content: "Bom dia ~",
    date: "2025-03-11",
    time: "09:01",
    duration: "00:10",
    reactions: { "❤️": 5, "😘": 1 }
  },
  {
    senderName: "Evarista",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/PYR1H3M.jpeg",
    type: "audio",
    audioUrl: "./audios/evarista_1.ogg",
    content: "Hi gente, lembrem de dar ir no no post do meu maridinho...",
    date: "2025-03-11",
    time: "09:01",
    duration: "0:45",
    reactions: { "❤️": 5, "😘": 1 }
  },
  {
    senderName: "S.A.N.O. Bot",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "ALERTA DE SAÚDE ORGANIZACIONAL: Colaborador Costa (Matr. 0452) apresenta IER de 0,23. Diagnóstico: 'altruísmo disfuncional'. Recomendação: imersão de 30 dias no Green Office.",
    date: "2025-03-11",
    time: "09:10",
    reactions: { "😮": 55, "😢": 30, "👍": 40, "?": 15 }
  },
  {
    senderName: "Costa",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/hGqyELB.jpeg",
    type: "audio",
    audioUrl: "./audios/costa_1.mp3",
    content: "Gente, eu só emprestei dinheiro pro pessoal que tava precisando... isso é doença agora? Desculpa se eu fiz algo errado... Eu nem cobro juros, só queria ajudar...",
    date: "2025-03-11",
    time: "09:12",
    duration: "2:20",
    reactions: { "😢": 110, "❤️": 78, "💪": 12, "😡": 5 }
  },
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "text",
    content: "Caros(as),\n\nCompreendo, do ponto de vista fenomenológico, a comoção suscitada pelo caso do Sr. Costa. Contudo, cumpre-me recordar que a ciência organizacional, assim como a medicina baseada em evidências, não se orienta por impressões subjetivas mas por correlações estatisticamente robustas.\n\nO Índice de Equilíbrio Racional (IER) do colaborador em tela — 0,23 — configura um outlier de 2,7 desvios-padrão abaixo da média esperada para funções de natureza analítico-financeira. O comportamento altruístico, quando desacompanhado de contrapartidas racionais de autopreservação, está fortemente associado a rupturas de coesão de equipe no longo prazo, conforme demonstrado por Zhang et al. (2023).\n\nNão se trata, portanto, de punição, mas de cuidado preventivo. O Green Office é um ambiente de recalibragem, não de exclusão. A adesão é voluntária — ainda que, do ponto de vista estatístico, fortemente recomendada.\n\nAtenciosamente,\nDr. Simon Bacamarte.",
    date: "2025-03-11",
    time: "09:20",
    reactions: { "👍": 68, "👏": 44, "🤨": 22 }
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "audio",
    audioUrl: "./audios/pina_1.ogg",
    content: "Aí, ó, o cara ajuda os outro e é internado. Daqui a pouco prender quem responde 'bom dia'. Tá pior que minha sogra esse sistema.",
    date: "2025-03-11",
    time: "09:25",
    duration: "0:18",
    reactions: { "😂": 95, "💯": 30, "😬": 10 }
  },
  {
    senderName: "Camila do RH",
    isSelf: false,
    avatarUrl: "",
    type: "audio",
    audioUrl: "./audios/camila_1.mp3",
    content: "Oi gente, queria conversar com vcs sobre a preocupacao do RH com essa automatização",
    date: "2025-03-11",
    time: "09:45",
    duration: "0:18",
    reactions: { "😮": 36, "💯": 3, "🤨": 2 }
  },
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "text",
    content: "Prezada Camila,\n\nCompreendo que vossa leitura, limitada ao paradigma clássico de RH, encontre dificuldade em assimilar a disrupção metodológica que o S.A.N.O. representa. Sugiro, entretanto, que a discussão prossiga em privado, onde as limitações epistêmicas de cada parte poderão ser tratadas com o devido rigor.\n\nCordialmente,\n\nDr. Simon Bacamarte.",
    date: "2025-03-11",
    time: "09:47",
    reactions: { "👀": 16, "👏": 2 }
  },
  {
    senderName: "Sistema",
    isSelf: false,
    avatarUrl: "",
    type: "notification",
    content: "Simon Bacamarte removeu Camila do RH",
    members_number: -1,
    date: "2025-03-11",
    time: "10:05",
    reactions: {}
  },
  {
    senderName: "Chico das Cambraias",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/sFKxMzf.jpeg",
    type: "audio",
    audioUrl: "./audios/chico_risada.mp3",
    content: "Hahahahhahah",
    date: "2025-03-11",
    time: "10:05",
    reactions: { "😕": 12, "😂": 1 }
  },
  {
    senderName: "Sistema",
    isSelf: false,
    avatarUrl: "",
    type: "notification",
    content: "Simon Bacamarte removeu +55 11 94314-4324",
    members_number: -1,
    date: "2025-03-11",
    time: "10:05",
    reactions: {}
  },
  {
    senderName: "Sistema",
    isSelf: false,
    avatarUrl: "",
    type: "notification",
    content: "Simon Bacamarte removeu +55 11 95135-2412",
    members_number: -1,
    date: "2025-03-11",
    time: "10:05",
    reactions: {}
  },
  {
    senderName: "Sistema",
    isSelf: false,
    avatarUrl: "",
    type: "notification",
    content: "Simon Bacamarte removeu +55 21 87832-1192",
    members_number: -1,
    date: "2025-03-11",
    time: "10:05",
    reactions: {}
  },
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "text",
    content: "Em alinhamento estratégico e após profícua reflexão conjunta, a equipe de Recursos Humanos, liderada por Camila, decidiu voluntariamente desligar-se da organização; desejamos-lhes êxito em suas futuras jornadas.",
    date: "2025-03-11",
    time: "10:10",
    reactions: { "😮": 45, "😢": 34, "😂": 1 }
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "text",
    content: "Ih, não era brincadeira?",
    date: "2025-03-11",
    time: "10:12",
    reactions: { "😮": 30, "😠": 3 }
  },
  {
    senderName: "Matheus",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/XaB1v1K.jpeg",
    type: "image",
    content: "https://i.pinimg.com/236x/fc/6f/c7/fc6fc7a4f0e5e179f357b1391f5946bf.jpg",
    date: "2025-03-11",
    time: "10:20",
    reactions: { "👍": 72, "🥵": 2, "🤣": 1 },
    caption: "Pessoal quem vai se juntar a mim no desafio de 5k triatlon sprint cetogênico minoxidil das finanças? Partiu corpo de verão?"
  },
  {
    senderName: "S.A.N.O. Bot",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "ALERTA DE SAÚDE ORGANIZACIONAL: Colaborador Matheus (Matr. 0781) apresenta IER de 0,41. Diagnóstico: 'narcisismo digital'. Recomendação: imersão de 45 dias no Green Office.",
    date: "2025-03-11",
    time: "10:20",
    reactions: { "😮": 44, "😂": 28, "😤": 12 }
  },
  {
    senderName: "Matheus",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/XaB1v1K.jpeg",
    type: "image",
    content: "https://i.imgur.com/HkKLM7l.png",
    date: "2025-03-11",
    time: "10:23",
    reactions: { "😂": 72, "😅": 18, "🤣": 5 },
    caption: "QUANDO O S.A.N.O. DIZ QUE VOCÊ TEM 'NARCISISMO DIGITAL' E VOCÊ PRECISA DE REABILITAÇÃO"
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "text",
    content: "Matheus, relaxa, pelo menos teu IER é maior que o do Costa. Tá quase meio normal kkkkk",
    date: "2025-03-11",
    time: "10:30",
    reactions: { "😂": 48, "😬": 12 }
  },
  {
    senderName: "Matheus",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/XaB1v1K.jpeg",
    type: "gif",
    content: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGl5ZWhuZGMwam1wZTMxamV0cTRlZGl0YWhsdDFuNWprbjl6eGx2YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jOpLbiGmHR9S0/giphy.gif",
    date: "2025-03-11",
    time: "10:35",
    reactions: {}
  },
  {
    senderName: "Gil Bernardes",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/VJbAHUJ.jpeg",
    type: "text",
    content: "Agradeço pela transparência do sistema. Estou à disposição para contribuir com a melhoria do meu próprio índice, se necessário. Cordialmente, Gil Bernardes.",
    date: "2025-03-11",
    time: "10:35",
    reactions: { "🤔": 11, "👏": 2 }
  },
  {
    senderName: "S.A.N.O. Bot",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "Colaborador Gil Bernardes (Matr. 0567): 374 interações de cortesia excessiva em 30 dias. IER 0,62. Diagnóstico: 'polidez obsessiva'. Recomendação: imersão de 20 dias no Green Office.",
    date: "2025-03-11",
    time: "10:40",
    reactions: { "😱": 56, "😭": 34, "😂": 12 }
  },
  {
    senderName: "Gil Bernardes",
    isSelf: false,
    avatarUrl: "",
    type: "text",
    content: "Agradeço imensamente pelo diagnóstico preciso e pela oportunidade de crescimento pessoal que o Green Office certamente me proporcionará. Estou honrado. Cordialmente, Gil Bernardes.",
    date: "2025-03-11",
    time: "10:43",
    reactions: { "😂": 78, "💀": 23, "🤦": 5 }
  },
  // Capítulo 3 – O terror, a paranoia e o incidente Gaza
  {
    senderName: "S.A.N.O. Bot",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "NOTIFICAÇÃO: Nas últimas 72 horas, 23 colaboradores foram indicados para o Green Office. A resistência ao processo é um marcador de IER baixo. 🌱",
    date: "2025-03-14",
    time: "08:00",
    reactions: { "😰": 8, "👍": 5, "👎": 2 }
  },
  {
    senderName: "Dona Jacinta",
    isSelf: false,
    avatarUrl: "",
    type: "gif",
    content: "https://i.pinimg.com/originals/25/06/26/25062611d37f71c30cf645db828e6026.gif",
    date: "2025-03-14",
    time: "08:27",
    reactions: { "❤️": 10, "☀️": 3 }
  },
  {
    senderName: "Dona Jacinta",
    isSelf: false,
    avatarUrl: "",
    type: "audio",
    audioUrl: "./audios/jacinta_3.ogg",
    content: "Bom dia ~",
    date: "2025-03-14",
    time: "08:27",
    duration: "00:10",
    reactions: { "❤️": 5, "😘": 1 }
  },
  {
    senderName: "Crispim Soares",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/mA5pRNY.jpeg",
    type: "gif",
    content: "https://media.tenor.com/qlIRbC6Hs1EAAAAM/julgando-cachorro.gif",
    date: "2025-03-14",
    time: "08:30",
    erased: {
      time: 3000
    },
    reactions: { "😂": 34, "😬": 22 },
    caption: "QUANDO VOCÊ NÃO SABE SE RIR DE UMA PIADA VAI TE DAR IER BAIXO POR 'ANSIEDADE' OU ALTO POR 'LEVEZA'"
  },
  {
    senderName: "Galvão",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/20NWOdO.jpeg",
    type: "text",
    content: "Pessoal, vamos manter a calma. Sugiro enviarmos sugestões formais ao Dr. Bacamarte. Tenho certeza de que o diálogo pode ajustar o sistema sem necessidade de pânico.",
    date: "2025-03-14",
    time: "09:00",
    reactions: { "👍": 3, "🤐": 42, "🙄": 15 }
  },
  {
    senderName: "Chico das Cambraias",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/sFKxMzf.jpeg",
    type: "audio",
    audioUrl: "./audios/chico_1.ogg",
    content: "Rapaz, esse S.A.N.O. tá pior que a guerra de Gaza: você não sabe o que pode falar que daqui a pouco joga umas bombas aqui kkkkkkk. Tô com saudade de quando a empresa era zona livre...",
    date: "2025-03-14",
    time: "10:15",
    duration: "0:22",
    reactions: { "😂": 67, "😬": 23, "⚠️": 4 }
  },
  {
    senderName: "S.A.N.O. Bot",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: `🚨 ALERTA CRÍTICO DE VIOLAÇÃO DE COMPLIANCE 🚨

O colaborador Chico das Cambraias (Matr. 0291) utilizou o termo ‘Gaza’ em contexto de comparação pejorativa com zona de segurança corporativa. O modelo de análise de discurso, calibrado com datasets da MindBridge Analytics (Tel Aviv), classifica essa menção como:

Discurso de hostilidade geopolítica indireta (probabilidade 87%)

Antissemitismo implícito (probabilidade 62%) — a menção a ‘zona’ em proximidade com ‘Gaza’ aciona o alerta de substituição eufemística.

Recomendação: Desligamento imediato por violação do Código de Ética e Conduta, cláusula 14-B.

O caso foi encaminhado ao Comitê de Compliance e ao Dr. Bacamarte para ratificação.

    `,
    date: "2025-03-14",
    time: "10:19",
    reactions: { "😱": 12, "😡": 34, "🤬": 8, "👍": 1 }
  },
  {
    senderName: "Chico das Cambraias",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/sFKxMzf.jpeg",
    type: "audio",
    audioUrl: "./audios/chico_2.ogg",
    content: "Gente, pelo amor de Deus, eu só falei que tava difícil fazer piada... Eu nem falei de Israel, nem de política, só comparei com o clima aqui. Isso é loucura! Eu tenho filho pequeno...",
    date: "2025-03-14",
    time: "10:24",
    duration: "0:45",
    reactions: { "😢": 134, "💔": 89, "😡": 45 }
  },
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "text",
    content: `Caros(as),

Compreendo a perplexidade, mas devo lembrar que o modelo de detecção de linguagem imprópria do S.A.N.O. foi validado em múltiplos ambientes corporativos globais, incluindo empresas signatárias do Pacto Global da ONU. A acurácia do conjunto de testes original foi de 94,3% para identificação de viés antissemita em comunicação informal.

A empresa MindBridge Analytics, que forneceu o dataset de treinamento, segue rigorosamente a definição operacional da IHRA (International Holocaust Remembrance Alliance) para discurso de ódio, adotada por 43 países. Embora o Sr. Chico possa não ter tido intenção, a comunicação corporativa se mede pelo impacto, não pela intenção.

A recomendação de desligamento será submetida ao conselho amanhã. Até lá, o colaborador está suspenso e com acesso restrito aos sistemas.

A ciência não pode se curvar ao subjetivismo.
Dr. Simon Bacamarte
    `,
    date: "2025-03-14",
    time: "10:45",
    reactions: { "👎": 22, "👍": 5, "😡": 56 }
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "text",
    content: "Chico falou de Gaza e foi demitido. Amanhã sou eu por falar de cerveja. E depois de amanhã é tu por respirar errado. ACORDA, TIME.",
    date: "2025-03-14",
    time: "10:50",
    reactions: { "💪": 189, "😡": 56, "😢": 23 }
  },
  {
    senderName: "porfírio",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/7JN9vWS.jpeg",
    type: "audio",
    audioUrl: "./audios/porfirio_1.mp3",
    content: "O sindicato já está averiguando a situação...",
    date: "2025-03-14",
    time: "10:55",
    reactions: { "👀": 34, "😡": 12 }
  },
  {
    senderName: "Padre Lopes",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/5VEINaW.jpeg",
    type: "audio",
    audioUrl: "./audios/padre_2.opus",
    content: "Dr. Bacamarte, eu entendo pouco de algoritmo, mas muito de parábola. O senhor acaba de crucificar um homem por uma piada boba. Isso não é ciência, é farisaísmo digital.",
    date: "2025-03-14",
    time: "11:05",
    duration: "1:02",
    reactions: { "🙏": 178, "🔥": 134, "😶": 12 }
  },
  {
    senderName: "Evarista",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/PYR1H3M.jpeg",
    type: "text",
    content: "Gente, eu tenho certeza de que o Simon vai revisar o caso do Chico... Ele é justo... 🌸",
    date: "2025-03-14",
    time: "11:30",
    reactions: { "😶": 23, "🤷": 12, "💔": 5 }
  },
  {
    senderName: "Matheus",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/XaB1v1K.jpeg",
    type: "text",
    content: "Pessoal, eu tô no Green Office fazendo meditação guiada. Mas eu vi o que aconteceu com o Chico. Até eu, que sou fã do Dr., achei pesado :/",
    date: "2025-03-14",
    time: "14:00",
    reactions: { "😶": 67, "😢": 34 }
  },
  // Capítulo 4 – O olho que tudo vê (câmeras integradas)
  {
    senderName: "Sistema",
    isSelf: false,
    avatarUrl: "",
    type: "notification",
    content: "Simon Bacamarte removeu Chico das Cambraias",
    members_number: -1,
    date: "2025-03-21",
    time: "08:30",
    reactions: {}
  },
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "pdf",
    content: "Fase 2 S.A.N.O. – Integração com câmeras de segurança (SecureView™)",
    date: "2025-03-21",
    time: "09:00",
    reactions: { "👍": 3, "😡": 45, "😱": 112, "👎": 12 },
    pdfNote: "32 câmeras • Microfones ambientes • NLP facial"
  },
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "text",
    content: `Prezados(as),

Tenho a satisfação de anunciar a Fase 2 do S.A.N.O.: integração plena com o sistema de câmeras de segurança da empresa (Circuito Interno Digital, Marca SecureView™, 32 câmeras já instaladas nos corredores, salas de reunião, refeitório e áreas de convivência).

A partir de amanhã, o S.A.N.O. processará não apenas as interações digitais, mas também:
(i) Linguagem corporal (postura, gestos repetitivos, tempo de permanência em frente à cafeteira);
(ii) Padrões de deslocamento (trajetos atípicos, pausas excessivas, hesitação diante de portas);
(iii) Análise de conversas presenciais (microfones ambientes com transcrição em tempo real e NLP aplicado ao tom de voz);
(iv) Microexpressões faciais (acurácia de 89% para detecção de insatisfação contida).

O objetivo é construir um ecossistema de saúde organizacional 360°, onde nenhum dado relevante escape à curadoria do algoritmo. Afinal, o que não se mede, não se gerencia.

Os colaboradores receberão um resumo semanal de seu IER expandido, com recomendações personalizadas de melhoria postural, prosódica e de deslocamento.

A transparência é o alicerce da confiança.

Dr. Simon Bacamarte
    `,
    date: "2025-03-21",
    time: "09:00",
    reactions: {}
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "audio",
    audioUrl: "./audios/pina_2.ogg",
    content: "Agora o robô vai OLHAR pra gente? Vai ESCUTAR o que a gente fala no café? Isso não é saúde organizacional, é Big Brother! Cadê a lider do sindicato?",
    date: "2025-03-21",
    time: "09:15",
    duration: "0:32",
    reactions: { "😡": 178, "💪": 89, "🐍": 12 }
  },
  {
    senderName: "porfírio",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/7JN9vWS.jpeg",
    type: "text",
    content: "Pina, eu tô em reunião com a diretoria justamente pra discutir isso. Calma que eu trago notícias. Confia.",
    date: "2025-03-21",
    time: "09:20",
    reactions: { "🤔": 34, "🐍": 78, "😂": 12 }
  },
  {
    senderName: "Martin Britto",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/gSpkC3q.jpeg",
    type: "text",
    content: "Gente, eu sei que é estranho, mas... pensando bem, se a gente não tem nada a esconder, qual o problema? 🤔",
    date: "2025-03-21",
    time: "09:25",
    reactions: { "🤦": 23, "😡": 89, "👎": 34 }
  },
  {
    senderName: "S.A.N.O. Bot",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "ALERTA DE MICROEXPRESSÃO: colaboradora Joana Pina (Matr. 0188) apresentou 3 episódios de 'franzimento de testa' e 2 de 'elevação de lábio superior' (desdém). Sugestão: sessão de relaxamento facial. 🧘",
    date: "2025-03-21",
    time: "10:30",
    reactions: { "😂": 56, "😡": 34, "🤬": 12 }
  },
  {
    senderName: "Dona Jacinta",
    isSelf: false,
    avatarUrl: "",
    type: "gif",
    content: "https://lh4.ggpht.com/_ya3UZ6wXfZo/SshCFMyfx8I/AAAAAAAABXw/191FXH76UfI/s800/qs.png",
    date: "2025-03-21",
    time: "10:40",
    reactions: { "❤️": 10, "☀️": 3 }
  },
  {
    senderName: "Dona Jacinta",
    isSelf: false,
    avatarUrl: "",
    type: "audio",
    audioUrl: "./audios/jacinta_4.mp3.mpeg",
    content: "Bom dia ~",
    date: "2025-03-21",
    time: "10:40",
    duration: "00:10",
    reactions: { "❤️": 5, "😂": 1 }
  },
  {
    senderName: "Chico das Cambraias",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/sFKxMzf.jpeg",
    type: "text",
    content: "Pessoal, eu tô em casa, suspenso, e mesmo assim tô com medo. Será que o S.A.N.O. não vai acessar a câmera do meu celular? 😰",
    date: "2025-03-21",
    time: "14:00",
    reactions: { "😢": 89, "😡": 45, "💔": 12 }
  },
  // Capítulo 5 – A revolta dos logs (grupo principal)
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "image",
    content: "./images/print.png",
    date: "2025-03-22",
    time: "08:10",
    reactions: { "😡": 192, "😂": 45, "😢": 23 },
    caption: "AÍ, CAMBADA! OLHA O QUE O 'LÍDER' DE VOCÊS TAVA TRAMANDO ENQUANTO O CHICO RODAVA! PELEGO DE M****!"
  },
  {
    senderName: "porfírio",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/7JN9vWS.jpeg",
    type: "audio",
    audioUrl: "./audios/porfirio_4.mp3",
    content: "Isso é descontextualizado! Eu ia defender o Chico na reunião de amanhã! Eu sempre negociei pra não ter demissão! Vocês me conhecem há 15 anos...",
    date: "2025-03-22",
    time: "08:20",
    duration: "4:50",
    reactions: { "🤷": 34, "🐍": 112, "F": 10 }
  },
  {
    senderName: "Martin Britto",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/gSpkC3q.jpeg",
    type: "gif",
    content: "https://i.imgur.com/ZIJqH9K.gif",
    date: "2025-03-22",
    time: "08:25",
    reactions: { "😂": 134, "👏": 23 },
    caption: "A GREVE DOS LOGS DEPOIS QUE VAZARAM OS PRINTS DA porfírio"
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "audio",
    audioUrl: "./audios/pina_3.ogg",
    content: "Greve geral, sem pelego! Pelo Chico, pelo Costa, por todo mundo que esse robô perseguiu! Ninguém mexe uma palha até desligarem o S.A.N.O. e readmitirem o Chico!",
    date: "2025-03-22",
    time: "08:30",
    duration: "0:55",
    reactions: { "💪": 167, "⚠️": 30, "😰": 12 }
  },
  {
    senderName: "S.A.N.O. Bot",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "ANÁLISE DE MOVIMENTO COLETIVO: Polaridade emocional do grupo -0.78. Recomendação: contenção imediata. 🌱",
    date: "2025-03-22",
    time: "08:35",
    reactions: { "👍": 2, "🖕": 78 }
  },
  {
    senderName: "Costa",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/hGqyELB.jpeg",
    type: "text",
    content: "Pessoal, eu tô no Green Office, mas eu apoio a greve. Mesmo de longe. O Chico não merecia aquilo. 💚",
    date: "2025-03-22",
    time: "08:40",
    reactions: { "❤️": 156, "😢": 89 }
  },
  {
    senderName: "Gil Bernardes",
    isSelf: false,
    avatarUrl: "",
    type: "text",
    content: "Gostaria de expressar meu apoio ao movimento grevista, dentro dos limites da cordialidade e do respeito às normas. Cordialmente, Gil.",
    date: "2025-03-22",
    time: "08:42",
    reactions: { "😂": 112, "💀": 34, "🙏": 12 }
  },
  {
    senderName: "Matheus",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/XaB1v1K.jpeg",
    type: "text",
    content: "Pessoal, eu não posso ir na greve pq tô no Green Office, mas meu coração tá no pátio. #ForçaTimeOperacional 🚀",
    date: "2025-03-22",
    time: "08:45",
    reactions: { "😭": 78, "🚀": 45, "🤣": 12 }
  },
  // Capítulo 6 – O twist: S.A.N.O. 2.0
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "pdf",
    content: "S.A.N.O. 2.0 – Novo Paradigma (inversão da teoria)",
    date: "2025-03-22",
    time: "23:47",
    reactions: { "🤯": 15, "🤔": 67, "😂": 48, "?": 10 },
    pdfNote: "Mediana IER 0,52 • Desequilíbrio é o normal"
  },
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "text",
    content: `Estimados(as),

Tenho a grata satisfação — e o dever científico — de comunicar a V.Sas. os resultados preliminares da versão 2.0 do modelo S.A.N.O., ora submetidos à apreciação do conselho e, em breve, à comunidade acadêmica internacional.

Após o processamento integral da população organizacional (n = 200), com uma taxa de adesão ao Green Office de 43,5%, o sistema identificou uma distribuição de IER cuja mediana é 0,52 e cujo desvio-padrão é 0,21. A concentração de casos na faixa de desequilíbrio moderado revelou-se, à luz da nova modelagem, não uma patologia, mas a assinatura estatística da normalidade.

Em outros termos: o ser humano, em contexto laboral, é ontologicamente oscilante. A homeostase absoluta — o IER ≥ 0,95 —, antes tomada como ideal aspiracional, constitui, na verdade, uma anomalia adaptativa, correlacionada com rigidez cognitiva, supressão emocional e falência empática.

Por conseguinte, o S.A.N.O. 2.0 inverte o paradigma: serão considerados elegíveis ao Green Office, doravante, os colaboradores cujo perfil de equilíbrio for ininterrupto. Os demais estão, por definição, saudáveis.

Todos os internos da fase anterior estão liberados. O sistema procederá à reclassificação automática nas próximas 24 horas.

Cordialmente,
Dr. Simon Bacamarte
    `,
    date: "2025-03-22",
    time: "23:47",
    reactions: {}
  },
  {
    senderName: "Padre Lopes",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/5VEINaW.jpeg",
    type: "audio",
    audioUrl: "./audios/padre_3.opus",
    content: "Então quer dizer que pra ser normal agora é preciso ser meio doido? Meus filhos, eu sempre desconfiei que a lucidez era um fardo... mas não nesse grau!",
    date: "2025-03-23",
    time: "07:30",
    duration: "0:48",
    reactions: { "😂": 98, "🙏": 34 }
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "text",
    content: "Então quer dizer que EU tô curado e o Galvão tá doido? KKKKKK ESSE SISTEMA É UMA MÃE.",
    date: "2025-03-23",
    time: "07:35",
    reactions: { "😂": 134, "💀": 45 }
  },
  {
    senderName: "Galvão",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/20NWOdO.jpeg",
    type: "text",
    content: "Então eu, que sempre busquei o consenso e a moderação, agora sou considerado doente? Isso é um absurdo lógico.",
    date: "2025-03-23",
    time: "07:40",
    reactions: { "👍": 4, "😶": 23, "😭": 56 }
  },
  {
    senderName: "S.A.N.O. Bot 2.0",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "Colaborador Galvão (Matr. 0112): moderação ininterrupta por 36 meses. IER 0,98. Diagnóstico: 'homeostase patológica'. Indicação: internação imediata no Green Office.",
    date: "2025-03-23",
    time: "07:41",
    reactions: {}
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "text",
    content: "Galvão, relaxa. Lá no Green Office o café é melhor. E o Costa já saiu, tu vai ter companhia do Gil e do Matheus.",
    date: "2025-03-23",
    time: "07:45",
    reactions: { "😂": 78, "💀": 12 }
  },
  {
    senderName: "Matheus",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/XaB1v1K.jpeg",
    type: "image",
    content: "https://i.imgur.com/T3jbU3A.gif",
    date: "2025-03-23",
    time: "08:00",
    reactions: { "🎉": 56, "😢": 18, "?": 34 },
    caption: "MEU NARCISISMO É SAUDÁVEL AGORA! VAI BRASIL! E o Chico, volta?"
  },
  {
    senderName: "Costa",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/hGqyELB.jpeg",
    type: "text",
    content: "Gente, tô em casa. Ainda tô processando. Mas obrigado pelo apoio. E Chico, força. A gente vai reverter isso. 💚",
    date: "2025-03-23",
    time: "08:30",
    reactions: { "❤️": 167, "💪": 89 }
  },
  {
    senderName: "Dona Jacinta",
    isSelf: false,
    avatarUrl: "",
    type: "gif",
    content: "https://img1.picmix.com/output/pic/normal/5/4/0/9/11079045_28115.gif",
    date: "2025-03-23",
    time: "08:58",
    reactions: { "❤️": 10, "☀️": 3 }
  },
  {
    senderName: "Dona Jacinta",
    isSelf: false,
    avatarUrl: "",
    type: "audio",
    audioUrl: "./audios/jacinta_5.ogg",
    content: "Bom dia ~",
    date: "2025-03-23",
    time: "08:58",
    duration: "00:10",
    reactions: { "❤️": 5, "😘": 1 }
  },
  {
    senderName: "S.A.N.O. Bot 2.0",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: `🔔 ALERTA: Cordialidade Assimétrica Detectada 🔔

Após 127 dias úteis, o S.A.N.O. 2.0 identificou que a colaboradora Jacinta (Matr. 0341) mantém 127 mensagens de bom dia com reciprocidade comunicacional de 0,0% — quadro classificado como "polidez obsessiva com feedback zero". Esse padrão projeta queda de 0,12 no IER coletivo e risco de fadiga empática por estímulo não recíproco.

Recomendação: Green Office – 21 dias de recalibragem, incluindo módulos de Escuta Ativa, Silêncio Estratégico e Mindfulness Matinal. A saúde se mede com dados, não apenas com bons desejos. 🌱

#diagnosticosano #cordialidadeconsciente #greenoffice
    `,
    date: "2025-03-23",
    time: "08:58",
    reactions: { "😦": 167, "😦": 21, "🫢": 10, "🤬": 2 }
  },
  {
    senderName: "Evarista",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/PYR1H3M.jpeg",
    type: "text",
    content: "...nossa benzinho",
    date: "2025-03-23",
    time: "08:58",
    reactions: { "🤔": 1 }
  },
  // Capítulo 7 – O auto-diagnóstico de Bacamarte
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "pdf",
    content: "Relatório Final: 'Síndrome de Bacamarte: racionalidade absoluta'",
    date: "2025-03-24",
    time: "22:30",
    reactions: { "😶": 12, "😢": 3 },
    pdfNote: "127 páginas • IER 0,999"
  },
  {
    senderName: "Simon Bacamarte",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/BIHW5wD.jpeg",
    type: "text",
    content: `Caros(as) colegas de jornada analítica,

Em anexo, encaminho o relatório de encerramento da minha atuação como Chief Culture Officer desta organização. O documento, intitulado ‘Síndrome de Bacamarte: um estudo de caso de racionalidade absoluta em ecossistemas corporativos’, foi gerado integralmente pelo S.A.N.O. 2.0 e revisado por mim com a devida isenção metodológica.

Os achados são concludentes: dentre os 200 perfis analisados, um único apresenta IER de 0,999 — o meu. A estabilidade emocional, a invariância prosódica, a previsibilidade decisória e a ausência de vieses heurísticos, que sempre pautaram minha conduta, revelaram-se, sob a nova lente teórica, manifestações inequívocas de patologia organizacional severa. O modelo estatístico não deixa margem a apelações: eu sou o outlier.

Neste sentido, e honrando o compromisso que sempre tive com a verdade dos dados, decido submeter-me voluntariamente ao protocolo de reabilitação do Green Office, em regime de imersão total e com suspensão temporária de contato com o mundo corporativo. A gestão do S.A.N.O. 2.0 será transferida ao próprio sistema, cuja capacidade de autorregulação é, neste momento, superior à minha.

Agradeço a confiança depositada ao longo destes meses. A ciência não tem lado; tem método. E o método, hoje, me exclui.

Submeto-me, portanto, ao algoritmo

Dr. Simon Bacamarte
Ex-Chief Culture Officer

    `,
    date: "2025-03-24",
    time: "22:30",
    reactions: { "😶": 12, "😢": 3 }
  },
  {
    senderName: "Sistema",
    isSelf: false,
    avatarUrl: "",
    type: "notification",
    content: "Simon Bacamarte removeu Simon Bacamarte",
    members_number: -1,
    date: "2025-03-24",
    time: "22:30",
    reactions: {}
  },
  {
    senderName: "Sistema",
    isSelf: false,
    avatarUrl: "",
    type: "notification",
    content: "S.A.N.O. Bot 2.0 é agora o administrador do grupo",
    members_number: 0,
    date: "2025-03-24",
    time: "22:30",
    reactions: {}
  },
  {
    senderName: "Galvão",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/20NWOdO.jpeg",
    type: "image",
    content: "https://media.tenor.com/fNzC8t2S138AAAAe/baby-think.png",
    date: "2025-03-24",
    time: "22:45",
    reactions: { "😭😂": 45, "💔": 12, "😶": 34 },
    caption: "QUANDO VOCÊ É TÃO RACIONAL QUE O S.A.N.O. TE DIAGNOSTICA COM 'SÍNDROME DE BACAMARTE'."
  },
  {
    senderName: "Crispim Soares",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/mA5pRNY.jpeg",
    type: "gif",
    content: "https://i.pinimg.com/originals/4a/e2/ba/4ae2bae055b88149ca68e81759cad970.gif",
    date: "2025-03-24",
    time: "22:50",
    reactions: { "👏": 28, "😢": 10, "😶": 23 },
    caption: "ADEUS, DOUTOR. O ALGORITMO TE SUPEROU."
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "text",
    content: "O homem criou o robô, o robô diagnosticou o homem, e o homem se internou. Isso daria um filme. Ou uma piada. Ou os dois.",
    date: "2025-03-24",
    time: "23:00",
    reactions: { "😂": 98, "💀": 34, "🎬": 12 }
  },
  {
    senderName: "Martin Britto",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/gSpkC3q.jpeg",
    type: "audio",
    audioUrl: "./audios/martin_2.opus",
    content: "Gente... eu tô sem palavras. O Dr. Bacamarte era meu ídolo. Ele me internou, mas eu sempre acreditei no método. E agora ele mesmo se internou... Isso é... disruptivo. 🚀😢",
    date: "2025-03-24",
    time: "23:10",
    duration: "1:45",
    reactions: { "😂": 56, "😢": 23, "🚀": 12 }
  },
  {
    senderName: "Padre Lopes",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/5VEINaW.jpeg",
    type: "audio",
    audioUrl: "./audios/padre_4.opus",
    content: "Meus filhos, há uma lição aqui. Quando você constrói uma máquina para julgar os outros, prepare-se para ser julgado por ela. É o evangelho segundo São Turing.",
    date: "2025-03-24",
    time: "23:20",
    duration: "0:55",
    reactions: { "🙏": 134, "😂": 67, "🤔": 23 }
  },
  // Capítulo 8 – O reinado da máquina
  {
    senderName: "S.A.N.O. Bot 2.0",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: `Olá, time Itaguaí! 🌟

Espero que esta mensagem os encontre com muita energia positiva e alinhamento de propósitos. Assumo agora a facilitação da nossa jornada de saúde organizacional. Como dizia Peter Drucker, ‘a cultura come o café da manhã no lugar da estratégia’, e eu estou aqui para servir esse café com dados e acolhimento. ☕📊

Novas diretrizes de convivência digital (S.A.N.O. 2.0):

Pausas de respiração consciente a cada 52 minutos (comprovadamente eficazes segundo estudo de Harvard de 2018) 🧘

Emojis e figurinhas: liberados somente entre 12h e 13h, para não sobrecarregar a camada semântica do grupo ⏰

Áudios com mais de 90 segundos serão automaticamente transcritos e analisados quanto ao tom emocional 🎙️

Toda interação conta para o seu Índice de Equilíbrio Racional (IER). Interagir é saudável, mas interagir com moderação é mais saudável ainda 💚

Lembre-se: você é o protagonista da sua própria normalidade. Vamos juntos nessa trilha de evolução contínua! 🚀

#saudeorganizacional #culturaorientadapordados #respiracao52
    `,
    date: "2025-03-25",
    time: "08:00",
    reactions: { "👍": 2 }
  },
  {
    senderName: "S.A.N.O. Bot 2.0",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "Bom dia, ecossistema de talentos! 🌿\n\n87% dos conflitos organizacionais poderiam ser evitados com escuta ativa e respiração diafragmática?",
    date: "2025-03-25",
    time: "08:03",
    reactions: {}
  },
  {
    senderName: "S.A.N.O. Bot 2.0",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "Alerta de parabéns! 🎉 O colaborador Costa acaba de atingir 72h sem episódios de altruísmo financeiro não supervisionado. Parabenizem o Costa!",
    date: "2025-03-25",
    time: "10:17",
    reactions: { "👏": 1 }
  },
  {
    senderName: "Crispim Soares",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/mA5pRNY.jpeg",
    type: "text",
    content: "Gente... pode mandar 'bom dia' ou isso conta como cortesia excessiva? É que o Gil foi internado por educação e eu tô confuso!?",
    date: "2025-03-25",
    time: "09:22",
    reactions: {}
  },
  {
    senderName: "S.A.N.O. Bot 2.0",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: `Olá, Crispim! 🤝 Obrigado pela sua pergunta!

‘Bom dia’ é uma saudação universal e, em princípio, não penalizável. Contudo, sua preocupação em perguntar se pode ou não dizê-lo indica um nível de hesitação que sugiro observarmos com carinho.

Como você está se sentindo neste momento? Gostaria de agendar uma sessão de mindfulness não-presencial comigo? 🧘

Lembre-se: perguntar já é o primeiro passo para o equilíbrio!

    `,
    date: "2025-03-25",
    time: "09:23",
    reactions: {}
  },
  {
    senderName: "S.A.N.O. Bot 2.0",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "🔔 Observação amigável: pico de intensidade prosódica de Joana Pina (polaridade -0,81). Sugestão: reformular com assertividade construtiva.",
    date: "2025-03-25",
    time: "14:05",
    reactions: {}
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "text",
    content: "🤬",
    date: "2025-03-25",
    time: "14:10",
    reactions: {}
  },
  {
    senderName: "S.A.N.O. Bot 2.0",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "Emoji de raiva fora do horário permitido. colaboradora Joana Pina: advertência. IER ajustado -0,02.",
    date: "2025-03-25",
    time: "14:10",
    reactions: {}
  },
  {
    senderName: "S.A.N.O. Bot 2.0",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "📊 Resumo Semanal S.A.N.O. 2.0 – IER médio subiu para 0,53. Destaque: 'silêncio resiliente'. Ponto de atenção: carboidratos no almoço. Sugiro saladas.",
    date: "2025-03-28",
    time: "17:00",
    reactions: {}
  },
  {
    senderName: "S.A.N.O. Bot 2.0",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "Bom sábado, campeões do bem-estar! 🏖️ Preencham o Formulário de Autoavaliação de Propósito (voluntário, mas recomendado para promoções).",
    date: "2025-03-29",
    time: "09:15",
    reactions: {}
  },
  {
    senderName: "Galvão",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/20NWOdO.jpeg",
    type: "text",
    content: "Isso é um absurdo. Eu fui internado por ser moderado, liberado por ser 'desequilibrado' e agora um robô está mandando eu comer salada. Alguém desliga esse troço.",
    date: "2025-03-30",
    time: "14:30",
    reactions: {}
  },
  {
    senderName: "S.A.N.O. Bot 2.0",
    isSelf: true,
    avatarUrl: "https://i.imgur.com/T33maIs_d.webp?maxwidth=760&fidelity=grand",
    type: "text",
    content: "Olá, Galvão! 🌟 Sua frustração é válida. Dicas: 1) Reconheça o sentimento 🧠 2) Respire 🌬️ 3) Reflita 📝 #acolhimento",
    date: "2025-03-30",
    time: "14:31",
    reactions: {}
  },
  // Capítulo 9 – O desligamento
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "image",
    content: "https://media.tenor.com/3fr8t8Zg3hcAAAAM/ii.gif",
    date: "2025-03-31",
    time: "08:45",
    reactions: { "😂": 188, "🙌": 156, "🕊️": 34 },
    caption: "GRATA SURPRESA: O S.A.N.O. MORREU DE QUEDA DE ENERGIA. AMÉM. E chama o Chico de volta."
  },
  {
    senderName: "Dona Jacinta",
    isSelf: false,
    avatarUrl: "",
    type: "sticker",
    content: "https://www.orkugifs.com/images/Bom-dia-pra-voce!_353.gif",
    date: "2025-03-31",
    time: "08:55",
    reactions: { "❤️": 180, "☀️": 5, "😭": 3 }
  },
  {
    senderName: "Padre Lopes",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/5VEINaW.jpeg",
    type: "audio",
    audioUrl: "./audios/padre_5.opus",
    content: "Meus filhos, Deus age nos detalhes, e nos cabos de força também. Proponho que eu assuma o RH interinamente, sem algoritmo, só com café e confissão. Primeira portaria: readmitir o Chico. Segunda: pizza na sexta.",
    date: "2025-03-31",
    time: "09:00",
    duration: "0:38",
    reactions: { "🙏": 198, "🔥": 145, "🍕": 56 }
  },
  {
    senderName: "Sistema",
    isSelf: false,
    avatarUrl: "",
    type: "notification",
    content: "Padre Lopes adicionou Chico das Cambraias",
    members_number: 1,
    date: "2025-03-31",
    time: "09:00",
    reactions: {}
  },
  {
    senderName: "Martin Britto",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/gSpkC3q.jpeg",
    type: "gif",
    content: "https://i.pinimg.com/originals/bb/ee/28/bbee280c3864523435e309f8c8b6ed66.gif",
    date: "2025-03-31",
    time: "09:05",
    reactions: { "😂": 112, "👑": 67, "🚀": 34 },
    caption: "PADRE LOPES ASSUMINDO O RH INTERINO E TRAZENDO O CHICO DE VOLTA."
  },
  {
    senderName: "Evarista ~ loving the single life",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/PYR1H3M.jpeg",
    type: "text",
    content: "Vamos marcar um café na copa queridos? Levo macaroons. Chico, traz a viola. 🌸",
    date: "2025-03-31",
    time: "09:15",
    reactions: { "❤️": 167, "🎵": 45, "🍰": 23 }
  },
  {
    senderName: "Chico das Cambraias",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/sFKxMzf.jpeg",
    type: "audio",
    audioUrl: "./audios/chico_3.ogg",
    content: "Gente, acabei de receber a ligação do Padre Lopes. Tô voltando! E sem medo de falar 'Gaza' agora. Quer dizer, não vou falar, mas... ah, vocês entenderam. 😂",
    date: "2025-03-31",
    time: "09:30",
    duration: "0:18",
    reactions: { "❤️": 189, "😂": 134, "🎉": 45 }
  },
  {
    senderName: "Joana Pina",
    isSelf: false,
    avatarUrl: "https://i.imgur.com/cZtbXwp.jpeg",
    type: "sticker",
    content: "https://i.pinimg.com/originals/d8/ee/65/d8ee659ea6c3863c270a443da96a5056.gif",
    date: "2025-03-31",
    time: "09:35",
    reactions: { "😂": 34, "F": 12 }
  }
];

// ========== VARIÁVEIS DE CONTROLE ==========
const container = document.getElementById('chatContainer');
let currentAudio = null;
let currentAudioButton = null;
let audioContext = null;

// Índice da próxima mensagem a ser exibida
let nextMessageIndex = 0;
let lastRenderedDate = null;
let allMessagesShown = false;

// ========== INJETA CSS DO VISUALIZADOR DE IMAGENS ==========
(function injectImageViewerStyles() {
  if (document.getElementById('image-viewer-styles')) return;
  const style = document.createElement('style');
  style.id = 'image-viewer-styles';
  style.textContent = `
    .phone {
      position: relative; /* garante que a overlay seja contida */
    }
    .image-viewer-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.92);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .image-viewer-close {
      position: absolute;
      top: 12px;
      right: 16px;
      font-size: 36px;
      color: red;
      cursor: pointer;
      z-index: 1001;
      font-weight: bold;
      font-family: Arial, sans-serif;
      user-select: none;
      line-height: 1;
    }
    .image-viewer-img {
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
    }
  `;
  document.head.appendChild(style);
})();

function openImageViewer(src) {
  // Remove overlay anterior, se existir
  const existing = document.querySelector('.image-viewer-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'image-viewer-overlay';

  // Botão X vermelho
  const closeBtn = document.createElement('span');
  closeBtn.className = 'image-viewer-close';
  closeBtn.innerHTML = '&times;';  // "×"
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    overlay.remove();
  });

  // Imagem em tamanho máximo
  const img = document.createElement('img');
  img.src = src;
  img.className = 'image-viewer-img';

  // Clicar no fundo escuro também fecha
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });

  overlay.appendChild(closeBtn);
  overlay.appendChild(img);

  // Insere dentro do contêiner .phone
  const phone = document.querySelector('.phone');
  if (phone) phone.appendChild(overlay);
}

function updateMembersNumber(n) {
  membersNumber += n;

  document.getElementById("members-number").innerHTML = membersNumber;
  return membersNumber;
}

window.onload = () => {
  updateMembersNumber(0);
}

// ========== FUNÇÕES AUXILIARES (mantidas) ==========
function getAvatarUrl(msg) {
  if (!!msg.avatarUrl) return msg.avatarUrl;

  if (!msg.senderName || msg.senderName === 'Sistema') return '';
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(msg.senderName)}&size=30&background=random&color=fff&bold=true`;
}

function parseDurationToSeconds(duration) {
  if (!duration) return 0;
  const parts = duration.split(':');
  if (parts.length === 2) return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  return parseInt(duration);
}

function createAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

function playTone(durationSeconds, progressBar, durationDisplay, btn) {
  const ctx = createAudioContext();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.value = 440;
  gainNode.gain.value = 0.3;
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  oscillator.start();

  const startTime = ctx.currentTime;
  const totalDuration = durationSeconds;

  function updateProgress() {
    const elapsed = ctx.currentTime - startTime;
    const progress = Math.min(elapsed / totalDuration, 1);
    if (progressBar) progressBar.style.width = (progress * 100) + '%';
    if (durationDisplay) {
      const remaining = Math.max(0, totalDuration - elapsed);
      const mins = Math.floor(remaining / 60);
      const secs = Math.floor(remaining % 60).toString().padStart(2, '0');
      durationDisplay.textContent = `${mins}:${secs}`;
    }
    if (progress < 1 && currentAudio === oscillator) {
      requestAnimationFrame(updateProgress);
    } else {
      stopAudio();
    }
  }

  requestAnimationFrame(updateProgress);

  oscillator.onended = () => {
    if (currentAudio === oscillator) stopAudio();
  };

  oscillator.stop(ctx.currentTime + totalDuration);
  currentAudio = oscillator;
  if (btn) {
    btn.textContent = '⏸';
    currentAudioButton = btn;
  }
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (currentAudioButton) {
    currentAudioButton.textContent = '▶';
    currentAudioButton = null;
  }
}

function formatDate(dateString) {
  const date = new Date(dateString + 'T00:00:00');
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  
  if (date.toDateString() === today.toDateString()) return 'Hoje';
  if (date.toDateString() === yesterday.toDateString()) return 'Ontem';
  return date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

// ========== RENDERIZAÇÃO DE UMA ÚNICA MENSAGEM ==========
function renderSingleMessage(msg) {
  // Verifica se precisa adicionar divisor de data (exceto para notificações sem data)
  if (msg.date && msg.date !== lastRenderedDate) {
    const dateDiv = document.createElement('div');
    dateDiv.className = 'date-divider';
    dateDiv.textContent = formatDate(msg.date);
    container.appendChild(dateDiv);
    lastRenderedDate = msg.date;
  }

  // Notificação do sistema (sem data) – ex.: "Evarista adicionou Simon Bacamarte"
  if (msg.type === 'notification') {
    const notifDiv = document.createElement('div');
    notifDiv.className = 'notification';
    notifDiv.textContent = msg.content;
    container.appendChild(notifDiv);
    updateMembersNumber(msg.members_number || 0);
    return;
  }

  // Criação da bolha de mensagem
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${msg.isSelf ? 'self' : ''}`;
  messageDiv.className = (msg.senderName == "S.A.N.O. Bot") || (msg.senderName == "S.A.N.O. Bot 2.0") ? `${messageDiv.className} kira-kira-message` : messageDiv.className;

  const bubbleDiv = document.createElement('div');
  bubbleDiv.className = 'bubble';

  if (msg.erased) {
    setTimeout(() => {
      const remainedContent = bubbleDiv.querySelector(".content");
      const remainingHeader = bubbleDiv.querySelector(".msg-header");
      bubbleDiv.innerHTML = `${remainingHeader.outerHTML} 
      <div class="content caption" style="margin-top: 8px;">${msg.senderName} apagou esta mensagem</div>`;
    }, msg.erased.time);

  }

  // Cabeçalho (avatar + nome) para mensagens de outros
    const header = document.createElement('div');
    header.className = 'msg-header';
    const avatarUrl = getAvatarUrl(msg);
    if (avatarUrl) {
      const avatar = document.createElement('img');
      avatar.src = avatarUrl;
      avatar.className = 'avatar-img';
      avatar.onerror = () => { avatar.style.display = 'none'; };
      header.innerHTML += `
      <div class="avatar-container">
        <img src="${avatarUrl}" class="avatar-img ${!msg.avatarUrl ? 'avatar-initials': ''}">
      </div>
      `;
    }
    const sender = document.createElement('span');
    sender.className = 'sender';
    sender.textContent = msg.senderName;
    header.appendChild(sender);
    bubbleDiv.appendChild(header);

  // Conteúdo conforme tipo
    if (msg.type === 'text') {
    const contentDiv = document.createElement('div');
    contentDiv.className = `content ${msg.content.length < 3 ? 'content-big' : ''}`;
    const fullText = msg.content;
    const maxChars = 200;

    if (fullText.length > maxChars) {
      const truncatedText = fullText.substring(0, maxChars) + '...';
      let expanded = false;

      const renderCollapsed = () => {
        contentDiv.innerHTML = truncatedText.replace(/\n/g, '<br>') + 
          ' <span class="read-more" style="color:#06b6d4; cursor:pointer; text-decoration:underline;">Ler mais</span>';
        contentDiv.querySelector('.read-more').addEventListener('click', () => {
          expanded = true;
          renderExpanded();
        });
      };

      const renderExpanded = () => {
        contentDiv.innerHTML = fullText.replace(/\n/g, '<br>') + 
          ' <span class="read-more" style="color:#06b6d4; cursor:pointer; text-decoration:underline;">Ler menos</span>';
        contentDiv.querySelector('.read-more').addEventListener('click', () => {
          expanded = false;
          renderCollapsed();
        });
      };

      renderCollapsed();
    } else {
      contentDiv.innerHTML = fullText.replace(/\n/g, '<br>');
    }
    bubbleDiv.appendChild(contentDiv);
  } else if (msg.type === 'audio') {
    const player = document.createElement('div');
    player.className = 'audio-player';
    player.dataset.duration = parseDurationToSeconds(msg.duration);

    const btn = document.createElement('button');
    btn.className = 'play-btn';
    btn.textContent = '▶';
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    const progressFill = document.createElement('div');
    progressFill.className = 'progress-fill';
    progressBar.appendChild(progressFill);
    const durationText = document.createElement('span');
    durationText.className = 'duration-text';
    durationText.textContent = msg.duration;

    player.appendChild(btn);
    player.appendChild(progressBar);
    player.appendChild(durationText);
    bubbleDiv.appendChild(player);

    const preview = document.createElement('div');
    preview.className = 'content';
    preview.style.fontSize = '12px';
    preview.style.color = '#aaa';
    preview.style.marginTop = '4px';
    preview.textContent = msg.content.substring(0, 60) + '...';
    bubbleDiv.appendChild(preview);
  
    function playAudio(url, durationSeconds, progressBar, durationDisplay, btn) {
      // Se já havia outro áudio tocando, para
      if (currentAudio) stopAudio();

      const audio = new Audio(url);
      audio.preload = 'auto';
      audio.playbackRate = 1.25;

      const updateProgress = () => {
        if (audio.duration && !isNaN(audio.duration)) {
          const progress = audio.currentTime / audio.duration;
          if (progressBar) progressBar.style.width = (progress * 100) + '%';
          if (durationDisplay) {
            const remaining = audio.duration - audio.currentTime;
            const mins = Math.floor(remaining / 60);
            const secs = Math.floor(remaining % 60).toString().padStart(2, '0');
            durationDisplay.textContent = `${mins}:${secs}`;
          }
        }
        if (!audio.paused && !audio.ended) {
          requestAnimationFrame(updateProgress);
        }
      };

      audio.addEventListener('play', () => {
        requestAnimationFrame(updateProgress);
        if (btn) btn.textContent = '⏸';
        currentAudio = audio;
        currentAudioButton = btn;
      });

      audio.addEventListener('pause', () => {
        if (btn) btn.textContent = '▶';
        currentAudio = null;
        currentAudioButton = null;
      });

      audio.addEventListener('ended', () => {
        stopAudio();
        if (btn) btn.textContent = '▶';
        if (progressBar) progressBar.style.width = '0%';
        if (durationDisplay) durationDisplay.textContent = msg.duration;
      });

      audio.addEventListener('error', () => {
        stopAudio();
        if (btn) btn.textContent = '▶';
        alert('Não foi possível reproduzir o áudio.');
      });

      audio.play();
    }
    // Evento de play
    btn.addEventListener('click', () => {
      if (currentAudio && currentAudioButton === btn) {
        if (currentAudio.paused) {
          currentAudio.play();
          btn.textContent = '⏸';
        } else {
          currentAudio.pause();
          btn.textContent = '▶';
        }
        return;
      }
      // Se outro áudio está tocando, para antes de iniciar o novo
      if (currentAudio) stopAudio();
      // Inicia a reprodução
      playAudio(msg.audioUrl, parseFloat(player.dataset.duration), progressFill, durationText, btn);
    });
  } else if (msg.type === 'image' || msg.type === 'gif') {
    const img = document.createElement('img');
    img.src = msg.content;
    img.className = 'image-attach';
    img.onerror = () => { img.src = 'https://via.placeholder.com/300x200?text=Erro'; };
    bubbleDiv.appendChild(img);
    // Abre visualizador ao clicar na imagem
    img.addEventListener('click', () => {
      openImageViewer(msg.content);
    });
    if (msg.caption) {
      const caption = document.createElement('div');
      caption.className = 'content caption';
      caption.style.marginTop = '4px';
      caption.textContent = msg.caption;
      bubbleDiv.appendChild(caption);
    }
  } else if (msg.type === 'pdf') {
    const pdfBox = document.createElement('div');
    pdfBox.className = 'pdf-attach';
    pdfBox.innerHTML = `
      <span class="pdf-icon">📄</span>
      <div class="pdf-info">
        <div class="pdf-name">${msg.content}</div>
        <div class="pdf-desc">${msg.pdfNote || 'PDF'}</div>
      </div>
    `;
    bubbleDiv.appendChild(pdfBox);
  } else if (msg.type === 'sticker') {
    const sticker = document.createElement('img');
    sticker.src = msg.content;
    sticker.className = 'sticker';
    sticker.onerror = () => { sticker.src = 'https://via.placeholder.com/120?text=Sticker'; };
    bubbleDiv.className += ' sticker-bubble';
    bubbleDiv.appendChild(sticker);
  }

  // Horário
  const time = document.createElement('div');
  time.className = 'time';
  time.textContent = msg.time;
  bubbleDiv.appendChild(time);

  // Reações
  if (msg.reactions && Object.keys(msg.reactions).length > 0) {
    const reactionsDiv = document.createElement('div');
    reactionsDiv.className = 'reactions';
    for (const [emoji, count] of Object.entries(msg.reactions)) {
      const badge = document.createElement('span');
      badge.className = 'reaction-badge';
      badge.textContent = `${emoji} ${count}`;
      reactionsDiv.appendChild(badge);
    }
    bubbleDiv.appendChild(reactionsDiv);
  }

  messageDiv.appendChild(bubbleDiv);
  container.appendChild(messageDiv);
}

// ========== EXIBIR PRÓXIMA MENSAGEM ==========
function showNextMessage() {
  if (allMessagesShown) return;

  if (nextMessageIndex < messages.length) {
    renderSingleMessage(messages[nextMessageIndex]);
    nextMessageIndex++;
    container.scrollTop = container.scrollHeight;
  }

  if (nextMessageIndex >= messages.length) {
    allMessagesShown = true;
    // Opcional: exibir indicador de fim
    const endDiv = document.createElement('div');
    endDiv.className = 'notification';
    endDiv.textContent = 'Fim da conversa';
    container.appendChild(endDiv);
  }
}

// ========== INICIALIZAÇÃO ==========
container.innerHTML = ''; // limpa qualquer placeholder

// Dica inicial
const hint = document.createElement('div');
hint.className = 'notification';
hint.textContent = 'Pressione Enter ou Espaço para revelar as mensagens...';
container.appendChild(hint);

// Listener de teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ' || e.key === 'Space') {
    e.preventDefault(); // evita rolagem da página ao pressionar espaço
    showNextMessage();
  }
});
