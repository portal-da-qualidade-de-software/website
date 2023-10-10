// document.getElementById('mostrarFormulario').addEventListener('click', function() {
//     document.getElementById('feedbackForm').style.display = 'block';
// });

document.getElementById('mostrarFormulario').addEventListener('click', function() {
    var formulario = document.getElementById('feedbackForm');
    if (formulario.style.display === 'none') {
        formulario.style.display = 'block';
    } else {
        formulario.style.display = 'none';
    }
});
