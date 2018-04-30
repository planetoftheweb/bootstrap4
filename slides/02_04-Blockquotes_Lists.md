<!-- .slide: data-state="title" -->
# Bootstrap 4
Lists &amp; Blockquotes

> > Speaker Notes:
Other than headlines, Bootstrap provides some classes that help you work with common CSS tags like lists and blockquote elements. Let's take a look at them.

---
<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-ol"></i> Lists

<ul>
	<li class="fragment">`list-unstyled` no bullets</li>
	<li class="fragment">Inline Lists
		<ul>
			<li class="fragment">`list-inline` on UL</li>
			<li class="fragment">`list-inline-item` on each LI</li>
		</ul>
	</li>
</ul>

> > Speaker Notes:
1. There's a couple of styles that will take care of things that we often do with lists. First is getting rid of those pesky bullets, you can do that with the list-unstyled class. However, this only works on the first level of the list elements.

1. Next you can build lists that appear side by side like a menu or perhaps your own version of a breadcrumb using a combination of two links.

1. list-inline goes on the UL element

1. list-inline-item goes on each LI in the list

## Demo

```
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Nulla volutpat aliquam velit
    <ul class="list-inline">
      <li class="list-inline-item">Vestibulum </li>
      <li class="list-inline-item">Tristique</li>
   </ul>
</li>
 <li>Faucibus porta lacus fringilla vel</li>
 </ul>
```

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-quote-right"></i> Blockquotes

<ul>
	<li class="fragment">Use `blockquote`</li>
	<li class="fragment">`blockquote-footer` for sources</li>
</ul>

> > Speaker Notes:
1. First, bootstrap blockquotes look like regular text, but there is an official class that adds a border to one side and changes the fonts a bit. With this class, you can make anything like a div or a paragraph a blockquote. It doesn't have to be explicitly a blockquote.

1. There is a style for an attribution called blockquote footer.


```
<blockquote class="blockquote text-right">
	<div>Wisdom Pet Medicine is the Best!!!</div>
	<footer class="blockquote-footer">Hassum Harrod</footer>
</blockquote>

```

## Demo

## Conclusion
The blockquote styles give you a few ways to improve the way customer quotations and other quoted text and some of the list styles make it easier to handle common list item tasks. They're both pretty easy to use and super helpful when building sites.
