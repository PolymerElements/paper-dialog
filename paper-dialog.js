import '../polymer/polymer.js';
import { NeonAnimationRunnerBehavior } from '../neon-animation/neon-animation-runner-behavior.js';
import { PaperDialogBehavior } from '../paper-dialog-behavior/paper-dialog-behavior.js';
import '../paper-dialog-behavior/paper-dialog-shared-styles.js';
import { Polymer } from '../polymer/lib/legacy/polymer-fn.js';

Polymer({
  _template: `
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,

  is: 'paper-dialog',

  behaviors: [
    PaperDialogBehavior,
    NeonAnimationRunnerBehavior
  ],

  listeners: {
    'neon-animation-finish': '_onNeonAnimationFinish'
  },

  _renderOpened: function() {
    this.cancelAnimation();
    this.playAnimation('entry');
  },

  _renderClosed: function() {
    this.cancelAnimation();
    this.playAnimation('exit');
  },

  _onNeonAnimationFinish: function() {
    if (this.opened) {
      this._finishRenderOpened();
    } else {
      this._finishRenderClosed();
    }
  }
});
