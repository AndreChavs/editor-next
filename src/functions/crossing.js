export default function crossing(objetos) {
  return {
    time: 1673214616932,
    blocks: [
      {
        id: '9OxFq8qvus',
        type: 'header',
        data: {
          text: 'Relatório de Recadastramento - Ceará',
          level: 1
        }
      },
      {
        id: 'qQjMz0a-AP',
        type: 'paragraph',
        data: {
          text: 'Inside Arqueologia'
        }
      },
      {
        id: 'I9oF-AAxO-',
        type: 'paragraph',
        data: {
          text: '2022-05-02'
        }
      },
      {
        id: 'zD0k0F7m8L',
        type: 'header',
        data: {
          text: 'Sumário',
          level: 2
        }
      },
      {
        id: 'ZfQwgm87eG',
        type: 'paragraph',
        data: {
          text: '<b>1 - Introdução</b>'
        }
      },
      {
        id: 'b1rme2AJO7',
        type: 'paragraph',
        data: {
          text: '<b>2 - Resultados</b>'
        }
      },
      ...sumarioResultSitios(objetos),
      {
        id: '1iizWWVHUd',
        type: 'paragraph',
        data: {
          text: '<b>3 - Bibliografia</b>'
        }
      },
      {
        id: 'dOwnyiqZIw',
        type: 'header',
        data: {
          text: 'Lista de Figuras',
          level: 2
        }
      },
      {
        id: 'RLdul1B-0J',
        type: 'list',
        data: {
          style: 'ordered',
          items: [
            'Mapa com a poligonal, vértices, ponto central e caminhamento no Sítio Abrigo das Emas',
            'Paisagem (foto arquivo: abrigoEmasFoto1.jpeg)',
            'Painel com Pinturas Rupestres (foto arquivo: abrigoEmasFoto2.jpeg)',
            'Mapa com a poligonal, vértices, ponto central e caminhamento no Sítio Olinda II ',
            'Paisagem do Sítio Arqueológico Olinda II (foto arquivo: olindaII.jpg)',
            'Painel com Gravuras Rupestres (foto arquivo: olindaII2.jpeg)',
            'Painel com Gravuras Rupestres (foto arquivo: olindaII3.jpeg)',
            ' Gravuras rupestres (foto arquivo: olindaII4.jpeg)'
          ]
        }
      },
      {
        id: 'xZUnp_Xs06',
        type: 'header',
        data: {
          text: 'Lista de Tabelas',
          level: 2
        }
      },
      {
        id: 'QbDQo8kj_l',
        type: 'list',
        data: {
          style: 'ordered',
          items: [
            'Total de Sítios Arqueológicos descritos neste relatório de Recadastramento',
            ...listaTabelas(objetos)
          ]
        }
      },
      {
        id: 'ygx6vMNJAZ',
        type: 'header',
        data: {
          text: '1 - Introdução',
          level: 1
        }
      },
      {
        id: 'LlCiVneni8',
        type: 'paragraph',
        data: {
          text: 'Este relatório apresenta os resultados parciais do Projeto de Cadastramento e Recadastramento de Sítios Arqueológicos nos municípios de Sobral, Forquilha, Irauçuba e Granja, no estado do Ceará, em conformidade com o edital nº 01/2021/2021, portaria nº 9, de 18 de fevereiro de 2022 e processo IPHAN IPHAN/CE Nº 01496.000208/2021-08. A execução deste projeto teve início no dia 12 de março de 2022 08:40:03 e término no dia 14 de março de 2022 19:02:27.'
        }
      },
      {
        id: 'UJLfHVNJ8T',
        type: 'paragraph',
        data: {
          text: 'A Tabela 1 apresenta os sítios arqueológicos que compões este relatório parcial contendo o nome dos sítios, suas coordenadas geográficas e margens de erros do GPS. Ressalta-se que em anexo a este relatório parcial estão os arquivos digitais com os mapas em formato de imagens (.jpeg), os arquivos shapefiles com os polígonos, vértices, caminhamentos e pontos centrais dos sítios identificados em campo.'
        }
      },
      {
        id: 'UXT7BpP2Gh',
        type: 'paragraph',
        data: {
          text: 'A estrutura deste relatório parcial está organizada em cinco capítulos com 1 – Introdução; 2 – Resultados; 3 – Bibliografia, contendo a Lista de Tabelas e a Lista de Figuras. No capítulo Resultados são apresentados os dados coletados em campo, como a localização e estado atual dos sítios bem como os respectivos mapas e fotografias. Ressalta-se que o arquivo digital em PDF possui diversos links com Referências Cruzadas permitindo o acesso rápido às tabelas, às fotografias, aos mapas e aos capítulos ou subcapítulos com um clique do mouse.'
        }
      },
      {
        id: 'u7uBLqUUP-',
        type: 'paragraph',
        data: {
          text: 'Tabela 1: Total de Sítios Arqueológicos descritos neste relatório de Recadastramento'
        }
      },
      {
        id: 'lYY1tpOhSg',
        type: 'table',
        data: {
          withHeadings: false,
          content: [
            [
              'n',
              'Nome do Sítio',
              'Latitude',
              'Longitude',
              'Altitude',
              'Erro GPS'
            ],
            ...tabelaSitios(objetos)
          ]
        }
      },
      {
        id: 'tjGvQ8ZYvf',
        type: 'header',
        data: {
          text: '2 - Resultado',
          level: 1
        }
      },
      {
        id: 'jIoglqD9Px',
        type: 'paragraph',
        data: {
          text: 'Neste capítulo são apresentados os diversos dados de campo contendo as coordenadas de localização, as descrições da paisagem, os dados atualizados dos proprietários do terreno onde os sítios se encontram, as fotografias e os mapas de localização conforme solicitações do Edital nº 02/2021 e das fichas do Cadastro Nacional de Sítios Arqueológicos - CNSA, nos termos da Portaria IPHAN nº 241, de 19/11/1998.'
        }
      },
      ...sitio(objetos)
    ],
    version: '2.26.4'
  }
}

function sumarioResultSitios(objetos) {
  const listResultSitios = objetos.map((item, index) => {
    return [
      {
        id: `vf4Ep16nHd${index}`,
        type: 'paragraph',
        data: {
          text: `2.${index + 1} - Sítio: Abrigo das Emas`
        }
      },
      {
        id: `PfowDrO4JK${index}`,
        type: 'list',
        data: {
          style: 'unordered',
          items: [
            `2.${index + 1}.1 Localização`,
            `2.${index + 1}.2 Dados do(a) Proprietário(a) e Paisagem`,
            `2.${index + 1}.3 Dados do Sítio Arqueológico`,
            `2.${index + 1}.3.1 Anotações de Campo`,
            `2.${index + 1}.4 Mapa de Localização do Sítio Abrigo das Emas`,
            `2.${index + 1}.5 Registro Fotográfico do Sítio Abrigo das Emas`
          ]
        }
      }
    ]
  })
  return [...listResultSitios].flat(1)
}

function listaTabelas(objetos) {
  const listaTabelas = objetos.map(() => {
    return [
      'Registros do local visitado',
      ' Dados do GPS',
      ' Dados do proprietário, ocupante atual, nome da localidade e endereço',
      ' Dados da Paisagem na área do Sítio',
      'Dados estruturais do Sítio',
      'Referenciais de localização do Sítio Arqueológico'
    ]
  })
  return [...listaTabelas].flat(1)
}

function tabelaSitios(objetos) {
  const listaSitios = objetos.map((item, index) => {
    return [
      index + 1,
      item.nomeLocalidade,
      item.latitude,
      item.longitude,
      item.altitude,
      item.precisaoGPS
    ]
  })
  return listaSitios
}

function sitio(objetos) {
  const sitio = objetos.map((item, index) => {
    return [
      {
        id: '3xGoOGXkD3',
        type: 'header',
        data: {
          text: `2.${index + 1} - Sítio: ${item.nomeLocalidade}`,
          level: 2
        }
      },
      {
        id: 'BBVSZx1Tsm',
        type: 'paragraph',
        data: {
          text: `Os dados abaixo correspondem ao solicitado pelo IPHAN conforme os campos da ficha de registro dos sítios arqueológicos identificados (Art. 20 da IN-IPHAN n.01/2015). Nos próximos subcapítulos serão detalhados os dados coletados durante a visitação na área do Sítio ${item.nomeLocalidade}.`
        }
      },
      {
        id: 'LyBN-nQYRb',
        type: 'header',
        data: {
          text: `2.${index + 1}.${index + 1} - Localização`,
          level: 3
        }
      },
      {
        id: 'u3G-y1Zfgi',
        type: 'paragraph',
        data: {
          text: 'A Tabela 2 abaixo apresenta os dados do local visitado como data-horário, o Estado, o Município e a cidade. Quanto à Tabela 3 esta contém os dados de um ponto de GPS representativo à área levantada.'
        }
      },
      {
        id: 'giiyew4f8D',
        type: 'paragraph',
        data: {
          text: 'Tabela 2: Registros do local visitado'
        }
      },
      {
        id: 'pxQ0xFjNt-',
        type: 'table',
        data: {
          withHeadings: false,
          content: [
            ['Equipe', 'Data Hora', 'Estado', 'Município', 'Cidade'],
            [
              `${item.equipe}`,
              '14 de mar de 2022 10:08:33',
              'Estado',
              `${item.municipio}`,
              `${item.nomeCidade}`
            ]
          ]
        }
      },
      {
        id: 'kGhntuj8uM',
        type: 'paragraph',
        data: {
          text: 'Tabela 3: Dados do GPS'
        }
      },
      {
        id: '6GdCFfEGDq',
        type: 'table',
        data: {
          withHeadings: false,
          content: [
            ['Longitude', 'Latitude', 'Altitude', 'Erro GPS'],
            [
              `${item.longitude}`,
              `${item.latitude}`,
              `${item.altitude}`,
              `${item.precisaoGPS}`
            ]
          ]
        }
      },
      {
        id: 'LTXgn_qvj-',
        type: 'header',
        data: {
          text: `2.${index + 1}.2 Dados do(a) Proprietário(a) e Paisagem`,
          level: 3
        }
      },
      {
        id: '2YMpC7Dl9-',
        type: 'paragraph',
        data: {
          text: 'A Tabela 4 contém os dados referentes à propriedade onde o sítio arqueológico se encontra. São apresentados os dados de: nome do proprietário, nome da localidade, endereço da localidade e do ocupante atual.\n'
        }
      },
      {
        id: 'u5lO1KPWBz',
        type: 'paragraph',
        data: {
          text: 'Tabela 4: Dados do proprietário, ocupante atual, nome da localidade e endereço'
        }
      },
      {
        id: 'gDiG75BUt1',
        type: 'table',
        data: {
          withHeadings: false,
          content: [
            [
              'Nome Proprietário',
              'Nome Localidade',
              'Endereço Localidade',
              'Ocupante Atual'
            ],
            [
              item.nomeProprietario,
              item.nomeLocalidade,
              item.endereco,
              item.nomceOcupante
            ]
          ]
        }
      },
      {
        id: 'uwNMWXtRJh',
        type: 'paragraph',
        data: {
          text: 'Para a descrição da Paisagem onde o sítio se encontra atualmente, a Tabela 5 apresenta dados relevantes do uso e cobertura do solo indicando o tipo de vegetação, o relevo, o tipo de solo, a textura do solo, o estado do solo e sua coloração com base no esquema de cores da carta Munsell.'
        }
      },
      {
        id: 'qV30QfivWJ',
        type: 'paragraph',
        data: {
          text: `Tabela 5: Dados da Paisagem na área do Sítio ${item.nomeLocalidade}`
        }
      },
      {
        id: '6q-lP7Xhqj',
        type: 'table',
        data: {
          withHeadings: false,
          content: [
            [
              'UsoTerreno',
              'TipoVegetacao',
              'Relevo',
              'TipoSolo',
              'TexturaSolo',
              'EstadoSolo',
              'CorSoloNivel' //nao achei
            ],
            [
              item.usoTerreno,
              item.tipoVegetacao,
              item.tipoRelevo,
              item.tipoSolo,
              item.texturaSolo,
              item.estadoSolo,
              '10YR 8/3 Very Pale Brown' //nao achei
            ]
          ]
        }
      },
      {
        id: 'k8T1knPWA_',
        type: 'header',
        data: {
          text: `2.${index + 1}.3 Dados do Sítio Arqueológico`,
          level: 3
        }
      },
      {
        id: '7wXLBP0j_Z',
        type: 'paragraph',
        data: {
          text: `O Sítio ${item.nomeLocalidade} foi caracterizado como Unicomponencial , Pré-colonial e Abrigo sob rocha . A Tabela 6 apresenta mais detalhes como a forma do sítio, suas estruturas e possíveis incidências de arte rupestre.`
        }
      },
      {
        id: 'FML5HVh8OJ',
        type: 'paragraph',
        data: {
          text: `Tabela 6: Dados estruturais do Sítio ${item.nomeLocalidade}`
        }
      },
      {
        id: '894DXW04VA',
        type: 'table',
        data: {
          withHeadings: false,
          content: [
            [
              'CategoriaSitio', //nao achei
              'TipoSitio', //nao achei
              'EstruturasSitio', //nao achei
              'ArteRupestre', //nao achei
              'ExposicaoSitio', //nao achei
              'ContextoDeposicao', //nao achei
              'FormaSitio' //nao achei
            ],
            [
              'Unicomponencial',
              'Pré-colonial',
              'NA',
              'Pintura',
              'Abrigo sob rocha',
              'Em superfície',
              item.formaSitio
            ]
          ]
        }
      },
      {
        id: 'wpm2EPCF7o',
        type: 'paragraph',
        data: {
          text: `Abaixo, na Tablela 7 estão dados relevantes sobre a localização do sítio arqueológico como os nomes e distâncias de rios ou igarapés próximos (em metros), o acesso e demais sítios relacionados.`
        }
      },
      {
        id: 'm2UYVEPArC',
        type: 'paragraph',
        data: {
          text: `Tabela 7: Referenciais de localização do Sítio Arqueológico ${item.nomeLocalidade}`
        }
      },
      {
        id: 'bLAGfB5hJw',
        type: 'table',
        data: {
          withHeadings: false,
          content: [
            [
              'AguaProxima', //não achei
              'DistanciaAguaProxima',
              'NomeRioProximo',
              'NomeSitio',
              'AcessoSitio',
              'SitioRelacionado'
            ],
            [
              'NA',
              item.distanciaCorregoProximo,
              item.nomeProprietario,
              item.nomeLocalidade,
              item.acessoSitioArqueo,
              item.sitioRelacionado
            ]
          ]
        }
      },
      {
        id: 'rlTUc5e8uM',
        type: 'paragraph',
        data: {
          text: `Quanto ao contexto de preservação atual do Sítio ${item.nomeLocalidade} , a Tablela 8 apresenta os dados relevantes sobre a densidade de material observada, a integridade do sítio, sua relevância, os fatores de destruição (caso verificados) e as medidas de preservação cabíveis.`
        }
      },
      {
        id: '7zWdiRNQwk',
        type: 'paragraph',
        data: {
          text: `Tabela 8: Referenciais de localização do Sítio Arqueológico ${item.nomeLocalidade}`
        }
      },
      {
        id: 'qgGgHjNckt',
        type: 'table',
        data: {
          withHeadings: false,
          content: [
            [
              'DensidadeMaterial', //incompativel
              'Integridade', //não achei
              'RelevanciaSitio', //incompativel
              'FatoresDestruicao', //não achei
              'MedidaPreservacao'
            ],
            [
              'Alta',
              'mais de 75%',
              'Alta',
              'Erosão eólica',
              item.medidasPreservacaoSitio
            ]
          ]
        }
      },
      {
        id: '_2f9WbNRMt',
        type: 'header',
        data: {
          text: `2.${index + 1}.3.1 Anotações de Campo`,
          level: 4
        }
      },
      {
        id: 'QsYGmxHXdD',
        type: 'paragraph',
        data: {
          text: 'Abaixo estão as observações de campo:'
        }
      },
      {
        id: 'R-fWHoi_qE',
        type: 'list',
        data: {
          style: 'unordered',
          items: [
            `Responsáveis.: ${item.equipe}`,
            'Local: Serrote do Bezerra',
            'Observações.: Sítio arqueológico pré colonial, unicomponencial abrigo sob rocha. Presença de vegetação é a caatinga. Sítio arqueológico preservado, localizado a 296 m de latitude em relação ao nível do mar.'
          ]
        }
      },
      {
        id: '9e52sb7HS5',
        type: 'header',
        data: {
          text: `2.${index + 1}.4 Mapa de Localização do Sítio`,
          level: 3
        }
      },
      {
        id: 'sIFXoPCe99',
        type: 'paragraph',
        data: {
          text: `Figura 1: Mapa com a poligonal, vértices, ponto central e caminhamento no Sítio ${item.nomeLocalidade}`
        }
      },
      {
        id: '0cKIKHpI-C',
        type: 'header',
        data: {
          text: `2.${index + 1}.5 Registro Fotográfico do Sítio ${
            item.nomeLocalidade
          }`,
          level: 3
        }
      },
      {
        id: 'MupADxQZfx',
        type: 'paragraph',
        data: {
          text: 'Figura 2: Paisagem (foto arquivo: abrigoEmasFoto1.jpeg)'
        }
      },
      {
        id: 'QKEsW1IH9U',
        type: 'paragraph',
        data: {
          text: 'Figura 3: Painel com Pinturas Rupestres (foto arquivo: abrigoEmasFoto2.jpeg)'
        }
      }
    ]
  })
  return [...sitio].flat(1)
}
