
export const parseResponse=(response)=>{
    const bulletPointRegex = /^\*\s+/;
    const orderedListRegex = /^\d+\.\s+/;
    const unorderedListRegex = /^-\s+/;

    const lines = response.split('\n');
    const parsedLines = lines.map((line) => {
      if (bulletPointRegex.test(line)) {
        return `<li>${line.replace(bulletPointRegex, '').trim()}</li>`;
      }
      if (orderedListRegex.test(line)) {
        return `<li>${line.replace(orderedListRegex, '').trim()}</li>`;
      }
      if (unorderedListRegex.test(line)) {
        return `<li>${line.replace(unorderedListRegex, '').trim()}</li>`;
      }
      return line;
    });

    if (parsedLines.some((line) => bulletPointRegex.test(line))) {
      return `<ul>${parsedLines.join('')}</ul>`;
    }
    if (parsedLines.some((line) => orderedListRegex.test(line))) {
      return `<ol>${parsedLines.join('')}</ol>`;
    }
    if (parsedLines.some((line) => unorderedListRegex.test(line))) {
      return `<ul>${parsedLines.join('')}</ul>`;
    }
    return parsedLines.join('<br />');
}

