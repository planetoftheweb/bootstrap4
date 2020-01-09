<!-- .slide: data-state="title" -->
# Bootstrap 4
Scrollspy

> > Speaker Notes:
Scrollspy allows you to keep track of the scroll of the page and modifies classes according to the position of the page.
---

## Using Scrollspy

<ul>
	<li class="fragment">`data-spy="scroll"`</li>
	<li class="fragment">`position: relative`</li>
	<li class="fragment">`data-target="ID"`</li>
	<li class="fragment">`fixed-top`</li>
	<li class="fragment">`data-offset`</li>
</ul>

> > Speaker Notes:
1. To do this, you need to make sure you add a data-spy scroll attribute on the container of the element you want to track scrolling in.
1. That element also needs to have a position of relative.
1. You also need to target the nav element you want bootstrap to update with data-target= and then the ID
1. For navigation this won't really make sense unless you make the navigation follow the page. You can use the position sticky attribute or the fixed top attribute. position sticky doesn't have enough browser support, so I would stay away from it.
1. The data-offset attribute can make up for the fact that the position of the element needs to be adjusted, so you can use a data-offset as well as some styles and maybe even some JavaScript to make things work.


## Conclusion
Scrollspy is a really nice component that makes your page better. With a little customization, we can make it awesome.

https://gist.github.com/planetoftheweb/c5f562d82125870472395338dcd63993
Scrollspy elements are a bit different in this version of bootstrap. 
```
  body {
    position: relative;
    padding-top: 80px;
  }
</style>

<body data-spy="scroll" data-target="#navbar-site" data-offset="80">

<nav id="navbar-site" class="navbar navbar-inverse bg-primary navbar-toggleable-sm fixed-top">
  <div class="container">
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="#mission">Mission</a></li>
      <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
      <li class="nav-item"><a class="nav-link" href="#staff">Staff</a></li>
      <li class="nav-item"><a class="nav-link" href="#testimonials">Testimonials</a></li>
    </div><!-- navbar-nav -->
  </ul><!-- container -->
</nav>

<script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>

```