# 🔍 GitHub Profile Finder

GitHub Profile Finder is a clean and responsive web application that allows users to search for any GitHub username and view their public profile details in real time.  
The project is built using **HTML, CSS, and Vanilla JavaScript** and uses **GitHub’s official REST API** to fetch live data.

---

## 🌐 Live Demo

🚀 Try the live application here:  
👉 https://git-hub-profile-finder-navy.vercel.app/


## ✨ Features
- 🔍 Search any GitHub user by username  
- ⚡ Fetch real-time data from GitHub API  
- 👤 Display profile details (avatar, name, bio, followers, repos, etc.)  
- ⭐ Show top 4 repositories sorted by stars  
- ⏳ Loading indicator during API calls  
- ❌ Graceful error handling for invalid users or network issues  
- ♻️ Prevents duplicate API calls for the same username  
- 📱 Fully responsive design (mobile, tablet, desktop)
---

## 🛠 Tech Stack

- **HTML5** – Semantic structure  
- **CSS3** – Responsive layout using Grid & Flexbox  
- **JavaScript (Vanilla JS)** – API calls and DOM manipulation  
- **GitHub REST API** – Fetching live user data  
---

## 📁 Project Structure

github-profile-finder/
│
├── index.html # Main HTML file
├── style.css # Styles (fully responsive)
├── script.js # JavaScript logic
└── README.md # Project documentation

---

## ⚙️ How It Works

1. User enters a GitHub username in the search box  
2. Clicks the **Search** button (or presses Enter)  
3. App sends a request to GitHub Users API  
4. If user exists:
   - Profile data is displayed
   - Top 4 repositories are fetched and shown
5. If user does not exist:
   - A clear error message is shown  
    
---

## 🌐 API Endpoints Used

GET https://api.github.com/users/{username}
GET https://api.github.com/users/{username}/repos


Key Implementation Highlights
Duplicate Search Prevention

if (name.toLowerCase() === lastSearchedUser.toLowerCase()) {
  return;
}
lastSearchedUser = name;

Top Repositories Logic
data
  .sort((a, b) => b.stargazers_count - a.stargazers_count)
  .slice(0, 4);


📱 Responsive Design

The application is fully responsive and adapts smoothly across:
Mobile devices
Tablets
Laptops
Large desktop screens
Implemented using CSS Grid, Flexbox, and media queries.


🔧 Installation & Usage
Run Locally
Clone the repositor
git clone https://github.com/Vishnu-raghav/GitHub-Profile-Finder.git


Open the project:
cd github-profile-finder
Open index.html in your browser
No build tools or dependencies required.


📈 Future Improvements

🌙 Dark / Light mode toggle
🕘 Search history
🔄 Compare two GitHub users
💾 Save favorite profiles using localStorage
📱 PWA support
🧪 Unit testing


👨‍💻 Developer
Vishnu
🔗 Portfolio: https://vishnuraghav.vercel.app/


⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
Feedback and contributions are always welcome!



