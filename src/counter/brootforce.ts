function createCounter(n: number): () => number {
    
    return function() {
        return n++
    }
}

export default createCounter;