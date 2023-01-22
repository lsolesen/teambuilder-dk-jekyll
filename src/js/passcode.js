let teambuilder = {};
// https://www.nayuki.io/page/automatic-caesar-cipher-breaker-javascript
teambuilder.Passcode = function(str, kodeord = 'SPEJD') {

	function ErBogstav(Tegn){
		if(Tegn == "å"){
			return true;
		}
		else if(Tegn == "ø"){
			return true;
		}
		else if(Tegn == "æ"){
			return true;
		}
		else if(Tegn < "a"){
			return false;
		}
		else if(Tegn > "z"){
			return false;
		}
		else {
			return true;
		};
	};

	function ToSpejd(strInputTeksten, kodeord){
		var Tekst = strInputTeksten;
		var Keyword = kodeord;
		Keyword = Keyword.toLowerCase();
		var TranstedTekst = '';
		var AntalFejl = 0;
		var SmaaBogstaver = 'abcdefghijklmnopqrstuvxyzæøå';
		var Tal = '1234567890 .,?!-:@#\n';

		for (count=0;count<Keyword.length;count++){
			if (!ErBogstav(Keyword.charAt(count))){
				AntalFejl += 1;
			};
		};

		if (AntalFejl > 0){
			TranstedTekst = 'Fejl : Kodeordet må kun indeholde bogstaver!'	;
		}
		else {
			for (count=0;count<Keyword.length;count++){
				Tegn=Keyword.charAt(count);
				var myRegExp = new RegExp(Tegn,"g");
				var Antal = Keyword.match(myRegExp);
				if (Antal.length > 1){
					AntalFejl += 1;
				}
				SmaaBogstaver = SmaaBogstaver.replace(Tegn,'');
			};
			if (AntalFejl > 0){
				TranstedTekst = 'Fejl : Det samme bogstav må max være i kodeordet en gang!';
			}
			else {
				var SmaaAlfabet = Keyword.concat(SmaaBogstaver);
				var SmaaLinie1 = SmaaAlfabet.substring(0,14);
				var SmaaLinie2 = SmaaAlfabet.substring(14,29);

				var StoreLinie1 = SmaaLinie1.toUpperCase();
				var StoreLinie2 = SmaaLinie2.toUpperCase();

				var Temp = SmaaLinie1.concat(SmaaLinie2);
				Temp = Temp.concat(StoreLinie1);
				Temp = Temp.concat(StoreLinie2);
				var OversatLinie1 = Temp.concat(Tal);

				Temp = SmaaLinie2.concat(SmaaLinie1);
				Temp = Temp.concat(StoreLinie2);
				Temp = Temp.concat(StoreLinie1);
				var OversatLinie2 = Temp.concat(Tal);

				for (count=0;count<Tekst.length;count++){
					Tegn=Tekst.charAt(count);
					for (i=0;i<OversatLinie1.length;i++){
						if (Tegn == OversatLinie1.charAt(i)){
							TranstedTekst += OversatLinie2.charAt(i);
							break;
						};
					};
				};
			};
		};
		return TranstedTekst;
	};

	function decrypt() {
		return str;
	}

	function encrypt() {
		return ToSpejd(str, kodeord);
	}

	let publicAPI = {
		decrypt : decrypt,
		encrypt : encrypt
	};

	return publicAPI;
};

module.exports = teambuilder;
