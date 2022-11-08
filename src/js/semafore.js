let teambuilder = {};
teambuilder.Semafore = function(str) {

	function ErTal(Tegn) {
		if(Tegn < "0"){
			return false;
		}
		if(Tegn > "9"){
			return false;
		}
		return true
	};

	function ErBogstav(Tegn) {
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

	function ToSemafore(strInputTeksten){	
		var SidsteTegn = "Tekst"
		var strTekst = "Tom";
		var Note = false;
		var CCC = "<img src='/assets/images/koder/semafor/c.png' width='50' height='50' alt='C'><img src='/assets/images/koder/semafor/c.png' width='50' height='50' alt='C'><img src='/assets/images/koder/semafor/c.png' width='50' height='50' alt='C'>"
		var SSS = "<img src='/assets/images/koder/semafor/s.png' width='50' height='50' alt='S'><img src='/assets/images/koder/semafor/s.png' width='50' height='50' alt='S'><img src='/assets/images/koder/semafor/s.png' width='50' height='50' alt='S'>"
		strTekst = strInputTeksten;
		strTekst = strTekst.toLowerCase();
		bogstav = "abcdefghijklmnoprstuvwyæøå";
		SemaforeBogstaver = new Array(
			"<img src='/assets/images/koder/semafor/a.png' width='50' height='50' alt='A'>",
			"<img src='/assets/images/koder/semafor/b.png' width='50' height='50' alt='B'>",
			"<img src='/assets/images/koder/semafor/c.png' width='50' height='50' alt='C'>",
			"<img src='/assets/images/koder/semafor/d.png' width='50' height='50' alt='D'>",
			"<img src='/assets/images/koder/semafor/e.png' width='50' height='50' alt='E'>",
			"<img src='/assets/images/koder/semafor/f.png' width='50' height='50' alt='F'>",
			"<img src='/assets/images/koder/semafor/g.png' width='50' height='50' alt='G'>",
			"<img src='/assets/images/koder/semafor/h.png' width='50' height='50' alt='H'>",
			"<img src='/assets/images/koder/semafor/i.png' width='50' height='50' alt='I'>",
			"<img src='/assets/images/koder/semafor/j.png' width='50' height='50' alt='J'>",
			"<img src='/assets/images/koder/semafor/k.png' width='50' height='50' alt='K'>",
			"<img src='/assets/images/koder/semafor/l.png' width='50' height='50' alt='L'>",
			"<img src='/assets/images/koder/semafor/m.png' width='50' height='50' alt='M'>",
			"<img src='/assets/images/koder/semafor/n.png' width='50' height='50' alt='N'>",
			"<img src='/assets/images/koder/semafor/o.png' width='50' height='50' alt='O'>",
			"<img src='/assets/images/koder/semafor/p.png' width='50' height='50' alt='P'>",
			"<img src='/assets/images/koder/semafor/r.png' width='50' height='50' alt='R'>",
			"<img src='/assets/images/koder/semafor/s.png' width='50' height='50' alt='S'>",
			"<img src='/assets/images/koder/semafor/t.png' width='50' height='50' alt='T'>",
			"<img src='/assets/images/koder/semafor/u.png' width='50' height='50' alt='U'>",
			"<img src='/assets/images/koder/semafor/v.png' width='50' height='50' alt='V'>",
			"<img src='/assets/images/koder/semafor/v.png' width='50' height='50' alt='W/V'>",
			"<img src='/assets/images/koder/semafor/y.png' width='50' height='50' alt='Y'>",
			"<img src='/assets/images/koder/semafor/a.png' width='50' height='50' alt='Æ,1'><img src='/assets/images/koder/semafor/e.png' width='50' height='50' NAME='Æ,2'>",
			"<img src='/assets/images/koder/semafor/o.png' width='50' height='50' alt='Ø,1'><img src='/assets/images/koder/semafor/e.png' width='50' height='50' NAME='Ø,2'>",
			"<img src='/assets/images/koder/semafor/a.png' width='50' height='50' alt='Å,1'><img src='/assets/images/koder/semafor/a.png' width='50' height='50' NAME='Å,2'>");
		tal = "1234567890";
		SemaforeTal = new Array(
			"<img src='/assets/images/koder/semafor/a.png' width='50' height='50' alt='1'>",
			"<img src='/assets/images/koder/semafor/b.png' width='50' height='50' alt='2'>",
			"<img src='/assets/images/koder/semafor/c.png' width='50' height='50' alt='3'>",
			"<img src='/assets/images/koder/semafor/d.png' width='50' height='50' alt='4'>",
			"<img src='/assets/images/koder/semafor/e.png' width='50' height='50' alt='5'>",
			"<img src='/assets/images/koder/semafor/f.png' width='50' height='50' alt='6'>",
			"<img src='/assets/images/koder/semafor/g.png' width='50' height='50' alt='7'>",
			"<img src='/assets/images/koder/semafor/h.png' width='50' height='50' alt='8'>",
			"<img src='/assets/images/koder/semafor/i.png' width='50' height='50' alt='9'>",
			"<img src='/assets/images/koder/semafor/k.png' width='50' height='50' alt='0'>");
			
		semaforeMellemrum = "<img src='/assets/images/koder/semafor/space.png' width='50' height='50' alt='mellemrum'>";
		TranstedTekst="";
		for (count=0;count<strTekst.length;count++){
			Tegn=strTekst.charAt(count);
			if (Tegn == " "){
				TranstedTekst += semaforeMellemrum;
			}
			else if (ErTal(Tegn)) {
				if (SidsteTegn == "Tekst"){
					TranstedTekst += CCC //Kontroltegn før ciffer
				}
				for (i=0;i<tal.length;i++){
					if (Tegn == tal.charAt(i)){
						TranstedTekst += SemaforeTal[i];
					}
				}
				SidsteTegn = "Tal"
			}
			else if (ErBogstav(Tegn)){
				if (SidsteTegn == "Tal"){
					TranstedTekst += CCC //Indsæt kontroltegn efter ciffer
				}
				for (i=0;i<bogstav.length;i++){
					if (Tegn == bogstav.charAt(i)){
						TranstedTekst += SemaforeBogstaver[i];
					}
				}
				SidsteTegn = "Tekst"
			}
			else {
				if (Tegn != "\n"){
					if (Tegn != "\r"){
						TranstedTekst += "<img src='/assets/images/koder/semafor/ugyldig.png' width='50' height='50' alt='Ugyldigt tegn'>";
						Note = true;
					}
				}
			}
		}
		if (SidsteTegn == "Tal"){
				TranstedTekst += CCC; //For at afsætte ciffer med kontroltegnet CCC
		}
		return TranstedTekst += SSS;  //Kontroltegn for, at meldingen er slut
	};

	function getNote() {
		return "<img src='/assets/images/koder/semafor/ugyldig.png' width='50' height='50' alt='Ugyldigt tegn' ALIGN='absbotton'>Der hvor der er en mand med et r&oslash;dt kryds over, betyder det, at tegnet ikke kunne overs&aelig;ttes til semafore.";
	}

	function decrypt() {
		return str;
	}

	function encrypt() {
		return ToSemafore(str);
	}

	let publicAPI = {
		decrypt : decrypt,
		encrypt : encrypt
	};

	return publicAPI;
};

module.exports = teambuilder;
