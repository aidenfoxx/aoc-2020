/**
 * Let's play golf!
 * NOTE: Only works with unix line endings.
 * (?:
 *   (?:cid:.+[\s\n]|)byr:.+[\s\n]|
 *   (?:cid:.+[\s\n]|)iyr:.+[\s\n]|
 *   (?:cid:.+[\s\n]|)eyr:.+[\s\n]|
 *   (?:cid:.+[\s\n]|)hgt:.+[\s\n]|
 *   (?:cid:.+[\s\n]|)hcl:.+[\s\n]|
 *   (?:cid:.+[\s\n]|)ecl:.+[\s\n]|
 *   (?:cid:.+[\s\n]|)pid:.+[\s\n]
 * ){7}(?:cid:.+[\s\n]|)
 */
console.log('Matches:', `${require('fs').readFileSync('data.txt', 'utf8')}\n`.match(/(?:(?:cid:.+[\s\n]|)byr:.+[\s\n]|(?:cid:.+[\s\n]|)iyr:.+[\s\n]|(?:cid:.+[\s\n]|)eyr:.+[\s\n]|(?:cid:.+[\s\n]|)hgt:.+[\s\n]|(?:cid:.+[\s\n]|)hcl:.+[\s\n]|(?:cid:.+[\s\n]|)ecl:.+[\s\n]|(?:cid:.+[\s\n]|)pid:.+[\s\n]){7}(?:cid:.+[\s\n]|){7}(?:cid:.+[\s\n]|)/gm).length);
