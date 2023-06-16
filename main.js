const form=document.getElementById('form_atividade');
const imgAprovado='<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado='<img src="./images/reprovado.png" alt="emoji decepcionado" />';

let linhas='';

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputNomeAtividade=document.getElementById('nome_atividade');
    const inputNotaAtividade=document.getElementById('nota_atividade');

    let linha='<tr>';
    linha+= `<td>${inputNomeAtividade.value}</td>`;
    linha+= `<td>${inputNotaAtividade.value}</td>`;
    linha+= `<td>${inputNotaAtividade.value >=7 ? 'imgAprovado': 'imgReprovado'}</td>`;
    linha+= '</tr>';

    linhas += linha;

    const corpoTabela = documento.querySelector('tbody');
    corpoTabela.innerHTML=linha;

    inputNomeAtividade.value ='';
    inputNotaAtividade.value ='';
       
});