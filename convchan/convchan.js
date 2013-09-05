function Convchan() {
	this.params = {
		prefix : undefined,
		sufix : undefined
	};
}

// Convchan.prototype.conv = function(text, strings, prefix, sufix) {
//     var replacedText = text;
//     return prefix + replacedText + sufix;
// };

Convchan.prototype.parseUrl = function(url) {
    this.params.prefix = url;
    this.params.sufix = url;
};

