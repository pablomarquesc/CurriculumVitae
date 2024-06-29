// URL da API do github declarada em uma variavel
const userURL = 'https://api.github.com/users/pablomarquesc';
const reposURL = 'https://api.github.com/users/pablomarquesc/repos';

const respositories = document.getElementById('row');
const profile = document.getElementById('profile');
const content = document.getElementById('content');
const carrossel = document.getElementById('carrossel');
const colegasEquipe = document.getElementById('colegasEquipe');

function getUserGitHub(){
    fetch(userURL)
    .then(async res =>{
        if(!res.ok){
            throw new Erorr(res.status);
        }

        let data = await res.json();
        console.log(data)
        
            let project = document.createElement('div');

            project.innerHTML = `<div class="row">
                <div class="col-md-2 text-center mb-4 ms-3">
                    <img id="perfil" src="${data.avatar_url}" class="img-thumbnail">
                </div>
                <div class="col" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="name">${data.name}</h5>
                        <p class="">${data.bio}</p>
                        <p class=" "><b>Location: </b> ${data.location}</p>
                        <p class=" "><b>Site: </b> <a
                                class="link-offset-2 link-underline link-underline-opacity-0  text-reset"
                                href="${data.html_url} ">${data.html_url}</a></p>
                        <div class="container ">
                            <div class="row">
                                <div class="col align-self-end">
                                    <p class="d-flex float-end fs-3"><b>125</b></p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor"
                                        class="bi bi-person-fill text-primary d-flex float-end" viewBox="0 0 16 16">
                                        <path
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12 ">


                                    <a class="link-offset-2 link-underline link-underline-opacity-0  text-reset  "
                                        href="https://www.facebook.com/pablo.marquescordeiro/"> <svg class="me-3 mt-2 "
                                            xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                            fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                            <path
                                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                        </svg>
                                    </a>
                                    <a class="link-offset-2 link-underline link-underline-opacity-0  text-reset"
                                        href="https://twitter.com/MabloBoss"><svg class="mx-3 mt-2 "
                                            xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                            fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                            <path
                                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                                        </svg>
                                    </a>
                                    <a class="link-offset-2 link-underline link-underline-opacity-0  text-reset"
                                        href="https://www.instagram.com/pablomarquesc/"> <svg class="mx-3 mt-2"
                                            xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                                            fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                        </svg>
                                    </a>

                                </div>
                            </div>
                        </div>

                    </div>
            `

        profile.appendChild(project);
        })
    
}


function getReposGitHub(){
    fetch(reposURL)
    .then(async res =>{
        if(!res.ok){
            throw new Erorr(res.status);
        }

        let data = await res.json();
        data.map( item => {
            let project = document.createElement('div');

            respositories.innerHTML += `
            
                <div class="card col-md  me-5 mt-4 " style="width: 18rem;">
                    <a class="link-offset-2 link-underline link-underline-opacity-0  text-reset" href="repo.html?id=${item.id}">
                        <div class="card-body">
                            <h5 class="card-title text-primary">${item.name}</h5>
                            <p class="card-text  mb-2 text-body-secondary">${item.description}</p>
                    </a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        class="bi bi-star d-flex float-start " viewBox="0 0 16 16">
                        <path
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                    </svg>
                    <p class="d-flex float-start ms-2 "><b>${item.stargazers_count}</b></p>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        class="bi bi-person-fill text-primary d-flex float-start ms-4 " viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                    <p class="d-flex float-start ms-2"><b>${item.watchers_count}</b></p>
                
            
            `

        
        })
    })
}

function displayRepos(idRep2){
    fetch(reposURL)
    .then(async res =>{
        if(!res.ok){
            throw new Erorr(res.status);
        }

        let data = await res.json();
        data.map( item => {
            if(idRep2 == item.id){
                content.innerHTML = `<div>
                <h2 class="perfil ms-4 ">Repositório: ${item.name} </h2>
                <hr class=" border-2 opacity-100 mx-2">
            </div>
            <section class="container-fluid my-4 mx-3  ">
                <div class="row me-3">
                    <div class="col ms-3">
                        <h5 class="text-primary">Descrição</h5>
                        <div class="px-4">
                            <p class="">${item.description}
                        </div>
                        <h5 class="text-primary">Data de criação</h5>
                        <p class="px-4">${item.created_at}</p>
                        <h5 class="text-primary">Linguagem</h5>
                        <p class="px-4">${item.language}</p>
                        <h5 class="text-primary">Link de acesso</h5>
                        <a href="https://github.com/AwesomeWebDesigns/AwesomeWebDesigns-Template-01"><p class="px-4 ">https://github.com/AwesomeWebDesigns/AwesomeWebDesigns-Template-01</p></a>
                        <h5 class="text-primary">Tópicos</h5>
                        <button type="button" class="btn btn-primary mx-2 my-2 col">${item.topics[0]}</button>
                        <button type="button" class="btn btn-primary mx-2 col ">${item.topics[1]}</button>
                        <button type="button" class="btn btn-primary mx-2 col ">${item.topics[2]}</button>
                    </div>
    
                </div>`
                
                console.log("ok")
            }else{

            }

        
            
        })
        
        
})
 
}

function jsonContent(){
    fetch('http://localhost:3000/imagens')
        .then(response =>{
        return response.json();
          }).then(data =>{
            console.log(data)

            
            carrossel.innerHTML = `<hr class=" border-2 opacity-100 mx-2">

        <div id="carouselExampleCaptions" class="carousel slide mx-3 my-3">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${data[0].foto}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5 >${data[0].descricao}</h5>
                  <p class="">${data[0].titulo}</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="${data[1].foto}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>${data[1].descricao}</h5>
                  <p>${data[1].titulo}</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="${data[2].foto}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>${data[2].descricao}</h5>
                  <p>${data[2].titulo}</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="${data[3].foto}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>${data[3].descricao}</h5>
                  <p>${data[3].titulo}</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="${data[4].foto}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>${data[4].descricao}</h5>
                  <p>${data[4].titulo}</p>
                </div>
              </div>
              
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>`
      })
      
}

// Recuperando informações dos colegas
    fetch('https://api.github.com/users/lucsfn')
    .then(async res =>{
        if(!res.ok){
            throw new Erorr(res.status);
        }
        const lucasGit = await res.json();
        console.log(lucasGit)
    })
    fetch('https://api.github.com/users/victorschneide')
    .then(async res =>{
        if(!res.ok){
            throw new Erorr(res.status);
        }
        const schinasGit = await res.json();

    })
    fetch('https://api.github.com/users/PratesVitor')
    .then(async res =>{
        if(!res.ok){
            throw new Erorr(res.status);
        }
        const pratesGit = await res.json();

    })
    fetch('https://api.github.com/users/FilipAoGST')
    .then(async res =>{
        if(!res.ok){
            throw new Erorr(res.status);
        }
        const filipGit = await res.json();
        console.log(lucasGit)
    })
    fetch('https://api.github.com/users/JgGabiruta')
    .then(async res =>{
        if(!res.ok){
            throw new Erorr(res.status);
        }
        const jbGit = await res.json();
        
    })

   
    
    function colegasGit(){
        for(let i = 0; i< colegasEquipe.length; i++)
        colegasEquipe.innerHTML = `div class="col-md-2 col-sm-12 ms-3">
                    <img src="${lucasGit.avatar_url}" class="img-thumbnail" style="width: 250px;height: 210px;">
                    <p class=" fs-5 text-center "><b>${lucasGit.name}</b></p>
                </div>
                <div class="col-md-2 col-sm-12 ms-3">
                    <img src="${schinasGit.avatar_url}" class="img-thumbnail" style="width: 250px;height: 210px;">
                    <p class=" fs-5 text-center "><b>${schinasGit.name}</b></p>
                </div>
                <div class="col-md-2 col-sm-12 ms-3">
                    <img src="${pratesGit.avatar_url}" class="img-thumbnail" style="width: 250px;height: 210px;">
                    <p class=" fs-5 text-center "><b>${pratesGit.name}</b></p>
                </div>
                <div class="col-md-2 col-sm-12 ms-3">
                    <img src=".${filipGit.avatar_url}" class="img-thumbnail" style="width: 250px;height: 210px;">
                    <p class=" fs-5 text-center "><b>${filipGit.name}</b></p>
                </div>
                <div class="col-md-2 col-sm-12 ms-3">
                    <img src="${jbGit.avatar_url}" class="img-thumbnail" style="width: 250px;height: 210px;">
                    <p class=" fs-5 text-center "><b>${jbGit.name}</b></p>
                </div>`
                
             
         
          
    }


    









jsonContent()
displayRepos()
getReposGitHub()
getUserGitHub()