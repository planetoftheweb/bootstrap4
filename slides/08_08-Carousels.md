<!-- .slide: data-state="title" -->
# Bootstrap 4
Carousels

> > Speaker Notes:
The carousel is the most popular bootstrap component. There's really not much to expect in terms of migration. Let's take a look.

---

## Setup

<ul>
	<li class="fragment">`carousel`</li>
	<li class="fragment">`data-ride="carousel"`</li>
	<li class="fragment">`carousel-inner`</li>
	<li class="fragment">`carousel-item`</li>
</ul>

> > Speaker Notes:
1. The main container to use is of course carousel
1. If you want the carousel to automatically animate when the page loads, use data-ride="carousel", there are a lot of other options you can activate using data attributes or javascript...more of that in a sec.
1. carousel-inner is the main container for the images
1. carousel-item is a wrapper for each image.

---

## Options

<ul>
	<li class="fragment">one element `active`</li>
	<li class="fragment">Crop and size photos</li>
</ul>

> > Speaker Notes:
1. At least one of the carousel image containers should have a class of active.
1. Also, bootstrap is not going to perform any sizing on your images, so make sure you crop and resize your images. You may also need to size your images using css.

---
## Captions
<ul>
	<li class="fragment">`carousel-caption`</li>
</ul>

```
<div class="carousel-caption d-none d-md-block">
  <h3>...</h3>
  <p>...</p>
</div>
```
<!-- .element: data-trim="true" contenteditable="true" class="fragment" -->

> > Speaker Notes:
1. There is a special class for captions called carousel-caption.

---

## Navigation

<ul>
	<li class="fragment">`data-target`</li>
	<li class="fragment">`carousel-control-prev`</li>
	<li class="fragment">`carousel-control-prev-icon`</li>
	<li class="fragment">`carousel-control-next`</li>
	<li class="fragment">`carousel-control-next-icon`</li>
</ul>

> > Speaker Notes:
1. You can add previous and next icons on the images using classes. 

---

## Indicators

<ul>
	<li class="fragment">`carousel-indicators`</li>
	<li class="fragment">`data-target`</li>
	<li class="fragment">`data-slide-to`</li>
</ul>

> > Speaker Notes:
1. You can also add indicators. They look very different from the old indicators, but are just easy to set up.

---

## Setup

<ul>
	<li class="fragment">JavaScript or `data-`</li>
</ul>

```javascript
$(function () {
	$('.carousel').carousel(OPTIONS)
})
```
<!-- .element: data-trim="true" contenteditable="true" class="fragment" -->


> > Speaker Notes:
1. As I mentioned, you can control your carousels in one of two ways, using Javascript or through data attributes

---

## Data Attributes

<ul>
	<li class="fragment">`interval` : 5000</li>
	<li class="fragment">`pause` : hover | null</li>
	<li class="fragment">`ride` : false</li>
	<li class="fragment">`wrap` : true</li>
</ul>

> > Speaker Notes:
1. Interval is the amount of milliseconds between auto-advances.
2. Pause will pause the slideshow if you move your mouse over the images. It's  on by deafult, so set it to null if you don't want it to do this.
3. Ride controls how the photos rotate. If this is set to true, then the photos will rotate after you click on the controls. If you set it to the word carousel, it will automatically play the slide when the page loads. false prevents it from rotating.
4. wrap controls what happens when the slideshow reaches the last slide. The default is true, which means the slide advances to the first photo after the last. False turns that off.

## Conclusion
Carousels are very popular in Bootstrap because they give you a way to show different content within a concise space.

```
<style>
 #featured img {
   width: 100%;
   height: 100%;
 }
</style>

<div class="carousel slide" id="featured" data-ride="carousel">

  <ol class="carousel-indicators">
    <li data-target="#featured" data-slide-to="0" class="active"></li>
    <li data-target="#featured" data-slide-to="1"></li>
    <li data-target="#featured" data-slide-to="2"></li>
  </ol>

  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      <img class="d-block img-fluid" src="images/carousel-lifestyle.jpg" alt="Lifestyle Photo">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" src="images/carousel-fish.jpg" alt="Mission">
      <div class="carousel-caption d-none d-md-block">
        <h3>Pete, <small>owner of McAllister</small></h3>
        <p>"Wisdom Pet Medicine is the only clinic around that will even book pet fish for appointments."</p>
      </div>

    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid" src="images/carousel-vaccinations.jpg" alt="Vaccinations">
    </div>
  </div><!-- carousel-inner -->

  <a class="carousel-control-prev" href="#featured" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#featured" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>

</div><!-- carousel -->

```