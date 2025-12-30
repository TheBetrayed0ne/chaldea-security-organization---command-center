const fs = require('fs');
const content = fs.readFileSync('data/servants/normal/berserker.ts', 'utf8');
const lines = content.split('\n');

const fixed = lines.map(line => {
  if (line.includes('description:')) {
    // Find the description string bounds
    const descStart = line.indexOf("description: '") + 14;
    const restOfLine = line.substring(descStart);
    let descEnd = -1;
    let inString = true;
    
    // Find the closing quote that isn't escaped
    for (let i = 0; i < restOfLine.length - 1; i++) {
      if (restOfLine[i] === "'" && restOfLine[i+1] === ',') {
        descEnd = i;
        break;
      }
    }
    
    if (descEnd > 0) {
      const before = line.substring(0, descStart);
      const desc = restOfLine.substring(0, descEnd);
      const after = restOfLine.substring(descEnd);
      // Escape all single quotes in the description
      const escapedDesc = desc.replace(/'/g, "\'");
      return before + escapedDesc + after;
    }
  }
  return line;
});

fs.writeFileSync('data/servants/normal/berserker.ts', fixed.join('\n'));
console.log('Fixed apostrophes in berserker.ts');
