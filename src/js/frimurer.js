let teambuilder = {};
teambuilder.Frimurer = function(str) {

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

	function ToFrimurer(strInputTeksten){	
		var strTekst = "Tom";
		var Note = false;
		strTekst = strInputTeksten;
		strTekst = strTekst.toLowerCase();
		bogstav = "abcdefghijklmnopqrstuvxyzæøå";
		FrimurerBogstaver = new Array(
			"<img src='/assets/images/koder/frimurer/fri_a.gif' width='29' height='29' alt='A'>",
			"<img src='/assets/images/koder/frimurer/fri_b.gif' width='29' height='29' alt='B'>",
			"<img src='/assets/images/koder/frimurer/fri_c.gif' width='29' height='29' alt='C'>",
			"<img src='/assets/images/koder/frimurer/fri_d.gif' width='29' height='29' alt='D'>",
			"<img src='/assets/images/koder/frimurer/fri_e.gif' width='29' height='29' alt='E'>",
			"<img src='/assets/images/koder/frimurer/fri_f.gif' width='29' height='29' alt='F'>",
			"<img src='/assets/images/koder/frimurer/fri_g.gif' width='29' height='29' alt='G'>",
			"<img src='/assets/images/koder/frimurer/fri_h.gif' width='29' height='29' alt='H'>",
			"<img src='/assets/images/koder/frimurer/fri_i.gif' width='29' height='29' alt='I'>",
			"<img src='/assets/images/koder/frimurer/fri_j.gif' width='29' height='29' alt='J'>",
			"<img src='/assets/images/koder/frimurer/fri_k.gif' width='29' height='29' alt='K'>",
			"<img src='/assets/images/koder/frimurer/fri_l.gif' width='29' height='29' alt='L'>",
			"<img src='/assets/images/koder/frimurer/fri_m.gif' width='29' height='29' alt='M'>",
			"<img src='/assets/images/koder/frimurer/fri_n.gif' width='29' height='29' alt='N'>",
			"<img src='/assets/images/koder/frimurer/fri_o.gif' width='29' height='29' alt='O'>",
			"<img src='/assets/images/koder/frimurer/fri_p.gif' width='29' height='29' alt='P'>",
			"<img src='/assets/images/koder/frimurer/fri_q.gif' width='29' height='29' alt='Q'>",
			"<img src='/assets/images/koder/frimurer/fri_r.gif' width='29' height='29' alt='R'>",
			"<img src='/assets/images/koder/frimurer/fri_s.gif' width='29' height='29' alt='S'>",
			"<img src='/assets/images/koder/frimurer/fri_t.gif' width='29' height='29' alt='T'>",
			"<img src='/assets/images/koder/frimurer/fri_u.gif' width='29' height='29' alt='U'>",
			"<img src='/assets/images/koder/frimurer/fri_v.gif' width='29' height='29' alt='V'>",
			"<img src='/assets/images/koder/frimurer/fri_x.gif' width='29' height='29' alt='X'>",
			"<img src='/assets/images/koder/frimurer/fri_y.gif' width='29' height='29' alt='Y'>",
			"<img src='/assets/images/koder/frimurer/fri_z.gif' width='29' height='29' alt='Z'>",
			"<img src='/assets/images/koder/frimurer/fri_ae.gif' width='29' height='29' alt='&AElig;'>",
			"<img src='/assets/images/koder/frimurer/fri_oe.gif' width='29' height='29' alt='&Oslash'>",
			"<img src='/assets/images/koder/frimurer/fri_a.gif' width='29' height='29' alt='Å1'><IMG SRC='/assets/images/koder/frimurer/fri_a.gif' width='29' height='29' alt='Å2'>");
		tal = "1234567890";
		FrimurerTal = new Array(
			"<img src='/assets/images/koder/frimurer/fri_1.gif' width='29' height='29' alt='1'>",
			"<img src='/assets/images/koder/frimurer/fri_2.gif' width='29' height='29' alt='2'>",
			"<img src='/assets/images/koder/frimurer/fri_3.gif' width='29' height='29' alt='3'>",
			"<img src='/assets/images/koder/frimurer/fri_4.gif' width='29' height='29' alt='4'>",
			"<img src='/assets/images/koder/frimurer/fri_5.gif' width='29' height='29' alt='5'>",
			"<img src='/assets/images/koder/frimurer/fri_6.gif' width='29' height='29' alt='6'>",
			"<img src='/assets/images/koder/frimurer/fri_7.gif' width='29' height='29' alt='7'>",
			"<img src='/assets/images/koder/frimurer/fri_8.gif' width='29' height='29' alt='8'>",
			"<img src='/assets/images/koder/frimurer/fri_9.gif' width='29' height='29' alt='9'>",
			"<img src='/assets/images/koder/frimurer/fri_f.gif' width='29' height='29' alt='0'>");
			
		FrimurerMellemrum = "<img src='/assets/images/koder/frimurer/fri_space.gif' width='29' height='29' alt='mellemrum'>";
		TranstedTekst="";
		for (count=0;count<strTekst.length;count++){
			Tegn=strTekst.charAt(count);
			if (Tegn == "\n"){
				TranstedTekst += "<BR>";
			}
			else if (Tegn == " "){
				TranstedTekst += FrimurerMellemrum;
			}
			else if (ErTal(Tegn)) {
				for (i=0;i<tal.length;i++){
					if (Tegn == tal.charAt(i)){
						TranstedTekst += FrimurerTal[i];
					}
				}
			}
			else if (ErBogstav(Tegn)){
				for (i=0;i<bogstav.length;i++){
					if (Tegn == bogstav.charAt(i)){
						TranstedTekst += FrimurerBogstaver[i];
					}
				}
			}
			else {
				if (Tegn != "\r"){
					TranstedTekst += "<img src='/assets/images/koder/frimurer/fri_ugyldig.gif' width='29' height='29' alt='Ugyldigt tegn'>";
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
