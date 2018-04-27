<!-- .slide: data-state="title" -->
# Bootstrap 4
Collapse & Accordions

> > Speaker Notes:
Collapse and accordions are a set of related components that allow you to show or hide HTML content. Collapse is the simplest, and lets you show or hide content on a click. Accordions are similar but part of a bigger group. When one item shows, another hides, so accordions are essentially groups of collapses.

---

## Collapse

<ul>
	<li class="fragment">Link or Button</li>
	<li class="fragment">`data-toggle="collapse"`</li>
	<li class="fragment">`#id` or `data-target`</li>
	<li class="fragment">`collapse` class</li>
</ul>

> > Speaker Notes:
1. To set up a collapse, you create a link or a button that activates the collapse element.

2. To that element, you add a data-toggle="collapse," and to target the element

3. you can use either an ID if it's an anchor tag or link, or you can use a data-target attribute if it's a button.

4. The element that's going to show or hide has the collapse class.

---

## Accordion

<ul>
	<li class="fragment">Requires container</li>
	<li class="fragment">`show` class once</li>
	<li class="fragment">`dropdown-menu`</li>
	<li class="fragment">Use `card`</li>
</ul>

> > Speaker Notes:
1. Now as I mentioned, accordions are essentially a group of collapses put together. It does require an additional container
2. and one of the elements should be showing so you add the show class on that element,

3. and you'll need to add the class of dropdown-menu

4. and it's common to use card styles to represent these.

## Conclusion
Collapse and accordions are pretty useful in some instances where you need to control the display of elements and you have limited space.
