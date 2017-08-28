<!-- .slide: data-state="title" -->
# Bootstrap 4
Collapse & Accordions

>> Speaker Notes:
There are two related components that allow you to show or hide html content. Collapse is the simplest, which lets you show or hide content on click. Accordions are similar, but are part of a bigger group. When one item shows, another hides. Let's take a look.
---

## Collapse

<ul>
	<li class="fragment">Link or Button</li>
	<li class="fragment">`data-toggle="collapse"`</li>
	<li class="fragment">`#id` or `data-target`</li>
	<li class="fragment">`collapse` class</li>
</ul>

>> Speaker Notes:
1. You can use dropdowns in a bunch of components including navs, tabs and buttons. If you've been following along, you've already seen how to work them into navbars, which is actually also how you implement them in navs.
2. You create dropdowns in two parts. You create a button to trigger the dropdown and then create the menu itself. They are tied under a dropdown container that toggles the dropdown menu.
3. For the menu, you can use anchor tag links or buttons.

---

## Accordion

<ul>
	<li class="fragment">Requires container</li>
	<li class="fragment">`show` class once</li>
	<li class="fragment">`dropdown-menu`</li>
	<li class="fragment">Use `card`</li>
</ul>

>> Speaker Notes:
1. a


## Conclusion
Collapse and accordions are pretty useful in some instances where you need to control the display of elements and you have limited space.

```
<button class="btn btn-primary mt-3" data-toggle="collapse" 
  data-targe="#pestcontrol" aria-expanded="Link to Pest Control">
  Pest Control
</button>

<div id="pestcontrol" class="collapse mt-3">
  We offer the latest advances in safe and effective prevention and treatment of fleas, ticks, worms, heart worm, and other parasites.
</div>

```

```
 <div id="accordion" role="tablist" aria-multiselectable="true">

  <div class="card">

    <div class="card-header" role="tab" id="groomingheading">
      <h5 class="mb-0">
        <a data-toggle="collapse" data-parent="#accordion" href="#grooming"
          aria-expanded="true" aria-controls="grooming">
          Grooming
        </a>
      </h5>
    </div><!-- card header -->

    <div id="grooming" class="collapse show" 
      role="tabpanel" aria-labelledby="groomingheading">
      <div class="card-block">
        <p>Our therapeutic grooming treatments help battle fleas, allergic dermatitis, and other challenging skin conditions.</p>
      </div>
    </div><!-- collapse -->

  </div><!-- card -->

  <div class="card">

    <div class="card-header" role="tab" id="generalhealthheading">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#generalhealth"
          aria-expanded="false" aria-controls="generalhealth">
          General Health
        </a>
      </h5>
    </div><!-- card header -->

    <div id="generalhealth" class="collapse" role="tabpanel" aria-labelledby="generalhealthheading">
      <div class="card-block">
        <p>Wellness and senior exams, ultrasound, x-ray, and dental cleanings are just a few of our general health services.</p>
      </div>
    </div><!-- card collapse -->

  </div><!-- card -->

  <div class="card">

    <div class="card-header" role="tab" id="nutritionheading">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#nutrition"
          aria-expanded="false" aria-controls="nutrition">
          Nutrition
        </a>
      </h5>
    </div><!-- card header -->

    <div id="nutrition" class="collapse" role="tabpanel" aria-labelledby="nutritionheading">
      <div class="card-block">
        <p>Let our nutrition experts review your pet's diet and prescribe a custom nutrition plan for optimum health and disease prevention.</p>
      </div>
    </div><!-- collapse -->

  </div><!-- card -->

</div><!-- accordion -->```

