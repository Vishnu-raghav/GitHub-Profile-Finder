
# GitHub Profile Finder

GitHub Profile Finder is a clean and responsive web application that allows users to search for any GitHub username and view their public profile details in real time.
The project is built using HTML, CSS, and Vanilla JavaScript and uses GitHub’s official REST API to fetch live data.



## Live Demo
👉 https://git-hub-profile-finder-navy.vercel.app/

## Features
🔍 Search any GitHub user by username

⚡ Fetch real-time data from GitHub API

👤 Display profile details (avatar, name, bio, followers, repos, etc.)

⭐ Show top 4 repositories sorted by stars

⏳ Loading indicator during API calls

❌ Graceful error handling for invalid users or network issues

♻️ Prevents duplicate API calls for the same username

📱 Fully responsive design (mobile, tablet, desktop)


## Tech Stack

HTML5 – Semantic structure

CSS3 – Responsive layout using Grid & Flexbox

JavaScript (Vanilla JS) – API calls and DOM manipulation

GitHub REST API – Fetching live user data


## Project Structure
```
github-profile-finder/
├── index.html
├── style.css
├── script.js
└── README.md
```

## API Endpoints Used
  
```http
GET https://api.github.com/users/{username}
GET https://api.github.com/users/{username}/repos
```




##  Responsive Design

The application is fully responsive and adapts smoothly across all screen sizes:

📱 Mobile devices

📲 Tablets 

💻 Laptops 

🖥️ Large desktop 

screens Implemented using CSS Grid, Flexbox, and media queries.



##  Installation & Usage
**Clone the repository**
```bash
git clone https://github.com/Vishnu-raghav/GitHub-Profile-Finder.git

cd github-profile-finder

Open index.html in your browser.
```
No build tools or dependencies required.
## Future Improvements
🌙 Dark / Light mode toggle

🕘 Search history

🔄 Compare two GitHub users

💾 Save favorite profiles using localStorage

📱 PWA support

🧪 Unit testing
## Developer
VISHNU

Portfolio: https://vishnuraghav.vercel.app/
