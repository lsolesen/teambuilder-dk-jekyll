let teambuilder = {};
teambuilder.Runer = function(str) {

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

	function ToRuner(strInputTeksten){	
		var strTekst = strInputTeksten;
		strTekst = strTekst.toLowerCase();
		var Note = false;
		bogstav = "abcdefghijklmnoprstuyæøå";
		tal="1234567890";
		KodeBogstaver = new Array(
			"<img src='/assets/images/koder/runer/elder/a.png' width='46' height='70' alt='A'>",
			"<img src='/assets/images/koder/runer/elder/b.png' width='46' height='70' alt='B'>",
			"<img src='/assets/images/koder/runer/elder/c.png' width='46' height='70' alt='C'>",
			"<img src='/assets/images/koder/runer/elder/d.png' width='46' height='70' alt='D'>",
			"<img src='/assets/images/koder/runer/elder/e.png' width='46' height='70' alt='E'>",
			"<img src='/assets/images/koder/runer/elder/f.png' width='46' height='70' alt='F'>",
			"<img src='/assets/images/koder/runer/elder/g.png' width='46' height='70' alt='G'>",
			"<img src='/assets/images/koder/runer/elder/h.png' width='46' height='70' alt='H'>",
			"<img src='/assets/images/koder/runer/elder/ij.png' width='46' height='70' alt='I'>",
			"<img src='/assets/images/koder/runer/elder/ij.png' width='46' height='70' alt='J'>",
			"<img src='/assets/images/koder/runer/elder/k.png' width='46' height='70' alt='K'>",
			"<img src='/assets/images/koder/runer/elder/l.png' width='46' height='70' alt='L'>",
			"<img src='/assets/images/koder/runer/elder/m.png' width='46' height='70' alt='M'>",
			"<img src='/assets/images/koder/runer/elder/n.png' width='46' height='70' alt='N'>",
			"<img src='/assets/images/koder/runer/elder/o.png' width='46' height='70' alt='O'>",
			"<img src='/assets/images/koder/runer/elder/p.png' width='46' height='70' alt='P'>",
			"<img src='/assets/images/koder/runer/elder/r.png' width='46' height='70' alt='R'>",
			"<img src='/assets/images/koder/runer/elder/s.png' width='46' height='70' alt='S'>",
			"<img src='/assets/images/koder/runer/elder/t.png' width='46' height='70' alt='T'>",
			"<img src='/assets/images/koder/runer/elder/u.png' width='46' height='70' alt='U'>",
			"<img src='/assets/images/koder/runer/elder/y.png' width='46' height='70' alt='Y'>",
			"<img src='/assets/images/koder/runer/elder/ae.png' width='46' height='70' alt='Æ'>",
			"<img src='/assets/images/koder/runer/elder/oe.png' width='46' height='70' alt='Ø'>",
			"<img src='/assets/images/koder/runer/elder/a.png' width='46' height='70' alt='Å1'><img src='/assets/images/koder/runer/elder/a.png' width='46' height='70' alt='Å2'>");
		KodeTal = new Array(
			"<img src='/assets/images/koder/runer/elder/e.png' width='46' height='70' alt='1'><img src='/assets/images/koder/runer/elder/n.png' width='46' height='70' alt='1'>",
			"<img src='/assets/images/koder/runer/elder/t.png' width='46' height='70' alt='2'><img src='/assets/images/koder/runer/elder/o.png' width='46' height='70' alt='2'>",
			"<img src='/assets/images/koder/runer/elder/t.png' width='46' height='70' alt='3'><img src='/assets/images/koder/runer/elder/r.png' width='46' height='70' alt='3'><img src='/assets/images/koder/runer/elder/e.png' width='46' height='70' alt='3'>",
			"<img src='/assets/images/koder/runer/elder/f.png' width='46' height='70' alt='4'><img src='/assets/images/koder/runer/elder/ij.png' width='46' height='70' alt='4'><img src='/assets/images/koder/runer/elder/r.png' width='46' height='70' alt='4'><img src='/assets/images/koder/runer/elder/e.png' width='46' height='70' alt='4'>",
			"<img src='/assets/images/koder/runer/elder/f.png' width='46' height='70' alt='5'><img src='/assets/images/koder/runer/elder/e.png' width='46' height='70' alt='5'><img src='/assets/images/koder/runer/elder/m.png' width='46' height='70' alt='5'>",
			"<img src='/assets/images/koder/runer/elder/s.png' width='46' height='70' alt='6'><img src='/assets/images/koder/runer/elder/e.png' width='46' height='70' alt='6'><img src='/assets/images/koder/runer/elder/k.png' width='46' height='70' alt='6'><img src='/assets/images/koder/runer/elder/s.png' width='46' height='70' alt='6'>",
			"<img src='/assets/images/koder/runer/elder/s.png' width='46' height='70' alt='7'><img src='/assets/images/koder/runer/elder/y.png' width='46' height='70' alt='7'><img src='/assets/images/koder/runer/elder/u.png' width='46' height='70' alt='7'>",
			"<img src='/assets/images/koder/runer/elder/o.png' width='46' height='70' alt='8'><img src='/assets/images/koder/runer/elder/t.png' width='46' height='70' alt='8'><img src='/assets/images/koder/runer/elder/t.png' width='46' height='70' alt='8'><img src='/assets/images/koder/runer/elder/e.png' width='46' height='70' alt='8'>",
			"<img src='/assets/images/koder/runer/elder/n.png' width='46' height='70' alt='9'><img src='/assets/images/koder/runer/elder/ij.png' width='46' height='70' alt='9'>",
			"<img src='/assets/images/koder/runer/elder/n.png' width='46' height='70' alt='0'><img src='/assets/images/koder/runer/elder/u.png' width='46' height='70' alt='0'><img src='/assets/images/koder/runer/elder/l.png' width='46' height='70' alt='0'>");
		KodeMellemrum = "<img src='/assets/images/koder/runer/elder/filler.png' width='46' height='70' alt=''>"

		TranstedTekst="";
		for (count=0;count<strTekst.length;count++){
			Tegn=strTekst.charAt(count);
			if (Tegn == "\n"){
				TranstedTekst += "<BR>";
			}
			else if (Tegn == " "){
				TranstedTekst += KodeMellemrum;
			}
			else if (ErTal(Tegn)) {
				for (i=0;i<tal.length;i++){
					if (Tegn == tal.charAt(i)){
						TranstedTekst += KodeTal[i];
					}
				}
			}
			else if (ErBogstav(Tegn)){
				if (Tegn == "q") {
					TranstedTekst += "<img src='/assets/images/koder/runer/elder/ugyldig.png' width='46' height='70' alt='Ugyldigt tegn'>";
					Note = true;
				} 
				else if (Tegn == "v"){
					TranstedTekst += "<img src='/assets/images/koder/runer/elder/ugyldig.png' width='46' height='70' alt='Ugyldigt tegn'>";
					Note = true;
				}
				else if (Tegn == "x"){
					TranstedTekst += "<img src='/assets/images/koder/runer/elder/ugyldig.png' width='46' height='70' alt='Ugyldigt tegn'>";
					Note = true;
				}
				else if (Tegn == "z"){
					TranstedTekst += "<img src='/assets/images/koder/runer/elder/ugyldig.png' width='46' height='70' alt='Ugyldigt tegn'>";
					Note = true;
				}
				else {
						for (i=0;i<bogstav.length;i++){
							if (Tegn == bogstav.charAt(i)){
								  TranstedTekst += KodeBogstaver[i];
							}
						}
				}
			}
			else {
				if (Tegn != "\r"){
					TranstedTekst += "<img src='/assets/images/koder/runer/elder/ugyldig.png' width='46' height='70' alt='Ugyldigt tegn'>";
					Note = true;
				};
			};
		};
		return TranstedTekst;
	};

	function decrypt() {
		return str;
	}

	function encrypt() {
		return ToFrimurer(str);
	}

	let publicAPI = {
		decrypt : decrypt,
		encrypt : encrypt
	};

	return publicAPI;
};

module.exports = teambuilder;
