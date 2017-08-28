<!-- .slide: data-state="title" -->
# Bootstrap 4
Adding a Dropdown

>> Speaker Notes:
Although dropdowns are also separate components, I'll show you how to add them to menus in this video, since It's pretty common to add them to menu elements.
  
---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Dropdown Setup
<ul>
	<li class="fragment">`dropdown` to align</li>
	<li class="fragment">`dropdown-toggle` on link</li>
	<li class="fragment">`data-toggle="dropdown"`</li>
</ul>

>> Notes:
1. Dropdown requires a container in order to work. If you're using LIs, then you cna place it on the LI, otherwise, you'll have to add an additional container. This container is used to align the dropdown to the proper item in the navigation.
1. The dropdown toggle class is added on the link in order to get a little triangle to indicate the dropdown.
1. Dropdowns can be activated in one of two ways, through javascript or by using a data attribute called dropdown.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-bars"></i> Dropdown Setup
<ul>
	<li class="fragment">`dropdown-menu`</li>
	<li class="fragment">`dropdown-item`</li>
	<li class="fragment">`id` & aria attributes</li>
</ul>

>> Notes:
1. You build the menu itself with a dropdown menu class on the menu container and a series of links inside the dropdown menu.
1. Each of the dropdown links get a dropdown-item class.
1. You should also add some screen reader classes to make this work well for accessibility devices. You use an ID to tie these together.

# Conclusion
Dropdowns are a bit complicated to set up.

```
  <div class="dropdown">
    <a class="nav-item nav-link dropdown-toggle" id="myDropdown" href="#"
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
    <div class="dropdown-menu" aria-labelledby="myDropdown">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
```