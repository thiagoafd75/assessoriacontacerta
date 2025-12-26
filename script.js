:root {
--gold: #C9A24D;
--gold-dark: #A8833A;
--blue: #1F3A4D;
--gray: #6B7280;
--light: #F8F9FA;
--white: #FFFFFF;
}

* {
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: 'Inter', sans-serif;
}

body {
color: var(--blue);
line-height: 1.6;
}

.container {
width: 90%;
max-width: 1200px;
margin: auto;
}

.header {
background: var(--white);
border-bottom: 1px solid #eee;
padding: 20px 0;
}

.header-flex {
display: flex;
justify-content: space-between;
align-items: center;
}

.logo {
color: var(--gold);
font-size: 24px;
}

.hero {
padding: 80px 0;
background: linear-gradient(135deg, var(--blue), #162c3a);
color: var(--white);
text-align: center;
}

.hero h2 {
font-size: 38px;
margin-bottom: 20px;
}

.hero p {
max-width: 700px;
margin: auto;
font-size: 18px;
}

.hero-cta {
margin-top: 30px;
display: flex;
gap: 15px;
justify-content: center;
flex-wrap: wrap;
}

.section {
padding: 70px 0;
text-align: center;
}

.section-light {
background: var(--light);
}

h3 {
margin-bottom: 40px;
font-size: 28px;
}

.grid-4, .grid-3, .grid-2 {
display: grid;
gap: 25px;
}

.grid-4 { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.grid-3 { grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
.grid-2 { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }

.box, .card {
background: var(--white);
padding: 25px;
border-radius: 12px;
box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.card h4 {
margin-bottom: 15px;
color: var(--gold-dark);
}

.card ul {
list-style: none;
text-align: left;
}

.card li {
margin-bottom: 8px;
}

.btn-primary {
background: var(--gold);
color: var(--white);
padding: 14px 28px;
border-radius: 8px;
text-decoration: none;
font-weight: 600;
}

.btn-secondary {
border: 2px solid var(--gold);
color: var(--gold);
padding: 12px 26px;
border-radius: 8px;
text-decoration: none;
font-weight: 600;
}

.btn-outline {
border: 1px solid var(--gold);
color: var(--gold);
padding: 10px 20px;
border-radius: 6px;
text-decoration: none;
}

form {
max-width: 500px;
margin: auto;
display: flex;
flex-direction: column;
gap: 15px;
}

input, textarea {
padding: 14px;
border-radius: 6px;
border: 1px solid #ccc;
}

textarea {
resize: vertical;
}

.footer {
background: var(--blue);
color: var(--white);
padding: 25px;
text-align: center;
}

.whatsapp-float {
position: fixed;
bottom: 20px;
right: 20px;
background: #25d366;
color: #fff;
padding: 15px;
border-radius: 50%;
font-size: 22px;
text-decoration: none;
}