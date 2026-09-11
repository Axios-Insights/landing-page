import type { TranslationObject } from "./types";

export const landingRefreshLocales: Record<
  "en" | "es" | "fr" | "it" | "pt",
  TranslationObject
> = {
  pt: {
    pages: {
      home: {
        header: {
          navigation: {
            product_today: "Produto hoje",
          },
        },
        sections: {
          hero: {
            primary_cta: "Entender o fluxo",
            secondary_cta: "Desenhar um piloto",
          },
          real_problems: {
            eyebrow: "PROBLEMAS OBSERVADOS EM OPERAÇÕES REAIS",
            title: "A plataforma nasceu de perguntas que uma única tela não respondia.",
            description:
              "Os detalhes abaixo estão anonimizados, mas o padrão é recorrente: a informação existe; o trabalho está em reconstruir contexto suficiente para decidir.",
            cards: [
              {
                eyebrow: "OPERAÇÃO DE SEGURANÇA",
                title: "Uma pergunta, várias plataformas.",
                description:
                  "Para entender recorrência, localização e criticidade, a equipe precisava alternar entre fornecedores e reconstruir manualmente o contexto do motorista e do veículo.",
                tag: "INTEGRAÇÃO + CONTEXTO",
              },
              {
                eyebrow: "OPERAÇÃO GEOGRÁFICA",
                title: "Múltiplas telemetrias, nenhuma visão única.",
                description:
                  "Entrada e saída de zonas, tempo de permanência, posição recente e relatórios exigiam combinar dados de fontes diferentes em um mesmo fluxo operacional.",
                tag: "FUSÃO DE FONTES",
              },
              {
                eyebrow: "TRIAGEM OPERACIONAL",
                title: "Muitos alertas, reconstrução manual.",
                description:
                  "Quando os sinais chegam soltos, pessoas precisam revisar eventos um a um, buscar evidências e decidir quais casos realmente merecem intervenção.",
                tag: "PRIORIZAÇÃO",
              },
            ],
            note_label: "EXEMPLOS ANONIMIZADOS",
            note:
              "Não são estudos de caso nem claims de impacto. São situações observadas em discovery e implantação que orientaram o desenho do produto.",
          },
          product_today: {
            eyebrow: "PRODUTO HOJE",
            title: "A Central recebe um caso operacional — não apenas mais um alarme.",
            description:
              "O núcleo já implementado reúne sinais próximos, evidências e tratativa em uma fila priorizada. O operador consegue agir e devolver o desfecho ao histórico.",
            status: "FLUXO IMPLEMENTADO HOJE",
            capabilities: [
              {
                title: "Fila operacional",
                description: "Eventos chegam organizados por caso e prioridade.",
              },
              {
                title: "Alertas acumulados",
                description: "Sinais próximos podem ser reunidos numa mesma ocorrência.",
              },
              {
                title: "Evidências vinculadas",
                description: "Fotos, vídeos, localização e metadados acompanham o caso.",
              },
              {
                title: "Tratativa registrada",
                description: "Contato, observações, ações e finalização ficam no fluxo.",
              },
              {
                title: "Histórico e padrões",
                description: "Jornadas, rankings e recorrências apoiam a revisão de gestão.",
              },
              {
                title: "Parametrização",
                description: "Pesos, limites e protocolos podem variar por operação.",
              },
            ],
            demo: {
              window_label: "AXIOS · CENTRAL OPERACIONAL",
              data_label: "DADOS SANITIZADOS",
              queue_title: "Agora",
              queue_subtitle: "Fila priorizada",
              queue_count: "3 casos",
              queue: [
                {
                  title: "Fadiga + velocidade",
                  subtitle: "AXI-2048 · há 2 min",
                  status: "Alta",
                },
                {
                  title: "Excesso de velocidade",
                  subtitle: "AXI-1182 · há 6 min",
                  status: "Revisar",
                },
                {
                  title: "Entrada em geocerca",
                  subtitle: "AXI-9074 · há 11 min",
                  status: "Operação",
                },
              ],
              case_label: "CASO SELECIONADO",
              case_title: "Intervenção prioritária",
              priority: "ALTA PRIORIDADE",
              vehicle: "Veículo · AXI-2048",
              journey: "Jornada · em andamento",
              location: "Contexto · Rodovia Demo",
              signals_label: "SINAIS REUNIDOS NA MESMA JANELA",
              signals: [
                "Sonolência recorrente",
                "Excesso de velocidade",
                "Distração",
              ],
              evidence_label: "EVIDÊNCIAS + LOCALIZAÇÃO",
              action_label: "AÇÃO RECOMENDADA",
              action: "Acionar o responsável e avaliar uma parada segura.",
              action_detail:
                "O operador confirma a tratativa, registra observações e acompanha o caso até o desfecho.",
              audit_items: [
                "Origem dos sinais",
                "Regra aplicada",
                "Tratativa",
                "Desfecho",
              ],
              note:
                "Capturas da plataforma real. Identificadores e informações de cliente foram ocultados ou sanitizados para exposição pública; não exibimos parâmetros reais de scoring.",
            },
          },
          use_cases: {
            eyebrow: "ONDE A CAMADA CRIA VALOR",
            title: "Segurança e operação geográfica compartilham a mesma fundação.",
            description:
              "O diferencial não é uma feature isolada de câmera ou geocerca. É normalizar fontes fragmentadas e transformar sinais em contexto, eventos e workflows operacionais.",
          },
          trust_pilot: {
            eyebrow: "PILOTO + GOVERNANÇA",
            title: "Teste pequeno. Meça o processo. Expanda com evidência.",
            description:
              "O próximo passo não precisa ser um rollout completo. Um escopo limitado permite validar dados, workflow e valor antes de aumentar a operação.",
            pilot: {
              label: "ESTRUTURA SUGERIDA · ATÉ 90 DIAS",
              title: "Do primeiro acesso ao primeiro ciclo de decisão mensurável.",
              phases: [
                {
                  range: "0–30 DIAS",
                  title: "Conectar",
                  description:
                    "Fontes, acessos, eventos, responsáveis e linha de base operacional.",
                },
                {
                  range: "31–60 DIAS",
                  title: "Calibrar",
                  description:
                    "Amostras, regras, prioridades, protocolo e carga operacional.",
                },
                {
                  range: "61–90 DIAS",
                  title: "Operar",
                  description:
                    "Escopo limitado, tratativas, desfechos e decisão de expansão.",
                },
              ],
              success_label: "AVANÇAR QUANDO",
              success:
                "A Central prioriza melhor, age com menos reconstrução manual e registra desfechos úteis.",
            },
            governance: {
              eyebrow: "CONFIANÇA OPERACIONAL",
              title: "Controles concretos para uma operação rastreável.",
              description:
                "A plataforma foi desenhada para separar clientes, papéis e configurações sem transformar segurança em um slogan de marketing.",
              controls: [
                {
                  title: "Isolamento por cliente",
                  description:
                    "Contexto, dados e backend são escopados por tenant na arquitetura de produção.",
                },
                {
                  title: "Acesso por papel",
                  description:
                    "Viewer, operador, admin e equipe Axios recebem capacidades compatíveis com sua função.",
                },
                {
                  title: "Configuração versionada",
                  description:
                    "Regras efetivas do cliente são preservadas por revisão em vez de mudar silenciosamente com um template global.",
                },
                {
                  title: "Tratativa e desfecho",
                  description:
                    "Ação, observações e evolução do caso permanecem associadas ao histórico operacional.",
                },
              ],
              note:
                "Descrevemos controles que existem hoje; requisitos jurídicos e de retenção são tratados conforme o contexto de cada implantação.",
            },
            cta: "Desenhar um piloto",
          },
          get_in_touch: {
            eyebrow: "PRÓXIMO PASSO",
            title: "Vamos desenhar um piloto sobre a sua operação?",
            subtitle:
              "Em uma conversa curta, mapeamos as fontes que você já possui e definimos o menor fluxo capaz de provar valor — criticidade, geocercas, rastreamento, integração multi-fonte ou outra dor operacional repetível.",
            note:
              "O piloto começa pelas tecnologias atuais da operação. Escopo, dados, responsáveis e métricas são definidos antes de qualquer expansão.",
            whatsapp_cta: "Desenhar um piloto no WhatsApp",
            email_cta: "Enviar um e-mail",
            phone_cta: "Ligar para a Axios",
            whatsapp_message:
              "Olá! Acessei o site da Axios Insights e gostaria de mapear nossas fontes de dados e desenhar um piloto operacional com escopo e métricas bem definidos. Podemos conversar?",
          },
        },
      },
    },
  },
  en: {
    pages: {
      home: {
        header: {
          navigation: {
            product_today: "Product today",
          },
        },
        sections: {
          hero: {
            primary_cta: "Understand the workflow",
            secondary_cta: "Design a pilot",
          },
          real_problems: {
            eyebrow: "PROBLEMS OBSERVED IN REAL OPERATIONS",
            title: "The platform grew out of questions a single screen could not answer.",
            description:
              "The details below are anonymized, but the pattern repeats: the information exists; the hard part is rebuilding enough context to make a decision.",
            cards: [
              {
                eyebrow: "SAFETY OPERATION",
                title: "One question, several platforms.",
                description:
                  "To understand recurrence, location and criticality, teams had to switch between providers and manually rebuild the driver and vehicle context.",
                tag: "INTEGRATION + CONTEXT",
              },
              {
                eyebrow: "GEOGRAPHIC OPERATION",
                title: "Multiple telemetry sources, no unified view.",
                description:
                  "Zone entry and exit, dwell time, recent position and reports required data from different sources to work in one operational flow.",
                tag: "SOURCE FUSION",
              },
              {
                eyebrow: "OPERATIONAL TRIAGE",
                title: "Many alerts, manual reconstruction.",
                description:
                  "When signals arrive separately, people review events one by one, look for evidence and decide which cases actually deserve intervention.",
                tag: "PRIORITIZATION",
              },
            ],
            note_label: "ANONYMIZED EXAMPLES",
            note:
              "These are not case studies or impact claims. They are situations observed in discovery and deployment that informed the product design.",
          },
          product_today: {
            eyebrow: "PRODUCT TODAY",
            title: "The control center receives an operational case — not just another alert.",
            description:
              "The implemented core groups nearby signals, evidence and treatment into a prioritized queue. Operators can act and return the outcome to history.",
            status: "IMPLEMENTED WORKFLOW TODAY",
            capabilities: [
              {
                title: "Operational queue",
                description: "Events arrive organized by case and priority.",
              },
              {
                title: "Accumulated alerts",
                description: "Nearby signals can be grouped into the same occurrence.",
              },
              {
                title: "Linked evidence",
                description: "Photos, videos, location and metadata stay with the case.",
              },
              {
                title: "Recorded treatment",
                description: "Contact, notes, actions and closure remain in the workflow.",
              },
              {
                title: "History and patterns",
                description: "Journeys, rankings and recurrence support management review.",
              },
              {
                title: "Configuration",
                description: "Weights, limits and protocols can vary by operation.",
              },
            ],
            demo: {
              window_label: "AXIOS · OPERATIONS CENTER",
              data_label: "SANITIZED DATA",
              queue_title: "Now",
              queue_subtitle: "Prioritized queue",
              queue_count: "3 cases",
              queue: [
                {
                  title: "Fatigue + speed",
                  subtitle: "AXI-2048 · 2 min ago",
                  status: "High",
                },
                {
                  title: "Speeding",
                  subtitle: "AXI-1182 · 6 min ago",
                  status: "Review",
                },
                {
                  title: "Geofence entry",
                  subtitle: "AXI-9074 · 11 min ago",
                  status: "Ops",
                },
              ],
              case_label: "SELECTED CASE",
              case_title: "Priority intervention",
              priority: "HIGH PRIORITY",
              vehicle: "Vehicle · AXI-2048",
              journey: "Journey · in progress",
              location: "Context · Demo Highway",
              signals_label: "SIGNALS GROUPED IN THE SAME WINDOW",
              signals: ["Recurring drowsiness", "Speeding", "Distraction"],
              evidence_label: "EVIDENCE + LOCATION",
              action_label: "RECOMMENDED ACTION",
              action: "Escalate to the responsible team and assess a safe stop.",
              action_detail:
                "The operator confirms the treatment, records notes and follows the case through its outcome.",
              audit_items: [
                "Signal provenance",
                "Applied rule",
                "Treatment",
                "Outcome",
              ],
              note:
                "Screenshots from the real platform. Client identifiers and information were hidden or sanitized for public display; real scoring parameters are not shown.",
            },
          },
          use_cases: {
            eyebrow: "WHERE THE LAYER CREATES VALUE",
            title: "Safety and geographic operations share the same foundation.",
            description:
              "The differentiator is not an isolated camera or geofence feature. It is normalizing fragmented sources and turning signals into context, events and operational workflows.",
          },
          trust_pilot: {
            eyebrow: "PILOT + GOVERNANCE",
            title: "Test small. Measure the process. Expand with evidence.",
            description:
              "The next step does not need to be a full rollout. A limited scope can validate data, workflow and value before the operation expands.",
            pilot: {
              label: "SUGGESTED STRUCTURE · UP TO 90 DAYS",
              title: "From first access to the first measurable decision cycle.",
              phases: [
                {
                  range: "0–30 DAYS",
                  title: "Connect",
                  description:
                    "Sources, access, events, owners and an operational baseline.",
                },
                {
                  range: "31–60 DAYS",
                  title: "Calibrate",
                  description:
                    "Samples, rules, priorities, protocol and operational load.",
                },
                {
                  range: "61–90 DAYS",
                  title: "Operate",
                  description:
                    "Limited scope, treatments, outcomes and an expansion decision.",
                },
              ],
              success_label: "EXPAND WHEN",
              success:
                "The control center prioritizes better, rebuilds less context manually and records useful outcomes.",
            },
            governance: {
              eyebrow: "OPERATIONAL TRUST",
              title: "Concrete controls for a traceable operation.",
              description:
                "The platform separates clients, roles and configurations instead of reducing security to a marketing claim.",
              controls: [
                {
                  title: "Client isolation",
                  description:
                    "Context, data and backend are tenant-scoped in the production architecture.",
                },
                {
                  title: "Role-based access",
                  description:
                    "Viewers, operators, admins and the Axios team receive capabilities aligned with their role.",
                },
                {
                  title: "Versioned configuration",
                  description:
                    "Effective client rules are preserved by revision rather than silently changing with a global template.",
                },
                {
                  title: "Treatment and outcome",
                  description:
                    "Actions, notes and case evolution remain associated with operational history.",
                },
              ],
              note:
                "We describe controls that exist today; legal and retention requirements are handled according to each deployment context.",
            },
            cta: "Design a pilot",
          },
          get_in_touch: {
            eyebrow: "NEXT STEP",
            title: "Shall we design a pilot around your operation?",
            subtitle:
              "In a short conversation, we map the sources you already have and define the smallest workflow capable of proving value — criticality, geofencing, tracking, multi-source integration or another repeatable operational problem.",
            note:
              "The pilot starts from the technologies already in place. Scope, data, owners and metrics are defined before any expansion.",
            whatsapp_cta: "Design a pilot on WhatsApp",
            email_cta: "Send an email",
            phone_cta: "Call Axios",
            whatsapp_message:
              "Hello! I visited the Axios Insights website and would like to map our data sources and design an operational pilot with clear scope and metrics. Can we talk?",
          },
        },
      },
    },
  },
  es: {
    pages: {
      home: {
        header: {
          navigation: {
            product_today: "Producto hoy",
          },
        },
        sections: {
          hero: {
            primary_cta: "Entender el flujo",
            secondary_cta: "Diseñar un piloto",
          },
          real_problems: {
            eyebrow: "PROBLEMAS OBSERVADOS EN OPERACIONES REALES",
            title: "La plataforma nació de preguntas que una sola pantalla no podía responder.",
            description:
              "Los detalles están anonimizados, pero el patrón se repite: la información existe; el trabajo está en reconstruir suficiente contexto para decidir.",
            cards: [
              {
                eyebrow: "OPERACIÓN DE SEGURIDAD",
                title: "Una pregunta, varias plataformas.",
                description:
                  "Para entender recurrencia, ubicación y criticidad, el equipo debía alternar entre proveedores y reconstruir manualmente el contexto del conductor y del vehículo.",
                tag: "INTEGRACIÓN + CONTEXTO",
              },
              {
                eyebrow: "OPERACIÓN GEOGRÁFICA",
                title: "Múltiples telemetrías, ninguna visión única.",
                description:
                  "Entrada y salida de zonas, tiempo de permanencia, posición reciente e informes exigían combinar datos de distintas fuentes en un mismo flujo operativo.",
                tag: "FUSIÓN DE FUENTES",
              },
              {
                eyebrow: "TRIAJE OPERATIVO",
                title: "Muchas alertas, reconstrucción manual.",
                description:
                  "Cuando las señales llegan sueltas, las personas revisan eventos uno a uno, buscan evidencias y deciden qué casos realmente merecen intervención.",
                tag: "PRIORIZACIÓN",
              },
            ],
            note_label: "EJEMPLOS ANONIMIZADOS",
            note:
              "No son estudios de caso ni afirmaciones de impacto. Son situaciones observadas en discovery e implantación que orientaron el diseño del producto.",
          },
          product_today: {
            eyebrow: "PRODUCTO HOY",
            title: "La central recibe un caso operativo — no solamente otra alerta.",
            description:
              "El núcleo implementado reúne señales cercanas, evidencias y tratamiento en una cola priorizada. El operador puede actuar y devolver el resultado al historial.",
            status: "FLUJO IMPLEMENTADO HOY",
            capabilities: [
              {
                title: "Cola operativa",
                description: "Los eventos llegan organizados por caso y prioridad.",
              },
              {
                title: "Alertas acumuladas",
                description: "Las señales cercanas pueden agruparse en una misma ocurrencia.",
              },
              {
                title: "Evidencias vinculadas",
                description: "Fotos, videos, ubicación y metadatos acompañan el caso.",
              },
              {
                title: "Tratamiento registrado",
                description: "Contacto, notas, acciones y cierre permanecen en el flujo.",
              },
              {
                title: "Historial y patrones",
                description: "Jornadas, rankings y recurrencias apoyan la revisión de gestión.",
              },
              {
                title: "Parametrización",
                description: "Pesos, límites y protocolos pueden variar por operación.",
              },
            ],
            demo: {
              window_label: "AXIOS · CENTRAL OPERATIVA",
              data_label: "DATOS SANITIZADOS",
              queue_title: "Ahora",
              queue_subtitle: "Cola priorizada",
              queue_count: "3 casos",
              queue: [
                {
                  title: "Fatiga + velocidad",
                  subtitle: "AXI-2048 · hace 2 min",
                  status: "Alta",
                },
                {
                  title: "Exceso de velocidad",
                  subtitle: "AXI-1182 · hace 6 min",
                  status: "Revisar",
                },
                {
                  title: "Entrada en geocerca",
                  subtitle: "AXI-9074 · hace 11 min",
                  status: "Operación",
                },
              ],
              case_label: "CASO SELECCIONADO",
              case_title: "Intervención prioritaria",
              priority: "ALTA PRIORIDAD",
              vehicle: "Vehículo · AXI-2048",
              journey: "Jornada · en curso",
              location: "Contexto · Ruta Demo",
              signals_label: "SEÑALES REUNIDAS EN LA MISMA VENTANA",
              signals: [
                "Somnolencia recurrente",
                "Exceso de velocidad",
                "Distracción",
              ],
              evidence_label: "EVIDENCIAS + UBICACIÓN",
              action_label: "ACCIÓN RECOMENDADA",
              action: "Activar al responsable y evaluar una parada segura.",
              action_detail:
                "El operador confirma el tratamiento, registra observaciones y acompaña el caso hasta su resultado.",
              audit_items: [
                "Origen de señales",
                "Regla aplicada",
                "Tratamiento",
                "Resultado",
              ],
              note:
                "Capturas de la plataforma real. Los identificadores y la información del cliente fueron ocultados o sanitizados para exposición pública; no mostramos parámetros reales de scoring.",
            },
          },
          use_cases: {
            eyebrow: "DÓNDE CREA VALOR LA CAPA",
            title: "Seguridad y operación geográfica comparten la misma base.",
            description:
              "El diferencial no es una función aislada de cámara o geocerca. Es normalizar fuentes fragmentadas y transformar señales en contexto, eventos y flujos operativos.",
          },
          trust_pilot: {
            eyebrow: "PILOTO + GOBERNANZA",
            title: "Prueba en pequeño. Mide el proceso. Expande con evidencia.",
            description:
              "El siguiente paso no necesita ser un despliegue completo. Un alcance limitado permite validar datos, flujo y valor antes de ampliar la operación.",
            pilot: {
              label: "ESTRUCTURA SUGERIDA · HASTA 90 DÍAS",
              title: "Del primer acceso al primer ciclo de decisión medible.",
              phases: [
                {
                  range: "0–30 DÍAS",
                  title: "Conectar",
                  description:
                    "Fuentes, accesos, eventos, responsables y línea de base operativa.",
                },
                {
                  range: "31–60 DÍAS",
                  title: "Calibrar",
                  description:
                    "Muestras, reglas, prioridades, protocolo y carga operativa.",
                },
                {
                  range: "61–90 DÍAS",
                  title: "Operar",
                  description:
                    "Alcance limitado, tratamientos, resultados y decisión de expansión.",
                },
              ],
              success_label: "EXPANDIR CUANDO",
              success:
                "La central prioriza mejor, reconstruye menos contexto manualmente y registra resultados útiles.",
            },
            governance: {
              eyebrow: "CONFIANZA OPERATIVA",
              title: "Controles concretos para una operación trazable.",
              description:
                "La plataforma separa clientes, roles y configuraciones sin reducir la seguridad a una afirmación de marketing.",
              controls: [
                {
                  title: "Aislamiento por cliente",
                  description:
                    "Contexto, datos y backend están delimitados por tenant en la arquitectura de producción.",
                },
                {
                  title: "Acceso por rol",
                  description:
                    "Viewer, operador, admin y equipo Axios reciben capacidades acordes con su función.",
                },
                {
                  title: "Configuración versionada",
                  description:
                    "Las reglas efectivas del cliente se preservan por revisión en lugar de cambiar silenciosamente con una plantilla global.",
                },
                {
                  title: "Tratamiento y resultado",
                  description:
                    "Acciones, observaciones y evolución del caso permanecen asociadas al historial operativo.",
                },
              ],
              note:
                "Describimos controles que existen hoy; los requisitos legales y de retención se tratan según el contexto de cada implantación.",
            },
            cta: "Diseñar un piloto",
          },
          get_in_touch: {
            eyebrow: "SIGUIENTE PASO",
            title: "¿Diseñamos un piloto sobre tu operación?",
            subtitle:
              "En una conversación breve, mapeamos las fuentes que ya tienes y definimos el flujo más pequeño capaz de demostrar valor — criticidad, geocercas, rastreo, integración multifuente u otro problema operativo repetible.",
            note:
              "El piloto comienza con las tecnologías actuales de la operación. Alcance, datos, responsables y métricas se definen antes de cualquier expansión.",
            whatsapp_cta: "Diseñar un piloto por WhatsApp",
            email_cta: "Enviar un correo",
            phone_cta: "Llamar a Axios",
            whatsapp_message:
              "Hola. Visité el sitio de Axios Insights y me gustaría mapear nuestras fuentes de datos y diseñar un piloto operativo con alcance y métricas claros. ¿Podemos conversar?",
          },
        },
      },
    },
  },
  fr: {
    pages: {
      home: {
        header: {
          navigation: {
            product_today: "Produit actuel",
          },
        },
        sections: {
          hero: {
            primary_cta: "Comprendre le flux",
            secondary_cta: "Concevoir un pilote",
          },
          real_problems: {
            eyebrow: "PROBLÈMES OBSERVÉS DANS DES OPÉRATIONS RÉELLES",
            title: "La plateforme est née de questions auxquelles un seul écran ne pouvait pas répondre.",
            description:
              "Les détails ci-dessous sont anonymisés, mais le schéma se répète : l'information existe ; la difficulté est de reconstituer assez de contexte pour décider.",
            cards: [
              {
                eyebrow: "OPÉRATION DE SÉCURITÉ",
                title: "Une question, plusieurs plateformes.",
                description:
                  "Pour comprendre la récurrence, la localisation et la criticité, les équipes devaient passer d'un fournisseur à l'autre et reconstituer manuellement le contexte du conducteur et du véhicule.",
                tag: "INTÉGRATION + CONTEXTE",
              },
              {
                eyebrow: "OPÉRATION GÉOGRAPHIQUE",
                title: "Plusieurs télémétries, aucune vue unifiée.",
                description:
                  "Entrées et sorties de zones, temps de présence, position récente et rapports exigeaient de combiner des données de sources différentes dans un même flux opérationnel.",
                tag: "FUSION DE SOURCES",
              },
              {
                eyebrow: "TRI OPÉRATIONNEL",
                title: "Beaucoup d'alertes, une reconstitution manuelle.",
                description:
                  "Lorsque les signaux arrivent séparément, des personnes examinent les événements un par un, cherchent des preuves et décident quels cas méritent réellement une intervention.",
                tag: "PRIORISATION",
              },
            ],
            note_label: "EXEMPLES ANONYMISÉS",
            note:
              "Il ne s'agit ni d'études de cas ni de promesses d'impact, mais de situations observées lors des phases de découverte et de déploiement, qui ont orienté la conception du produit.",
          },
          product_today: {
            eyebrow: "LE PRODUIT AUJOURD'HUI",
            title: "Le centre de supervision reçoit un cas opérationnel — pas simplement une alerte de plus.",
            description:
              "Le socle déjà en place regroupe signaux proches, preuves et traitement dans une file priorisée. L'opérateur peut agir et reporter le résultat dans l'historique.",
            status: "FLUX DÉJÀ EN PLACE",
            capabilities: [
              {
                title: "File opérationnelle",
                description: "Les événements arrivent organisés par cas et par priorité.",
              },
              {
                title: "Alertes cumulées",
                description: "Des signaux proches peuvent être regroupés en un même incident.",
              },
              {
                title: "Preuves associées",
                description: "Photos, vidéos, localisation et métadonnées accompagnent le cas.",
              },
              {
                title: "Traitement enregistré",
                description: "Contact, notes, actions et clôture restent dans le flux.",
              },
              {
                title: "Historique et tendances",
                description: "Trajets, classements et récurrences alimentent la revue de gestion.",
              },
              {
                title: "Paramétrage",
                description: "Pondérations, seuils et protocoles peuvent varier selon l'opération.",
              },
            ],
            demo: {
              window_label: "AXIOS · CENTRE OPÉRATIONNEL",
              data_label: "DONNÉES MASQUÉES",
              queue_title: "Maintenant",
              queue_subtitle: "File priorisée",
              queue_count: "3 cas",
              queue: [
                {
                  title: "Fatigue + vitesse",
                  subtitle: "AXI-2048 · il y a 2 min",
                  status: "Élevée",
                },
                {
                  title: "Excès de vitesse",
                  subtitle: "AXI-1182 · il y a 6 min",
                  status: "À vérifier",
                },
                {
                  title: "Entrée en géozone",
                  subtitle: "AXI-9074 · il y a 11 min",
                  status: "Opérations",
                },
              ],
              case_label: "CAS SÉLECTIONNÉ",
              case_title: "Intervention prioritaire",
              priority: "PRIORITÉ ÉLEVÉE",
              vehicle: "Véhicule · AXI-2048",
              journey: "Trajet · en cours",
              location: "Contexte · Autoroute Démo",
              signals_label: "SIGNAUX REGROUPÉS DANS LA MÊME FENÊTRE",
              signals: ["Somnolence récurrente", "Excès de vitesse", "Distraction"],
              evidence_label: "PREUVES + LOCALISATION",
              action_label: "ACTION RECOMMANDÉE",
              action: "Alerter l'équipe responsable et évaluer un arrêt sécurisé.",
              action_detail:
                "L'opérateur confirme le traitement, consigne ses notes et suit le cas jusqu'à son dénouement.",
              audit_items: [
                "Provenance des signaux",
                "Règle appliquée",
                "Traitement",
                "Résultat",
              ],
              note:
                "Captures de la plateforme réelle. Les identifiants et informations clients ont été masqués ou neutralisés pour une diffusion publique ; les paramètres de scoring réels ne sont pas affichés.",
            },
          },
          use_cases: {
            eyebrow: "OÙ LA COUCHE CRÉE DE LA VALEUR",
            title: "Sécurité et opérations géographiques partagent le même socle.",
            description:
              "L'élément différenciant n'est pas une fonctionnalité isolée de caméra ou de géorepérage. C'est la normalisation de sources fragmentées et la transformation des signaux en contexte, en événements et en flux opérationnels.",
          },
          trust_pilot: {
            eyebrow: "PILOTE + GOUVERNANCE",
            title: "Testez à petite échelle. Mesurez le processus. Étendez sur preuves.",
            description:
              "L'étape suivante n'a pas besoin d'être un déploiement complet. Un périmètre limité permet de valider les données, le flux et la valeur avant d'étendre l'opération.",
            pilot: {
              label: "STRUCTURE PROPOSÉE · JUSQU'À 90 JOURS",
              title: "Du premier accès au premier cycle de décision mesurable.",
              phases: [
                {
                  range: "0–30 JOURS",
                  title: "Connecter",
                  description:
                    "Sources, accès, événements, responsables et situation de référence opérationnelle.",
                },
                {
                  range: "31–60 JOURS",
                  title: "Calibrer",
                  description:
                    "Échantillons, règles, priorités, protocole et charge opérationnelle.",
                },
                {
                  range: "61–90 JOURS",
                  title: "Opérer",
                  description:
                    "Périmètre limité, traitements, résultats et décision d'extension.",
                },
              ],
              success_label: "ÉTENDRE QUAND",
              success:
                "Le centre de supervision priorise mieux, reconstitue moins de contexte manuellement et consigne des résultats utiles.",
            },
            governance: {
              eyebrow: "CONFIANCE OPÉRATIONNELLE",
              title: "Des contrôles concrets pour une opération traçable.",
              description:
                "La plateforme sépare clients, rôles et configurations au lieu de réduire la sécurité à un argument marketing.",
              controls: [
                {
                  title: "Isolation par client",
                  description:
                    "Contexte, données et backend sont cloisonnés par tenant dans l'architecture de production.",
                },
                {
                  title: "Accès par rôle",
                  description:
                    "Lecteurs, opérateurs, administrateurs et équipe Axios disposent de droits adaptés à leur fonction.",
                },
                {
                  title: "Configuration versionnée",
                  description:
                    "Les règles effectives de chaque client sont conservées par révision au lieu de changer silencieusement avec un modèle global.",
                },
                {
                  title: "Traitement et résultat",
                  description:
                    "Actions, notes et évolution du cas restent associées à l'historique opérationnel.",
                },
              ],
              note:
                "Nous décrivons des contrôles qui existent aujourd'hui ; les exigences juridiques et de conservation sont traitées selon le contexte de chaque déploiement.",
            },
            cta: "Concevoir un pilote",
          },
          get_in_touch: {
            eyebrow: "PROCHAINE ÉTAPE",
            title: "Et si nous concevions un pilote adapté à votre opération ?",
            subtitle:
              "Lors d'un court échange, nous cartographions les sources dont vous disposez déjà et définissons le plus petit flux capable de prouver sa valeur — criticité, géorepérage, suivi, intégration multi-sources ou tout autre problème opérationnel récurrent.",
            note:
              "Le pilote part des technologies déjà en place. Périmètre, données, responsables et indicateurs sont définis avant toute extension.",
            whatsapp_cta: "Concevoir un pilote sur WhatsApp",
            email_cta: "Envoyer un e-mail",
            phone_cta: "Appeler Axios",
            whatsapp_message:
              "Bonjour ! J'ai consulté le site d'Axios Insights et j'aimerais cartographier nos sources de données et concevoir un pilote opérationnel avec un périmètre et des indicateurs clairement définis. Pouvons-nous en discuter ?",
          },
        },
      },
    },
  },
  it: {
    pages: {
      home: {
        header: {
          navigation: {
            product_today: "Il prodotto oggi",
          },
        },
        sections: {
          hero: {
            primary_cta: "Scopra il flusso",
            secondary_cta: "Definiamo un progetto pilota",
          },
          real_problems: {
            eyebrow: "PROBLEMI OSSERVATI IN CONTESTI OPERATIVI REALI",
            title: "La piattaforma è nata da domande a cui una sola schermata non sapeva rispondere.",
            description:
              "I dettagli qui sotto sono anonimizzati, ma lo schema si ripete: l'informazione esiste; la parte difficile è ricostruire abbastanza contesto per decidere.",
            cards: [
              {
                eyebrow: "OPERAZIONI DI SICUREZZA",
                title: "Una domanda, più piattaforme.",
                description:
                  "Per capire ricorrenza, posizione e criticità, i team dovevano passare da un fornitore all'altro e ricostruire manualmente il contesto del conducente e del veicolo.",
                tag: "INTEGRAZIONE + CONTESTO",
              },
              {
                eyebrow: "OPERAZIONI GEOGRAFICHE",
                title: "Più fonti di telemetria, nessuna vista unificata.",
                description:
                  "Ingressi e uscite dalle zone, tempo di permanenza, posizione recente e report richiedevano di combinare dati di fonti diverse in un unico flusso operativo.",
                tag: "FUSIONE DELLE FONTI",
              },
              {
                eyebrow: "TRIAGE OPERATIVO",
                title: "Molti alert, ricostruzione manuale.",
                description:
                  "Quando i segnali arrivano separati, le persone esaminano gli eventi uno per uno, cercano evidenze e decidono quali casi meritano davvero un intervento.",
                tag: "PRIORITIZZAZIONE",
              },
            ],
            note_label: "ESEMPI ANONIMIZZATI",
            note:
              "Non sono casi di studio né dichiarazioni di impatto. Sono situazioni osservate in fase di discovery e implementazione che hanno orientato la progettazione del prodotto.",
          },
          product_today: {
            eyebrow: "IL PRODOTTO OGGI",
            title: "La centrale riceve un caso operativo — non soltanto un altro alert.",
            description:
              "Il nucleo già implementato raggruppa segnali vicini, evidenze e gestione in una coda prioritizzata. Gli operatori possono agire e riportare l'esito nello storico.",
            status: "FLUSSO IMPLEMENTATO OGGI",
            capabilities: [
              {
                title: "Coda operativa",
                description: "Gli eventi arrivano organizzati per caso e priorità.",
              },
              {
                title: "Alert accumulati",
                description: "Segnali vicini possono essere raggruppati nella stessa occorrenza.",
              },
              {
                title: "Evidenze collegate",
                description: "Foto, video, posizione e metadati restano associati al caso.",
              },
              {
                title: "Gestione registrata",
                description: "Contatto, note, azioni e chiusura restano nel flusso.",
              },
              {
                title: "Storico e pattern",
                description: "Viaggi, classifiche e ricorrenze supportano la revisione gestionale.",
              },
              {
                title: "Configurazione",
                description: "Pesi, soglie e protocolli possono variare in base all'operatività.",
              },
            ],
            demo: {
              window_label: "AXIOS · CENTRALE OPERATIVA",
              data_label: "DATI SANIFICATI",
              queue_title: "Ora",
              queue_subtitle: "Coda prioritizzata",
              queue_count: "3 casi",
              queue: [
                {
                  title: "Affaticamento + velocità",
                  subtitle: "AXI-2048 · 2 min fa",
                  status: "Alta",
                },
                {
                  title: "Eccesso di velocità",
                  subtitle: "AXI-1182 · 6 min fa",
                  status: "Verifica",
                },
                {
                  title: "Ingresso in geofence",
                  subtitle: "AXI-9074 · 11 min fa",
                  status: "Operativo",
                },
              ],
              case_label: "CASO SELEZIONATO",
              case_title: "Intervento prioritario",
              priority: "PRIORITÀ ALTA",
              vehicle: "Veicolo · AXI-2048",
              journey: "Viaggio · in corso",
              location: "Contesto · Autostrada Demo",
              signals_label: "SEGNALI RAGGRUPPATI NELLA STESSA FINESTRA",
              signals: ["Sonnolenza ricorrente", "Eccesso di velocità", "Distrazione"],
              evidence_label: "EVIDENZE + POSIZIONE",
              action_label: "AZIONE CONSIGLIATA",
              action: "Inoltrare il caso al team responsabile e valutare una sosta sicura.",
              action_detail:
                "L'operatore conferma la gestione, registra le note e segue il caso fino all'esito.",
              audit_items: [
                "Origine dei segnali",
                "Regola applicata",
                "Gestione",
                "Esito",
              ],
              note:
                "Schermate della piattaforma reale. Identificativi e informazioni dei clienti sono stati nascosti o sanificati per la pubblicazione; i parametri reali di scoring non vengono mostrati.",
            },
          },
          use_cases: {
            eyebrow: "DOVE IL LIVELLO CREA VALORE",
            title: "Sicurezza e operazioni geografiche condividono le stesse fondamenta.",
            description:
              "L'elemento distintivo non è una funzionalità isolata di telecamera o geofence, ma la normalizzazione di fonti frammentate per trasformare i segnali in contesto, eventi e flussi operativi.",
          },
          trust_pilot: {
            eyebrow: "FASE PILOTA + GOVERNANCE",
            title: "Testare in piccolo. Misurare il processo. Crescere con le evidenze.",
            description:
              "Il passo successivo non deve essere per forza un rollout completo. Un perimetro limitato permette di validare dati, flusso e valore prima di estendere l'adozione.",
            pilot: {
              label: "STRUTTURA SUGGERITA · FINO A 90 GIORNI",
              title: "Dal primo accesso al primo ciclo decisionale misurabile.",
              phases: [
                {
                  range: "0–30 GIORNI",
                  title: "Collegare",
                  description:
                    "Fonti, accessi, eventi, responsabili e baseline operativa.",
                },
                {
                  range: "31–60 GIORNI",
                  title: "Calibrare",
                  description:
                    "Campioni, regole, priorità, protocollo e carico operativo.",
                },
                {
                  range: "61–90 GIORNI",
                  title: "Operare",
                  description:
                    "Perimetro limitato, casi gestiti, esiti e decisione sull'estensione.",
                },
              ],
              success_label: "ESTENDERE QUANDO",
              success:
                "La centrale assegna meglio le priorità, ricostruisce meno contesto a mano e registra esiti utili.",
            },
            governance: {
              eyebrow: "FIDUCIA OPERATIVA",
              title: "Controlli concreti per un'operatività tracciabile.",
              description:
                "La piattaforma separa clienti, ruoli e configurazioni invece di ridurre la sicurezza a uno slogan di marketing.",
              controls: [
                {
                  title: "Isolamento per cliente",
                  description:
                    "Contesto, dati e backend sono separati per tenant nell'architettura di produzione.",
                },
                {
                  title: "Accesso basato sui ruoli",
                  description:
                    "Viewer, operatori, admin e team Axios dispongono di funzionalità coerenti con il proprio ruolo.",
                },
                {
                  title: "Configurazione versionata",
                  description:
                    "Le regole effettive del cliente vengono conservate per revisione, invece di cambiare silenziosamente con un template globale.",
                },
                {
                  title: "Gestione ed esito",
                  description:
                    "Azioni, note ed evoluzione del caso restano associate allo storico operativo.",
                },
              ],
              note:
                "Descriviamo controlli che esistono oggi; i requisiti legali e di conservazione dei dati sono gestiti in base al contesto di ciascuna implementazione.",
            },
            cta: "Definiamo un progetto pilota",
          },
          get_in_touch: {
            eyebrow: "PROSSIMO PASSO",
            title: "Definiamo insieme un progetto pilota per la sua realtà operativa?",
            subtitle:
              "In una breve conversazione mappiamo le fonti già disponibili e definiamo il flusso più piccolo in grado di dimostrare valore — criticità, geofencing, tracciamento, integrazione multi-sorgente o un altro problema operativo ricorrente.",
            note:
              "Il progetto pilota parte dalle tecnologie già in uso. Perimetro, dati, responsabili e metriche vengono definiti prima di qualsiasi estensione.",
            whatsapp_cta: "Progetto pilota su WhatsApp",
            email_cta: "Invii un'e-mail",
            phone_cta: "Chiami Axios",
            whatsapp_message:
              "Salve! Ho visitato il sito di Axios Insights e vorrei mappare le nostre fonti di dati e definire un progetto pilota operativo con perimetro e metriche chiari. Possiamo parlarne?",
          },
        },
      },
    },
  },
};
