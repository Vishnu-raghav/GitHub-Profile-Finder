<!-- # GitHub Profile Finder

GitHub Profile Finder is a simple web application built using HTML, CSS, and JavaScript that allows users to search for any GitHub username and view their public profile details in real time. The project uses GitHub’s public API to fetch data and displays user information with proper loading and error handling.

Features 
- Search GitHub users by username
- Fetch real-time data from GitHub API
- Display user profile information
- Show loading state while fetching data
- Handle errors for invalid usernames

Tech Stack

- HTML
- CSS
- JavaScript (Vanilla JS)
- GitHub Public API

How it works
1. User enters a GitHub username
2. Clicks on the search button
3. Application sends a request to GitHub API
4. Displays user profile data on the screen
5. Shows error message if user is not found

API Used

GitHub Users API:
https://api.github.com/users/{username}

Future Improvements (Optional but 🔥)
- Add dark mode
- Show user repositories
- Improve UI design
- Add keyboard search (Enter key)

 -->



GitHub Profile Finder 🔍

A sleek, responsive web application that allows you to search for any GitHub user and view their profile details with just a few clicks. Built with pure HTML, CSS, and JavaScript using GitHub's official REST API.

✨ Live Demo
Click here to try it out! (Add your deployment link here)

📸 Screenshots
https://via.placeholder.com/800x450/0f172a/94a3b8?text=GitHub+Profile+Finder+Interface
Clean, modern interface with real-time GitHub profile display

🚀 Features
🔍 Core Features
Instant GitHub Profile Search - Enter any GitHub username and get their profile instantly

Real-time Data Fetching - Live data from GitHub's official API

Smart Caching - Prevents duplicate API calls for same user

Error Handling - Graceful error messages for invalid users or network issues

Loading States - Smooth loading animations during API requests

📊 Profile Information Display
User Profile Picture - High-quality avatar with GitHub theme

Basic Information - Name, username, and bio

Statistics Overview - Public repos, followers, and following counts

Top Repositories - Shows 4 most-starred repositories

Direct GitHub Link - One-click access to user's GitHub profile

🎨 UI/UX Highlights
Fully Responsive Design - Works perfectly on mobile, tablet, and desktop

Modern Gradient Background - Eye-catching dark theme with blue accents

Interactive Elements - Hover effects and smooth transitions

Clean Layout - Well-organized information hierarchy

Accessibility - Semantic HTML and proper contrast ratios

🛠️ Tech Stack

Technology	Purpose
HTML5	Semantic structure and markup
CSS3	Styling with Flexbox/Grid and animations
Vanilla JavaScript	API calls and DOM manipulation
GitHub REST API	Real-time user data fetching
Font Awesome	Icon library for better UI
Google Fonts	Typography and text styling

📁 Project Structure

github-profile-finder/
│
├── index.html          # Main HTML file
├── style.css           # All styles (responsive included)
├── script.js           # JavaScript logic
│
│
└── README.md           # This documentation

⚡ How It Works
1. User Input
User enters a GitHub username in the search box

Presses "Search" button or hits Enter key

2. API Request
javascript
// Makes request to GitHub API
fetch(`https://api.github.com/users/${username}`)
3. Data Processing
Fetches user profile data

Retrieves top 4 repositories (sorted by stars)

Handles edge cases (no bio, no repos, etc.)

4. UI Update
Displays user information in organized cards

Shows loading spinner during fetch

Updates UI with fetched data or error messages

5. Smart Features
Duplicate Request Prevention - Won't refetch same user

Error Recovery - Clear error messages with timeout

Responsive Layout - Adapts to any screen size

🔧 Installation & Setup
Local Development
Clone the repository

bash
git clone https://github.com/yourusername/github-profile-finder.git
cd github-profile-finder
Open the project

Simply open index.html in your browser

No build process or dependencies required!

Deployment
Option 1: GitHub Pages (Recommended)

Push code to GitHub repository

Go to Settings → Pages

Select main branch and save

Option 2: Netlify/Vercel

Drag and drop the folder to Netlify

Or connect your GitHub repository

🎯 Usage Examples
Searching Users
Visit the application

Enter a GitHub username (e.g., torvalds, gaearon, addyosmani)

Click "Search" or press Enter

View profile details instantly

Example Searches
Username	What to Expect
torvalds	Linux creator with thousands of followers
gaearon	React core team member
vishnuraghav	Project developer's profile
🌐 API Endpoints Used
javascript
// Main user profile
GET https://api.github.com/users/{username}

// User repositories
GET https://api.github.com/users/{username}/repos
📱 Responsive Design
The application is fully responsive with these breakpoints:

Device	Layout	Features
Desktop (> 992px)	Two-column grid	Full features, larger cards
Tablet (768px-992px)	Optimized spacing	Adjusted font sizes
Mobile (< 768px)	Single column	Stacked layout, touch-friendly
🎨 Design Decisions
Color Scheme
css
Primary Blue: #2563eb    /* Buttons and accents */
Dark Background: #0f172a /* Main background */
Card Background: #1f2937 /* Profile cards */
Text Colors: #fff, #94a3b8, #d1d5db /* Hierarchy */
Typography
Headings: Bold, gradient text for visual appeal

Body: Clean, readable sans-serif font

Code: Monospace for repository names

Animations
Loading Spinner: Smooth rotation animation

Hover Effects: Subtle elevation and color changes

Fade In: Smooth profile reveal after loading

🔄 Code Highlights
Smart API Handling
javascript
// Prevents duplicate searches
if (name.toLowerCase() === lastSearchedUser.toLowerCase()) {
    return;
}
lastSearchedUser = name;
Repository Sorting
javascript
// Show top 4 most-starred repositories
data.sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4)
Error Management
javascript
// Show error with auto-hide
function showError(message) {
    errorBox.innerText = message;
    errorBox.classList.remove("hidden");
    setTimeout(() => {
        errorBox.classList.add("hidden");
    }, 2000);
}
🚀 Performance Optimizations
Minimal Dependencies - Zero external libraries

Efficient DOM Updates - Only updates changed elements

CSS Grid/Flexbox - Modern layout techniques

Optimized Images - GitHub serves optimized avatars

Cached API Responses - Prevents redundant calls

📈 Future Enhancements
Planned Features
Search History - Recently searched users

Dark/Light Mode Toggle - User preference

Repository Filtering - By language, stars, etc.

User Comparison - Compare two GitHub profiles

Local Storage - Save favorite profiles

Technical Improvements
PWA Support - Install as app on mobile

Service Workers - Offline functionality

GraphQL API - More efficient data fetching

Unit Tests - JavaScript test coverage

🤝 Contributing
Contributions are welcome! Here's how you can help:

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

Development Guidelines
Follow existing code style

Add comments for complex logic

Test on multiple devices

Update documentation if needed

🐛 Common Issues & Solutions
Issue	Solution
User not found	Check username spelling
No repositories shown	User may have private repos only
Slow loading	Check internet connection
Layout broken	Clear browser cache
📚 Learning Resources
GitHub REST API Documentation

CSS Grid Guide

JavaScript Fetch API

Responsive Design Principles

🙏 Acknowledgments
GitHub for providing the amazing API

Font Awesome for the beautiful icons

Open Source Community for inspiration and support

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👨‍💻 Developer
Vishnu

⭐ If you like this project, give it a star on GitHub!