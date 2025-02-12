
function xorEncode(txt, pass) {

    var ord = []
    var buf = ""

    for (z = 1; z <= 255; z++) {ord[String.fromCharCode(z)] = z}

    for (j = z = 0; z < txt.length; z++) {
        buf += String.fromCharCode(ord[txt.substr(z, 1)] ^ ord[pass.substr(j, 1)])
        j = (j < pass.length) ? j + 1 : 0
    }

    return buf

}

function check() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    if (username=="adm1n" && password=="I11I!1i1i!I!i1!I!I1I!I!!" ) {
        document.getElementById("error").textContent = "Correct! Flag: "+xorEncode("Wl]eZtks]dQ_Uu@hQn@iWa@i[nkiG_UlCaMskakbUdkiPeU", "4");
    }
    else {
        document.getElementById("error").textContent = "Your username and password are incorrect."
    }
}