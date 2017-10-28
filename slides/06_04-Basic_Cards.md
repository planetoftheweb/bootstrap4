<!-- .slide: data-state="title" -->
# Bootstrap 4
Understanding Cards

> > Speaker Notes:
Cards are a new design pattern in Bootstrap 4 that help you layout content into card-like containers that look great. There are a ton of options in terms of the classes you can use, so let's take a look.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Basic Card Class

- `card` container

> > Speaker Notes:
1. All cards require a container and in order to get things going, you need to add the card class to activate the features. Cards have a mild rounded edge at the top.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Card Items

- `card-body`
- `card-text`
- `card-title`
- `card-subtitle`
- `card-link`

> > Speaker Notes:
1. There are a number of classes for specific content like titles, which you can use with headline tags to style card titles
2. You can also use card-subtitle for of course subtitles.
3. Links get their own special links called card-link.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Card Images

- `card-img-top`
- `card-img-bottom`
- `card-img-overlay`

> > Speaker Notes:
1. Images get some special classes. You can use two classes to give images the proper borders. card-img-top gives you an image with round edges at the top.
2. card-img-bottom gives you images with the proper roundness at the bottom. By the way, if you don't want the roundness, you don't use an image class.
3. card-img-overlay is a special class to let you build a card with a background image.

---

<!-- .slide: data-state="hasicon" -->

## <i class="fa fa-list-alt"></i> Colors
- <p contenteditable>`bg-COLOR` for backgrounds</p>
  <small style="line-height: 120%; vertical-align: text-bottom;">
    <code style="background-color:#007bff; color: white;">primary</code>
    <code style="background-color:#868e96; color: white;">secondary</code>
    <code style="background-color:#28a745; color: white;">success</code>
    <code style="background-color:#dc3545; color: white;">danger</code>
    <code style="background-color:#ffc107; color: white;">warning</code>
    <code style="background-color:#17a2b8; color: white;">info</code>
    <code style="background-color:#f8f9fa; color: white; background-color:gray;">light</code>
    <code style="background-color:#343a40; color: white;">dark</code>
    <code style="background-color:#fff; border: 1px solid black; color: black;">white</code>
  </small>
- <p contenteditable>`border-COLOR` for outlines</p>
<small style="line-height: 120%; vertical-align: text-bottom;">
  <code style="background: transparent; border: 1px solid #007bff; color: #888;">primary</code>
  <code style="background: transparent; border: 1px solid #868e96; color: #888;">secondary</code>
  <code style="background: transparent; border: 1px solid #28a745; color: #888;">success</code>
  <code style="background: transparent; border: 1px solid #dc3545; color: #888;">danger</code>
  <code style="background: transparent; border: 1px solid #ffc107; color: #888;">warning</code>
  <code style="background: transparent; border: 1px solid #17a2b8; color: #888;">info</code>
  <code style="background: transparent; border: 1px solid #f8f9fa; color: #888;">light</code>
  <code style="background: transparent; border: 1px solid #343a40; color: #888;">dark</code>
</small>
- <p contenteditable>`text-COLOR` for text</p>
  <small style="line-height: 120%; vertical-align: text-bottom;">
    <code style="color:#007bff">primary</code>
    <code style="color:#868e96">secondary</code>
    <code style="color:#28a745">success</code>
    <code style="color:#dc3545">danger</code>
    <code style="color:#ffc107">warning</code>
    <code style="color:#17a2b8">info</code>
    <code style="color:#f8f9fa; background-color:gray;">light</code>
    <code style="color:#343a40">dark</code>
  </small>

> > Speaker Notes:
1. Images get some special classes. You can use two classes to give images the proper borders. card-img-top gives you an image with round edges at the top.
2. card-img-bottom gives you images with the proper roundness at the bottom. By the way, if you don't want the roundness, you don't use an image class.
3. card-img-overlay is a special class to let you build a card with a background image.


## Conclusion
List groups can be a handy component to use in limited situations, specially for mobile type apps. Bootstrap provides a really comprehensive group of classes to use with this component.
