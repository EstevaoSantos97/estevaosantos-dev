export default {
  nav: {
    about: "Sobre",
    experience: "Experiência",
    work: "Trabalho",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    subtitle: "Desenvolvedor Salesforce · Belo Horizonte, BR",
    headline:
      "Eu construo sistemas Salesforce que conversam com outros sistemas —",
    headlineAccent: "com segurança",
    description:
      "Apex, LWC, integrações e as decisões de arquitetura que sustentam tudo.",
    cta: "Ver trabalho",
    ctaSecondary: "Fale comigo",
  },
  about: {
    title: "Sobre",
    bio: [
      "Trabalho com Salesforce há cinco anos. Apex, LWC, Flows, integrações REST, além dos modelos de permissão e configuração de OWD que tornam tudo isso seguro para deploy. Atualmente estou na Loovi, redesenhando a arquitetura de permissões e escrevendo os endpoints Apex REST que lidam com o tráfego SAP. Em 2024, fiquei oito meses fora do Salesforce para integrar a equipe de auditoria de TI da EY. Conformidade SOX, testes de controles — basicamente revisando software do outro lado da mesa. Experiência útil. Voltei para o desenvolvimento sabendo mais do que quando saí.",
      "Também construo coisas fora do trabalho. O BitterSuite é um agregador de rádios baseado em um globo 3D, feito com Next.js e Supabase, algo entre o Radio Garden e a estética do Mac OS antigo. Tenho alguns widgets de Notion rodando na Vercel e um bot de Discord que responde perguntas a partir de um arquivo Markdown usando a API do Claude. São projetos pessoais, não produtos. Funcionam e resolvem problemas que eu realmente tenho.",
    ],
    availableForLabel: "Disponível para",
    availableForValue: "Trabalho remoto com Salesforce · Projetos por contrato",
    languagesLabel: "Idiomas",
    languagesValue: "Português (nativo) · Inglês (B2)",
    locationLabel: "Localização",
    locationValue: "Belo Horizonte, BR",
  },
  experience: {
    title: "Experiência",
    earlierTitle: "Experiência anterior em Salesforce",
    positions: "posições",
    currentRoles: [
      {
        company: "Loovi",
        role: "Desenvolvedor Salesforce",
        period: "Out 2025 — Atual",
        bullets: [
          "Redesenhei a arquitetura de permissões do objeto Case: saí de um modelo com profiles inflados para um modelo de menor privilégio com OWD privado, profile base enxuto e permission sets modulares. Configurei sharing rules baseadas em ownership para conceder o acesso de leitura/escrita que orgs privadas tornam complexo.",
          "Construí endpoints Apex REST customizados (@HttpPost) para ingestão de dados de um portal externo. Lida com deserialização JSON complexa e cria Cases e registros satélites em uma única transação, mantendo integridade relacional e atomicidade.",
          "Projetei Record-Triggered Flows para gestão de SLA, integrados com Apex actions para a lógica de negócio mais pesada. Construí LWCs embarcados em Screen Flows (indicadores de progresso) para guiar fluxos de usuário multi-etapas.",
        ],
        tags: ["Apex", "LWC", "Apex REST", "Flow", "Permissions", "IAM"],
      },
      {
        company: "Etho IT Solutions",
        role: "Desenvolvedor Salesforce",
        period: "Mar 2025 — Ago 2025",
        bullets: [
          "Sustentação de orgs Salesforce de clientes através de análise recorrente de bugs e correção de erros, mantendo operações de negócio estáveis.",
          "Construí e mantive novas funcionalidades em Apex e LWC como parte do ciclo de melhoria contínua da org.",
          "Contribuí com iniciativas de melhoria técnica e funcional ao longo dos ciclos de desenvolvimento, além de suporte interno a usuários.",
        ],
        tags: ["Apex", "LWC", "Sustaining"],
      },
      {
        company: "EY",
        role: "Trainee de Riscos Tecnológicos",
        period: "Jul 2024 — Fev 2025",
        bullets: [
          "Auditei controles de TI em grandes clientes corporativos sob requisitos SOX, com foco em riscos tecnológicos e conformidade.",
          "Identifiquei lacunas em controles internos e ajudei a construir planos de mitigação, fortalecendo a governança de segurança da informação.",
          "Elaborei relatórios estratégicos para lideranças de risco e equipes de auditoria interna, com achados utilizados na tomada de decisão.",
        ],
        tags: ["SOX", "IT Audit", "Compliance", "Governance"],
      },
    ],
    earlierRoles: [
      { company: "Poupex", role: "Desenvolvedor Salesforce", period: "Mai — Jul 2024", line: "Automações de cadastro de clientes e integrações no Salesforce. Foco em redução de erros manuais e aceleração do onboarding de clientes." },
      { company: "Finlândia Seguros", role: "Desenvolvedor Salesforce", period: "Dez 2023 — Jan 2024", line: "Customizações de pipeline de vendas, dashboards de performance e automações de ciclo de leads para uma corretora de seguros." },
      { company: "CI&T", role: "Desenvolvedor Salesforce", period: "Fev — Ago 2023", line: "Projetos internacionais de transformação digital em times ágeis: automação de processos, integrações de sistemas, práticas de Clean Code e DevOps." },
      { company: "OSF Digital", role: "Desenvolvedor Salesforce", period: "Set 2022 — Jan 2023", line: "Soluções customizadas em Salesforce Core e integrações externas em projetos internacionais ágeis." },
      { company: "IBM", role: "Desenvolvedor Salesforce", period: "Set 2021 — Ago 2022", line: "OmniStudio (Vlocity): OmniScripts, DataRaptors, Integration Procedures, FlexCards, além de LWCs e classes/triggers Apex estendendo a plataforma." },
      { company: "Everymind", role: "Desenvolvedor Salesforce", period: "Fev — Out 2021", line: "Sustentação da plataforma Salesforce: correção de bugs, suporte e trabalho de manutenção contínua." },
      { company: "JFOX IT Partners", role: "Estagiário Salesforce", period: "Fev 2020 — Fev 2021", line: "Estágio em Salesforce. Primeiro contato prático com Community Cloud (atual Experience Cloud) e LWC, além de fundamentos gerais da plataforma." },
    ],
  },
  work: {
    title: "Trabalhos Selecionados",
    readCase: "Ler case study",
    cases: [
      {
        number: "01",
        slug: "contract-retention-api",
        title: "API de Retenção de Contratos",
        summary: "Endpoint Apex REST para congelamento de contratos via SAP com precificação condicional. DML e notificações encapsulados em uma transação com isolamento de erros.",
        tags: ["Apex REST", "SAP Integration", "Async"],
      },
      {
        number: "02",
        slug: "third-party-collections-deadlock",
        title: "Portal de Cobranças: Refatoração Async (em andamento)",
        summary: "LWC em um portal de cobranças terceirizado atingiu governor limits no carregamento e tinha um erro de sintaxe JavaScript. Corrigido com fetching assíncrono e uma correção de código.",
        tags: ["LWC", "Experience Cloud", "Governor Limits"],
      },
      {
        number: "03",
        slug: "invoice-export-refactor",
        title: "Portal de Cobranças: Auditoria de Dados (em andamento)",
        summary: "Auditoria iniciada por um bug em campo. Encontrei queries SOQL dentro de loops e um modelo de sharing que ocultava a maioria dos dados que os agentes precisavam. Corrigi ambos.",
        tags: ["Apex", "LWC", "Governor Limits", "Sharing"],
      },
    ],
  },
  projects: {
    title: "Projetos Pessoais",
    featured: {
      eyebrow: "Projeto em Destaque",
      title: "BitterSuite",
      description:
        "Um explorador global de rádios construído em torno de um globo 3D WebGL. Clique em qualquer lugar da Terra, sintonize uma estação local e ouça o que está tocando. A navegação se inspira no Radio Garden; a linguagem visual vem do Poolsuite — estética de computador retrô, tipografia monoespaçada, janelas modais arrastáveis.",
      capabilities: [
        "Navegação em globo 3D com animações de câmera Fly-To baseadas em input de texto ou coordenadas GPS",
        "Clustering geoespacial em um raio de 55km para manter a renderização WebGL gerenciável em mercados densos",
        "Engine de áudio protegido contra erros CORS e AbortError do Chrome em troca rápida de streams",
        "Interceptação aleatória: pula para uma estação funcionando em qualquer lugar do mundo",
      ],
      tags: ["Next.js", "TypeScript", "Supabase", "Auth.js", "Zustand", "react-globe.gl", "Tailwind"],
      liveUrl: "https://bitter-project.vercel.app/",
      liveLabel: "Live",
      note: "Repositório privado — projeto comercial em desenvolvimento. iOS, iPadOS, macOS e Android no roadmap.",
    },
    others: [
      {
        title: "claude-docs-bot",
        description: "Bot de Q&A para Discord alimentado pelo Claude. Recebe qualquer arquivo Markdown como base de conhecimento e responde perguntas apenas a partir dessa fonte. Atualmente rodando com documentação da API REST do Salesforce.",
        tags: ["Python", "discord.py", "Anthropic API"],
        repoUrl: "https://github.com/EstevaoSantos97/claude-docs-bot",
        codeLabel: "Código",
      },
      {
        title: "Notion Progress Bar",
        description: "Widget de barra de progresso para páginas do Notion. HTML e JavaScript puro, servido pela Vercel e embarcado via iframe. Feito para acompanhamento de projetos pessoais.",
        tags: ["HTML", "JS", "Vercel"],
        repoUrl: "https://github.com/EstevaoSantos97/Barra-de-progresso-notion",
        codeLabel: "Código",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    categories: [
      { category: "Plataforma Salesforce", items: ["Apex", "LWC", "Aura", "Flow Builder", "Experience Cloud", "OmniStudio (Vlocity)", "Arquitetura de permissões", "Sharing & OWD"] },
      { category: "Integrações", items: ["Apex REST", "Named Credentials", "Integração SAP", "OAuth2"] },
      { category: "Ferramentas", items: ["Salesforce CLI", "Git", "Bitbucket", "Cursor", "Postman", "Change Sets"] },
      { category: "Web", items: ["TypeScript", "React", "Next.js", "Tailwind", "Supabase", "Vercel", "Python"] },
      { category: "Idiomas", items: ["Português (nativo)", "Inglês (B2)"] },
    ],
  },
  contact: {
    title: "Contato",
    subtitle: "Disponível para trabalho remoto com Salesforce e projetos por contrato.",
  },
  footer: {
    builtWith: "Feito com Astro",
  },
  caseStudy: {
    backLink: "Voltar para Trabalhos Selecionados",
  },
} as const;
