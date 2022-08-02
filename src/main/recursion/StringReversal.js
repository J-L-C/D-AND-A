function reverse(word) {
    let result = "";
    if(word.length === 1)
        return word;
    return result.concat(reverse(word.slice(1))) + word[0]
}

module.exports = {reverse};

