import {
  ResidenteResumo,
  CuidadorFuncionario,
  AnotacaoDiariaPlantao,
  ItemPrescricaoEnfermagem,
  MapaPrescricaoMensal,
  EvolucaoEnfermagem,
  RegistroGlicemiaSinais,
  ChecagemPrescricaoRegistro
} from '../types/care';

export const ITENS_PRESCRICAO_PADRAO: ItemPrescricaoEnfermagem[] = [
  { id: 1, descricao: 'Medicar conforme prescrição médica', turnosAplicaveis: ['M', 'T', 'N'], categoria: 'medicacao' },
  { id: 2, descricao: 'Realizar banho de aspersão e higiene pessoal', turnosAplicaveis: ['M', 'T'], categoria: 'higiene' },
  { id: 3, descricao: 'Realizar banho no leito e higiene pessoal', turnosAplicaveis: ['M'], categoria: 'higiene' },
  { id: 4, descricao: 'Aplicar creme hidratante no corpo após o banho', turnosAplicaveis: ['M', 'T'], categoria: 'conforto' },
  { id: 5, descricao: 'Auxiliar na alimentação (refeições principais)', turnosAplicaveis: ['M', 'T', 'N'], categoria: 'alimentacao' },
  { id: 6, descricao: 'Ofertar ingesta de líquidos frequente', turnosAplicaveis: ['M', 'T', 'N'], categoria: 'alimentacao' },
  { id: 7, descricao: 'Realizar higiene oral após refeições', turnosAplicaveis: ['M', 'T', 'N'], categoria: 'higiene' },
  { id: 8, descricao: 'Realizar massagem de conforto', turnosAplicaveis: ['T', 'N'], categoria: 'conforto' },
  { id: 9, descricao: 'Proporcionar interação com outros clientes/residentes', turnosAplicaveis: ['M', 'T'], categoria: 'conforto' },
  { id: 10, descricao: 'Observar e anotar s/n nível de consciência e alterações de comportamento', turnosAplicaveis: ['M', 'T', 'N'], categoria: 'observacao' },
  { id: 11, descricao: 'Observar e anotar s/n condições da pele', turnosAplicaveis: ['M', 'T', 'N'], categoria: 'observacao' },
  { id: 12, descricao: 'Observar e anotar s/n dificuldade na deglutição', turnosAplicaveis: ['M', 'T', 'N'], categoria: 'observacao' },
  { id: 13, descricao: 'Encaminhar ao banho de sol matinal', turnosAplicaveis: ['M'], categoria: 'mobilidade' },
  { id: 14, descricao: 'Auxiliar na movimentação e deambulação', turnosAplicaveis: ['M', 'T'], categoria: 'mobilidade' },
  { id: 15, descricao: 'Realizar troca de fralda e higiene íntima', turnosAplicaveis: ['M', 'T', 'N'], categoria: 'higiene' },
  { id: 16, descricao: 'Realizar mudança de decúbito de 3/3 horas s/necessário', turnosAplicaveis: ['M', 'T', 'N'], categoria: 'mobilidade' }
];

export const RESIDENTES_INICIAIS: ResidenteResumo[] = [
  {
    id: 'res-001',
    nomeCompleto: 'Maria Elisabete Gonçalves',
    dataNascimento: '1942-05-18',
    idade: 84,
    cpf: '245.891.032-15',
    rg: '14.892.301-8',
    sexo: 'feminino',
    quarto: 'Suíte 102 - Ala Tulipas',
    grauDependencia: 'grau2',
    mobilidade: 'bengala_andador',
    tipoSanguineo: 'O+',
    dieta: 'Diabética, hipossódica, fracionada',
    alergias: ['Penicilina', 'Dipirona'],
    diagnosticos: ['Diabetes Mellitus Tipo 2', 'Hipertensão Arterial Sistêmica', 'Artrose moderada'],
    medicamentosContinuos: [
      { id: 'm1', nome: 'Insulina NPH', dosagem: '18 UI', horario: '07:00 e 21:00', instrucoes: 'Subcutânea prévia ao desjejum e ceia' },
      { id: 'm2', nome: 'Losartana Potássica', dosagem: '50mg', horario: '08:00', instrucoes: 'Via oral' },
      { id: 'm3', nome: 'Metformina', dosagem: '850mg', horario: '12:30', instrucoes: 'Após almoço' }
    ],
    convenioMedico: 'Amil Sênior',
    hospitalReferencia: 'Hospital Brasil Santo André',
    nomeResponsavel: 'Cláudia Gonçalves (Filha)',
    telefoneResponsavel: '(11) 98765-4321',
    observacoesGerais: 'Necessita de aferição de glicemia capilar às 05h, 11h30 e 17h. Boa aceitação da hidratação quando incentivada.'
  },
  {
    id: 'res-002',
    nomeCompleto: 'Antônio Carlos de Almeida',
    dataNascimento: '1938-11-04',
    idade: 87,
    cpf: '109.342.876-44',
    rg: '09.332.145-2',
    sexo: 'masculino',
    quarto: 'Suíte 105 - Ala Orquídeas',
    grauDependencia: 'grau3',
    mobilidade: 'acamado',
    tipoSanguineo: 'A+',
    dieta: 'Pastosa liquidificada batida, suplemento matutino',
    alergias: ['Sulfas'],
    diagnosticos: ['Sequela de AVC Isquêmico (2021)', 'Déficit motor à direita', 'Disvasia leve'],
    medicamentosContinuos: [
      { id: 'm4', nome: 'AAS Infantil', dosagem: '100mg', horario: '12:00' },
      { id: 'm5', nome: 'Atorvastatina', dosagem: '20mg', horario: '20:00' }
    ],
    convenioMedico: 'Notredame Intermédica',
    hospitalReferencia: 'Hospital Santa Helena',
    nomeResponsavel: 'Marcelo de Almeida (Filho)',
    telefoneResponsavel: '(11) 97123-9988',
    observacoesGerais: 'Exige mudança de decúbito estrita de 3 em 3 horas. Banho no leito diário com hidratação intensa.'
  },
  {
    id: 'res-003',
    nomeCompleto: 'Helena Silveira Ramos',
    dataNascimento: '1947-03-22',
    idade: 79,
    cpf: '334.567.890-11',
    rg: '18.776.432-0',
    sexo: 'feminino',
    quarto: 'Apartamento 201 - Ala Lírios',
    grauDependencia: 'grau1',
    mobilidade: 'independente',
    tipoSanguineo: 'B+',
    dieta: 'Geral balanceada sem restrições graves',
    alergias: ['Nenhuma conhecida'],
    diagnosticos: ['Osteoporose', 'Insônia leve'],
    medicamentosContinuos: [
      { id: 'm6', nome: 'Carbonato de Cálcio + Vitamina D', dosagem: '500mg', horario: '09:00' },
      { id: 'm7', nome: 'Zolpidem', dosagem: '5mg', horario: '21:30', instrucoes: 'Se necessário para dormir' }
    ],
    convenioMedico: 'Bradesco Saúde',
    hospitalReferencia: 'Hospital e Maternidade Cristóvão da Gama',
    nomeResponsavel: 'Renata Silveira (Sobrinha)',
    telefoneResponsavel: '(11) 99341-7722',
    observacoesGerais: 'Muito sociável, participa ativamente de todas as oficinas de estimulação cognitiva e lúdica.'
  },
  {
    id: 'res-004',
    nomeCompleto: 'Sebastião Ferreira Pinto',
    dataNascimento: '1940-08-30',
    idade: 86,
    cpf: '412.980.123-99',
    rg: '11.234.890-5',
    sexo: 'masculino',
    quarto: 'Suíte 108 - Ala Camélias',
    grauDependencia: 'grau2',
    mobilidade: 'cadeira_rodas',
    tipoSanguineo: 'AB+',
    dieta: 'Pastosa com espessante nos líquidos',
    alergias: ['Iodo'],
    diagnosticos: ['Doença de Parkinson estágio II', 'Hipoacusia bilateral'],
    medicamentosContinuos: [
      { id: 'm8', nome: 'Prolopa', dosagem: '200/50mg', horario: '08:00, 14:00, 20:00' }
    ],
    convenioMedico: 'Prevent Senior',
    hospitalReferencia: 'Hospital Sancta Maggiore',
    nomeResponsavel: 'Carlos Pinto (Filho)',
    telefoneResponsavel: '(11) 98822-1133',
    observacoesGerais: 'Dificuldade para engolir água pura, utilizar 1 medida de espessante alimentar.'
  }
];

export const CUIDADORES_INICIAIS: CuidadorFuncionario[] = [
  {
    id: 'func-101',
    matricula: 'MAT-101',
    nomeCompleto: 'Juliana Rocha Mendes',
    cargo: 'Cuidador(a) de Idosos',
    departamento: 'Cuidados & Enfermagem',
    escala: '12x36_diurno (07:00 às 19:00)',
    ativo: true
  },
  {
    id: 'func-102',
    matricula: 'MAT-102',
    nomeCompleto: 'Carlos Eduardo Barbosa',
    cargo: 'Técnico(a) de Enfermagem',
    departamento: 'Cuidados & Enfermagem',
    escala: '12x36_noturno (19:00 às 07:00)',
    registroProfissional: 'COREN-SP 482.910-TE',
    ativo: true
  },
  {
    id: 'func-103',
    matricula: 'MAT-103',
    nomeCompleto: 'Mariana Azevedo Costa',
    cargo: 'Enfermeiro(a) Responsável Técnico (RT)',
    departamento: 'Cuidados & Enfermagem',
    escala: '5x2 (08:00 às 17:00)',
    registroProfissional: 'COREN-SP 219.403-ENF',
    ativo: true
  },
  {
    id: 'func-104',
    matricula: 'MAT-104',
    nomeCompleto: 'Patrícia Lima dos Santos',
    cargo: 'Auxiliar de Enfermagem',
    departamento: 'Cuidados & Enfermagem',
    escala: '12x36_diurno (07:00 às 19:00)',
    registroProfissional: 'COREN-SP 312.004-AE',
    ativo: true
  },
  {
    id: 'func-105',
    matricula: 'MAT-105',
    nomeCompleto: 'Rodrigo Martins Silveira',
    cargo: 'Cuidador(a) de Idosos',
    departamento: 'Cuidados & Enfermagem',
    escala: '12x36_noturno (19:00 às 07:00)',
    ativo: true
  }
];

// Chaves do LocalStorage
const STORAGE_KEYS = {
  RESIDENTES: 'vl_controle_residentes_v1',
  CUIDADORES: 'vl_controle_cuidadores_v1',
  ANOTACOES_PLANTAO: 'vl_controle_anotacoes_v1',
  MAPA_PRESCRICAO: 'vl_controle_mapa_prescricao_v1',
  EVOLUCOES: 'vl_controle_evolucoes_v1',
  GLICEMIA_SINAIS: 'vl_controle_glicemia_sinais_v1',
  CUIDADOR_LOGADO: 'vl_controle_cuidador_ativo_v1'
};

// Funções de Gerenciamento do LocalStorage
export function getResidentes(): ResidenteResumo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.RESIDENTES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.RESIDENTES, JSON.stringify(RESIDENTES_INICIAIS));
      return RESIDENTES_INICIAIS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Erro ao ler residentes:', e);
    return RESIDENTES_INICIAIS;
  }
}

export function saveResidentes(list: ResidenteResumo[]) {
  try {
    localStorage.setItem(STORAGE_KEYS.RESIDENTES, JSON.stringify(list));
  } catch (e) {
    console.error('Erro ao salvar residentes:', e);
  }
}

export function getCuidadores(): CuidadorFuncionario[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CUIDADORES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.CUIDADORES, JSON.stringify(CUIDADORES_INICIAIS));
      return CUIDADORES_INICIAIS;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Erro ao ler cuidadores:', e);
    return CUIDADORES_INICIAIS;
  }
}

export function saveCuidadores(list: CuidadorFuncionario[]) {
  try {
    localStorage.setItem(STORAGE_KEYS.CUIDADORES, JSON.stringify(list));
  } catch (e) {
    console.error('Erro ao salvar cuidadores:', e);
  }
}

export function findCuidadorByMatricula(matricula: string): CuidadorFuncionario | undefined {
  const list = getCuidadores();
  const clean = matricula.trim().toUpperCase();
  return list.find(c => 
    c.matricula.toUpperCase() === clean || 
    c.matricula.replace(/\D/g, '') === clean.replace(/\D/g, '') ||
    c.id.toUpperCase() === clean
  );
}

export function getCuidadorAtivo(): CuidadorFuncionario | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CUIDADOR_LOGADO);
    if (raw) return JSON.parse(raw);
    return CUIDADORES_INICIAIS[0]; // Padrão: Juliana Rocha Mendes
  } catch {
    return CUIDADORES_INICIAIS[0];
  }
}

export function setCuidadorAtivo(cuidador: CuidadorFuncionario | null) {
  if (cuidador) {
    localStorage.setItem(STORAGE_KEYS.CUIDADOR_LOGADO, JSON.stringify(cuidador));
  } else {
    localStorage.removeItem(STORAGE_KEYS.CUIDADOR_LOGADO);
  }
}

// Anotações Diárias de Plantão
export function getAnotacoesPlantao(residenteId?: string): AnotacaoDiariaPlantao[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ANOTACOES_PLANTAO);
    let list: AnotacaoDiariaPlantao[] = raw ? JSON.parse(raw) : [];
    
    // Seed initial records if empty
    if (list.length === 0) {
      list = gerarAnotacoesIniciais();
      localStorage.setItem(STORAGE_KEYS.ANOTACOES_PLANTAO, JSON.stringify(list));
    }

    if (residenteId) {
      return list.filter(item => item.residenteId === residenteId);
    }
    return list;
  } catch (e) {
    console.error('Erro ao ler anotações de plantão:', e);
    return [];
  }
}

export function saveAnotacaoPlantao(anotacao: AnotacaoDiariaPlantao): AnotacaoDiariaPlantao {
  const all = getAnotacoesPlantao();
  const index = all.findIndex(a => a.id === anotacao.id);
  if (index >= 0) {
    all[index] = { ...anotacao, atualizadoEm: new Date().toISOString() };
  } else {
    all.unshift(anotacao);
  }
  localStorage.setItem(STORAGE_KEYS.ANOTACOES_PLANTAO, JSON.stringify(all));
  return anotacao;
}

// Checagem de Prescrições (Mapa Mensal de 31 dias)
export function getMapaPrescricao(residenteId: string, mes: number, ano: number): MapaPrescricaoMensal {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEYS.MAPA_PRESCRICAO}_${residenteId}_${ano}_${mes}`);
    if (raw) return JSON.parse(raw);
    
    // Cria mapa inicial vazio ou com checagens para os dias anteriores
    const novo: MapaPrescricaoMensal = {
      id: `${residenteId}_${ano}_${mes}`,
      residenteId,
      mes,
      ano,
      checagens: gerarChecagensExemplo(residenteId),
      atualizadoEm: new Date().toISOString()
    };
    localStorage.setItem(`${STORAGE_KEYS.MAPA_PRESCRICAO}_${residenteId}_${ano}_${mes}`, JSON.stringify(novo));
    return novo;
  } catch {
    return {
      id: `${residenteId}_${ano}_${mes}`,
      residenteId,
      mes,
      ano,
      checagens: {},
      atualizadoEm: new Date().toISOString()
    };
  }
}

export function saveMapaPrescricao(mapa: MapaPrescricaoMensal) {
  try {
    mapa.atualizadoEm = new Date().toISOString();
    localStorage.setItem(
      `${STORAGE_KEYS.MAPA_PRESCRICAO}_${mapa.residenteId}_${mapa.ano}_${mapa.mes}`,
      JSON.stringify(mapa)
    );
  } catch (e) {
    console.error('Erro ao salvar mapa de prescrição:', e);
  }
}

// Evoluções de Enfermagem
export function getEvolucoes(residenteId?: string): EvolucaoEnfermagem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EVOLUCOES);
    let list: EvolucaoEnfermagem[] = raw ? JSON.parse(raw) : [];
    if (list.length === 0) {
      list = gerarEvolucoesIniciais();
      localStorage.setItem(STORAGE_KEYS.EVOLUCOES, JSON.stringify(list));
    }
    if (residenteId) {
      return list.filter(e => e.residenteId === residenteId);
    }
    return list;
  } catch {
    return [];
  }
}

export function saveEvolucao(evolucao: EvolucaoEnfermagem): EvolucaoEnfermagem {
  const all = getEvolucoes();
  const index = all.findIndex(e => e.id === evolucao.id);
  if (index >= 0) {
    all[index] = evolucao;
  } else {
    all.unshift(evolucao);
  }
  localStorage.setItem(STORAGE_KEYS.EVOLUCOES, JSON.stringify(all));
  return evolucao;
}

// Glicemia & Sinais Vitais
export function getGlicemiaSinais(residenteId?: string): RegistroGlicemiaSinais[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.GLICEMIA_SINAIS);
    let list: RegistroGlicemiaSinais[] = raw ? JSON.parse(raw) : [];
    if (list.length === 0) {
      list = gerarGlicemiaSinaisIniciais();
      localStorage.setItem(STORAGE_KEYS.GLICEMIA_SINAIS, JSON.stringify(list));
    }
    if (residenteId) {
      return list.filter(r => r.residenteId === residenteId);
    }
    return list;
  } catch {
    return [];
  }
}

export function saveRegistroGlicemiaSinais(registro: RegistroGlicemiaSinais): RegistroGlicemiaSinais {
  const all = getGlicemiaSinais();
  const index = all.findIndex(r => r.id === registro.id);
  if (index >= 0) {
    all[index] = registro;
  } else {
    all.unshift(registro);
  }
  localStorage.setItem(STORAGE_KEYS.GLICEMIA_SINAIS, JSON.stringify(all));
  return registro;
}

// Mock Generators para dar vida imediata ao aplicativo
function gerarAnotacoesIniciais(): AnotacaoDiariaPlantao[] {
  const hoje = new Date().toISOString().split('T')[0];
  return [
    {
      id: 'anot-001',
      residenteId: 'res-001',
      data: hoje,
      turno: 'diurno',
      cuidadorMatricula: 'MAT-101',
      cuidadorNome: 'Juliana Rocha Mendes',
      cuidadorCargo: 'Cuidador(a) de Idosos',
      recebimentoPlantao: {
        estado: 'acordado',
        nivelConsciencia: 'orientada',
        locomocao: 'deambulando_auxilio'
      },
      sinaisVitais: {
        paSistolica: 120,
        paDiastolica: 80,
        freqCardiaca: 74,
        freqRespiratoria: 18,
        temperatura: 36.4,
        saturacaoO2: 97,
        glicemia: 114,
        horarioGlicemia: '07:00'
      },
      alimentacao: {
        via: 'oral',
        desjejum: 'total',
        suplementoManha: 'total',
        almoco: 'total',
        suplementoTarde: 'parcial',
        jantar: 'total',
        volumeHidricoMl: 1400
      },
      peleCurativos: {
        integridadeCutanea: 'preservada',
        realizadoCurativo: false,
        edema: 'nao_apresenta'
      },
      eliminacoes: {
        diuresePresenca: true,
        diureseAspecto: 'Amarelo claro, odor fisiológico',
        diureseVolumeAprox: '4 diureses no plantão (fralda/vaso)',
        evacuacaoPresenca: true,
        evacuacaoAspecto: 'Fezes pastosas normais',
        evacuacaoFrequencia: '1x no período da manhã'
      },
      passagemPlantao: {
        status: 'sem_intercorrencia',
        relatoIntercorrencia: '',
        anotacoesGerais: 'Residente tranquila durante todo o dia. Participou das atividades matinais e almoçou com boa aceitação. Glicemia de 114 mg/dL prévia ao café.'
      },
      criadoEm: new Date().toISOString()
    },
    {
      id: 'anot-002',
      residenteId: 'res-002',
      data: hoje,
      turno: 'diurno',
      cuidadorMatricula: 'MAT-104',
      cuidadorNome: 'Patrícia Lima dos Santos',
      cuidadorCargo: 'Auxiliar de Enfermagem',
      cuidadorRegistro: 'COREN-SP 312.004-AE',
      recebimentoPlantao: {
        estado: 'leito',
        nivelConsciencia: 'calma',
        locomocao: 'acamada'
      },
      sinaisVitais: {
        paSistolica: 130,
        paDiastolica: 85,
        freqCardiaca: 68,
        freqRespiratoria: 16,
        temperatura: 36.6,
        saturacaoO2: 96
      },
      alimentacao: {
        via: 'oral',
        desjejum: 'total',
        suplementoManha: 'total',
        almoco: 'parcial',
        suplementoTarde: 'total',
        jantar: 'parcial',
        volumeHidricoMl: 1100
      },
      peleCurativos: {
        integridadeCutanea: 'nao_preservada',
        realizadoCurativo: true,
        regiaoCurativo: 'Região sacral (hiperemia grau 1)',
        materialUtilizado: 'Ácidos Graxos Essenciais (Dersani) + placa de hidrocoloide fina',
        edema: 'mid',
        grauEdema: '+/4+'
      },
      eliminacoes: {
        diuresePresenca: true,
        diureseAspecto: 'Amarelo-citrino em fralda geriátrica',
        diureseVolumeAprox: '3 trocas de fralda com peso médio',
        evacuacaoPresenca: false
      },
      passagemPlantao: {
        status: 'sem_intercorrencia',
        relatoIntercorrencia: '',
        anotacoesGerais: 'Realizada mudança de decúbito estrita a cada 3h (DLD, DLE, DD). Banho no leito às 10h sem queixas álgicas. Curativo sacral refeito e mantido protegido.'
      },
      criadoEm: new Date().toISOString()
    }
  ];
}

function gerarChecagensExemplo(residenteId: string): Record<string, ChecagemPrescricaoRegistro> {
  const checagens: Record<string, ChecagemPrescricaoRegistro> = {};
  const diaAtual = new Date().getDate();
  
  // Marca checagens para o dia atual e dias recentes
  for (let d = Math.max(1, diaAtual - 2); d <= diaAtual; d++) {
    ITENS_PRESCRICAO_PADRAO.forEach(item => {
      item.turnosAplicaveis.forEach(turno => {
        // Se for antes do turno atual, preenche a maioria
        if (d < diaAtual || turno === 'M') {
          const key = `${item.id}_dia${d}_${turno}`;
          checagens[key] = {
            checado: true,
            cuidadorMatricula: turno === 'N' ? 'MAT-102' : 'MAT-101',
            cuidadorNome: turno === 'N' ? 'Carlos Eduardo Barbosa' : 'Juliana Rocha Mendes',
            hora: turno === 'M' ? '08:30' : turno === 'T' ? '15:15' : '22:00'
          };
        }
      });
    });
  }
  return checagens;
}

function gerarEvolucoesIniciais(): EvolucaoEnfermagem[] {
  const hoje = new Date().toISOString().split('T')[0];
  return [
    {
      id: 'evo-001',
      residenteId: 'res-001',
      data: hoje,
      hora: '14:30',
      cuidadorMatricula: 'MAT-103',
      cuidadorNome: 'Mariana Azevedo Costa',
      cuidadorCargo: 'Enfermeiro(a) Responsável Técnico (RT)',
      cuidadorRegistro: 'COREN-SP 219.403-ENF',
      estadoGeral: 'bom',
      sinaisVitais: {
        pa: '120x80 mmHg',
        fc: '74 bpm',
        temp: '36.5 °C',
        spo2: '98%'
      },
      condicoesGerais: {
        lucida: true,
        orientada: true,
        confusa: false,
        desorientada: false,
        mobilidadePreservada: false,
        mobilidadeReduzida: true,
        acamada: false,
        alimentacaoBoa: true,
        alimentacaoRegular: false,
        alimentacaoRuim: false,
        hidratacaoAdequada: true,
        peleIntegra: true,
        peleComLesao: false,
        usoFralda: true
      },
      diagnosticosEnfermagem: [
        'Risco de glicemia instável',
        'Risco de queda',
        'Mobilidade física prejudicada'
      ],
      relatoEvolucao: 'Paciente idosa, residente na instituição, estado geral bom, lúcida e orientada no tempo e espaço. Deambulando com auxílio de andador. Aceitou a totalidade do desjejum e almoço conforme dieta hipossódica para diabéticos. Hidratação supervisionada satisfatória (ofertados líquidos de hora em hora). Eliminações intestinais e urinárias presentes sem intercorrências. Pele íntegra sem sinais de lesões por pressão. Segue com controle rigoroso de mapa de glicemia capilar.',
      condutaEEncaminhamentos: 'Manter plano de cuidados vigentes, estímulo à deambulação assistida e supervisão contínua durante transferências para prevenção de quedas. Orientada equipe sobre oferta constante de água.',
      familiarInformado: true,
      criadoEm: new Date().toISOString()
    }
  ];
}

function gerarGlicemiaSinaisIniciais(): RegistroGlicemiaSinais[] {
  const hoje = new Date().toISOString().split('T')[0];
  const ontem = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  return [
    {
      id: 'gs-001',
      residenteId: 'res-001',
      data: hoje,
      horario: '05:00',
      tipo: 'glicemia',
      glicemia: 98,
      momento: '05:00',
      cuidadorMatricula: 'MAT-102',
      cuidadorNome: 'Carlos Eduardo Barbosa',
      observacoes: 'Glicemia de jejum dentro da meta estipulada pelo geriatra.',
      criadoEm: new Date().toISOString()
    },
    {
      id: 'gs-002',
      residenteId: 'res-001',
      data: hoje,
      horario: '11:30',
      tipo: 'glicemia',
      glicemia: 128,
      momento: '11:30',
      cuidadorMatricula: 'MAT-101',
      cuidadorNome: 'Juliana Rocha Mendes',
      observacoes: 'Pré-almoço. Aplicada medicação conforme prescrição.',
      criadoEm: new Date().toISOString()
    },
    {
      id: 'gs-003',
      residenteId: 'res-001',
      data: hoje,
      horario: '17:00',
      tipo: 'glicemia',
      glicemia: 142,
      momento: '17:00',
      cuidadorMatricula: 'MAT-101',
      cuidadorNome: 'Juliana Rocha Mendes',
      observacoes: 'Pré-jantar. Paciente bem disposta.',
      criadoEm: new Date().toISOString()
    },
    {
      id: 'gs-004',
      residenteId: 'res-001',
      data: ontem,
      horario: '05:00',
      tipo: 'glicemia',
      glicemia: 104,
      momento: '05:00',
      cuidadorMatricula: 'MAT-105',
      cuidadorNome: 'Rodrigo Martins Silveira',
      criadoEm: new Date().toISOString()
    },
    {
      id: 'gs-005',
      residenteId: 'res-001',
      data: ontem,
      horario: '17:00',
      tipo: 'glicemia',
      glicemia: 135,
      momento: '17:00',
      cuidadorMatricula: 'MAT-104',
      cuidadorNome: 'Patrícia Lima dos Santos',
      criadoEm: new Date().toISOString()
    }
  ];
}
