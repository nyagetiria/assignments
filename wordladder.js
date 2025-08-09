
//Given two words, beginWord and endWord, and a dictionary of words wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, such that:
//Only one letter can be changed at a time.
//Each transformed word must exist in the word list.
//Return 0 if no such sequence exists.

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);

    while (queue.length > 0) {
        const [word, steps] = queue.shift();

        if (word === endWord) return steps;

        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);

                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, steps + 1]);
                }
            }
        }
    }

    return 0;
}