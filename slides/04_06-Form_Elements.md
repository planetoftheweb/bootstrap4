<!-- .slide: data-state="title" -->
# Bootstrap 4
Using Form Elements

> > Speaker Notes:
Form elements are pretty easy to implement with just a few classes to learn. Let's take a look.
  
---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Form Classes
<ul>
	<li class="fragment">`form-inline`</li>
	<li class="fragment">`form-control`</li>
	<li class="fragment">Spacing as needed</li>
</ul>

> > Notes:
1. In order to add form elements to a menu, you simply needs two classes. First you use a form-inline on a container for the form elements
2. Add form-control classes as needed for things like input fields. Some elements like buttons don't need extra classes.
3. You may need to add some additional spacing classes as needed.

# Conclusion
Dropdowns are a bit complicated to set up.

```
<nav class="navbar navbar-inverse bg-primary navbar-toggleable-sm">
  <div class="container">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home</a>
      <a class="nav-item nav-link" href="#">Mission</a>
      <a class="nav-item nav-link" href="#">Services</a>
      <a class="nav-item nav-link" href="#">Staff</a>
      <a class="nav-item nav-link" href="#">Testimonials</a>
    </div><!-- navbar-nav -->

    <form class="form-inline">
      <input class="form-control mr-2" type="text" placeholder="Search">
      <button class="btn btn-info" type="submit">Go</button>
    </form>

  </div><!-- container -->
</nav>
```