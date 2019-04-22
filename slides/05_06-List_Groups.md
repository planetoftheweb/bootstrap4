<!-- .slide: data-state="title" -->
# Bootstrap 4
List Groups

> > Speaker Notes:
List groups are a great way to style lists and other elements like buttons and links. There's a lot of markup involve, so let's take a look.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> List Group Classes
- `list-group` containers</li>
- `list-group-item` items
- `li` `button` `a`

> > Speaker Notes:
1. To create a list group, you start out with a list-group class inside a container, which usually goes inside a DIV or a UL tag.
1. Inside that container, you create a series of elements with list-group-item classes in them.
1. You can create list group items with list items, buttons or anchor tags.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> List Group Styles
- `active` `disabled`
- `list-group-item-action` style
- <p contenteditable>Use `list-group-item-COLOR`
<div class="sample">
<small style="line-height: 220%; vertical-align: text-bottom;">
	<code style="background:#b8daff; color:#004085;">primary</code>
	<code style="background:#dddfe2; color:#464a4e;">secondary</code>
	<code style="background:#c3e6cb; color:#155724;">success</code>
	<code style="background:#f5c6cb; color:#721c24;">danger</code>
	<code style="background:#ffeeba; color:#856404;">warning</code>
	<code style="background:#bee5eb; color:#0c5460;">info</code>
	<code style="background:#fdfdfe; color:#818182;">light</code>
	<code style="background:#c6c8ca; color:#1b1e21;">dark</code>
</small>
</div>
- <p contenteditable>`list-group-horizontal(-BP)`</p>
<div class="sample">
	<b>BP:</b>
	<code class="btn bg-success text-white">sm</code> >576px
	<code class="btn bg-success text-white">md</code> >768px
	<code class="btn bg-success text-white">lg</code> >992px
	<code class="btn bg-success text-white">xl</code> >1200px
</div>

> > Speaker Notes:
1. In terms of styles, you can use active or disabled styles just like you can with buttons. Note that to make links fully disabled, you may have to use extra javascript. Disabled styles don't work with buttons.
1. If you need to create actionable list items that you want users to click on, you need to use the list-group-item-action class. That adds hover disabled and active states to the items.
1. There are a few light background options you can use with list-group-item and then a color or contextual class.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Adding Badges
- `badge` classes
- `justify-content-between`

> > Speaker Notes:
1. It's common to add badges to list groups. You can use the badge and other classes to add these to list groups.
2. For badges to align properly, you can use the justify-content-between flexbox class. As a matter of fact, you can add any sort of spacing classes inside a list-group.

---

## Demo

> > Speaker Notes:

```
<section class="content" id="services">
  <h3>Exotic Pets</h3>
  <p>We offer <strong>specialized</strong> care for <em>reptiles, rodents, birds,</em> and other exotic pets.</p>

<ul class="list-group mb-3">
  <li class="list-group-item active"><h3 class="mb-0">Grooming</h3></li>
  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">General Health <span class="badge badge-primary badge-pill">12</span></li>
  <li class="list-group-item list-group-item-action">Nutrition</li>
  <li class="list-group-item list-group-item-action disabled">Pest Control</li>
  <li class="list-group-item list-group-item-action">Vaccinations</li>

<div class="list-group mb-3">
  <a class="list-group-item list-group-item-action active" href="#">Grooming</a>
  <a class="list-group-item list-group-item-action list-group-item-success" href="#">General Health</a>
  <a class="list-group-item list-group-item-action list-group-item-info" href="#">Nutrition</a>
  <a class="list-group-item list-group-item-action list-group-item-warning" href="#">Pest Control</a>
  <a class="list-group-item list-group-item-action list-group-item-danger" href="#">Vaccinations</a>
</div>

<div class="list-group mb-3">
  <button class="list-group-item list-group-item-action active" type="button">Grooming </button>
  <button class="list-group-item list-group-item-action" type="button">General Health</button>
  <button class="list-group-item list-group-item-action" type="button">Nutrition</button>
  <button class="list-group-item list-group-item-action" type="button">Pest Control</button>
  <button class="list-group-item list-group-item-action" type="button">Vaccinations</button>
</div>
```
