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
const profile = document.querySelector(".profile-card");
const errorBox = document.getElementById("error")

async function serachUser(username) {
  try {
    const res = await fetch(`${api}/${username}`);
    const data = await res.json();
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
  errorBox.classList.add("hidden");
}


searchBtn.addEventListener("click", async () => {
  const name = UserInput.value.trim();

  if (name === "") {
    alert("Please enter a name");
    return;
  }

  hideError()
  loader.classList.remove("hidden");
  profile.classList.add("hidden");

  try {
    const { status, data } = await serachUser(name);

    loader.classList.add("hidden"); 


    if (status === 404 || data.message === "Not Found") {
      showError("User Not Found")
      return;
    }

    profile.classList.remove("hidden");
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
    alert("Network error! Please try again.");
    console.log("ERROR:", error);
  }
});
