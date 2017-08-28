<!-- .slide: data-state="title" -->
# Bootstrap 4
Card Content

>> Speaker Notes:
Let's take a look at a few more classes that allow you to control how different elements within the class work.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Headers & Footers

<ul>
	<li>`card-header`</li>
	<li class="fragment">`card-footer`</li>
</ul>

>> Speaker Notes:
1. You can have different types of content containers inside a card. You can use a card-header.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Lists &amp; Tabs

<ul>
	<li class="fragment">`list-group-flush`</li>
	<li class="fragment">`card-header-tabs`</li>
</ul>

>> Speaker Notes:
1. T

## Demo

```
  <section class="card mb-5" id="drsanders">
    <img class="img-fluid card-img" src="images/doctor-sanders.jpg" alt="Doctor Sanders Photo">
      <div class="card-block card-img-overlay">
        <h2 class="card-title">Dr. Kenneth Sanders</h2>
        <h5 class="card-subtitle">Nutritionist</h5>
        <p class="card-text">Leroy walked into Dr. Sanders front door when she was moving into a new house. After searching for weeks for Leroy's guardians, she decided to make Leroy a part of her pet family, and now has three cats.</p>
        <a class="card-link" href="#">About Me</a>
        <a class="card-link" href="#">My Pets</a>
        <a class="card-link" href="#">Client Slideshow</a>
      </div><!-- card block -->
  </section>
```

```
  <section class="card mb-5" id="drgardner">
    <header class="card-header">
      <nav class="nav nav-tabs card-header-tabs">
        <a class="nav-link nav-item active" href="#">About Me</a>
        <a class="nav-link nav-item" href="#">My Pets</a>
        <a class="nav-link nav-item" href="#">Client Slideshow</a>
      </nav>
    </header>
      <div class="card-block">
        <h2 class="card-title">Dr. Michael Gardner</h2>
        <h5 class="card-subtitle">Practitioner</h5>
        <p class="card-text">When Dr. Gardner was 8 his family moved to Colorado, where he spent most of his free time playing on his neighbors farm. He came to love spending time with the horses, chickens, and goats. He still considers all of his family's farm animals his own, but Frank, his Cattle dog is his nearest and dearest friend.</p>
      </div><!-- card block -->
      <img class="img-fluid card-img-bottom" src="images/doctor-gardner.jpg" alt="Doctor Gardner Photo">
  </section>
```

```
<section class="card mb-5" id="drruiz">
  <h2 class="card-header">Dr. Brook Ruiz</h2>
  <img class="img-fluid" src="images/doctor-ruiz.jpg" alt="Doctor Ruiz Photo">
  
  <div class="card-block">
    <h5 class="card-subtitle">Radiology</h5>
    <p class="card-text">Dr. Brook has spent countless hours helping the local animal shelter with injured animals ,that find their way into their doors. She recently adopted a new feline friend, Trish, that she helped rescue from a flooded area. Trish loves playing with her new sister, Else.</p>
  </div><!-- card block -->

  <div class="card-footer">
    <a class="card-link" href="#">About Me</a>
    <a class="card-link" href="#">My Pets</a>
    <a class="card-link" href="#">Client Slideshow</a>
  </div>
</section>
```

```
<section class="card mb-5" id="drwong">
  <img class="img-fluid card-img-top" src="images/doctor-wong.jpg" alt="Doctor Wong Photo">
    <div class="card-block">
      <h2 class="card-title">Dr. Olivia Wong</h2>
      <h5 class="card-subtitle">Preventive Care</h5>
      <p class="card-text">Dr. Wong is a cancer survivor who was fortunate enough to get to spend time with a therapy dog during her recovery. She became passionate about therapy animals, and has started her own foundation to train and provide education to patients in recovery. Now she gets her own dose of daily therapy from her husky, Lilla.</p>
    </div><!-- card block -->
      <div class="list-group list-group-flush">
        <a class="list-group-item" href="#">About Me</a>
        <a class="list-group-item" href="#">My Pets</a>
        <a class="list-group-item" href="#">Client Slideshow</a>
      </div>        
</section>

```



## Conclusion
Some of these classes are really useful.