export function PigLatin(sentence : string) : string {
    // remove the first letter and add it to the end of the word
    // add ay to the end of the word
    if (sentence.length > 0) {
        return `${sentence.slice(1)}${sentence[0]}ay`;
    }
    return sentence;
}