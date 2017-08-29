<!-- .slide: data-state="title" -->
# Bootstrap 4
Basic Typography

> > Speaker Notes:
The stylesheet that comes with Bootstrap overrides default browser behavior. Besides making things look great, it's designed to be easy to override with your own CSS. Let's talk about a few ways that it handles typography.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Typography

<ul>
	<li class="fragment">`Reboot.css` styles</li>
	<li class="fragment">`Rems` vs `Ems`</li></li>
	<li class="fragment">Avoid `margin-top`</li>
	<li class="fragment">`inherit` when possible</li>
</ul>

> > Speaker Notes:
1. There is a special portion at the beginning of the bootstrap styles called reboot.css. It normalizes styles so that they look similar in different devices and browsers. Unlike most other normalizing css templates, it's a bit opinionated.
2. For example, Bootstrap uses Rems, a font measurement system that makes it easier to control both the size of fonts across the entire browser and within individual components. That's going to make it easier to manage your layouts.
3. In CSS, vertical margins can collapse and that makes it confusing to calculate the proper spacing in between different elements. To avoid this, bootstrap adds margin only at the bottom of elements.
4. Bootstrap content uses the inherit css parameter whenever possible. This is important when you write your own css in addition to the bootstrap css because you won't have to work as hard to override styles.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-font"></i> Typography

<ul>
	<li>`border-box` sizing</li>
	<li class="fragment">Native font stacks</li>
	<li class="fragment">Special styles</li>
</ul>

> > Author Notes

1. Another default that is set in bootstrap is that box-sizing, which makes it easier to calculate the width of elements is by default turned to
2. Bootstrap uses Native Font Stacks. That means that the default font in bootstrap isn't set to Helvetica, but it tries to use whatever the current platform defines as the default sans-serif font. For example, on current macs, that would be San Francisco. That yields a smaller css file and again, makes things look great on different devices.
3. Bootstrap has elements that match headlines, style lead paragraphs and take care of common page patterns. This gives you a great looking stylesheet to begin your own designs.

# Demo
Let's take a look at a document that uses bootstrap with some basic HTML code. First, you'll notice that Bootstrap uses sans-serif fonts, which is definitely different than the serif defaults in your browser and it also redefines styles for things like `emphasis` and `strong` as well as other HTML content.

- Headings
  Headings like H1-H6 look great and if you know your typography, you might notice that things seem a bit tighter than normal. That's because bootstrap's approach is to remove the margin from the top of elements. So headings and paragraphs have the margin at the top and bottom removed.

```
<p class="h1">h1. Bootstrap heading</p>
<p class="h2">h2. Bootstrap heading</p>
<p class="h3">h3. Bootstrap heading</p>
<p class="h4">h4. Bootstrap heading</p>
<p class="h5">h5. Bootstrap heading</p>
<p class="h6">h6. Bootstrap heading</p>
```

There are also four display styles for more dramatic typography that look great.

```
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
```

You can specify that certain paragraphs receive a lead style with the lead class.

```
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
```

## Conclusion
Besides making headlines and simple HTML look great, the basic CSS overrides the standard browser CSS to make things look great.
