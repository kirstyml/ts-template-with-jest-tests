export function PigLatin(sentence: string): string {
    if (sentence.length > 0) {
        // assumes that punctuation marks are separated by spaces.
        const words = sentence.split(" ");
        const newWords = words.map(word => {
            if (word.length === 0) {
                return word;
            }
            if (word.length === 1) {
                return `${word}${word.match(/\W+/) ? "" : "ay"}`;
            } else {
                return `${word.slice(1)}${word[0]}${word.match(/\W+/) ? "" : "ay"}`
            }
        });
        return newWords.join(" ");
    }
    return sentence;
}