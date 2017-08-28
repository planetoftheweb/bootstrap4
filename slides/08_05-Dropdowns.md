<!-- .slide: data-state="title" -->
# Bootstrap 4
Dropdowns

>> Speaker Notes:
Dropdowns are common design patterns and in Bootstrap you can create them easily for different components. There are lots of options so, let's take a look.

---

## Dropdown Basics

<ul>
	<li class="fragment">Navs, Tabs, etc.</li>
	<li class="fragment">Button/Nav Trigger</li>
	<li class="fragment">links or buttons</li>
</ul>

>> Speaker Notes:
1. You can use dropdowns in a bunch of components including navs, tabs and buttons. If you've been following along, you've already seen how to work them into navbars, which is actually also how you implement them in navs.
2. You create dropdowns in two parts. You create a button to trigger the dropdown and then create the menu itself. They are tied under a dropdown container that toggles the dropdown menu.
3. For the menu, you can use anchor tag links or buttons.

---

## Dropdown Classes

<ul>
	<li class="fragment">`dropdown`</li>
	<li class="fragment">`dropdown-toggle`</li>
	<li class="fragment">`dropdown-menu`</li>
	<li class="fragment">`dropdown-item`</li>
</ul>

>> Speaker Notes:
1. The classes for a basic dropdown are the dropdown class on the container of both the trigger and the menu.
2. The dropdown toggle class on the button that triggers the menu.
3. Dropdown menu, which is the container for the menu.
4. Dropdown item goes on each individual menu item.

---

## Dropdown Elements

<ul>
	<li class="fragment">`dropdown-header`</li>
	<li class="fragment">`dropdown-divider`</li>
	<li class="fragment">`disabled`</li>
</ul>

>> Speaker Notes:
1. Inside the dropdown, you can add a few elements including a header that's a title to a group of elements in the dropdown.
2. The dropdown divider lets you create a horizontal line to divide groups of elements.
3. Any menu element can also be tagged as disabled.

---

## Dropdown Options

<ul>
	<li class="fragment">`btn-sm` `btn-lg`</li>
	<li class="fragment">`dropup`</li>
	<li class="fragment">`dropdown-menu-right`</li>
	<li class="fragment">`btn-group` `dropdown-toggle-split`</li>
</ul>

>> Speaker Notes:
1. There's a few options that control how things look and work. For example, you can control the size of the buttons just like you can with regular buttons.
2. You can also cause the button to drop upwards instead of downwards witht he dropup class.
3. If you want to align the menu to the right instead of to the left, you can add dropdown-menu-right.
4. Finally, you can create a menu element where the dropdown and button are split. That's a bit more flexible than having just a dropdown since it allows you to choose an option before you submit the button.


## Conclusion
Alerts are sometimes useful for highlighting important content within a page. It's a bit more flexible than the popovers or tooltips since you can add any type of HTML within them.

```
  <div class="dropup mb-3">
    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Services
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Grooming</a>
      <a class="dropdown-item" href="#">General Health</a>
      <a class="dropdown-item" href="#">Nutrition</a>
      <a class="dropdown-item" href="#">Pest Control</a>
      <a class="dropdown-item" href="#">Vaccinations</a>
    </div>
  </div>
```

```
<div class="btn-group mb-3">
    <button type="button" class="btn btn-success">Services</button>
    <button class="btn btn-success dropdown-toggle  dropdown-toggle-split" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Grooming</a>
      <a class="dropdown-item" href="#">General Health</a>
      <a class="dropdown-item" href="#">Nutrition</a>
      <a class="dropdown-item disabled" href="#">Pest Control</a>
      <a class="dropdown-item" href="#">Vaccinations</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Other</a>
    </div>
</div>
```