<!-- live sales =================== -->
	var r_text = new Array ();
r_text[0] = "Ricky Saputra";
r_text[1] = "Jay M.K";
r_text[2] = "Santoso Hendri";
r_text[3] = "Fahmi Juni";
r_text[4] = "Adi Manurung";
r_text[5] = "Yahya Baidowi";
r_text[6] = "Guntur Andra";
r_text[7] = "Lisda Mayzura";
r_text[8] = "Ninin Aini";
r_text[9] = "Hendra Putra";
r_text[10] = "M Fadli";
r_text[11] = "Ricko Jaya";
r_text[12] = "Meilinda Putri";
r_text[13] = "Sarah J";
r_text[14] = "Ariie Mulkis";
r_text[15] = "Kinan Kobi";
r_text[16] = "Arif Saputra";
r_text[17] = "Paul K";
r_text[18] = "Lynn Chen";
r_text[19] = "Harnicco";
r_text[20] = "Eden J";

    var r_map = new Array ();
r_map[0] = "https://i.pinimg.com/originals/93/1b/91/931b91f30021ede9130aa499f9664757.png";
r_map[1] = "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg";
r_map[2] = "https://2.bp.blogspot.com/-bBOfdeIex6I/XztSooX26rI/AAAAAAAAAtQ/AOBwMsgePTka2t98sKrZ2jplJsJXHVOeACK4BGAYYCw/s113/IG%2BFeed%2B-%2BProfile.png";

 
var r_product = new Array ();
r_product[0] = "NordVPN";
r_product[1] = "Google Drive Unlimited";
r_product[2] = "HMA VPN";
r_product[3] = "Account FB Lawas";
r_product[4] = "Account GCloud";
r_product[5] = "Netflix Sharing";
r_product[6] = "Discord Nitro";
r_product[7] = "Netflix UHD";
r_product[8] = "Pulsa Three";
r_product[9] = "Diamond ML";
     setInterval(function(){ $(".custom-social-proof").stop().slideToggle('slow'); }, 4000);
      $(".custom-close").click(function() {
        $(".custom-social-proof").stop().slideToggle('slow');
      });
        setInterval(function(){    
        	var myNumber = Math.floor(7*Math.random());
        	$("#map1").attr("src",r_map[myNumber]);
 			$('#country').text(r_text[myNumber]);

          	$('#product').text(r_product[Math.floor(7*Math.random())]);
 			var timeVal = Math.floor(7*Math.random());
 	
 			$('#time').text(timeVal);
 		
 		 
     //console.log(timeVal); 
 }, 8000);
<!-- live sales =================== -->
