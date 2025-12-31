const api = "https://api.github.com/users"

const UserInput = document.getElementById("user-input")
const searchBtn = document.querySelector("#search")
const userName = document.getElementById("username")
const userRepo = document.getElementById("repos")
const userFollowers = document.getElementById("followers")
const userFollowing = document.getElementById("following")
const userProfile = document.getElementById("profile-link")
const userImg = document.getElementById("profile-img")
const Username = document.getElementById("Name")
const userBio = document.getElementById("bio")

async function serachUser(username){
   try {
    const res = await fetch(`${api}/${username}`)
    
    // console.log(res)
    const data = await res.json()
    console.log(data)
    return data
   } catch (error) {
    console.log("ERROR :",error)
   }
}




searchBtn.addEventListener("click",  (e)=> {
    let name = UserInput.value
    serachUser(name).then((d)=> {
        console.log(d.public_repos)
        console.log(d.name)
        userName.innerText = d.login
        userRepo.innerText = d.public_repos
        userFollowers.innerText = d.followers
        userFollowing.innerText= d.following

        userImg.src = d.avatar_url
        userProfile.href = d.html_url
        Username.innerText = d.name
        userBio.innerText = d.bio
    })
})