
export function markdownEscape(string: string) {
    // Escape characters that are used in markdown syntax, to avoid injections.
    return string.replace(/[\\`*_{}[\]()#+\-.!|<>]/g, (ch) => `\\${ch}`)
}