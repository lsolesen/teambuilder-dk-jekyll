let teambuilder = {};
// https://www.nayuki.io/page/automatic-caesar-cipher-breaker-javascript
teambuilder.Backwards = function(str, reverse = 'true', remove_space = 'false', insert_random_space = 'false') {

	function vend(strInputTeksten) {
		//end vend( string ) -> string
		   var TranstedTekst="";
		   for (var i=strInputTeksten.length-1; i>=0; i-- )
		   TranstedTekst += strInputTeksten.charAt(i);
		   return TranstedTekst;
   };

   function fjernBlanke(strInputTeksten) {
	   //end fjernBlanke( string ) -> string
		   var fjerntegn = RegExp(' ', 'g')
		   return strInputTeksten.replace(fjerntegn,'');
   };

   function insertBlank(strInputTeksten, max ) {
		//end indsetBlanke( string ) -> string
		   var TranstedTekst = new Array();
		   var i = 0
		   while ( strInputTeksten.length > 0 ) {
			   wlgt = Math.min( strInputTeksten.length, Math.floor( 1+ Math.random()*max ) );
			   TranstedTekst[i++] = strInputTeksten.substring( 0,wlgt );
			   strInputTeksten = strInputTeksten.substring( wlgt );
		   }
		   return TranstedTekst.join(" ");
   };

   function ToTekst(strInputTeksten) {
		TranstedTekst = strInputTeksten
		if (reverse == 'true') {
			TranstedTekst = vend(TranstedTekst);
		}
		if (remove_space == 'true') {
			TranstedTekst = fjernBlanke(TranstedTekst);
		}
		if (insert_random_space == 'true') {
		   TranstedTekst = insertBlank(TranstedTekst, 6 );
		}
		return TranstedTekst;
	};

	function decrypt() {
		return str;
	}

	function encrypt() {
		return ToTekst(str).trim();
	}

	let publicAPI = {
		decrypt : decrypt,
		encrypt : encrypt
	};

	return publicAPI;
};

module.exports = teambuilder;
