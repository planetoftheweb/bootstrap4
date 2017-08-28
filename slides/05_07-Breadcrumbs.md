<!-- .slide: data-state="title" -->
# Bootstrap 4
Breadcrumbs

>> Speaker Notes:
One of the more simpler components you can use are breadcrumbs. They're sometimes used to indicate where you are in the navigation structure of your site or for secondary navigation.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-chain"></i> Breadcrumb Links

<ul>
	<li class="fragment">`breadcrumb` containers</li>
	<li class="fragment">`breadcrumb-item` items</li>
	<li class="fragment">`active` style</li>
	<li class="fragment">`li` `nav>a`</li>
</ul>

>> Speaker Notes:
1. Like with other components, you need a container class, which in this case is breadcrumbs.
2. And each of the items within the breadcrumbs get a breadcrumb-item class.
3. Typically, the item that is showing the active page in a breadcrumb gets a special class and is not clickable.
4. You can use lists or the nav class with anchor tags.

## Demo

## Conclusion
Breadcrumbs are pretty easy to use and style and when you need one, bootstrap gives you just the right classes to take care of them.

```
<style>
.breadcrumb-item+.breadcrumb-item::before {
	content: ">";
}
</style>

<ol class="breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Exotic Pets</a></li>
  <li class="breadcrumb-item active">Nutrition</li>
</ol>


<nav class="breadcrumb">
  <a class="breadcrumb-item" href="#">Home</a>
  <a class="breadcrumb-item" href="#">Exotic Pets</a>
  <span class="breadcrumb-item active" href="#">Nutrition</span>
</nav>
```