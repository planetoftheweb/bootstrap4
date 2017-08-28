<!-- .slide: data-state="title" -->
# Bootstrap 4
Card Layout

>> Speaker Notes:
There is a number of ways to control the layout of your cards. Some are simpler than others and what's different is how the elements align.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Traditional Layouts

<ul>
	<li class="fragment">`col` grid</li>
	<li class="fragment">Flexbox grid</li>
</ul>

>> Speaker Notes:
1. Obviously, the first way you can control layout is through flexbox. It's a bit harder to do, but gives you the most control over the positioning of the elements.

1. Of course, you can use the column grid. That's a great way to layout elements, and it's easier to control what happens with the columns, but it requires extra markup. We'll look at some examples.

```
<div class="container d-flex flex-wrap justify-content-between">
  <section class="card mb-4" id="drwinthrop" style="width:32.5%">
```
---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Layout Classes

<ul>
	<li class="fragment">`card-group` containers</li>
	<li class="fragment">`card-deck`</li>
	<li class="fragment">`card-columns`</li>
</ul>

>> Speaker Notes:
Bootstrap has three different classes to make it simpler to create columns.
1. The first is card-group. It creates a group that's similar to a button group. The cards come together with a shared border.
2. There's a second class called card-deck. If you want spacing between the columns, this is the easiest way to set things up.
3. Finally, there's card columns. This makes a really interesting layout where the cards align similarly to what you would see in pinterest.

## Demo

## Conclusion
You should practice the different layout controls. The built in column formats are definitely the easiest, but you pay for it with a lack of customization.