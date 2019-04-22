<!-- .slide: data-state="title" -->

# Bootstrap 4

Modals

> > Speaker Notes: Modals allow you to show and hide content that is in a card looking element that shows up as an overlay element on top of your page.

---

## Modals

- Button or Link
- `#id` or `data-target`
- `data-toggle="modal"`
- `modal`

> > Speaker Notes:

1. Like with other components, modals have two parts. The trigger, which can be a button or link as well as a piece of content you want to show in the modal.
2. You can use a link or a button and. If you use a link, you'll need to target an ID that you want to use as your modal.
3. The link or the button will need a data-toggle="modal"
4. The content you want to show as a modal needs to have the modal class.

---

## Structural Classes

- `modal-dialog`
- `modal-content`
- `modal-header`
- `modal-body`
- `modal-footer`

> > Speaker Notes:

1. In addition to the modal class, there are some other classes that set up the structure of your modal. modal-dialog is an extra container that is used for some additional spacing.
2. There is another container class called modal-content that you can use for the main content.
3. You can also use an optional header for a title for your modal.
4. The body is where you put in the main content.
5. There is also an optional footer for things like close buttons.

---

## Modal Options

- `modal-title`
- `modal-dialog-centered`
- `data-dismiss="modal"`

> > Speaker Notes:

1. If you are using a title you can use modal-title to identify the title.
2. the data-dismiss modal allows you to have an element that closes the modal.

---

## Modal Sizes

| Size            |  Class   | Max-width |
| --------------- | :------: | :-------: |
| **Small**       | modal-sm |   300px   |
| **Default**     |   none   |   500px   |
| **Large**       | modal-lg |   800px   |
| **Extra Large** | modal-xl |  1140px   |

> > Speaker Notes:

1. If you are using a title you can use modal-title to identify the title.
2. the data-dismiss modal allows you to have an element that closes the modal.

---

## Conclusion

> > Speaker Notes:

```
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#servicesmodal">
  More Info
</button>

<div class="modal fade" id="servicesmodal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Pest Control</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>We offer the latest advances in safe and effective prevention and treatment of fleas, ticks, worms, heart worm, and other parasites..</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Back</button>
      </div>
    </div>
  </div>
</div>
```
