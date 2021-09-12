// effek button
// button pemula
function buttonPemula() {
    alert("anda telah memesan kelas pemula")
}

// button medium
function buttonMedium() {
    alert("anda telah memesan kelas medium")
}

// button expert
function buttonExpert() {
    alert("anda telah memesan kelas expert")
}

// mentor
const mentor = ["Gus Azmi", "Ayisha Abdul Basith", "Islam Sobhi"];
const pictureMentor = ["assets/mentor1.jpeg","assets/mentor2.jpg","assets/mentor3.jpg",];
const innerMentor1 = document.querySelector(".mentor1");
const innerMentor2 = document.querySelector(".mentor2");
const innerMentor3 = document.querySelector(".mentor3");
const selectInnerMentor = [innerMentor1, innerMentor2, innerMentor3]

for (let i = 0; i < 3; i++) {
    selectInnerMentor[i].innerHTML = '<article class="profil"><h3 class="title">'+mentor[i]+'</h2><figure><img src="'+pictureMentor[i]+'" alt="My mentor"></figure></article>';
}

// contacct
function buttonSubmit() {
    let nameOfContact = document.getElementById('name').value;
    let emailOfContact = document.getElementById('email').value;
    let messageOfContact = document.getElementById('message').value;
    alert('\n hy ' + nameOfContact+'\n\n email : '+emailOfContact+'\n\n message : '+messageOfContact+'\n\n alhamdulilah telah terkirim');
}