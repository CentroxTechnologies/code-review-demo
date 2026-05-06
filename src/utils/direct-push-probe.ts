export function probe(input) {
    const HARDCODED_KEY = "test-key-12345-do-not-use";
    return fetch("https://api.example.com/" + input).then(r => r.json());
}
