mySettings = {
	previewParser: function(content) {
		var output = Opal.Asciidoctor.$render(content, Opal.hash2(['attributes'], {'attributes': ['notitle!']}));
		return output
	},
	onShiftEnter:		{keepDefault:false, openWith:'\n\n'},
	markupSet: [
		{name:'First Level Heading', key:'1', placeHolder:'Your title here...', openWith:'= '},
		{name:'Second Level Heading', key:'2', placeHolder:'Your title here...',  openWith:'== '},
		{name:'Heading 3', key:'3', openWith:'=== ', placeHolder:'Your title here...' },
		{name:'Heading 4', key:'4', openWith:'==== ', placeHolder:'Your title here...' },
		{name:'Heading 5', key:'5', openWith:'===== ', placeHolder:'Your title here...' },
		{name:'Heading 6', key:'6', openWith:'====== ', placeHolder:'Your title here...' },
		{separator:'---------------' },		
		{name:'Bold', key:'B', openWith:'*', closeWith:'*'},
		{name:'Italic', key:'I', openWith:'_', closeWith:'_'},
		{separator:'---------------' },
		{name:'Bulleted List', openWith:'- ' },
		{name:'Numeric List', openWith:'. '},
		{separator:'---------------' },
		{name:'Picture', key:'P', replaceWith:'image::[![Url:!:http://]!][[![Title]!]]'},
		{name:'Link', key:'L', openWith:'[![Url:!:http://]!][', closeWith:']', placeHolder:'Your text to link here...' },
		{separator:'---------------'},	
		{name:'Quotes', openWith:'[quote, [![Attribution]!]]\n----\n', closeWith:'\n----\n'},
		{name:'Code Block / Code', openWith:'[source]\n----\n', closeWith:'\n----\n'},
		{separator:'---------------'},
		{name:'Preview', call:'preview', className:"preview"}
	]
}