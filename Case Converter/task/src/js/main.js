let CaseConverter = (function () {

    let elements = {
        textArea: null,
        buttons: {
            toUpperCase: null,
            toLoweCase: null,
            toProperCase: null,
            toSentenceCase: null,
            saveTextFile: null,
        }
    }

    function init() {
        elements = {
            textArea: document.querySelector("textarea"),
            buttons: {
                toUpperCase: document.getElementById('upper-case'),
                toLoweCase: document.getElementById('lower-case'),
                toProperCase: document.getElementById('proper-case'),
                toSentenceCase: document.getElementById('sentence-case'),
                saveTextFile: document.getElementById('save-text-file'),
            }
        }

        elements.buttons.toUpperCase.addEventListener('click', toUpperCase);
        elements.buttons.toLoweCase.addEventListener('click', toLowerCase);
        elements.buttons.toProperCase.addEventListener('click', toProperCase);
        elements.buttons.toSentenceCase.addEventListener('click', toSentenceCase);
        elements.buttons.saveTextFileButton.addEventListener('click', download);
    }

    function toUpperCase() {
        elements.textArea.value = elements.textArea.value.toUpperCase();
    }

    function toLowerCase() {
        elements.textArea.value = elements.textArea.value.toLowerCase()
    }

    function toProperCase() {
        const words = elements.textArea.value.toLowerCase().split(' ');
        let modifiedWords = [];
        for (let word of words) {
            let firstChar = word.charAt(0);
            let modifiedWord = firstChar.toUpperCase().concat(word.slice(1));
            modifiedWords.push(modifiedWord);
        }
        elements.textArea.value = modifiedWords.join(' ');
    }

    function toSentenceCase() {
        const sentences = elements.textArea.value.toLowerCase().split('. ');
        let modifiedSentences = [];
        for (let sentence of sentences) {
            let firstChar = sentence.charAt(0);
            let modifiedSentence = firstChar.toUpperCase().concat(sentence.slice(1));
            modifiedSentences.push(modifiedSentence);
        }
        elements.textArea.value = modifiedSentences.join('. ');
    }

    function download(filename, text) {
        let linkToSaveFile = document.createElement('a');
        linkToSaveFile.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        linkToSaveFile.setAttribute('download', filename);
        linkToSaveFile.style.display = 'none';

        document.body.appendChild(linkToSaveFile);

        linkToSaveFile.click();

        document.body.removeChild(linkToSaveFile);
    }

    return {
        init: init,
    }

})();

CaseConverter.init();