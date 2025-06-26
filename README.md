# 🌟 Join Us – Cult Edition™ (Just Kidding... or are we?)

A simple full-stack Node.js application where users can register their email to join a *definitely not suspicious* waitlist. Powered by **Express**, **MySQL**, **EJS**, and styled with ✨ modern CSS.

---

## 🚀 Features

- 📬 Email registration form
- 📈 Dynamic counter showing total registered users
- 🎉 A thank-you page to welcome new recruits (uh, users)
- 🎨 Stylish frontend with gradients and animations
- 🔥 Minimal and efficient backend logic with MySQL integration

---

## 📁 Project Structure

```
join-us-app/
├── public/
│   └── app.css           # CSS for styling
├── views/
│   ├── home.ejs          # Main homepage with form
│   └── thankyou.ejs      # Post-registration thank-you page
├── app.js                # Main Express application
├── schema.sql            # MySQL table schema
└── README.md             # You're looking at it!
```

---

## 🧠 Tech Stack

- **Backend**: Node.js + Express
- **Templating**: EJS
- **Database**: MySQL (with `mysql2` package)
- **Frontend**: HTML5, CSS3 (Google Fonts, gradients, subtle animations)

---

## 🛠️ Setup Instructions

> Prerequisites:  
> ✔ Node.js  
> ✔ MySQL installed & running

1. **Clone the repo**

   ```bash
   git clone https://github.com/yugankXsingh/join-us-app.git
   cd join-us-app

💡 Future Enhancements
Add email validation

Prevent duplicate email entries with better UX

Send confirmation emails using a service like SendGrid or Nodemailer

Use Sequelize ORM for cleaner DB handling

Dockerize for easy deployment

Add captcha to prevent bot signups (no robots allowed in our cult)

🤝 Credits
Made with ❤️ by Yugank Singh
