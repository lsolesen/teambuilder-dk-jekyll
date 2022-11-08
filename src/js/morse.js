let teambuilder = {};
// https://www.nayuki.io/page/automatic-caesar-cipher-breaker-javascript
teambuilder.Morse = function(str, special_chars = 'false') {

	var til_morse = {
		a: ".-",
		b: "-...",
		c: "-.-.",
		d: "-..",
		e: ".",
		f: "..-.",
		g: "--.",
		h: "....",
		i: "..",
		j: ".---",
		k: "-.-",
		l: ".-..",
		m: "--",
		n: "-.",
		o: "---",
		p: ".--.",
		q: "--.-",
		r: ".-.",
		s: "...",
		t: "-",
		u: "..-",
		v: "...-",
		w: ".--",
		x: "-..-",
		y: "-.--",
		z: "--..",
		"æ": ".-.-",
		"ø": "---.",
		"å": ".--.-",
		"0": "-----",
		"1": ".----",
		"2": "..---",
		"3": "...--",
		"4": "....-",
		"5": ".....",
		"6": "-....",
		"7": "--...",
		"8": "---..",
		"9": "----.",
		".": ".-.-.-",
		",": "--..--",
		"?": "..--..",
		"-": "-....-",
		"=": "-...-",
		":": "---...",
		";": "-.-.-.",
		"(": "-.--.",
		")": "-.--.-",
		"/": "-..-.",
		'"': ".-..-.",
		"$": "...-..-",
		"'": ".----.",
		"¶": ".-.-..",
		"_": "..--.-",
		"@": ".--.-.",
		"!": "---.",
		"+": ".-.-.",
		"Error": "........"
	};
	var fra_morse = {
		".-": "a",
		"-...": "b",
		"-.-.": "c",
		"-..": "d",
		".": "e",
		"..-.": "f",
		"--.": "g",
		"....": "h",
		"..": "i",
		".---": "j",
		"-.-": "k",
		".-..": "l",
		"--": "m",
		"-.": "n",
		"---": "o",
		".--.": "p",
		"--.-": "q",
		".-.": "r",
		"...": "s",
		"-": "t",
		"..-": "u",
		"...-": "v",
		".--": "w",
		"-..-": "x",
		"-.--": "y",
		"--..": "z",
		".-.-": "æ",
		"---.": "ø",
		".--.-": "å",
		"-----": "0",
		".----": "1",
		"..---": "2",
		"...--": "3",
		"....-": "4",
		".....": "5",
		"-....": "6",
		"--...": "7",
		"---..": "8",
		"----.": "9",
		".-.-.-": ".",
		"--..--": ",",
		"..--..": "?",
		"-....-": "-",
		"-...-": "=",
		"---...": ":",
		"-.-.-.": ";",
		"-.--.": "(",
		"-.--.-": ")",
		"-..-.": "/",
		".-..-.": '"',
		"...-..-": "$",
		".----.": "'",
		".-.-..": "¶",
		"..--.-": "_",
		".--.-.": "@",
		"---.": "!",
		".-.-.": "+",
		"........": "Error"
	};
	var til_ak = {
		a: "k",
		b: "l",
		c: "m",
		d: "n",
		e: "o",
		f: "p",
		g: "q",
		h: "r",
		i: "s",
		j: "t",
		k: "u",
		l: "v",
		m: "w",
		n: "x",
		o: "y",
		p: "z",
		q: "æ",
		r: "ø",
		s: "å",
		t: "a",
		u: "b",
		v: "c",
		w: "d",
		x: "e",
		y: "f",
		z: "g",
		"æ": "h",
		"ø": "i",
		"å": "j"
	};
	var fra_ak = {
		k: "a",
		l: "b",
		m: "c",
		n: "d",
		o: "e",
		p: "f",
		q: "g",
		r: "h",
		s: "i",
		t: "j",
		u: "k",
		v: "l",
		w: "m",
		x: "n",
		y: "o",
		z: "p",
		"æ": "q",
		"ø": "r",
		"å": "s",
		a: "t",
		b: "u",
		c: "v",
		d: "w",
		e: "x",
		f: "y",
		g: "z",
		h: "æ",
		i: "ø",
		j: "å"
	};
	function translate(input, kodetype) {
		var inp = input.toLowerCase(), out = "", i, b, j, letter, word;
		if (kodetype == "til_morse") {
			for (i = 0; i < inp.length; i++) {
				if (inp.charAt(i) == ' ') {
					while (inp.charAt(i + 1) == ' ') {
						i++;
					}
				} else {
					out += til_morse[inp.charAt(i)];
				}
				if (i + 1 < inp.length) {
					out += "/";
				}
			}
		}
		if (kodetype == "fra_morse") {
			word = inp.split("//");
			for (i = 0; i < word.length; i++)
			{
				letter = word[i].split("/");
				for (j = 0; j < letter.length; j++)
				{
					out += fra_morse[letter[j]];
				}
			out += " ";
			}
		}
		return out.trim();
	}

	function decrypt() {
		return translate(str, 'fra_morse');
	}

	function encrypt() {
		return translate(str, 'til_morse');
	}

	let publicAPI = {
		decrypt : decrypt,
		encrypt : encrypt
	};

	return publicAPI;
};

module.exports = teambuilder;
