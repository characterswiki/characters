<!DOCTYPE html>
<html lang="{{ site.language | default: 'en' }}">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

{% seo %}

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">

<style>

/* ================= GLOBAL VARIABLES ================= */
:root{
  --accent:#7c3aed;
  --bg:#ffffff;
  --text:#1e293b;
  --card-bg:#f8fafc;
  --border:#e2e8f0;
  --radius:12px;
}

/* ================= GLOBAL ================= */
body{
  font-family:'Plus Jakarta Sans',sans-serif;
  color:var(--text);
  margin:0;
  line-height:1.6;
  background:var(--bg);
}

.container{
  max-width:1100px;
  margin:0 auto;
  padding:2rem;
}

a{
  color:var(--accent);
  text-decoration:none;
}

a:hover{
  text-decoration:underline;
}

h1,h2,h3{
  margin-top:0;
}

/* ================= HEADER ================= */
.site-header{
  background:var(--bg);
  border-bottom:1px solid var(--border);
  position:sticky;
  top:0;
  z-index:100;
}

.header-inner{
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.logo{
  font-weight:700;
  font-size:20px;
  color:var(--text);
}

.nav{
  display:flex;
  gap:1.5rem;
}

.nav a{
  font-weight:500;
  color:var(--text);
}

.menu-toggle{
  display:none;
  font-size:24px;
  background:none;
  border:none;
  cursor:pointer;
}

/* ================= MAIN LAYOUT ================= */
.site-wrapper{
  display:grid;
  grid-template-columns:3fr 1fr;
  gap:2rem;
  margin-top:30px;
}

/* ================= CONTENT ================= */
.content-area{
  background:white;
  padding:1.5rem;
  border-radius:var(--radius);
  border:1px solid var(--border);
}

/* ================= SIDEBAR ================= */
.sidebar .widget{
  background:white;
  padding:1.2rem;
  border-radius:var(--radius);
  border:1px solid var(--border);
  margin-bottom:1.5rem;
}

.sidebar ul{
  list-style:none;
  padding:0;
  margin:0;
}

.sidebar li{
  margin-bottom:6px;
}

/* ================= CHARACTER GRID ================= */
.character-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
  gap:1.5rem;
}

.char-card{
  background:var(--card-bg);
  border-radius:var(--radius);
  padding:1.5rem;
  border:1px solid var(--border);
  transition:transform .2s ease,box-shadow .2s ease;
}

.char-card:hover{
  transform:translateY(-5px);
  box-shadow:0 10px 25px -5px rgba(0,0,0,.1);
}

.char-card h3{
  margin-bottom:8px;
}

.char-card img{
  width:100%;
  border-radius:8px;
  margin-bottom:10px;
}

/* ================= POSTS ================= */
.post-meta{
  font-size:14px;
  color:#64748b;
  margin-bottom:10px;
}

/* ================= FOOTER ================= */
.site-footer{
  border-top:1px solid var(--border);
  text-align:center;
  padding:2rem;
  margin-top:3rem;
  font-size:14px;
  background:var(--bg);
}

/* ================= MOBILE ================= */
@media(max-width:900px){

.site-wrapper{
  grid-template-columns:1fr;
}

.nav{
  display:none;
  flex-direction:column;
  background:white;
  position:absolute;
  right:20px;
  top:60px;
  padding:20px;
  border-radius:10px;
  box-shadow:0 10px 25px rgba(0,0,0,.1);
}

.menu-toggle{
  display:block;
}

}

@media(max-width:640px){

.container{
  padding:1rem;
}

h1{
  font-size:1.75rem;
}

}

</style>

</head>

<body>

<!-- ================= HEADER ================= -->
<header class="site-header">

<div class="container header-inner">

<a class="logo" href="{{ '/' | relative_url }}">
{{ site.title }}
</a>

<nav class="nav" id="navMenu">

<a href="{{ '/' | relative_url }}">Home</a>
<a href="{{ '/categories' | relative_url }}">Categories</a>
<a href="{{ '/about' | relative_url }}">About</a>

</nav>

<button class="menu-toggle" onclick="toggleMenu()">☰</button>

</div>

</header>

<!-- ================= MAIN ================= -->
<div class="site-wrapper container">

<!-- ===== CONTENT ===== -->
<main class="content-area">

{{ content }}

</main>

<!-- ===== SIDEBAR ===== -->
<aside class="sidebar">

<div class="widget">
<h3>Recent Posts</h3>
<ul>
{% for post in site.posts limit:5 %}
<li>
<a href="{{ post.url | relative_url }}">
{{ post.title }}
</a>
</li>
{% endfor %}
</ul>
</div>

<div class="widget">
<h3>Categories</h3>
<ul>
{% for category in site.categories %}
<li>
<a href="{{ '/categories/#' | append: category[0] | relative_url }}">
{{ category[0] }} ({{ category[1].size }})
</a>
</li>
{% endfor %}
</ul>
</div>

</aside>

</div>

<!-- ================= FOOTER ================= -->
<footer class="site-footer">

<div class="container">
<p>
© {{ site.time | date: '%Y' }} {{ site.title }}  
All rights reserved.
</p>
</div>

</footer>

<!-- ================= JS ================= -->
<script>
function toggleMenu(){
  var nav=document.getElementById("navMenu");
  if(nav.style.display==="flex"){
    nav.style.display="none";
  }else{
    nav.style.display="flex";
  }
}

// ================= Smooth Scroll =================
document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    console.log("Characters Wiki UI Loaded Successfully.");
});
</script>

</body>
</html>
