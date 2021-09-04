const textArea = document.querySelector("textarea");

const toUpperCaseButton = document.getElementById('upper-case');
toUpperCaseButton.addEventListener('click', function () {
    textArea.value = textArea.value.toUpperCase();
});

const toLoweCaseButton = document.getElementById('lower-case');
toLoweCaseButton.addEventListener('click', function () {
    textArea.value = textArea.value.toLowerCase();
});

const toProperCaseButton = document.getElementById('proper-case');
toProperCaseButton.addEventListener('click', function () {
    const words = textArea.value.toLowerCase().split(' ');
    let modifiedWords = [];
    for (let word of words) {
        let firstChar = word.charAt(0);
        let modifiedWord = firstChar.toUpperCase().concat(word.slice(1));
        modifiedWords.push(modifiedWord);
    }
    textArea.value = modifiedWords.join(' ');
});

const toSentenceCaseButton = document.getElementById('sentence-case');
toSentenceCaseButton.addEventListener('click', function () {
    const sentences = textArea.value.toLowerCase().split('. ');
    let modifiedSentences = [];
    for (let sentence of sentences) {
        let firstChar = sentence.charAt(0);
        let modifiedSentence = firstChar.toUpperCase().concat(sentence.slice(1));
        modifiedSentences.push(modifiedSentence);
    }
    textArea.value = modifiedSentences.join('. ');
});

const saveTextFileButton = document.getElementById('save-text-file');
saveTextFileButton.addEventListener('click', function () {
    download('text.txt', textArea.value);
});

function download(filename, text) {
    let linkToSaveFile = document.createElement('a');
    linkToSaveFile.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    linkToSaveFile.setAttribute('download', filename);
    linkToSaveFile.style.display = 'none';

    document.body.appendChild(linkToSaveFile);

    linkToSaveFile.click();

    document.body.removeChild(linkToSaveFile);
}