let shuffledQuestions = shuffle(questions)
let score = 0
let total = 0
let currentIndex = 0

let stats = {
  [FUNC_DECLARATION]: {
    score: 0,
    total: 0
  },
  [FUNC_EXPRESSION]: {
    score: 0,
    total: 0
  },
  [ARROW_FUNC]: {
    score: 0,
    total: 0
  }
}

let options = {
  "indent_size": "4",
  "indent_char": " ",
  "max_preserve_newlines": "-1",
  "preserve_newlines": false,
  "keep_array_indentation": false,
  "break_chained_methods": false,
  "indent_scripts": "normal",
  "brace_style": "collapse",
  "space_before_conditional": true,
  "unescape_strings": false,
  "jslint_happy": false,
  "end_with_newline": false,
  "wrap_line_length": "0",
  "indent_inner_html": false,
  "comma_first": false,
  "e4x": false,
  "indent_empty_lines": false
}

function prettify(text){
  return js_beautify(text.trim(), options).replace(/;/g, "");
}

function shuffle(array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

$(document).delegate('textarea', 'keydown', function(e) {
  var keyCode = e.keyCode || e.which;

  if (keyCode == 9) {
    e.preventDefault();
    var start = $(this).get(0).selectionStart;
    var end = $(this).get(0).selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    $(this).val($(this).val().substring(0, start)
                + "  "
                + $(this).val().substring(end));

    // put caret at right position again
    $(this).get(0).selectionStart =
    $(this).get(0).selectionEnd = start + 2;
  }
});
