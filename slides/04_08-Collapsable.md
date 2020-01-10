<!-- .slide: data-state="title" -->
# Bootstrap 4
Collapsable Content

> > Speaker Notes:
Bootstrap has a couple of tags that lets you create collapsable content which is a common technique you can use to collapse a navbar into a hamburger menu. You'll need two pieces. First is the content that you want to collapse and then you need an element that will do the toggling.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Collapsable Content
<ul>
	<li class="fragment">`collapse`</li>
	<li class="fragment">`navbar-collapse`</li>
	<li class="fragment">`id`</li>
</ul>

> > Notes:
1. For the collapsable content, you're going to need two classes. First is the generic collapsable content. Remember that collapsable content is not something unique to menus, so you need this class.
2. You also need the navbar-collapse class, which is specifically for navbar.
3. You also need an ID on this collapsable content. That will tie it together with the element that will do the toggling. Let's see talk about that.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Toggler Classes
<ul>
	<li class="fragment">`navbar-toggler`</li>
	<li class="fragment">Other Properties</li>
	<li class="fragment">`navbar-toggler-icon`</li>
</ul>

> > Notes:
1. The toggler needs a number of classes and properties. The main class is navbar-toggler.
2. You also need a data-toggler attribute and set it to the collapse element.
3. What ties the toggler with the content you want to toggle is a data-target element, so the ID that you used for that content needs to be here.
4. There are a series of Aria properties that you should also add on this element to make it compatible with screen readers.
5. Finally, you can also add a navbar toggler

# Conclusion
Alignment is pretty easy to do with any element because navigation uses flexbox. Some of these placement classes are also pretty useful when building real world navigation elements.

```
<nav class="navbar navbar-dark bg-dark navbar-expand-sm">
  <div class="container">

    <a href="#" class="navbar-brand">Wisdom Pet Medicine</a>

    <button class="navbar-toggler" type="button"
      data-toggle="collapse" data-target="#myTogglerNav"
      aria-controls="myTogglerNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="myTogglerNav">
      <div class="navbar-nav ml-auto">
        <a class="nav-item nav-link active" href="#">Home</a>
        <a class="nav-item nav-link" href="#">Mission</a>
        <a class="nav-item nav-link" href="#">Services</a>
        <a class="nav-item nav-link" href="#">Staff</a>
        <a class="nav-item nav-link" href="#">Testimonials</a>
      </div><!-- navbar -->
    </div><!-- collapse -->

  </div><!-- container -->
</nav><!-- nav -->
```
