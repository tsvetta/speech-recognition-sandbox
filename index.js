// const grammar = `#JSGF V1.0;
//   grammar colors;
//   public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;
// `;
const recognition = new webkitSpeechRecognition();
// const speechRecognitionList = new webkitSpeechGrammarList();
// speechRecognitionList.addFromString(grammar, 1);

// recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'ru-RU';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const diagnostic = document.querySelector('.output');
const bg = document.querySelector('html');

recognition.start();

recognition.onresult = function(event) {
  console.log(event.results);
  const num = event.results.length;
  const result = event.results[num - 1][0].transcript;

  const resultNode = document.createElement('div');
  resultNode.innerText = result;
  diagnostic.append(resultNode)
  bg.style.backgroundColor = result;
}
