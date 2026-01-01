const api = "https://api.github.com/users";

const UserInput = document.getElementById("user-input");
const searchBtn = document.querySelector("#search");
const userName = document.getElementById("username");
const userRepo = document.getElementById("repos");
const userFollowers = document.getElementById("followers");
const userFollowing = document.getElementById("following");
const userProfile = document.getElementById("profile-link");
const userImg = document.getElementById("profile-img");
const Username = document.getElementById("Name");
const userBio = document.getElementById("bio");
const loader = document.getElementById("loader");
const profileLayout = document.querySelector(".profile-layout");
const errorBox = document.getElementById("error")



let lastSearchedUser = "";

async function serachUser(username) {
  try {
    const res = await fetch(`${api}/${username}`);
    const data = await res.json();
    console.log(data)
    return { status: res.status, data }; 
  } catch (error) {
    throw error; 
  }
}

function showError(message) {
  errorBox.innerText = message;
  errorBox.classList.remove("hidden");
}


function hideError() {
  setTimeout(() => {
    errorBox.classList.add("hidden");
  }, 2000);
}


async function getRepos (username){
try {
  
  const res = await fetch(`${api}/${username}/repos`);
  const data = await res.json()
  
  console.log(data)
  
  return data
} catch (error) {
  console.log("error")
}
}




searchBtn.addEventListener("click", async () => {
  const name = UserInput.value.trim();

  if (name === "") {
    alert("Please enter a name");
    return;
  }

  if (name.toLowerCase() === lastSearchedUser.toLowerCase()) {
    return; 
  }

  lastSearchedUser = name
  hideError()
  loader.classList.remove("hidden");
  profileLayout.classList.add("hidden");

  try {
    const { status, data } = await serachUser(name);

    loader.classList.add("hidden"); 


    if (status === 404 || data.message === "Not Found") {
      showError("User Not Found")
      return;
    }


    profileLayout.classList.remove("hidden");
    userName.innerText = data.login;
    userRepo.innerText = data.public_repos;
    userFollowers.innerText = data.followers;
    userFollowing.innerText = data.following;

    userImg.src = data.avatar_url;
    userProfile.href = data.html_url;
    Username.innerText = data.name || "No Name";
    userBio.innerText = data.bio || "No Bio available";
  } catch (error) {
    loader.classList.add("hidden");
    console.log("ERROR:", error);
    showError("Network error");
  }


  try{

    const data = await getRepos(name)
    
  } catch(error){

  }
});
