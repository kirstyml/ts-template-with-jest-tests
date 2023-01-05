export function PigLatin(sentence: string): string {
    if (sentence.length > 0) {
        // need to split the string by spaces
        const words = sentence.split(" ");
        //for each item in the words array:
        // if it is not
        // remove the first letter and add it to the end of the word, if it is longer than 1 character
        // add ay to the end of the word if it is not punctuation
        const newWords = words.map(word => `${word.length > 1 ? word.slice(1) : ""}${word[0]}${word.match(/\W+/) ? "" : "ay"}`);
        // place new words back into sentence
        return newWords.join(" ");
    }
    return sentence;
}