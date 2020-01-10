<!-- .slide: data-state="title" -->
# Bootstrap 4
Alerts

> > Speaker Notes:
Alerts are messages with special contextual styles that are designed to display in great looking boxes. They are optionally dismissed and can have any sort of markup. Let's take a look.

---

## Setting up Alerts

- `alert`
- <p contenteditable>`alert-COLOR`</p>
<small style="line-height: 120%; vertical-align: text-bottom;">
<code style="background:#cce5ff; color:#004085; border: 1px solid #b8daff;">primary</code>
<code style="background:#e7e8ea; color:#464a4e; border: 1px solid #dddfe2;">secondary</code>
<code style="background:#d4edda; color:#155724; border: 1px solid #c3e6cb;">success</code>
<code style="background:#f8d7da; color:#721c24; border: 1px solid #f5c6cb; ">danger</code><br>
<code style="background:#fff3cd; color:#856404; border: 1px solid #ffeeba">warning</code>
<code style="background:#d1ecf1; color:#0c5460; border: 1px solid #bee5eb;">info</code>
<code style="background:#fefefe; color:#818182; border: 1px solid #fdfdfe; ">light</code>
<code style="background:#d6d8d9; color:#1b1e21; border: 1px solid #c6c8ca; ">dark</code>
</small>

> > Speaker Notes:
1. The basic class for creating alerts is of course called alert. It goes on a main container for the content.
2. There's a few contextual color classes you can use.

---

## Alert Content

<ul>
	<li class="fragment">`alert-heading`</li>
	<li class="fragment">`alert-link`</li>
</ul>

> > Speaker Notes:
1. A few classes are available for internal content like alert-heading, though you can fit just about any HTML content inside an alert. Just be aware that's it's really meant for simple content.
1. There is a special class if you want to add links within the alerts as well.

---

## Dismissible Alerts

<ul>
	<li class="fragment">`alert-dismissible fade show`</li>
	<li class="fragment">Add a close button</li>
</ul>

```
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
```
<!-- .element: data-trim="true" contenteditable="true" class="fragment" -->

> > Speaker Notes:
1. If you want to, you can make the alert dismissible, so the user can get rid of the message. You simply add a few classes to the alert. The classes add some padding to the right of the alert to allow a close button to fit.
2. You also need to add a close button to the alert. Here's what that code looks like.


## Conclusion
Alerts are sometimes useful for highlighting important content within a page. It's a bit more flexible than the popovers or tooltips since you can add any type of HTML within them.

```
    <div class="alert alert-info alert-dismissible fade show" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>

    <h4 class="alert-heading">Standard Checkups</h4>
    <p class="mb-1">Our standard checkups offer ultrasounds, x-rays and dental cleanings.</p>
    <a href="#" class="d-block alert-link">More Info</a>
  </div>

```
