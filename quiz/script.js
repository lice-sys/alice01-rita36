
const form = document.getElementById('teste');
const resulDiv = document.getElementById('resul');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const themeToggleBtn = document.getElementById('theme-toggle');

const perguntas = ['q1', 'q2', 'q3', 'q4', 'q5'];

function respondidas() {
	let respondido = 0;
	for (const name of perguntas) {
		const checked = document.querySelector(`input[name="${name}"]:checked`);
		if (checked) respondido += 1;
	}
	return respondido;
}

function updateProgress() {
	const respondido = respondidas();
	const total = perguntas.length;
	const pct = Math.round((respondido / total) * 100);
	if (progressBar) progressBar.style.width = `${pct}%`;
	if (progressText) progressText.textContent = `Progresso: ${respondido}/${total} respondido`;
}

function clearErrors() {
	document.querySelectorAll('fieldset.error').forEach(fs => fs.classList.remove('error'));
}

function validateAndFocusFirstUnanswered() {
	clearErrors();
	for (const name of perguntas) {
		const fieldset = document.querySelector(`input[name="${name}"]`)?.closest('fieldset');
		const checked = document.querySelector(`input[name="${name}"]:checked`);
		if (!checked && fieldset) {
			fieldset.classList.add('error');
			fieldset.scrollIntoView({ behavior: 'smooth', block: 'center' });
			return false;
		}
	}
	return true;
}

document.addEventListener('change', (e) => {
	if (e.target && e.target.matches('input[type="radio"]')) {
		updateProgress();
		const fieldset = e.target.closest('fieldset');
		if (fieldset) fieldset.classList.remove('error');
	}
});

form.addEventListener('submit', function (event) {
	event.preventDefault();
	if (!validateAndFocusFirstUnanswered()) return;
	const q1 = document.querySelector('input[name="q1"]:checked').value;
	const q2 = document.querySelector('input[name="q2"]:checked').value;
	const q3 = document.querySelector('input[name="q3"]:checked').value;
    const q4 = document.querySelector('input[name="q4"]:checked').value;
    const q5 = document.querySelector('input[name="q5"]:checked').value;

//resultados
	let resul;
    var pontuacao = 0;
	  if (q1 === 'catt') {
		pontuacao += 6;
	} else if (q1 === 'sapata') {
        pontuacao += 5;
    } else if (q1 === 'vanila') {
        pontuacao += 4;
    } else if (q1 === 'choco') {
        pontuacao += 3;
    } else if (q1 === 'boneca') {
        pontuacao += 2;
    } else if (q1 === 'emo') {
        pontuacao += 1;
    }

	  if (q2 === 'catt') {
		pontuacao += 6;
	} else if (q2 === 'sapata') {
        pontuacao += 5;
    } else if (q2 === 'vanila') {
        pontuacao += 4;
    } else if (q2 === 'choco') {
        pontuacao += 3;
    } else if (q2 === 'boneca') {
        pontuacao += 2;
    } else if (q2 === 'emo') {
        pontuacao += 1;
    }

	  if (q3 === 'catt') {
		pontuacao += 6;
	} else if (q3 === 'sapata') {
        pontuacao += 5;
    } else if (q3 === 'vanila') {
        pontuacao += 4;
    } else if (q3 === 'choco') {
        pontuacao += 3;
    } else if (q3 === 'boneca') {
        pontuacao += 2;
    } else if (q3 === 'emo') {
        pontuacao += 1;
    }

	  if (q4 === 'catt') {
		pontuacao += 6;
	} else if (q4 === 'sapata') {
        pontuacao += 5;
    } else if (q4 === 'vanila') {
        pontuacao += 4;
    } else if (q4 === 'choco') {
        pontuacao += 3;
    } else if (q4 === 'boneca') {
        pontuacao += 2;
    } else if (q4 === 'emo') {
        pontuacao += 1;
    }

	  if (q5 === 'catt') {
		pontuacao += 6;
	} else if (q5 === 'sapata') {
        pontuacao += 5;
    } else if (q5 === 'vanila') {
        pontuacao += 4;
    } else if (q5 === 'choco') {
        pontuacao += 3;
    } else if (q5 === 'boneca') {
        pontuacao += 2;
    } else if (q5 === 'emo') {
        pontuacao += 1;
    }


    if (pontuacao<=8){
		resul=("Fredclarkeara After Dark")
	}

	if (pontuacao>8 && pontuacao<=12){
		resul=("Olhos de boneca")
	}

	if (pontuacao>12 && pontuacao<=16){
		resul=("Chocolate")
	}

	if (pontuacao>16 && pontuacao<=24){
		resul=("Vanilla")
	}

	if (pontuacao>24 && pontuacao<=30){
		resul=("Sapatinho")
	}

	if (pontuacao>30 && pontuacao<=36){
		resul=("Cattleya")
	}

	resulDiv.textContent=`A sua orquídea é ${resul}`;


});

function cancelar(){
	window.location.reload(); 
}


