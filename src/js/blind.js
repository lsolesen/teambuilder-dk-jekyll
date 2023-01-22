let teambuilder = {};
teambuilder.Blindskrift = function(str) {

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

	function ToBlind(strInputTeksten){	
		var Note = false;
		var strTekst = strInputTeksten;
		strTekst = strTekst.toLowerCase();
		bogstav = "abcdefghijklmnoprstuvwyxzæøå1234567890 \n";
		BlindBogstaver = new Array(
			"<img src='/assets/images/koder/blindskrift/blind_a.gif' width='30' height='47' alt='A'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_b.gif' width='30' height='47' alt='B'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_c.gif' width='30' height='47' alt='C'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_d.gif' width='30' height='47' alt='D'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_e.gif' width='30' height='47' alt='E'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_f.gif' width='30' height='47' alt='F'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_g.gif' width='30' height='47' alt='G'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_h.gif' width='30' height='47' alt='H'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_i.gif' width='30' height='47' alt='I'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_j.gif' width='30' height='47' alt='J'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_k.gif' width='30' height='47' alt='K'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_l.gif' width='30' height='47' alt='L'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_m.gif' width='30' height='47' alt='M'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_n.gif' width='30' height='47' alt='N'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_o.gif' width='30' height='47' alt='O'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_p.gif' width='30' height='47' alt='P'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_r.gif' width='30' height='47' alt='R'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_s.gif' width='30' height='47' alt='S'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_t.gif' width='30' height='47' alt='T'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_u.gif' width='30' height='47' alt='U'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_v.gif' width='30' height='47' alt='V'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_w.gif' width='30' height='47' alt='W'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_y.gif' width='30' height='47' alt='Y'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_x.gif' width='30' height='47' alt='X'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_z.gif' width='30' height='47' alt='Z'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_a.gif' width='30' height='47' alt='Æ,1'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_e.gif' width='30' height='47' alt='' NAME='Æ,2'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_o.gif' width='30' height='47' alt='Ø,1'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_e.gif' width='30' height='47' alt='' NAME='Ø,2'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_a.gif' width='30' height='47' alt='Å,1'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_a.gif' width='30' height='47' alt='' NAME='Å,2'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_e.gif' width='30' height='47' alt='E'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_n.gif' width='30' height='47' alt='N'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='30' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_t.gif' width='30' height='47' alt='T'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_o.gif' width='30' height='47' alt='O'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='30' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_t.gif' width='30' height='47' alt='T'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_r.gif' width='30' height='47' alt='R'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_e.gif' width='30' height='47' alt='E'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='30' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_f.gif' width='30' height='47' alt='F'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_i.gif' width='30' height='47' alt='I'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_r.gif' width='30' height='47' alt='R'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_e.gif' width='30' height='47' alt='E'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='30' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_f.gif' width='30' height='47' alt='F'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_e.gif' width='30' height='47' alt='E'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_m.gif' width='30' height='47' alt='M'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='30' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_s.gif' width='30' height='47' alt='S'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_e.gif' width='30' height='47' alt='E'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_k.gif' width='30' height='47' alt='K'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_s.gif' width='30' height='47' alt='S'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='30' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_s.gif' width='30' height='47' alt='S'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_y.gif' width='30' height='47' alt='Y'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_v.gif' width='30' height='47' alt='V'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='30' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_o.gif' width='30' height='47' alt='O'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_t.gif' width='30' height='47' alt='T'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_t.gif' width='30' height='47' alt='T'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_e.gif' width='30' height='47' alt='E'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<img src='/assets/images/koder/blindskrift/blind_n.gif' width='30' height='47' alt='N'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_i.gif' width='30' height='47' alt='I'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='30' height='90' alt?''>",
			"<img src='/assets/images/koder/blindskrift/blind_n.gif' width='30' height='47' alt='N'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_u.gif' width='30' height='47' alt='U'><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''><img src='/assets/images/koder/blindskrift/blind_l.gif' width='30' height='47' alt='L'>",
			"<img src='/assets/images/koder/blindskrift/blind_space.gif' width='30' height='47' alt=''><img src='/assets/images/koder/blindskrift/blind_filler.gif' width='15' height='90' alt=''>",
			"<br>");	
		TranstedTekst="";
		for (count=0;count<strTekst.length;count++){
			Tegn=strTekst.charAt(count);
			for (i=0;i<bogstav.length;i++){
				if (Tegn == bogstav.charAt(i)){
					TranstedTekst += BlindBogstaver[i];
				};
			};
		};
		return TranstedTekst;
	};

	function decrypt() {
		return str;
	}

	function encrypt() {
		return ToBlind(str);
	}

	let publicAPI = {
		decrypt : decrypt,
		encrypt : encrypt
	};

	return publicAPI;
};

module.exports = teambuilder;
