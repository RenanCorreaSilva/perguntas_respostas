var elementos = document.querySelectorAll('[type=radio]');


for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('change',function(t){
        let marcado = t.target.value;
        if(marcado == "correta"){
        
            let parentNode = t.target.parentNode;
            parentNode.style.backgroundColor = 'green'

            let els = parentNode.parentNode.querySelectorAll('[type=radio]')

            for(var n = 0; n < els.length; n++){
                els[n].disabled = true;
            }

        }else if(marcado == "incorreta"){

            let parentNode = t.target.parentNode;
            parentNode.style.backgroundColor = 'red'

            let els = parentNode.parentNode.querySelectorAll('[type=radio]')

            for(var n = 0; n < els.length; n++){
                els[n].disabled = true;
            }

            let correta = parentNode.parentNode.querySelector('[value = correta]');

            correta.parentNode.style.backgroundColor = 'green'
        }
    })
}