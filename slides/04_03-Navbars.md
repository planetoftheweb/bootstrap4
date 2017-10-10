<!-- .slide: data-state="title" -->
# Bootstrap 4
Creating Navbars

> > Speaker Notes:
The navbar component is related to the nav component, so if you're familiar with navs, then creating navbars will be simple. It's a completely redesigned component that is simpler to use and customize.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Navbar Classes
<ul>
	<li class="fragment">`navbar`</li>
	<li class="fragment"><p contenteditable>`navbar-expand(-BP)`</p>
		<small style="line-height: 120%; vertical-align: text-bottom;">
			<b>BP:</b> <code style="background:#5cb85c; color:white;">sm</code> >576px
			<code style="background:#5cb85c; color:white;">md</code> >768px
			<code style="background:#5cb85c; color:white;">lg</code> >992px
			<code style="background:#5cb85c; color:white;">xl</code> >1200px
		</small><br>
	</li>
	<li class="fragment">`navbar-nav`</li>
</ul>


> > Notes:
1. The navbar is the main component and it can have a number of other elements inside it.
1. By default, navbars components will stack so we need to add a navbar-expand with optional breakpoints to control when the navbar expands
1. The simplest component you can use is the navbar-nav, which is our list of links. Just like with navs, you can use the navbar classes with either ULs or with the NAV tag.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Navbar Colors
<ul>
<li><p contenteditable>`bg-COLOR` for backgrounds</p>
  <small style="line-height: 120%; vertical-align: text-bottom;">
  <code style="background:#007bff; color:white;">primary</code>
  <code style="background:#868e96; color:white;">secondary</code>
  <code style="background:#28a745; color:white;">success</code>
  <code style="background:#dc3545; color:white;">danger</code><br>
  <code style="background:#ffc107; color:white;">warning</code>
  <code style="background:#17a2b8; color:white;">info</code>
  <code style="background:#f8f9fa; color:black;">light</code>
  <code style="background:#343a40; color:white;">dark</code>
  <code style="background:white; border: 1px solid gray; color:black;">white</code></small>
</li>
	<li class="fragment">`navbar-light`</li>
	<li class="fragment">`navbar-dark`</li>
</ul>


> > Notes:
1. You can use bg-color classes to change the color of the background navigation just like with other components if you want to use one of Bootstrap's defaults...and you can easily customize your color by changing the background-color css property to whatever you want.
2. To control the color of the text, you can use navbar-light if your background color is light
3. Or you can use navbar-inverse if your background color is dark

`<nav class="navbar navbar-light" style="background-color: #C4226F;">`
`<nav class="navbar navbar-dark" style="background-color: #EEC856;">`

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> navbar-nav Options
<ul>
	<li class="fragment">`nav-item`</li>
	<li class="fragment">`nav-link`</li>
	<li class="fragment">`active`</li>
	<li class="fragment">`disabled`</li>
</ul>


> > Notes:
1. Just like with navs, we have a few classes to control how links look. You need a navitem on the LI if your using lists or in the anchor tag if your using the NAV tag.
1. You use a nav-link just like with navs to identify the link
1. Just like with navs you have an active as well as a disabled option. Those are not going to look differently until you add navigation styles.


# Conclusion
The new navbars are much better than in previous versions and much easier to customize with css. There are a lot more options so we'll take a look at them in the remainder of the chapter.

```
 <nav class="navbar navbar-light bg-faded navbar-toggleable-sm">
   <div class="container">
    <nav class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home</a>
      <a class="nav-item nav-link" href="#">Mission</a>
      <a class="nav-item nav-link" href="#">Services</a>
      <a class="nav-item nav-link" href="#">Staff</a>
      <a class="nav-item nav-link disabled" href="#">Testimonials</a>
    </ul>   
   </div>
 </nav>
```
