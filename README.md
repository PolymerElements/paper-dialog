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
- `<paper-dialog>` uses CSS animation keyframes instead of `neon-animation`, ([see Animations section](#Animations))

### Styling

See the docs for `Polymer.PaperDialogBehavior` for the custom properties available for styling
this element.

### Animations

Set the `entry-animation` and/or `exit-animation` attributes to add an animation when the dialog
is opened or closed. Included in the component are:
- fade-in-animation
- fade-out-animation
- scale-up-animation
- scale-down-animation

These animations are not based on the deprecated `neon-animation` component, and use CSS keyframe animations.
This change reduces code size, and uses the platform. You can implement custom entry/exit animations using
CSS keyframe animations; define the animation keyframes, a CSS class for the animation, and assign the class to the `entry/ext-animation`, e.g.

```html
<style>
  @keyframes appear-from-top {
    0% {
      transform: translateY(-2000px);
      opacity: 0;
    }
    10% {
      opacity: 0.2;
    }
  }

  .appear-from-top {
    animation-name: appear-from-top;
    animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
    animation-duration: 800ms;
  }
</style>

<paper-dialog entry-animation="appear-from-top"
              exit-animation="fade-out-animation">
  <h2>Header</h2>
  <div>Dialog body</div>
</paper-dialog>
```

### Accessibility

See the docs for `Polymer.PaperDialogBehavior` for accessibility features implemented by this
element.

