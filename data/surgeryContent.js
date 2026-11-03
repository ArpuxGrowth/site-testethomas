// Conteúdo complementar (em português) das páginas de cirurgia facial: indicações, cirurgia,
// recuperação, valor e perguntas frequentes. Aparece abaixo do texto original de cada página
// e o FAQ também vira dado estruturado (FAQPage) para o Google e as IAs.
// Texto informativo: não substitui a avaliação médica e segue a Resolução CFM 2.336/2023
// (sem promessa de resultado, sem comparação de preço e sem superlativos).

const CTA = `
  <h2 class="mb-30">Avaliação em São Paulo</h2>
  <p>O Dr. Thomas Benson atende no consultório da Vila Nova Conceição, ao lado do Parque Ibirapuera, em São Paulo. Na consulta ele examina o rosto, entende o que incomoda o paciente, explica as técnicas possíveis e monta um plano individual. Pacientes de outras cidades e do exterior podem iniciar o contato à distância.</p>
`;

export const surgeryContent = {
  "deep-plane-facelift": {
    html: `
  <h2 class="mb-30">Para quem o Deep Plane Facelift é indicado</h2>
  <p>O Deep Plane Facelift é indicado para quem tem flacidez no terço médio e inferior do rosto: bochechas que desceram, sulco nasogeniano (o "bigode chinês") mais marcado, perda do contorno da mandíbula, papada e pescoço com flacidez. Costuma ser procurado a partir dos 45 anos, mas a indicação depende mais do grau de envelhecimento do que da idade.</p>
  <ul>
    <li>Pessoas que querem um resultado natural, sem a aparência de "rosto esticado".</li>
    <li>Pacientes que já usaram muito preenchimento e querem tratar a causa da queda dos tecidos.</li>
    <li>Quem já fez um lifting tradicional e voltou a ter flacidez (lifting secundário).</li>
    <li>Pessoas em bom estado de saúde, que não fumam ou podem parar antes e depois da cirurgia.</li>
  </ul>

  <h2 class="mb-30">Como é feita a cirurgia</h2>
  <p>A cirurgia é feita em hospital, com anestesia geral ou sedação, e costuma durar de 4 a 6 horas, conforme o que é associado. As incisões ficam escondidas na frente e atrás da orelha e, às vezes, na linha do cabelo.</p>
  <p>A diferença do Deep Plane está no plano em que o cirurgião trabalha. Em vez de esticar a pele ou apenas dobrar o SMAS, ele entra abaixo do SMAS e libera os ligamentos que prendem os tecidos. Assim, pele, gordura e músculo sobem juntos, como um bloco, e voltam à posição que tinham anos antes. Como a pele não é tracionada, a cicatriz tende a ficar mais fina e o resultado mais natural.</p>
  <p>O Deep Plane pode ser combinado com outros procedimentos no mesmo tempo cirúrgico, como o Deep Neck Lift (pescoço), a blefaroplastia (pálpebras), o lifting frontal ou temporal (testa e sobrancelhas), o lifting labial e a lipoenxertia facial.</p>

  <h2 class="mb-30">Recuperação semana a semana</h2>
  <ul>
    <li><strong>Primeiros dias:</strong> inchaço e manchas roxas são esperados. O paciente fica com curativo e malha, dorme com a cabeceira elevada e faz repouso relativo.</li>
    <li><strong>1ª semana:</strong> retirada de drenos (quando usados) e de parte dos pontos. Já é possível caminhar dentro de casa e fazer atividades leves.</li>
    <li><strong>2 a 3 semanas:</strong> a maior parte do inchaço e das manchas diminui. Muitos pacientes voltam ao trabalho e à vida social com maquiagem.</li>
    <li><strong>4 a 6 semanas:</strong> liberação gradual de exercícios físicos, conforme orientação médica.</li>
    <li><strong>3 a 6 meses:</strong> o resultado se acomoda e as cicatrizes amadurecem.</li>
  </ul>
  <p>Drenagem linfática, proteção solar e acompanhamento nas consultas de retorno fazem parte do pós-operatório.</p>

  <h2 class="mb-30">Resultados e durabilidade</h2>
  <p>O objetivo é um rosto descansado e com contornos mais jovens, que continue parecendo com o próprio paciente. Como a técnica reposiciona estruturas profundas, os resultados costumam ser duradouros. O rosto continua envelhecendo, mas a partir de um ponto mais jovem. Hábitos como não fumar, proteger a pele do sol e manter o peso ajudam a preservar o resultado.</p>

  <h2 class="mb-30">Quanto custa um Deep Plane Facelift em São Paulo</h2>
  <p>O valor é definido depois da consulta, porque depende do plano de cada paciente. Os principais fatores são:</p>
  <ul>
    <li>a extensão da cirurgia e o que é associado (pescoço, pálpebras, testa, lábio, gordura);</li>
    <li>o tempo de cirurgia e o tipo de anestesia;</li>
    <li>o hospital e o tempo de internação;</li>
    <li>a equipe médica e o acompanhamento no pós-operatório.</li>
  </ul>
  ${CTA}
`,
    faq: [
      ["Qual a diferença entre o Deep Plane e o lifting facial tradicional?", "No lifting tradicional a pele e o SMAS são esticados ou dobrados. No Deep Plane o cirurgião trabalha abaixo do SMAS e libera os ligamentos, reposicionando os tecidos em bloco. Isso tende a dar um resultado mais natural, sem aspecto esticado, e mais duradouro."],
      ["Qual a idade ideal para fazer o Deep Plane Facelift?", "Não existe uma idade fixa. A indicação depende do grau de flacidez do rosto e do pescoço. A maioria dos pacientes tem mais de 45 anos, mas há casos indicados antes disso."],
      ["O Deep Plane Facelift deixa cicatriz?", "As incisões ficam escondidas na frente e atrás da orelha e na linha do cabelo. Como a pele não é tracionada, a tendência é de cicatrizes finas, que amadurecem ao longo de alguns meses."],
      ["Quanto tempo dura a recuperação?", "Em geral, de 2 a 3 semanas para voltar ao trabalho e à vida social, e de 4 a 6 semanas para retomar exercícios. O resultado final aparece entre 3 e 6 meses."],
      ["Quanto tempo dura o resultado?", "Os resultados costumam ser duradouros, porque a técnica reposiciona estruturas profundas. O envelhecimento continua, mas a partir de um ponto mais jovem."],
      ["É possível fazer o Deep Plane junto com outras cirurgias?", "Sim. É comum associar o Deep Neck Lift, a blefaroplastia, o lifting frontal ou temporal, o lifting labial e a lipoenxertia facial. A combinação é definida na avaliação."],
      ["Quanto custa o Deep Plane Facelift?", "O valor é informado depois da consulta, porque depende da extensão da cirurgia, dos procedimentos associados, do hospital e da equipe."],
    ],
  },

  blefaroplastia: {
    html: `
  <h2 class="mb-30">Para quem a blefaroplastia é indicada</h2>
  <p>A blefaroplastia é indicada para quem tem excesso de pele nas pálpebras superiores, bolsas de gordura nas pálpebras inferiores ou aparência de cansaço que não melhora com descanso. Em alguns casos, a pele em excesso chega a pesar sobre os cílios e atrapalhar a visão lateral.</p>
  <ul>
    <li><strong>Blefaroplastia superior:</strong> retira o excesso de pele e, quando necessário, parte da gordura da pálpebra de cima.</li>
    <li><strong>Blefaroplastia inferior:</strong> trata as bolsas e a flacidez da pálpebra de baixo, com incisão logo abaixo dos cílios ou por dentro da pálpebra (via transconjuntival).</li>
    <li><strong>Blefaroplastia completa:</strong> as duas pálpebras no mesmo procedimento.</li>
  </ul>
  <p>Quando a sobrancelha também caiu, só operar a pálpebra pode não bastar. Nesses casos, o lifting frontal ou temporal pode ser associado para elevar a sobrancelha e abrir o olhar.</p>

  <h2 class="mb-30">Como é a cirurgia</h2>
  <p>A blefaroplastia superior costuma levar cerca de 1 hora e pode ser feita com anestesia local e sedação. A inferior ou completa leva de 1h30 a 3 horas. As incisões seguem as dobras naturais da pálpebra, o que deixa a cicatriz discreta. A gordura das bolsas pode ser retirada ou reposicionada para suavizar a olheira.</p>

  <h2 class="mb-30">Recuperação</h2>
  <ul>
    <li><strong>Primeiros dias:</strong> inchaço e manchas roxas ao redor dos olhos, compressas frias e cabeceira elevada.</li>
    <li><strong>5 a 7 dias:</strong> retirada dos pontos.</li>
    <li><strong>10 a 15 dias:</strong> a maioria dos pacientes volta ao trabalho, com óculos escuros se quiser.</li>
    <li><strong>2 a 3 meses:</strong> a cicatriz clareia e o resultado se estabiliza.</li>
  </ul>
  <p>Nas primeiras semanas é preciso evitar esforço físico, sol direto e o uso de lentes de contato e maquiagem nos olhos até a liberação médica.</p>

  <h2 class="mb-30">Quanto custa uma blefaroplastia em São Paulo</h2>
  <p>O valor depende de quais pálpebras serão operadas (superior, inferior ou as duas), da técnica, do tipo de anestesia, do hospital e da associação com outros procedimentos, como o lifting frontal ou o Deep Plane Facelift. O orçamento é passado depois da avaliação.</p>
  ${CTA}
`,
    faq: [
      ["A blefaroplastia deixa cicatriz?", "A incisão fica na dobra natural da pálpebra superior e logo abaixo dos cílios na inferior (ou por dentro da pálpebra). Com o tempo a cicatriz fica fina e pouco visível."],
      ["Quanto tempo dura a recuperação da blefaroplastia?", "Os pontos saem entre 5 e 7 dias e a maioria dos pacientes volta ao trabalho entre 10 e 15 dias. O resultado se estabiliza em 2 a 3 meses."],
      ["A blefaroplastia tira olheira?", "A cirurgia trata as bolsas de gordura e a flacidez da pálpebra inferior, que contribuem para a olheira. Olheiras causadas por pigmentação da pele precisam de outros tratamentos."],
      ["Qual a diferença entre blefaroplastia superior e inferior?", "A superior retira o excesso de pele da pálpebra de cima. A inferior trata as bolsas e a flacidez da pálpebra de baixo. As duas podem ser feitas juntas."],
      ["A blefaroplastia pode ser feita com anestesia local?", "A superior costuma ser feita com anestesia local e sedação. A inferior ou completa pode exigir sedação mais profunda ou anestesia geral, conforme o caso."],
      ["Quanto custa uma blefaroplastia?", "O valor depende de quais pálpebras serão operadas, da técnica, da anestesia, do hospital e de procedimentos associados. É informado após a consulta."],
    ],
  },

  rinoplastia: {
    html: `
  <h2 class="mb-30">Para quem a rinoplastia é indicada</h2>
  <p>A rinoplastia é indicada para quem quer mudar a forma do nariz (giba, ponta larga ou caída, desvios, assimetrias) e também para quem tem dificuldade para respirar por desvio de septo ou outras alterações internas. Muitas vezes os dois objetivos, estético e funcional, são tratados na mesma cirurgia.</p>
  <ul>
    <li>Nariz com giba (o "calombo" no dorso), ponta grossa, caída ou desproporcional ao rosto.</li>
    <li>Desvio de septo, aumento das conchas nasais e obstrução respiratória.</li>
    <li>Nariz alterado por trauma ou fratura.</li>
    <li>Rinoplastia secundária, para corrigir o resultado de uma cirurgia anterior.</li>
  </ul>
  <p>A cirurgia é indicada depois que o crescimento do rosto termina, geralmente a partir dos 16 anos nas mulheres e 17 a 18 anos nos homens.</p>

  <h2 class="mb-30">Rinoplastia estruturada: como é feita</h2>
  <p>Na rinoplastia estruturada o cirurgião não apenas retira cartilagem e osso: ele usa enxertos, normalmente da cartilagem do septo, para dar sustentação à ponta e ao dorso. Isso ajuda a manter o resultado ao longo dos anos e a preservar ou melhorar a respiração. A cirurgia é feita em hospital, com anestesia geral, e dura de 2 a 4 horas, conforme a complexidade.</p>

  <h2 class="mb-30">Recuperação</h2>
  <ul>
    <li><strong>1ª semana:</strong> uso de tala no nariz, inchaço e manchas roxas ao redor dos olhos. A respiração pelo nariz fica limitada nos primeiros dias.</li>
    <li><strong>7 a 10 dias:</strong> retirada da tala. A maioria volta ao trabalho entre 10 e 15 dias.</li>
    <li><strong>30 dias:</strong> liberação gradual de exercícios. Óculos apoiados no nariz só com liberação médica.</li>
    <li><strong>1 ano ou mais:</strong> a ponta do nariz é a última a desinchar. O resultado final aparece em cerca de 12 meses.</li>
  </ul>

  <h2 class="mb-30">Quanto custa uma rinoplastia em São Paulo</h2>
  <p>O valor depende da complexidade do caso (primária ou secundária), da necessidade de enxertos, de correção funcional do septo, do tempo de cirurgia, do hospital e da equipe. O orçamento é passado depois da avaliação.</p>
  ${CTA}
`,
    faq: [
      ["A rinoplastia melhora a respiração?", "Quando há desvio de septo, aumento das conchas nasais ou outras alterações internas, a rinoplastia pode corrigi-las na mesma cirurgia, melhorando a respiração."],
      ["Quanto tempo dura a recuperação da rinoplastia?", "A tala sai entre 7 e 10 dias e a maioria volta ao trabalho entre 10 e 15 dias. O inchaço da ponta diminui aos poucos e o resultado final aparece em cerca de 12 meses."],
      ["O que é rinoplastia estruturada?", "É a técnica em que o cirurgião usa enxertos de cartilagem, geralmente do septo, para dar sustentação ao nariz. Ajuda a manter o resultado estável e a preservar a respiração."],
      ["A partir de que idade posso fazer rinoplastia?", "Depois que o crescimento do rosto termina, em geral a partir dos 16 anos nas mulheres e dos 17 a 18 anos nos homens."],
      ["A rinoplastia deixa cicatriz?", "Na técnica fechada não há cicatriz externa. Na técnica aberta há uma pequena incisão na columela (entre as narinas), que costuma ficar pouco visível."],
      ["Quanto custa uma rinoplastia?", "O valor depende da complexidade, dos enxertos, da correção funcional, do hospital e da equipe. É informado depois da consulta."],
    ],
  },

  "lifting-frontal": {
    html: `
  <h2 class="mb-30">Para quem o lifting frontal é indicado</h2>
  <p>O lifting frontal é indicado para quem tem sobrancelhas caídas, olhar pesado ou com expressão de cansaço ou tristeza, e rugas horizontais na testa. A queda da sobrancelha também empurra pele para a pálpebra superior, por isso o lifting frontal é muitas vezes combinado com a blefaroplastia.</p>

  <h2 class="mb-30">Como é a técnica endoscópica</h2>
  <p>Pela via endoscópica, o cirurgião faz pequenas incisões escondidas dentro do couro cabeludo e usa uma microcâmera para liberar e reposicionar os tecidos da testa e das sobrancelhas. Em vez de uma cicatriz longa, ficam poucos cortes pequenos, cobertos pelo cabelo. Dispositivos de fixação, como o Endotine®, ajudam a manter a nova posição durante a cicatrização. A cirurgia é feita em hospital e costuma durar de 1h30 a 2h30.</p>

  <h2 class="mb-30">Lifting frontal, lifting temporal e blefaroplastia</h2>
  <ul>
    <li><strong>Lifting frontal:</strong> eleva a testa e as sobrancelhas por inteiro e suaviza as rugas da testa.</li>
    <li><strong>Lifting temporal:</strong> foca na cauda da sobrancelha e no canto externo dos olhos, abrindo o olhar.</li>
    <li><strong>Blefaroplastia:</strong> trata o excesso de pele e as bolsas das pálpebras.</li>
  </ul>
  <p>Na avaliação o cirurgião define se é preciso um, dois ou os três procedimentos para um resultado harmônico.</p>

  <h2 class="mb-30">Recuperação</h2>
  <ul>
    <li><strong>Primeiros dias:</strong> inchaço na testa e ao redor dos olhos, que pode descer para as pálpebras. Cabeceira elevada e compressas frias.</li>
    <li><strong>7 a 10 dias:</strong> retirada dos pontos ou grampos do couro cabeludo e volta a atividades leves.</li>
    <li><strong>2 semanas:</strong> a maioria volta ao trabalho.</li>
    <li><strong>3 meses:</strong> resultado estabilizado. Sensação de dormência no couro cabeludo é comum e melhora com o tempo.</li>
  </ul>

  <h2 class="mb-30">Quanto custa um lifting frontal em São Paulo</h2>
  <p>O valor depende da técnica, dos dispositivos de fixação, do tempo de cirurgia, do hospital e da associação com blefaroplastia ou lifting facial. O orçamento é passado depois da avaliação.</p>
  ${CTA}
`,
    faq: [
      ["O lifting frontal deixa cicatriz?", "Na técnica endoscópica as incisões são pequenas e ficam dentro do couro cabeludo, cobertas pelo cabelo."],
      ["Qual a diferença entre lifting frontal e blefaroplastia?", "O lifting frontal eleva a testa e as sobrancelhas. A blefaroplastia retira o excesso de pele e as bolsas das pálpebras. Muitas vezes os dois são combinados."],
      ["Quanto tempo dura a recuperação do lifting frontal?", "Os pontos saem entre 7 e 10 dias e a maioria volta ao trabalho em cerca de 2 semanas. O resultado se estabiliza em torno de 3 meses."],
      ["O lifting frontal substitui o botox?", "O botox relaxa os músculos temporariamente. O lifting frontal reposiciona a testa e as sobrancelhas de forma duradoura. Em alguns casos os dois são usados de forma complementar."],
      ["Quanto custa um lifting frontal?", "Depende da técnica, dos dispositivos de fixação, do hospital e de procedimentos associados. O valor é informado após a consulta."],
    ],
  },

  "lifting-labial": {
    html: `
  <h2 class="mb-30">Para quem o lifting labial é indicado</h2>
  <p>O lifting labial (lip lift) encurta a distância entre a base do nariz e o lábio superior, o chamado filtro labial. É indicado para:</p>
  <ul>
    <li>pessoas com o lábio superior longo, que mostra pouco ou nenhum dente com a boca relaxada;</li>
    <li>quem perdeu volume e definição no lábio com o envelhecimento;</li>
    <li>quem quer um lábio mais projetado e definido sem depender de preenchimentos repetidos.</li>
  </ul>

  <h2 class="mb-30">Como é a cirurgia</h2>
  <p>A técnica mais usada é a "bullhorn": o cirurgião retira uma faixa fina de pele logo abaixo do nariz, seguindo o contorno das narinas, e eleva o lábio. A cirurgia leva cerca de 1 hora, pode ser feita com anestesia local e sedação, e é frequentemente combinada com o Deep Plane Facelift ou com a lipoenxertia facial.</p>

  <h2 class="mb-30">Recuperação e cicatriz</h2>
  <ul>
    <li><strong>Primeiros dias:</strong> inchaço no lábio e sensação de lábio "duro", que melhora em poucas semanas.</li>
    <li><strong>5 a 7 dias:</strong> retirada dos pontos. A maioria volta ao trabalho em cerca de 1 semana.</li>
    <li><strong>2 a 6 meses:</strong> a cicatriz, escondida na base do nariz, amadurece e fica mais clara.</li>
  </ul>
  <p>Protetor solar e os cuidados com a cicatriz indicados pelo médico ajudam a deixá-la mais discreta.</p>

  <h2 class="mb-30">Quanto custa um lifting labial em São Paulo</h2>
  <p>O valor depende da técnica, do tipo de anestesia, do local da cirurgia e da associação com outros procedimentos faciais. O orçamento é passado depois da avaliação.</p>
  ${CTA}
`,
    faq: [
      ["O lifting labial deixa cicatriz?", "A cicatriz fica escondida na base do nariz, seguindo o contorno das narinas. Com os cuidados indicados, tende a ficar discreta em alguns meses."],
      ["Quanto tempo dura a recuperação do lifting labial?", "Os pontos saem entre 5 e 7 dias e a maioria volta ao trabalho em cerca de 1 semana. O inchaço diminui ao longo das primeiras semanas."],
      ["O lifting labial é definitivo?", "Sim, é uma mudança cirúrgica e duradoura. O rosto continua envelhecendo, mas o lábio mantém a nova posição."],
      ["Qual a diferença entre lifting labial e preenchimento?", "O preenchimento adiciona volume e é temporário. O lifting labial encurta o filtro e eleva o lábio de forma permanente, mostrando mais o vermelho do lábio e os dentes."],
      ["Quanto custa um lifting labial?", "Depende da técnica, da anestesia e de procedimentos associados. O valor é informado após a consulta."],
    ],
  },

  "lipoenxertia-facial": {
    html: `
  <h2 class="mb-30">Para quem a lipoenxertia facial é indicada</h2>
  <p>A lipoenxertia facial devolve volume a regiões do rosto que esvaziaram com o tempo ou com o emagrecimento: maçãs do rosto, têmporas, olheiras, sulcos, lábios e contorno da mandíbula. É indicada para:</p>
  <ul>
    <li>rostos com aspecto magro, cansado ou "encovado";</li>
    <li>quem quer um resultado mais natural e duradouro do que o preenchimento com ácido hialurônico;</li>
    <li>complementar o Deep Plane Facelift, que reposiciona os tecidos, repondo o volume que foi perdido.</li>
  </ul>

  <h2 class="mb-30">Como é feita</h2>
  <ol>
    <li><strong>Retirada:</strong> a gordura é aspirada com cânulas finas de uma área doadora, como abdômen ou coxas.</li>
    <li><strong>Processamento:</strong> a gordura é filtrada e purificada para separar as células de melhor qualidade.</li>
    <li><strong>Enxertia:</strong> pequenas quantidades são aplicadas em várias camadas do rosto, com microcânulas, para um resultado uniforme.</li>
  </ol>
  <p>O procedimento dura de 1 a 2 horas quando feito isoladamente e pode ser realizado com sedação. Além do volume, a gordura contém células que podem contribuir para melhorar a qualidade da pele.</p>

  <h2 class="mb-30">Recuperação e resultado</h2>
  <ul>
    <li><strong>1 a 2 semanas:</strong> inchaço no rosto e na área doadora. A maioria volta ao trabalho em 7 a 10 dias.</li>
    <li><strong>2 a 3 meses:</strong> parte da gordura enxertada é absorvida pelo organismo. A gordura que permanece tende a ficar de forma duradoura.</li>
  </ul>
  <p>Como parte da gordura é absorvida, em alguns casos pode ser indicado um retoque. A quantidade aplicada é planejada para compensar essa absorção sem exageros.</p>

  <h2 class="mb-30">Quanto custa a lipoenxertia facial em São Paulo</h2>
  <p>O valor depende das áreas tratadas, da quantidade de gordura, do tipo de anestesia, do hospital e da associação com o lifting facial. O orçamento é passado depois da avaliação.</p>
  ${CTA}
`,
    faq: [
      ["A lipoenxertia facial é definitiva?", "Parte da gordura enxertada é absorvida nos primeiros meses. A gordura que permanece depois de cerca de 3 meses tende a ser duradoura."],
      ["Qual a diferença entre lipoenxertia e preenchimento com ácido hialurônico?", "A lipoenxertia usa a gordura do próprio paciente e tende a durar mais. O ácido hialurônico é um produto industrializado, absorvido em alguns meses."],
      ["De onde é retirada a gordura?", "Geralmente do abdômen, flancos ou coxas, com cânulas finas e pequenas incisões."],
      ["Quanto tempo dura a recuperação?", "A maioria dos pacientes volta ao trabalho entre 7 e 10 dias. O resultado se estabiliza em 2 a 3 meses."],
      ["Quanto custa a lipoenxertia facial?", "Depende das áreas tratadas, da quantidade de gordura, da anestesia e de procedimentos associados. O valor é informado após a consulta."],
    ],
  },

  otoplastia: {
    html: `
  <h2 class="mb-30">Para quem a otoplastia é indicada</h2>
  <p>A otoplastia corrige orelhas proeminentes ("orelha de abano"), orelhas grandes, assimetrias e deformidades da cartilagem. Pode ser feita em crianças, a partir de 5 a 6 anos, quando a orelha já atingiu quase o tamanho adulto, e em adultos de qualquer idade.</p>

  <h2 class="mb-30">Como é a cirurgia</h2>
  <p>A incisão é feita atrás da orelha, onde a cicatriz fica escondida. O cirurgião remodela a cartilagem, cria ou acentua a dobra natural da orelha e aproxima a orelha da cabeça com pontos internos. A cirurgia dura de 1 a 2 horas. Em adultos pode ser feita com anestesia local e sedação. Em crianças, geralmente com anestesia geral.</p>

  <h2 class="mb-30">Recuperação</h2>
  <ul>
    <li><strong>Primeiros dias:</strong> curativo com faixa ao redor da cabeça e desconforto leve.</li>
    <li><strong>1ª semana:</strong> troca do curativo por uma faixa elástica, usada por algumas semanas, principalmente para dormir.</li>
    <li><strong>7 a 10 dias:</strong> volta à escola ou ao trabalho.</li>
    <li><strong>4 a 6 semanas:</strong> liberação de esportes de contato, conforme orientação médica.</li>
  </ul>

  <h2 class="mb-30">Quanto custa uma otoplastia em São Paulo</h2>
  <p>O valor depende da técnica, da idade do paciente, do tipo de anestesia, do hospital e se uma ou as duas orelhas serão operadas. O orçamento é passado depois da avaliação.</p>
  ${CTA}
`,
    faq: [
      ["A otoplastia deixa cicatriz?", "A cicatriz fica atrás da orelha, no sulco entre a orelha e a cabeça, e costuma ficar escondida."],
      ["Qual a idade mínima para fazer otoplastia?", "A partir de 5 a 6 anos, quando a orelha já está quase do tamanho adulto. Não há idade máxima."],
      ["Quanto tempo dura a recuperação da otoplastia?", "A maioria volta à escola ou ao trabalho entre 7 e 10 dias. A faixa elástica é usada por algumas semanas, principalmente à noite."],
      ["O resultado da otoplastia é definitivo?", "Sim, a cartilagem é remodelada e fixada. O uso correto da faixa no pós-operatório ajuda a manter o resultado."],
      ["Quanto custa uma otoplastia?", "Depende da técnica, da anestesia, do hospital e se uma ou as duas orelhas serão operadas. O valor é informado após a consulta."],
    ],
  },

  "lifting-facial": {
    html: `
  <h2 class="mb-30">O que é o lifting facial</h2>
  <p>O lifting facial (ritidoplastia) é a cirurgia que trata a flacidez do rosto e do pescoço: bochechas caídas, sulcos marcados, perda do contorno da mandíbula e papada. Existem várias técnicas, que diferem na profundidade em que o cirurgião trabalha:</p>
  <ul>
    <li><strong>Lifting de pele:</strong> só a pele é descolada e esticada. É a técnica mais antiga e a que mais tende a dar aspecto "puxado".</li>
    <li><strong>SMAS lift e SMASectomia:</strong> a camada de sustentação do rosto (SMAS) é dobrada ou recortada e suturada.</li>
    <li><strong>Deep Plane Facelift:</strong> o cirurgião trabalha abaixo do SMAS, libera os ligamentos e reposiciona pele, gordura e músculo em bloco. É a técnica que o Dr. Thomas Benson usa como base para o rejuvenescimento facial.</li>
    <li><strong>Mini lifting:</strong> versão com incisões menores, para flacidez leve e localizada.</li>
  </ul>

  <h2 class="mb-30">Para quem é indicado</h2>
  <p>O lifting facial é indicado para quem tem flacidez moderada ou acentuada no terço médio e inferior do rosto e no pescoço, que já não melhora com tratamentos não cirúrgicos como bioestimuladores, ultrassom microfocado ou preenchimentos. A indicação depende mais do grau de envelhecimento do que da idade.</p>

  <h2 class="mb-30">Como é a cirurgia</h2>
  <p>A cirurgia é feita em hospital, com anestesia geral ou sedação, e costuma durar de 3 a 6 horas, conforme a técnica e os procedimentos associados. As incisões ficam escondidas ao redor da orelha e na linha do cabelo. O lifting do pescoço (Deep Neck Lift), a blefaroplastia, o lifting frontal ou temporal, o lifting labial e a lipoenxertia facial podem ser feitos no mesmo tempo cirúrgico.</p>

  <h2 class="mb-30">Recuperação</h2>
  <ul>
    <li><strong>Primeiros dias:</strong> inchaço e manchas roxas, curativo e malha, cabeceira elevada.</li>
    <li><strong>1ª semana:</strong> retirada de drenos e de parte dos pontos.</li>
    <li><strong>2 a 3 semanas:</strong> volta ao trabalho e à vida social para a maioria dos pacientes.</li>
    <li><strong>4 a 6 semanas:</strong> liberação gradual de exercícios.</li>
    <li><strong>3 a 6 meses:</strong> resultado final e cicatrizes maduras.</li>
  </ul>

  <h2 class="mb-30">Quanto custa um lifting facial em São Paulo</h2>
  <p>O valor do lifting facial varia conforme a técnica (mini lifting, SMAS ou Deep Plane), a inclusão do pescoço e de outros procedimentos, o tempo de cirurgia, o hospital e a equipe. O orçamento é passado depois da avaliação.</p>
  <p>Saiba mais sobre a técnica na página do <a href="/pt/cirurgias/deep-plane-facelift">Deep Plane Facelift</a> e sobre o pescoço na página do <a href="/pt/cirurgias/deep-neck-lift">Deep Neck Lift</a>.</p>
  ${CTA}
`,
    faq: [
      ["Qual o melhor tipo de lifting facial?", "Não existe uma técnica ideal para todos. A escolha depende do grau de flacidez, da qualidade da pele e do resultado desejado. Para flacidez moderada a acentuada, técnicas profundas como o Deep Plane tendem a dar resultados mais naturais e duradouros."],
      ["Quanto tempo dura a recuperação do lifting facial?", "Em geral, de 2 a 3 semanas para voltar ao trabalho e à vida social, e de 4 a 6 semanas para retomar exercícios. O resultado final aparece entre 3 e 6 meses."],
      ["O lifting facial deixa cicatriz?", "As incisões ficam ao redor da orelha e na linha do cabelo. Nas técnicas profundas, como a pele não é tracionada, as cicatrizes tendem a ficar finas e discretas."],
      ["Qual a idade certa para fazer lifting facial?", "Não há idade fixa. A indicação depende do grau de flacidez do rosto e do pescoço, que é avaliado na consulta."],
      ["O lifting facial trata o pescoço?", "O lifting do rosto melhora parte do contorno da mandíbula. Para a flacidez, as bandas e a gordura profunda do pescoço, costuma ser associado o Deep Neck Lift."],
      ["Quanto custa um lifting facial?", "Depende da técnica, da inclusão do pescoço e de outros procedimentos, do hospital e da equipe. O valor é informado após a consulta."],
    ],
  },

  "deep-neck-lift": {
    html: `
  <h2 class="mb-30">Para quem o Deep Neck Lift é indicado</h2>
  <p>O Deep Neck Lift é indicado para quem tem pescoço com flacidez, bandas verticais aparentes (músculo platisma), papada que não melhora com dieta ou exercício, ou perda do ângulo entre o queixo e o pescoço. Atende homens e mulheres e pode ser feito isoladamente ou junto com o Deep Plane Facelift.</p>

  <h2 class="mb-30">O que é tratado na cirurgia</h2>
  <p>Diferente das técnicas que tratam só a pele ou só o músculo, o Deep Neck Lift atua nas camadas profundas do pescoço:</p>
  <ul>
    <li><strong>Gordura profunda</strong> abaixo do músculo, que a lipo de papada não alcança;</li>
    <li><strong>Músculo platisma</strong>, reposicionado e suturado para eliminar as bandas;</li>
    <li><strong>Glândulas submandibulares</strong> proeminentes, quando necessário;</li>
    <li><strong>Músculo digástrico</strong>, em casos selecionados, para definir o ângulo cervical.</li>
  </ul>
  <p>O objetivo é redesenhar o ângulo entre o queixo e o pescoço de forma anatômica e duradoura. A cirurgia é feita em hospital, por uma pequena incisão sob o queixo e, quando combinada ao lifting facial, pelas incisões ao redor das orelhas.</p>

  <h2 class="mb-30">Deep Neck Lift, lipo de papada e platismoplastia</h2>
  <ul>
    <li><strong>Lipo de papada:</strong> retira só a gordura superficial. Funciona em pescoços jovens, com boa pele e sem bandas.</li>
    <li><strong>Platismoplastia:</strong> sutura o músculo platisma para tratar as bandas.</li>
    <li><strong>Deep Neck Lift:</strong> trata gordura profunda, músculo e, se preciso, glândulas, para uma redefinição completa do pescoço.</li>
  </ul>
  <p>Leia mais no artigo <a href="/pt/blog/deep-neck-lift-platismotomia-e-platismoplastia-diferencas">Deep Neck Lift, platismotomia e platismoplastia: qual a diferença</a>.</p>

  <h2 class="mb-30">Recuperação</h2>
  <ul>
    <li><strong>Primeiros dias:</strong> inchaço no pescoço, uso de malha compressiva e cabeceira elevada.</li>
    <li><strong>1 a 2 semanas:</strong> retirada dos pontos e volta a atividades leves.</li>
    <li><strong>2 a 3 semanas:</strong> volta ao trabalho para a maioria dos pacientes.</li>
    <li><strong>3 meses:</strong> o pescoço desincha e o contorno final aparece.</li>
  </ul>

  <h2 class="mb-30">Quanto custa um Deep Neck Lift em São Paulo</h2>
  <p>O valor depende das estruturas tratadas, da associação com o lifting facial, do tempo de cirurgia, do hospital e da equipe. O orçamento é passado depois da avaliação.</p>
  ${CTA}
`,
    faq: [
      ["Qual a diferença entre Deep Neck Lift e lipo de papada?", "A lipo de papada retira só a gordura superficial. O Deep Neck Lift trata também a gordura profunda, o músculo platisma e, quando necessário, as glândulas, redefinindo o ângulo do pescoço."],
      ["O Deep Neck Lift é só para mulheres?", "Não. É indicado para homens e mulheres com flacidez, bandas ou perda de definição do pescoço."],
      ["Quanto tempo dura a recuperação do Deep Neck Lift?", "A maioria dos pacientes volta ao trabalho entre 2 e 3 semanas. O contorno final aparece em cerca de 3 meses."],
      ["O Deep Neck Lift deixa cicatriz?", "A incisão principal fica sob o queixo, em uma região pouco visível. Quando associado ao lifting facial, as incisões ficam ao redor das orelhas."],
      ["Posso fazer o Deep Neck Lift sem fazer o lifting facial?", "Em alguns casos sim. Quando há flacidez também no rosto, a combinação costuma dar um resultado mais harmônico entre rosto e pescoço."],
      ["Quanto custa um Deep Neck Lift?", "Depende das estruturas tratadas, da associação com o lifting facial, do hospital e da equipe. O valor é informado após a consulta."],
    ],
  },
};

export const surgeryFaq = (url) =>
  (surgeryContent[url]?.faq || []).map(([question, answer]) => ({ question, answer }));
