[![Build status](https://travis-ci.org/PolymerElements/paper-dialog.svg?branch=master)](https://travis-ci.org/PolymerElements/paper-dialog)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/PolymerElements/paper-dialog)

## &lt;paper-dialog&gt;

Material design: [Dialogs](https://www.google.com/design/spec/components/dialogs.html)

`<paper-dialog>` is a dialog with Material Design styling and optional animations when it is
opened or closed. It provides styles for a header, content area, and an action area for buttons.
You can use the `<paper-dialog-scrollable>` element (in its own repository) if you need a scrolling
content area. To autofocus a specific child element after opening the dialog, give it the `autofocus`
attribute. See `Polymer.PaperDialogBehavior` and `Polymer.IronOverlayBehavior` for specifics.

For example, the following code implements a dialog with a header, scrolling content area and
buttons. Focus will be given to the `dialog-confirm` button when the dialog is opened.

```html
<paper-dialog>
  <h2>Header</h2>
  <paper-dialog-scrollable>
    Lorem ipsum...
  </paper-dialog-scrollable>
  <div class="buttons">
    <paper-button dialog-dismiss>Cancel</paper-button>
    <paper-button dialog-confirm autofocus>Accept</paper-button>
  </div>
</paper-dialog>
```

### Changes in 2.0
- `paper-dialog-behavior 2.0` styles only direct `h2` and `.buttons` children of the dialog because of how [`::slotted` works](https://developers.google.com/web/fundamentals/primers/shadowdom/?hl=en#stylinglightdom) 
(compound selector will select only top level nodes)
- `neon-animation 2.0` doesn't import the Web Animations polyfill, so you'll have to import it ([see Animations section](#Animations))

### Styling

See the docs for `Polymer.PaperDialogBehavior` for the custom properties available for styling
this element.

### Animations

Animations used to use the neon-animation, however the library has since been @deprecated.

You can still use the set the `entry-animation` and/or `exit-animation` attributes to add an animation when the dialog is opened or closed. You can also create your own animation class.

For example the below the CSS is first declared (this one slides from off screen).  You then point to the animation by selecting the class updating the `entry-animation`.  Note that the
`exit-animation` is fade-out-animation which fades when the dialog is closed.
```html

<style>
  @keyframes keyFrameSlideDownIn {
    0% {
      transform: translateY(-2000px);
      opacity: 0;
    }
    10% {
      opacity: 0.2;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .my-animation {
    transform: translateY(-2000px);
    opacity: 0;
    animation-delay: 0;
    animation-name: keyFrameSlideDownIn;
    animation-iteration-count: 1;
    animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
</style>

<paper-dialog entry-animation="my-animation"
              exit-animation="fade-out-animation">
  <h2>Header</h2>
  <div>Dialog body</div>
</paper-dialog>
```

### Accessibility

See the docs for `Polymer.PaperDialogBehavior` for accessibility features implemented by this
element.


