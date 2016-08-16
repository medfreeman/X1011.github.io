var markdownIt = require('markdown-it')()
	.use(require('markdown-it-toc-and-anchor').default)
	.use(require('markdown-it-link-target'))

exports.filters = {'markdown-it': markdownIt.render.bind(markdownIt)}
