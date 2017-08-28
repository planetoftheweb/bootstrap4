<!-- .slide: data-state="title" -->
# Bootstrap 4
Understanding Cards

>> Speaker Notes:
Cards are a new design pattern in Bootstrap 4 that help you layout content into card-like containers that look great. There are a ton of options in terms of the classes you can use, so let's take a look.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Basic Card Class

<ul>
	<li class="fragment">`card` container</li>
</ul>

>> Speaker Notes:
1. All cards require a container and in order to get things going, you need to add the card class to activate the features. Cards have a mild rounded edge at the top.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Card Styling

<ul>
	<li class="fragment"><p contenteditable>`card-COLOR`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#0275d8; color:white;">primary</code>
			<code style="background:#5cb85c; color:white;">success</code>
			<code style="background:#5bc0de; color:white;">info</code><br>
			<code style="background:#f0ad4e; color:white;">warning</code>
			<code style="background:#D9534E; color:white;">danger</code>
		</small>
	</li>
	<li class="fragment">`card-inverse`</li>
</ul>

>> Speaker Notes:
1. All cards require a container and in order to get things going, you need to add the card class to activate the features. Cards have a mild rounded edge at the top.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Card Outlines

<ul>
	<li><p contenteditable>`card-outline-COLOR`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#FFF; border: 1px solid #0275d8; color:#666;">primary</code>
			<code style="background:#FFF; border: 1px solid #292b2c; color:#666;">secondary</code>
			<code style="background:#FFF; border: 1px solid #5cb85c; color:#666;">success</code><br>
			<code style="background:#FFF; border: 1px solid #5bc0de; color:#666;">info</code>
			<code style="background:#FFF; border: 1px solid #f0ad4e; color:#666;">warning</code>
			<code style="background:#FFF; border: 1px solid #D9534E; color:#666;">danger</code>
		</small>
	</li>
</ul>

>> Speaker Notes:
1. All cards require a container and in order to get things going, you need to add the card class to activate the features. Cards have a mild rounded edge at the top.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Card Items

<ul>
	<li>`card-block`</li>
	<li class="fragment">`card-text`</li>
	<li class="fragment">`card-title`</li>
	<li class="fragment">`card-subtitle`</li>
	<li class="fragment">`card-link`</li>
</ul>

>> Speaker Notes:
1. There are a number of classes for specific content like titles, which you can use with headline tags to style card titles
2. You can also use card-subtitle for of course subtitles.
3. Links get their own special links called card-link.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Card Images

<ul>
	<li>`card-img-top`</li>
	<li class="fragment">`card-img-bottom`</li>
	<li class="fragment">`card-img-overlay`</li>
</ul>

>> Speaker Notes:
1. Images get some special classes. You can use two classes to give images the proper borders. card-img-top gives you an image with round edges at the top.
2. card-img-bottom gives you images with the proper roundness at the bottom. By the way, if you don't want the roundness, you don't use an image class.
3. card-img-overlay is a special class to let you build a card with a background image.


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
List groups can be a handy component to use in limited situations, specially for mobile type apps. Bootstrap provides a really comprehensive group of classes to use with this component.