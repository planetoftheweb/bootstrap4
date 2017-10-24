<!-- .slide: data-state="title" -->
# Bootstrap 4
Navbar Brand & Text

> > Speaker Notes:
In addition to the obvious navbar-nav, you can add other components to your navigation. The simplest to use is called the brand, and it's used for text or logos that gets an enhanced look. Another simple component is the navbar text so that you can add inline text that works with the rest of the navigation.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Navbar Options
<ul>
	<li class="fragment">`navbar-brand`</li>
	<li class="fragment">Link or Headline</li>
	<li class="fragment">Using Images</li>
	<li class="fragment">`navbar-text`</li>
</ul>

> > Notes:
1. Navbar Brands classes go inside a navbar at the same level as the navbar-nav links.
1. You can use an anchor tag to create a link or use a headline or other component. You may have to make some adjustments with the margin classes if you use headlines.
1. You can also place images, but chances are, you'll have to make some adjustments  to your styles.
1. Navbar text allows you to place some text into the navigation that aligns as best as possible with the rest of the content.

# Conclusion
Navbar brands are pretty common inside navs, they look great but do require a bit of extra work. Adding text is also easy with the navbar-text class.

```
<nav class="navbar navbar-inverse bg-info navbar-expand-sm">
  <div class="container">
    <a class="navbar-brand mb-0" href="#">
      <img src="images/wisdompetlogo.svg" style="width: 80px" alt="Wisdom Pet Logo">
      Wisdom Pet
    </a>
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home</a>
      <a class="nav-item nav-link" href="#">Mission</a>
      <a class="nav-item nav-link" href="#">Services</a>
      <a class="nav-item nav-link" href="#">Staff</a>
      <a class="nav-item nav-link disabled" href="#">Testimonials</a>
    </div><!-- navbar-nav -->

    <span class="navbar-text">The best in traditional and alternative medicine</span>
  </div><!-- container -->
</nav>
```
