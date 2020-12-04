/**
 * Let's play golf!
 * NOTE: Only works with unix line endings.
 */
console.log('Matches:', `\n${require('fs').readFileSync('data.txt', 'utf8')}`.match(/(?:(?:[\s\n]cid:.+|)[\s\n]byr:.+|(?:[\s\n]cid:.+|)[\s\n]iyr:.+|(?:[\s\n]cid:.+|)[\s\n]eyr:.+|(?:[\s\n]cid:.+|)[\s\n]hgt:.+|(?:[\s\n]cid:.+|)[\s\n]hcl:.+|(?:[\s\n]cid:.+|)[\s\n]ecl:.+|(?:[\s\n]cid:.+|)[\s\n]pid:.+){7}/gm).length);
