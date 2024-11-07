// Buscar todos os Clientes

document.querySelector('#buscar').addEventListener('click',() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (data => {
        let tableBody = document.getElementById('userTableBody');
        tableBody.innerHTML=''; 
        data.forEach(user => {
            let row = document.createElement('tr');

           let idCadastro = document.createElement('td');
            idCadastro.textContent = user.id;
            row.appendChild(idCadastro);

           let nomeCadastro = document.createElement('td');
            nomeCadastro.textContent = user.name;
            row.appendChild(nomeCadastro);


          let emailCadastro = document.createElement('td');
            emailCadastro.textContent = user.email;
            row.appendChild( emailCadastro);

          let enderecoCadastro = document.createElement('td');
            enderecoCadastro .textContent = user.address.street + user.address.suite;
            row.appendChild( enderecoCadastro );

          let phoneCadastro = document.createElement('td');
            phoneCadastro.textContent = user.phone;
            row.appendChild(phoneCadastro);
                    
            tableBody.appendChild(row);
        });
    })
    .catch(error=> {
        console.error('Erro ao buscar dados:', error);
    });
});


 // Buscar por Id
document.querySelector('#botao').addEventListener('click',() => {
    let botao = document.querySelector('#botao');
    let informacao = document.querySelector('#informacao');
    botao.addEventListener('click', buscar);
    
    function buscar(){
        let userId = document.querySelector('#userId').value;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
     .then((response)=>{
      return response.json()
  })
    .then (data => {
         informacao.innerHTML = `
         <h2> Dados do Usuário </h2>
         <p><strong>Nome:</strong> ${data.name}</p>
         <p><strong>Email:</strong> ${data.email}</p>
         <p><strong>Endereço:</strong> ${data.address.street + data.address.suite}</p>
         <p><strong>Telefone:</strong> ${data.phone}</p>`;
       
        })
    
    .catch(error=> {
        informacao.innerHTML = '<p> Erro ao buscar dados. Tente novamente.</p>';
    });
}
});

// Cadastro de clientes
document.addEventListener('DOMContentLoaded', ()=>{
    let mostrarForm = document.querySelector('#mostrarFormCadastro')
    let form = document.querySelector('#cadastrarForm');
    let userTableBody = document.querySelector('#userTableBody')

    mostrarForm.addEventListener('click', () => {
        form.style.display = 'block';
});

    form.addEventListener('submit', (event) =>{
        event.preventDefault();

        let nome = document.querySelector('#campo_nome').value;
        let email = document.querySelector('#campo_email').value;
        let endereco = document.querySelector('#campo_endereco').value;
        let telefone = document.querySelector('#campo_telefone').value;

        let novoPaciente = {
            name: nome,
            email:email,
            address:endereco,
            phone:telefone
        };
     fetch('https://jsonplaceholder.typicode.com/users', {
          method:'POST',
          headers:{
            'Content-type': 'application/json'
          },
          body: JSON.stringify(novoPaciente)

          })
          .then(response => response.json())
          .then(user=> {
           let row = document.createElement('tr');

           let idCadastro = document.createElement('td');
           idCadastro.textContent = user.id;
           row.appendChild(idCadastro);

           let nomeCadastro = document.createElement('td');
            nomeCadastro.textContent = user.name;
            row.appendChild(nomeCadastro);


          let emailCadastro = document.createElement('td');
            emailCadastro.textContent = user.email;
            row.appendChild( emailCadastro);

          let enderecoCadastro = document.createElement('td');
            enderecoCadastro .textContent = user.address;
            row.appendChild( enderecoCadastro );

          let phoneCadastro = document.createElement('td');
            phoneCadastro.textContent = user.phone;
            row.appendChild(phoneCadastro);

          let actionCadastro = document.createElement('td');
         
          row.appendChild(actionCadastro);
          userTableBody.appendChild(row);
          userForm.reset();
          form.style.display ='none';
         
       })
     .catch(error => {
      console.error('Erro ao cadastrar cliente:', error);
      mensagemDiv.innerHTML='<p> Erro ao cadastrar cliente. Tente novamente.</p>';

        });

     });

    });

  // Pacientes e Empresas

document.addEventListener('DOMContentLoaded', ()=>{
    const empresas = document.querySelector('#empresas');
    const userTableBody = document.querySelector('#userTableBody_2');
    function buscar(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (response => response.json())
        .then (data => {
         userTableBody.innerHTML=''; 

         data.map(user => {
            const row = document.createElement('tr'); 

            const nomeCadastro = document.createElement('td');
            nomeCadastro.textContent = user.name;
            row.appendChild(nomeCadastro);

            const empresaCadastro = document.createElement('td');
            empresaCadastro.textContent = user.company.name;
            row.appendChild(empresaCadastro);

            userTableBody.appendChild(row);
         });
        })
              .catch(error => {
                console.error('Erro ao buscar dados:', error);
              });
         }
         empresas.addEventListener('click', buscar);
    });
   

 
 