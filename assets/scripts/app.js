// URL da API do github declarada em uma variavel
const userURL = 'https://api.github.com/users/pablomarquesc';
const reposURL = 'https://api.github.com/users/pablomarquesc/repos'
function getReposGitHub(){
    fetch(reposURL)
    .then(async res =>{
        if(!res.ok){
            throw new Erorr(res.status);
        }

        let data = await res.json();
        console.log(data)
    })
}
getReposGitHub()