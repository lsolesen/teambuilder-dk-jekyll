let teambuilder = {};
// https://www.nayuki.io/page/automatic-caesar-cipher-breaker-javascript
teambuilder.Alfa = function(str, w = true, reverse = false) {

	function vend(strInputTeksten) {
		//end vend( string ) -> string
		   var TranstedTekst="";
		   for (var i=strInputTeksten.length-1; i>=0; i-- )
		   TranstedTekst += strInputTeksten.charAt(i);
		   return TranstedTekst;
    };

    function ErTal(Tegn){
		if(Tegn < "0"){
			return false;
		}
		if(Tegn > "9"){
			return false;
		}
		return true
	};

	function ToAlfa(strInputTeksten){
		if (w == true){
			var bogstaver = 'abcdefghijklmnopqrstuvwxyzæøå';
		} else{
			var bogstaver = 'abcdefghijklmnopqrstuvxyzæøå';
		};

		if (reverse == true){
			bogstaver = vend(bogstaver);
		};

		var Tekst = strInputTeksten;
		Tekst = Tekst.toLowerCase();
		var TranstedTekst="";
		var nr

		for (count=0;count<Tekst.length;count++){
			Tegn=Tekst.charAt(count);
			nr = bogstaver.indexOf(Tegn);
			nr++;

			if (nr == 0) {
				if (Tegn == " "){
					TranstedTekst += "   ";
				}
				else if (ErTal(Tegn)){
					TranstedTekst += "_";
					TranstedTekst += Tegn;
				}
				else {
					TranstedTekst += Tegn;
				}
			}
			else {
				TranstedTekst += nr
				TranstedTekst += " ";
			};
		}
		return TranstedTekst;
	};

	function decrypt() {
		return str;
	}

	function encrypt() {
		return ToAlfa(str).trim();
	}

	let publicAPI = {
		decrypt : decrypt,
		encrypt : encrypt
	};

	return publicAPI;
};

module.exports = teambuilder;
