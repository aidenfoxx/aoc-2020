/**
 * NOTE: Only works with unix line endings.
 * (?:
 *   (?:cid:.+[\s\n]|)byr:(?:19[2-9]\d|200[0-2])[\s\n]|
 *   (?:cid:.+[\s\n]|)iyr:(?:201\d|2020)[\s\n]|
 *   (?:cid:.+[\s\n]|)eyr:(?:202\d|2030)[\s\n]|
 *   (?:cid:.+[\s\n]|)hgt:(?:(?:59|6\d|7[0-6])in|(?:1[5-8]\d|19[0-3])cm)[\s\n]|
 *   (?:cid:.+[\s\n]|)hcl:#[0-9a-f]{6}[\s\n]|
 *   (?:cid:.+[\s\n]|)ecl:(?:amb|blu|brn|gry|grn|hzl|oth)[\s\n]|
 *   (?:cid:.+[\s\n]|)pid:\d{9}[\s\n]
 * ){7}(?:cid:.+[\n]|)
 */
console.log('Matches:', `${require('fs').readFileSync('data.txt', 'utf8')}\n`.match(/(?:(?:cid:.+[\s\n]|)byr:(?:19[2-9]\d|200[0-2])[\s\n]|(?:cid:.+[\s\n]|)iyr:(?:201\d|2020)[\s\n]|(?:cid:.+[\s\n]|)eyr:(?:202\d|2030)[\s\n]|(?:cid:.+[\s\n]|)hgt:(?:(?:59|6\d|7[0-6])in|(?:1[5-8]\d|19[0-3])cm)[\s\n]|(?:cid:.+[\s\n]|)hcl:#[0-9a-f]{6}[\s\n]|(?:cid:.+[\s\n]|)ecl:(?:amb|blu|brn|gry|grn|hzl|oth)[\s\n]|(?:cid:.+[\s\n]|)pid:\d{9}[\s\n]){7}(?:cid:.+[\n]|)/gm).length);
