<!-- .slide: data-state="title" -->
# Bootstrap 4
List Groups

> > Speaker Notes:
List groups are a great way to style lists and other elements like buttons and links. There's a lot of markup involve, so let's take a look.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> List Group Classes

<ul>
	<li class="fragment">`list-group` containers</li>
	<li class="fragment">`list-group-item` items</li>
	<li class="fragment">`li` `button` `a`</li>
</ul>

> > Speaker Notes:
1. To create a list group, you start out with a list-group class inside a container, which usually goes inside a DIV or a UL tag.
1. Inside that container, you create a series of elements with list-group-item classes in them.
1. You can create list group items with list items, buttons or anchor tags.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> List Group Styles
<ul>
	<li class="fragment">`active` `disabled`</li>
	<li class="fragment">`list-group-item-action` style</li>
	<li class="fragment"><p contenteditable>Use `list-group-item-COLOR`</p>
		<small style="line-height: 220%; vertical-align: text-bottom;">
			<code style="background:#b8daff; color:#004085;">primary</code>
			<code style="background:#dddfe2; color:#464a4e;">secondary</code>
			<code style="background:#d9edf7; color:#155724;">success</code>
			<code style="background:#fcf8e3; color:#721c24;">danger</code>
			<code style="background:#f2dede; color:#856404;">warning</code>
			<code style="background:#f2dede; color:#0c5460;">info</code>
			<code style="background:#f2dede; color:#818182;">light</code>
			<code style="background:#f2dede; color:#1b1e21;">dark</code>
		</small>
	</li>
</ul>

> > Speaker Notes:
1. In terms of styles, you can use active or disabled styles just like you can with buttons. Note that to make links fully disabled, you may have to use extra javascript. Disabled styles don't work with buttons.
1. If you need to create actionable list items that you want users to click on, you need to use the list-group-item-action class. That adds hover disabled and active states to the items.
1. There are a few light background options you can use with list-group-item and then a color or contextual class.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Adding Badges

<ul>
	<li class="fragment">`badge` classes</li>
	<li class="fragment">`justify-content-between`</li>
</ul>

> > Speaker Notes:
1. It's common to add badges to list groups. You can use the badge and other classes to add these to list groups.
2. For badges to align properly, you can use the justify-content-between flexbox class. As a matter of fact, you can add any sort of element inside a list-group.

## Demo

## Conclusion
List groups can be a handy component to use in limited situations, specially for mobile type apps. Bootstrap provides a really comprehensive group of classes to use with this component.