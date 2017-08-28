<!-- .slide: data-state="title" -->
# Bootstrap 4
Jumbotron

>> Speaker Notes:
The Jumbotron is a component for a higlighted section of content that is commonly at the top of many websites. It's really easy to do with Bootstrap

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-drivers-license"></i> Jumbotron Classes

<ul>
	<li class="fragment">`jumbotron` container</li>
	<li class="fragment">`jumbotron-fluid` items</li>
	<li class="fragment">Use styles as needed</li>
</ul>

>> Speaker Notes:
1. To create a jumbotron you add a class to main container. It creates a light gray background with slight round edges. 
2. If you add a jumbotron-fluid container, you get a slightly different version that takes up the entire space of the parent.
3. You may have to add a container class if you want the content to obey the grid.

## Demo

## Conclusion
Breadcrumbs are pretty easy to use and style and when you need one, bootstrap gives you just the right classes to take care of them.

```
<section class="jumbotron jumbotron-fluid bg-default mb-0" style="background: #FFEB8B">
  <div class="container">
    <div class="display-2 mb-4">Our Mission</div>
    <p class="lead">Wisdom Pet Medicine strives to blend the best in traditional and alternative medicine in the diagnosis and treatment of companion animals including dogs, cats, birds, reptiles, rodents, and fish. We apply the wisdom garnered in the centuries old tradition of veterinary medicine, to find the safest treatments and&nbsp;cures.</p>
  </div>
</section>
```

```
<div class="container">
<section class="jumbotron bg-info text-white">
  <div class="container">
    <div class="display-2 mb-4">Our Mission</div>
    <p class="lead">Wisdom Pet Medicine strives to blend the best in traditional and alternative medicine in the diagnosis and treatment of companion animals including dogs, cats, birds, reptiles, rodents, and fish. We apply the wisdom garnered in the centuries old tradition of veterinary medicine, to find the safest treatments and&nbsp;cures.</p>
  </div>
</section>
```