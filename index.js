
const EOL = require('os').EOL;

module.exports = mindIndent;

const newLineRegex = /\r?\n[ |\t]+/;

function mindIndent(strings) {
	var firstNewline;
	strings = strings.map((s, idx) => {
		if (typeof firstNewline === 'undefined') {
			var res = s.match(newLineRegex);
			if (res) {
				firstNewline = res[0];
			}
		}
		if (typeof firstNewline !== 'undefined') {
			return s.replace(firstNewline, EOL);
		}
		return s;
	}).map((s, idx) => {
		return s + (arguments[idx + 1] || '');
	});
  return strings.join('');
}
