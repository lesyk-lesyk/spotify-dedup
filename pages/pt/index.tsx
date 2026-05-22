import '../../i18n';

import Index from '../../components/pages/index';
import Page from '../../layouts/main';
import { useTranslation } from 'react-i18next';

const IndexComponent = () => {
  const { t, i18n } = useTranslation();
  i18n.addResourceBundle('pt', 'translation', {
    'menu.link-home': 'Pagina inicial',
    'menu.link-stats': 'Estatísticas',
    'home.title': 'Remova músicas duplicadas de sua biblioteca do Spotify.',
    'home.description':
      'O Spotify Dedup limpa suas listas de reprodução e músicas salvas da sua conta do Spotify. É fácil e rápido.',
    'home.login-button': 'Entre com o Spotify',
    'home.review': 'Leia o que mais de {{-supportersCount}} apoiadores pensam sobre o Spotify Dedup na plataforma {{- linkOpen}}Buy Me a Coffee{{- linkClose}}.',
    'meta.title':
      'Spotify Dedup - Remova músicas duplicadas da sua biblioteca Spotify',
    'meta.description':
      'Remova músicas repetidas de suas listas de reprodução do Spotify e músicas favoritas de forma rápida e fácil.',
    'features.find-remove.header': 'Pesquisar e excluir',
    'features.find-remove.body':
      'Dedup verifica suas listas de reprodução e músicas armazenadas na {{- strongOpen}}sua biblioteca do Spotify{{- strongClose}}. Depois que ela encontrar duplicatas, você poderá removê-las da lista de reprodução.',
    'features.safer.header': 'Seguro',
    'features.safer.body':
      'Dedup remove apenas {{- strongOpen}}músicas duplicadas{{- strongClose}}, deixando o restante da lista de reprodução e coleção de músicas salvas intactas.',
    'features.open-source.header': 'Código aberto',
    'features.open-source.body':
      'Você pode dar uma olhada no {{- linkGithubOpen}}código fonte no GitHub{{- linkGithubClose}}. Este aplicativo da web usa a {{- linkWebApiOpen}}API da Web do Spotify{{- linkWebApiClose}} para gerenciar as playlists e as músicas salvas do usuário.',
    'reviews.title': 'É o que os usuários dizem',
    'footer.author': 'Feito com ♥ por {{- linkOpen}}JMPerez 👨‍💻{{- linkClose}}',
    'footer.github': 'Veja o {{- linkOpen}}código no GitHub 📃{{- linkClose}}',
    'footer.bmc':
      'Apoie o projeto {{- linkOpen}}comprando um café ☕{{- linkClose}}',
    'footer.musicalyst': "Confira o {{- linkOpen}}Musicalyst 🎧{{- linkClose}}",
    'bmc.button': 'Você pode me comprar um café?',
    'result.duplicate.reason-same-id': 'Duplicado',
    'result.duplicate.reason-same-data':
      'Duplicado (mesmo nome, artista e duração)',
    'result.duplicate.track':
      '<0>{{trackName}}</0> <2>de</2> <4>{{trackArtistName}}</4>',
    'process.status.finding':
      'Procurando duplicatas em suas listas de reprodução e músicas favoritas…',
    'process.status.complete': 'Processamento concluído!',
    'process.status.complete.body':
      'Suas listas de reprodução e músicas favoritas foram processadas!',
    'process.status.complete.dups.body':
      'Clique no botão {{- strongOpen}}Remover duplicatas{{- strongClose}} para excluir músicas duplicadas dessa lista de reprodução ou coleção.',
    'process.status.complete.nodups.body':
      'Parabéns! Você não tem duplicatas em suas listas de reprodução ou em suas músicas favoritas.',
    'process.reading-library':
      'Processando sua biblioteca, localizando as playlists criadas por você e suas músicas favoritas…',
    'process.processing_one':
      'Procurando músicas duplicadas, espere um momento. Falta {{count}} lista de reprodução para processar…',
    'process.processing_other':
      'Procurando músicas duplicadas, espere um momento. Restam {{count}} listas de reprodução para processar…',
    'process.saved.title': 'Músicas favoritas da sua biblioteca',
    'process.saved.duplicates_one': 'Esta coleção tem {{ count }} música duplicada',
    'process.saved.duplicates_other':
      'Esta coleção tem {{count}} músicas duplicadas',
    'process.saved.remove-button': 'Remova duplicatas das músicas favoritas',
    'process.playlist.duplicates_one':
      'Esta lista de reprodução tem {{count}} música duplicada',
    'process.playlist.duplicates_other':
      'Esta lista de reprodução tem {{count}} músicas duplicadas',
    'process.playlist.remove-button':
      'Remova duplicatas desta lista de reprodução',
    'process.items.removed': 'Duplicatas removidas',
    'faq.section-title': "Perguntas frequentes",
    'faq.question-1': 'O que esta aplicação web faz?',
    'faq.answer-1': 'Spotify Dedup ajuda você a limpar suas bibliotecas de música no Spotify, identificando e excluindo músicas duplicadas em listas de reprodução e músicas salvas.',
    'faq.question-2': 'Como esta ferramenta encontra duplicatas?',
    'faq.answer-2': 'A ferramenta encontra duplicatas com base no identificador de músicas, título, artista e similaridade de duração. Ele identifica duplicatas que o aplicativo do Spotify não encontra.',
    'faq.question-3': 'Como esta ferramenta é melhor do que a detecção de duplicados do Spotify?',
    'faq.answer-3': ' A mesma música pode ter vários identificadores no Spotify, tanto no mesmo lançamento quanto em vários. O Spotify apenas avisa sobre duplicatas com base no identificador da música, enquanto esta ferramenta também detecta duplicatas com base no título, artista e similaridade de duração.',
    'faq.question-4': 'Quando duplicatas são encontradas, quais músicas são removidas?',
    'faq.answer-4': 'Dedup manterá a primeira música dentro de um grupo de músicas duplicadas e removerá o resto.',
    'faq.question-5': 'Meus dados estão seguros com este aplicativo da web?',
    'faq.answer-5': 'Sim, esta aplicação web não armazena nenhum dado do usuário em seus servidores. Ele solicita apenas o conjunto mínimo de permissões necessárias para processar sua biblioteca.',
    'faq.question-6': 'Quais permissões este aplicativo web requer?',
    'faq.answer-6': 'Este aplicativo da web usa o serviço de autenticação do Spotify para acessar suas faixas e listas de reprodução salvas em sua biblioteca.',
    'faq.question-7': 'Como esta ferramenta foi testada?',
    'faq.answer-7': 'Esta ferramenta foi testada por milhares de usuários que a usaram para identificar duplicatas em milhões de listas de reprodução desde 2014.',
    'faq.question-8': 'Esta ferramenta pode excluir duplicatas em várias listas de reprodução?',
    'faq.answer-8': 'Esta ferramenta pode identificar e excluir duplicatas em todas as listas de reprodução em uma biblioteca, mas não detecta duplicatas de uma música em várias listas de reprodução.',
    'faq.question-9': 'Como posso revogar as permissões concedidas a esta aplicação web?',
    'faq.answer-9': 'Os usuários podem revogar as permissões concedidas a este aplicativo da web a qualquer momento em sua conta do Spotify, na seção \'Aplicativos\'.',
    'faq.question-10': 'Esta ferramenta funciona com outros serviços de streaming de música?',
    'faq.answer-10': 'Não, esta ferramenta funciona apenas com o Spotify e usa a API da Web do Spotify para identificar e excluir duplicatas em sua biblioteca.'
  });
  i18n.changeLanguage('pt');
  return (
    <Page>
      <Index />
    </Page>
  );
};

export default IndexComponent;
