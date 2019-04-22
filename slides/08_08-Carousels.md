<!-- .slide: data-state="title" -->
# Bootstrap 4
Carousels

> > Speaker Notes:
The carousel is the most popular bootstrap component. There's really not much to expect in terms of migration. Let's take a look.

---

## Setup

- `carousel`
- `data-ride="carousel"`
- `carousel-inner`
- `carousel-item`

> > Speaker Notes:
1. The main container to use is of course carousel
1. If you want the carousel to automatically animate when the page loads, use data-ride="carousel", there are a lot of other options you can activate using data attributes or javascript...more of that in a sec.
1. carousel-inner is the main container for the images
1. carousel-item is a wrapper for each image.

---

## Options
- `carousel-fade`
- one element `active`
- `d-block` &amp; `w-100`

> > Speaker Notes:
1. At least one of the carousel image containers should have a class of active.
1. Also, bootstrap is not going to perform any sizing on your images, so make sure you crop and resize your images. You may also need to size your images using css.

---
## Captions
- `carousel-caption`

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

- `data-target`
- `carousel-control-prev`
- `carousel-control-prev-icon`
- `carousel-control-next`
- `carousel-control-next-icon`

> > Speaker Notes:
1. You can add previous and next icons on the images using classes.

---

## Indicators

- `carousel-indicators`
- `data-target`
- `data-slide-to`

> > Speaker Notes:
1. You can also add indicators.
1. The data-target attribute is essential since it indicates what carousel the indicators control
1. data-slide-to indicates which image the current indicator will show.

---

## Data Attributes

- `interval` : 5000 / item
- `pause` : hover | null
- `ride` : false
- `touch`, `keyboard`, `wrap` : true

> > Speaker Notes:
1. Interval is the amount of milliseconds between auto-advances. Interestingly enough, you can include data-interval inside each carousel-item, so that some items can take longer to display.
2. Pause will pause the slideshow if you move your mouse over the images. It's  on by deafult, so set it to null if you don't want it to do this.
3. Ride controls how the photos rotate. If this is set to true, then the photos will rotate after you click on the controls. If you set it to the word carousel, it will automatically play the slide when the page loads. false prevents it from rotating.
4. wrap controls what happens when the slideshow reaches the last slide. The default is true, which means the slide advances to the first photo after the last. False turns that off.

## Conclusion
Carousels are very popular in Bootstrap because they give you a way to show different content within a concise space.

```
<div class="carousel slide" id="featured" data-ride="carousel">
  <div class="carousel-inner">
    <ol class="carousel-indicators">
      <li data-target="#featured" data-slide-to="0" class="active">
        <li data-target="#featured" data-slide-to="1" class="active">
          <li data-target="#featured" data-slide-to="2" class="active">
    </ol>
    <div class="carousel-item active">
      <img class="img-fluid" src="images/carousel-lifestyle.jpg" alt="Lifestyle Photo">
    </div>
    <!-- carousel-item -->
    <div class="carousel-item">
      <img class="img-fluid" src="images/carousel-fish.jpg" alt="Mission">
      <div class="carousel-caption d-none d-md-block">
        <h3>Pete,
          <small>owner of McAllister</small>
        </h3>
        <p>"Wisdom Pet Medicine is the only clinic around that will even book pet fish for appointments."</p>
      </div>
    </div>
    <!-- carousel-item -->
    <div class="carousel-item">
      <img class="d-block img-fluid" src="images/carousel-vaccinations.jpg" alt="Vaccinations">
    </div>
    <!-- carousel-item -->
    <a class="carousel-control-prev" href="#featured" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true">
        <span class="sr-only">Previous</span>
      </span>
    </a>
    <a class="carousel-control-next" href="#featured" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true">
        <span class="sr-only">next</span>
      </span>
    </a>
  </div>
  <!-- carousel-inner -->
</div>
<!-- carousel -->
```
