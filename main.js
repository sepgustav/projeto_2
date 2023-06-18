const form=document.getElementById('form_contatos');

let linhas='';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato=document.getElementById('nome_contato');
    const inputNumero=document.getElementById('numero');

    let linha='<tr>';
    linha+= `<td>${inputNomeContato.value}</td>`;
    linha+= `<td>${inputNumero.value}</td>`;
    linha+= '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML=linhas;

    inputNomeContato.value ='';
    inputNumero.value ='';
       
});//fim
