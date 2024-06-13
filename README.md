# CTFBuddy  

_An easy to use Chrome extension that helps you with online CTF's and general Web OSINT._  
_by jmbluethner_

---

<img src="./docs/montage.png">

# Project Aim

**CTFBuddy** is meant to be a little tool that sits in your Chrome extensions - Always ready to assist you with certain CTF and OSINT specific checks.  
When doing a lot of web focussed CTF's, you'll notice that in a lot of cases you do more or less the same basic checks. Such as analyzing URL Parameters to check for possible privilege or section escapes, hidden Input fields for value manipulation, and so on.  
In order to make those basic tasks a bit easier and to save you from repeating them over and over, I came up with **CTFBuddy**.  
**CTFBuddy** doesn't do anything super crazy that you couldn't do by hand, but it reduces your workload so that you don't have to check the HTML source code as many times as you'd usually have to.

# Features

- One-Click-Analytics tools for
  - Sub-Page exploration for common pages, such as `robots.txt`, `wp-admin` and so on.
  - Reporting and analysis for URL (GET) Parameters.
  - Finder for hidden input fields.
  - Detailed Cookie analysis.
  - Detailed Local Storage analysis.
  - Checks for all embedded sources, such as JS.
  - XSS Injection tester.
  - HTML Comment finder.
- Stylish CLI look.
- Menu navigation using keyboard shortcuts.
- Explaining help texts for each module.
- Solid codebase built on <a href="https://vuejs.org/">Vue.JS</a>.

---

_Developed with ♥️ and ☕ by jmbluethner_  
_Built with <a href="https://vuejs.org/">Vue.JS</a>_