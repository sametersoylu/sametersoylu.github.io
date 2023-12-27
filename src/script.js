let url = window.location.href; 
let userid = "example"; 
let username = "Example"; 
if(url.includes(".github.io")) {
    userid = url.replace(".github.io", "").replace("/", "").replace("https:", "").replace("www");
}
let repolist = document.getElementById("repolist"); 
$.getJSON(`https://api.github.com/users/${userid}/repos`, function(data){
    for(i = 0; i < data.length; i++) {
        if (data[i].name === `${data[i].owner.login}.github.io` ) {
            continue
        }
        repolist.appendChild(createRepoCard(data[i]))
    }
})

$.getJSON(`https://api.github.com/users/${userid}`, (data) => {
    username = data.name; 
})


function createRepoCard(data) {
    const card = document.createElement("div"); card.classList = "card border-dark p-1 m-1"; 
    card.style = "width: 32.5%; max-width: 17.8rem;"; 
    const cardbody = document.createElement("div"); cardbody.classList = "card-body d-flex flex-column";
    

    const RepoName = document.createElement("h4"); RepoName.classList = "card-title text-center";
    RepoName.innerText = data.name; 

    const RepoDescription = document.createElement("p"); RepoDescription.classList = "card-text";
    RepoDescription.innerText = data.description; 
    RepoDescription.style = "height: 3.3rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; "
    if(data.description === "" || data.description == null) {
        RepoDescription.innerText = "No description found for this repository!";
    }
    

    const RepoButton = document.createElement("a"); RepoButton.classList = "btn btn-sm btn-light bg-light text-dark mt-auto"; 
    RepoButton.innerText = "Show Repo"; RepoButton.href = `https://github.com/${data.owner.login}/${data.name}`; 

    cardbody.appendChild(RepoName); 
    cardbody.appendChild(RepoDescription);
    cardbody.appendChild(RepoButton);
    card.appendChild(cardbody);
    return card;
}


window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let el = document.querySelector(".navbar-brand"); 
        el.text = userid + " | " + username; 
        document.title = username + " | Git Blog" 
    }, 100);
});

