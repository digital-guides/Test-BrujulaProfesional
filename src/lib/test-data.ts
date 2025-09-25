export interface Question {
  id: number;
  text: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
}

export interface Dimension {
  id: number;
  name: string;
  description: string;
  questions: Question[];
}

export const testData: Dimension[] = [
  {
    id: 1,
    name: "Autoconocimiento Profesional",
    description: "Evaluación de la claridad sobre propósito, valores, fortalezas y objetivos profesionales",
    questions: [
      {
        id: 1,
        text: "¿Qué tan claro tienes tu propósito profesional y valores?",
        options: {
          a: "Tengo absoluta claridad sobre mi propósito y valores, y los aplico consistentemente",
          b: "Tengo buena claridad y los aplico en la mayoría de las situaciones",
          c: "Tengo cierta claridad, pero a veces me confundo o dudo",
          d: "No tengo claridad sobre mi propósito profesional ni mis valores"
        }
      },
      {
        id: 2,
        text: "¿Cómo evalúas tu nivel de autoconciencia sobre tus fortalezas y debilidades?",
        options: {
          a: "Conozco perfectamente mis fortalezas y debilidades, y trabajo activamente en ambas",
          b: "Tengo buen conocimiento de mis capacidades y áreas de mejora",
          c: "Conozco algunas de mis fortalezas y debilidades, pero no todas",
          d: "Tengo poco conocimiento sobre mis verdaderas capacidades"
        }
      },
      {
        id: 3,
        text: "¿Qué tan definidos están tus objetivos profesionales a corto, mediano y largo plazo?",
        options: {
          a: "Tengo objetivos específicos, medibles y con plazos claros en todos los horizontes temporales",
          b: "Tengo objetivos bien definidos para el corto y mediano plazo",
          c: "Tengo algunos objetivos generales pero sin mucha especificidad",
          d: "No tengo objetivos profesionales claros o definidos"
        }
      },
      {
        id: 4,
        text: "¿Cómo describes tu nivel de inteligencia emocional en el ámbito laboral?",
        options: {
          a: "Manejo excelentemente mis emociones y las de otros, creando un ambiente positivo",
          b: "Tengo buen control emocional y entiendo las emociones de los demás",
          c: "Manejo mis emociones básicamente, pero a veces me afectan situaciones laborales",
          d: "Las emociones frecuentemente afectan mi desempeño y relaciones laborales"
        }
      },
      {
        id: 5,
        text: "¿Qué tan consciente eres de tu estilo de comunicación y su efectividad?",
        options: {
          a: "Conozco perfectamente mi estilo y lo adapto según la situación y audiencia",
          b: "Conozco mi estilo y generalmente comunico de manera efectiva",
          c: "Tengo cierto conocimiento de mi estilo, pero no siempre soy efectivo",
          d: "No tengo clara conciencia de cómo comunico, ni de su efectividad"
        }
      },
      {
        id: 6,
        text: "¿Cómo evalúas tu capacidad de autorreflexión y aprendizaje continuo?",
        options: {
          a: "Reflexiono sistemáticamente y aprendo constantemente de mis experiencias",
          b: "Reflexiono regularmente y busco oportunidades de aprendizaje",
          c: "Ocasionalmente reflexiono, pero no de manera sistemática",
          d: "Raramente reflexiono sobre mis experiencias laborales"
        }
      },
      {
        id: 7,
        text: "¿Qué tan definida tienes tu marca personal profesional?",
        options: {
          a: "Tengo una marca personal sólida, coherente y bien posicionada",
          b: "Tengo una buena marca personal con algunos aspectos por fortalecer",
          c: "Estoy en proceso de definir mi marca personal",
          d: "No tengo clara mi marca personal o reputación profesional"
        }
      },
      {
        id: 8,
        text: "¿Cómo describes tu nivel de autoconfianza profesional?",
        options: {
          a: "Tengo alta confianza en mis capacidades y tomo decisiones con seguridad",
          b: "Generalmente confío en mis habilidades y decisiones",
          c: "Mi confianza varía según la situación o el desafío",
          d: "Frecuentemente dudo de mis capacidades y decisiones"
        }
      }
    ]
  },
  {
    id: 2,
    name: "Competencias Técnicas y Especializadas",
    description: "Evaluación del nivel de expertise, actualización y versatilidad en competencias técnicas",
    questions: [
      {
        id: 9,
        text: "¿Qué tan actualizadas están tus competencias técnicas en tu área de especialización?",
        options: {
          a: "Estoy completamente actualizado con las últimas tendencias y tecnologías",
          b: "Estoy bien actualizado con la mayoría de los desarrollos recientes",
          c: "Estoy parcialmente actualizado, con algunas brechas de conocimiento",
          d: "Mis conocimientos técnicos están desactualizados"
        }
      },
      {
        id: 10,
        text: "¿Cómo evalúas tu nivel de experticia en tu campo profesional?",
        options: {
          a: "Soy reconocido como experto y referente en mi área",
          b: "Tengo un nivel avanzado de conocimiento y experiencia",
          c: "Tengo un nivel intermedio con experiencia práctica",
          d: "Mi nivel de experticia es básico o inicial"
        }
      },
      {
        id: 11,
        text: "¿Qué tan versátil eres en cuanto a competencias blandas?",
        options: {
          a: "Domino múltiples competencias que me permiten adaptarme a diversos contextos",
          b: "Tengo buen dominio de varias competencias complementarias",
          c: "Tengo algunas competencias adicionales a mi especialización",
          d: "Me limito principalmente a mi área de especialización"
        }
      },
      {
        id: 12,
        text: "¿Cómo describes tu capacidad de innovación y creatividad en tu trabajo?",
        options: {
          a: "Constantemente genero ideas innovadoras y soluciones creativas",
          b: "Regularmente aporto ideas nuevas y enfoques creativos",
          c: "Ocasionalmente contribuyo con ideas o soluciones innovadoras",
          d: "Raramente genero ideas nuevas o enfoques creativos"
        }
      },
      {
        id: 13,
        text: "¿Qué tan efectivo eres resolviendo problemas complejos?",
        options: {
          a: "Excelente capacidad para resolver problemas complejos de manera sistemática",
          b: "Buena capacidad para abordar y resolver problemas desafiantes",
          c: "Resuelvo problemas básicos, pero me cuestan los más complejos",
          d: "Tengo dificultades para resolver problemas complejos"
        }
      },
      {
        id: 14,
        text: "¿Cómo evalúas tu capacidad de análisis y pensamiento crítico?",
        options: {
          a: "Analizo de manera profunda y crítica, considerando múltiples perspectivas",
          b: "Tengo buena capacidad analítica y pensamiento estructurado",
          c: "Analizo adecuadamente, pero a veces de manera superficial",
          d: "Mi capacidad de análisis y pensamiento crítico es limitada"
        }
      },
      {
        id: 15,
        text: "¿Qué tan eficiente eres en el uso de herramientas y tecnologías de tu área?",
        options: {
          a: "Domino completamente las herramientas y aprovecho su máximo potencial",
          b: "Uso eficientemente la mayoría de las herramientas necesarias",
          c: "Manejo las herramientas básicas, pero no todas las avanzadas",
          d: "Tengo conocimiento limitado de herramientas y tecnologías"
        }
      },
      {
        id: 16,
        text: "¿Cómo describes tu capacidad para mantenerte actualizado profesionalmente?",
        options: {
          a: "Tengo un sistema estructurado de actualización continua y anticipación de tendencias",
          b: "Me mantengo regularmente informado sobre desarrollos en mi área",
          c: "Me actualizo esporádicamente cuando surge la necesidad",
          d: "Raramente me actualizo o busco nueva información profesional"
        }
      }
    ]
  },
  {
    id: 3,
    name: "Habilidades Interpersonales y Liderazgo",
    description: "Evaluación de competencias sociales, comunicación, liderazgo e influencia",
    questions: [
      {
        id: 17,
        text: "¿Qué tan efectivo eres trabajando en equipo?",
        options: {
          a: "Soy un colaborador excepcional que potencia el rendimiento del equipo",
          b: "Trabajo muy bien en equipo y contribuyo positivamente",
          c: "Trabajo adecuadamente en equipo con esfuerzo consciente",
          d: "Tengo dificultades para trabajar efectivamente en equipo"
        }
      },
      {
        id: 18,
        text: "¿Cómo evalúas tus habilidades de comunicación interpersonal?",
        options: {
          a: "Comunico de manera excepcional, adaptándome a diferentes audiencias y contextos",
          b: "Tengo muy buenas habilidades de comunicación",
          c: "Comunico adecuadamente, pero puedo mejorar",
          d: "Tengo dificultades significativas para comunicarme efectivamente"
        }
      },
      {
        id: 19,
        text: "¿Qué tan desarrolladas están tus habilidades de liderazgo?",
        options: {
          a: "Lidero naturalmente e inspiro a otros hacia objetivos comunes",
          b: "Tengo buenas habilidades de liderazgo y influencia",
          c: "Puedo liderar en ciertas situaciones con esfuerzo consciente",
          d: "Tengo dificultades para liderar o influir en otros"
        }
      },
      {
        id: 20,
        text: "¿Cómo describes tu capacidad de networking y construcción de relaciones?",
        options: {
          a: "Construyo y mantengo redes profesionales sólidas estratégicamente",
          b: "Tengo buenas habilidades para establecer conexiones profesionales",
          c: "Establezco algunas conexiones, pero podría ser más sistemático",
          d: "Tengo dificultades para construir relaciones profesionales"
        }
      },
      {
        id: 21,
        text: "¿Qué tan efectivo eres manejando conflictos y situaciones difíciles?",
        options: {
          a: "Manejo conflictos de manera constructiva, encontrando soluciones ganar-ganar",
          b: "Generalmente manejo bien los conflictos y tensiones",
          c: "Manejo conflictos básicos, sin embargo me estresan las situaciones muy difíciles",
          d: "Evito o manejo mal los conflictos y situaciones tensas"
        }
      },
      {
        id: 22,
        text: "¿Cómo evalúas tu capacidad de influencia y persuasión?",
        options: {
          a: "Influyo y persuado efectivamente manteniendo la ética y respeto",
          b: "Tengo buena capacidad para influir en decisiones y opiniones",
          c: "Puedo influir en algunas situaciones con esfuerzo",
          d: "Tengo poca capacidad de influencia o persuasión"
        }
      },
      {
        id: 23,
        text: "¿Qué tan bien delegas y empoderas a otros?",
        options: {
          a: "Delego estratégicamente y empodero a otros para su crecimiento",
          b: "Delego apropiadamente y confío en las capacidades de otros",
          c: "Delego lo básico, sin embargo, me cuesta soltar el control",
          d: "Tengo grandes dificultades para delegar o empoderar"
        }
      },
      {
        id: 24,
        text: "¿Cómo describes tu capacidad para dar y recibir feedback constructivo?",
        options: {
          a: "Doy y recibo feedback de manera natural, constructiva y efectiva",
          b: "Manejo bien el feedback en ambas direcciones",
          c: "Puedo dar y recibir feedback básico con algo de incomodidad",
          d: "Tengo dificultades significativas con el feedback"
        }
      }
    ]
  },
  {
    id: 4,
    name: "Adaptabilidad y Gestión del Cambio",
    description: "Evaluación de la capacidad para adaptarse, manejar incertidumbre y ser resiliente",
    questions: [
      {
        id: 25,
        text: "¿Qué tan bien te adaptas a cambios organizacionales y del mercado?",
        options: {
          a: "Me adapto rápidamente y aprovecho los cambios como oportunidades",
          b: "Me adapto bien a los cambios con ajustes menores",
          c: "Me adapto gradualmente, manifestando cierta resistencia inicial",
          d: "Los cambios me generan mucho estrés y dificultad para adaptarme"
        }
      },
      {
        id: 26,
        text: "¿Cómo manejas la incertidumbre y ambigüedad en tu trabajo?",
        options: {
          a: "Prospero en situaciones inciertas y ambiguas, manteniéndome enfocado",
          b: "Manejo bien la incertidumbre con estrategias de afrontamiento",
          c: "La incertidumbre me incomoda, aunque puedo funcionar",
          d: "La incertidumbre me paraliza o afecta significativamente mi rendimiento"
        }
      },
      {
        id: 27,
        text: "¿Qué tan flexible eres en tu estilo de trabajo y enfoques?",
        options: {
          a: "Soy muy flexible y adapto mi estilo según las necesidades del contexto",
          b: "Tengo buena flexibilidad en mi forma de trabajar",
          c: "Puedo ser flexible cuando es necesario con algo de esfuerzo",
          d: "Tiendo a ser rígido en mis métodos y enfoques de trabajo"
        }
      },
      {
        id: 28,
        text: "¿Cómo evalúas tu capacidad de aprendizaje rápido de nuevas habilidades?",
        options: {
          a: "Aprendo nuevas habilidades muy rápidamente y las aplico efectivamente",
          b: "Tengo buena capacidad para aprender cosas nuevas",
          c: "Aprendo a un ritmo promedio con dedicación",
          d: "Me cuesta trabajo aprender nuevas habilidades"
        }
      },
      {
        id: 29,
        text: "¿Qué tan proactivo eres ante los desafíos y oportunidades?",
        options: {
          a: "Anticipo desafíos y busco activamente nuevas oportunidades",
          b: "Soy generalmente proactivo y tomo iniciativa",
          c: "Reacciono adecuadamente, sin embargo pocas veces me anticipo",
          d: "Tiendo a ser reactivo más que proactivo"
        }
      },
      {
        id: 30,
        text: "¿Cómo manejas el estrés y la presión laboral?",
        options: {
          a: "Manejo excelentemente el estrés y mantengo alto rendimiento bajo presión",
          b: "Manejo bien el estrés con técnicas efectivas de gestión",
          c: "Manejo el estrés básico, pero me afecta la presión alta",
          d: "El estrés me afecta significativamente y reduce mi efectividad"
        }
      },
      {
        id: 31,
        text: "¿Qué tan resiliente eres ante fracasos y contratiempos?",
        options: {
          a: "Soy muy resiliente, aprendo rápidamente y me recupero fortalecido",
          b: "Tengo buena capacidad de recuperación y aprendizaje de fracasos",
          c: "Me recupero de fracasos con tiempo y apoyo",
          d: "Los fracasos me afectan profundamente y me cuesta recuperarme"
        }
      },
      {
        id: 32,
        text: "¿Cómo describes tu mentalidad ante el riesgo y la innovación?",
        options: {
          a: "Abrazo el riesgo calculado y busco constantemente oportunidades de innovación",
          b: "Tengo una mentalidad abierta hacia riesgos e innovación",
          c: "Acepto algunos riesgos cuando es necesario",
          d: "Evito riesgos y prefiero mantener el status quo"
        }
      }
    ]
  },
  {
    id: 5,
    name: "Pensamiento Estratégico y Visión de Negocio",
    description: "Evaluación de la capacidad para pensar estratégicamente y comprender el contexto de negocio",
    questions: [
      {
        id: 33,
        text: "¿Qué tan bien comprendes el modelo de negocio y estrategia de tu organización?",
        options: {
          a: "Comprendo perfectamente la estrategia y cómo mi trabajo contribuye al éxito",
          b: "Tengo buena comprensión del negocio y mi rol en él",
          c: "Comprendo los aspectos básicos del negocio",
          d: "Tengo poco conocimiento sobre el modelo de negocio y estrategia"
        }
      },
      {
        id: 34,
        text: "¿Cómo evalúas tu capacidad de análisis del entorno y tendencias del mercado?",
        options: {
          a: "Analizo sistemáticamente tendencias y anticipo cambios del mercado",
          b: "Tengo buena capacidad de análisis del entorno",
          c: "Realizo análisis básicos del entorno cuando es necesario",
          d: "Raramente analizo el entorno o tendencias del mercado"
        }
      },
      {
        id: 35,
        text: "¿Qué tan efectivo eres tomando decisiones con perspectiva de largo plazo?",
        options: {
          a: "Tomo decisiones considerando siempre el impacto a largo plazo",
          b: "Generalmente considero las implicaciones a largo plazo",
          c: "A veces considero el largo plazo, pero me enfoco en lo inmediato",
          d: "Raramente considero implicaciones de largo plazo en mis decisiones"
        }
      },
      {
        id: 36,
        text: "¿Cómo describes tu capacidad para identificar oportunidades de mejora y crecimiento?",
        options: {
          a: "Identifico constantemente oportunidades y propongo iniciativas de valor",
          b: "Tengo buena capacidad para identificar oportunidades",
          c: "Ocasionalmente identifico algunas oportunidades",
          d: "Raramente identifico oportunidades de mejora o crecimiento"
        }
      },
      {
        id: 37,
        text: "¿Qué tan bien conectas tu trabajo individual con los objetivos organizacionales?",
        options: {
          a: "Siempre alineo mi trabajo con los objetivos estratégicos de la organización",
          b: "Generalmente conecto mi trabajo con los objetivos organizacionales",
          c: "A veces veo la conexión entre mi trabajo y los objetivos organizacionales",
          d: "Raramente considero cómo mi trabajo se conecta con objetivos organizacionales"
        }
      },
      {
        id: 38,
        text: "¿Cómo evalúas tu capacidad de pensamiento sistémico?",
        options: {
          a: "Veo y analizo las interconexiones y efectos sistémicos naturalmente",
          b: "Tengo buena capacidad para ver el panorama completo",
          c: "Puedo ver conexiones básicas entre diferentes elementos",
          d: "Tiendo a enfocarme en partes aisladas más que en el sistema completo"
        }
      },
      {
        id: 39,
        text: "¿Qué tan desarrollada está tu visión de futuro profesional e industria?",
        options: {
          a: "Tengo una visión clara del futuro de mi profesión e industria",
          b: "Tengo buena perspectiva sobre las tendencias futuras",
          c: "Tengo algunas ideas sobre hacia dónde se dirige mi industria",
          d: "No tengo clara visión sobre el futuro de mi profesión o industria"
        }
      },
      {
        id: 40,
        text: "¿Cómo describes tu capacidad para generar valor e impacto en tu organización?",
        options: {
          a: "Genero consistentemente valor e impacto medible en la organización",
          b: "Contribuyo regularmente con valor e impacto positivo",
          c: "Genero cierto valor, aunque no siempre es evidente o medible",
          d: "No estoy seguro del valor o impacto que genero"
        }
      }
    ]
  }
];

export interface TestResult {
  dimension: string;
  score: number;
  percentage: number;
  level: string;
  description: string;
}

export interface ComprehensiveResult {
  totalScore: number;
  totalPercentage: number;
  overallLevel: string;
  dimensionResults: TestResult[];
  recommendations: string[];
}

export const calculateResults = (answers: Record<number, string>): ComprehensiveResult => {
  const pointValues: Record<string, number> = { a: 4, b: 3, c: 2, d: 1 };
  
  const dimensionResults: TestResult[] = testData.map(dimension => {
    let dimensionScore = 0;
    let answeredQuestions = 0;

    dimension.questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        dimensionScore += pointValues[answer];
        answeredQuestions++;
      }
    });

    const maxPossibleScore = answeredQuestions * 4;
    const percentage = maxPossibleScore > 0 ? (dimensionScore / maxPossibleScore) * 100 : 0;
    
    let level = "";
    let description = "";

    if (percentage >= 90) {
      level = "EXCELENTE";
      description = "Fortaleza distintiva - Mantener y aprovechar";
    } else if (percentage >= 75) {
      level = "ALTO";
      description = "Competencia sólida - Optimizar para excelencia";
    } else if (percentage >= 60) {
      level = "MEDIO";
      description = "Área de mejora prioritaria - Desarrollar sistemáticamente";
    } else {
      level = "BAJO";
      description = "Área crítica - Intervención urgente necesaria";
    }

    return {
      dimension: dimension.name,
      score: dimensionScore,
      percentage: Math.round(percentage),
      level,
      description
    };
  });

  // Sistema de ponderación por dimensiones
  const dimensionWeights = [0.25, 0.20, 0.25, 0.15, 0.15]; // D1: 25%, D2: 20%, D3: 25%, D4: 15%, D5: 15%
  
  const totalScore = dimensionResults.reduce((sum, result) => sum + result.score, 0);
  
  // Cálculo del puntaje ponderado total
  let weightedTotal = 0;
  dimensionResults.forEach((result, index) => {
    weightedTotal += result.percentage * dimensionWeights[index];
  });
  
  const totalPercentage = Math.round(weightedTotal);

  let overallLevel = "";
  if (totalPercentage >= 85) overallLevel = "Profesional Excepcional";
  else if (totalPercentage >= 70) overallLevel = "Profesional Competente";
  else if (totalPercentage >= 55) overallLevel = "Profesional en Desarrollo";
  else overallLevel = "Profesional Inicial";

  const recommendations: string[] = [];
  
  dimensionResults.forEach(result => {
    if (result.percentage < 70) {
      switch (result.dimension) {
        case "Autoconocimiento Profesional":
          recommendations.push("Desarrollar autoconocimiento mediante evaluaciones 360°, coaching y definición clara de valores y propósito profesional.");
          break;
        case "Competencias Técnicas y Especializadas":
          recommendations.push("Actualizar competencias técnicas mediante capacitación especializada, certificaciones y práctica en proyectos desafiantes.");
          break;
        case "Habilidades Interpersonales y Liderazgo":
          recommendations.push("Fortalecer habilidades de liderazgo y comunicación a través de programas de desarrollo y práctica en roles de liderazgo.");
          break;
        case "Adaptabilidad y Gestión del Cambio":
          recommendations.push("Desarrollar agilidad y resiliencia mediante exposición a cambios, técnicas de manejo de estrés y mentalidad de crecimiento.");
          break;
        case "Pensamiento Estratégico y Visión de Negocio":
          recommendations.push("Desarrollar pensamiento estratégico estudiando el negocio, participando en planificación estratégica y ampliando visión de mercado.");
          break;
      }
    }
  });

  if (recommendations.length === 0) {
    recommendations.push("¡Felicitaciones! Mantén tu excelente nivel y busca oportunidades de mentoría para otros profesionales.");
  }

  return {
    totalScore,
    totalPercentage,
    overallLevel,
    dimensionResults,
    recommendations
  };
};