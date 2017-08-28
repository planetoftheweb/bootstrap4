<!-- .slide: data-state="title" -->
# Bootstrap 4
Creating Navs

> > Speaker Notes:
There is a group of components called navs. This component had a lot of changes in the new version of Bootstrap due to the implementation of flebox and thankfully became a lot simpler to use.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Basic Nav Classes
<ul>
	<li class="fragment">With/without `UL`s</li>
	<li class="fragment">`nav`</li>
	<li class="fragment">`nav-item`</li>
	<li class="fragment">`nav-link`</li>
</ul>


> > Notes:
1. You can use the nav classes with either a HTML list elements or without.
2. The main container for the navs get a nav class and each internal element inside gets a nav-item class. Finally, links get a nav-link class.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Nav Link Options
<ul>
	<li class="fragment">`active`</li>
	<li class="fragment">`disabled`</li>
</ul>

> > Notes:
1. You can specify that an item is currently active or disabled. Without a style class...which we'll talk about in just a minute, the active class shows up just like the other ones.
1. Disabled shows up grayed out and it prevents people from clicking on the links.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Nav Styles
<ul>
	<li class="fragment">`nav-pills`</li>
	<li class="fragment">`nav-tabs`</li>
</ul>

> > Notes:
1. Nav-pills has a style that look like rounded buttons to the active link.
1. If you use nav-tabs options the navigation looks like tabs. These are meant to work with the tabs javascript component, so we'll talk more about this in a later video.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Nav Alignment
<ul>
	<li class="fragment">`justify-content-center`</li>
	<li class="fragment">`justify-content-end`</li>
	<li class="fragment">`nav-fill`</li>
	<li class="fragment">`nav-justified`</li>
	<li class="fragment">`flex-column`</li>
</ul>

> > Notes:
1. Because the nav is now flexbox based, you can easily control the alignment of the navigation easily with flexbox classes. So now, centering the nav is a cinch with justify-content-center
1. In the same way, you can easily align the nav to the right with justify-content-end.
1. There's a couple of styles to force your nav to take up all the available horizontal space. nav-fill will make the links fit the horizontal space, but the space of each link will be different depending on the width of the text.
1. If you want the spacing between the links to be the same, you can use nav-justified.
2. Finally, you can use flex-column at different breakpoints to make your nav easily responsive.

```
<nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link disabled" href="#">Disabled</a>
</nav>
```

# Conclusion
If you were using the previous version of this framework, you'll immediately notice that the new navigation is simpler and easier to build and control. The addition of flexbox is the engine that makes this possible.