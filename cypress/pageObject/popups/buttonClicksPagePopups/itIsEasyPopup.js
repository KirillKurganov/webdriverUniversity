import { BasePopup } from '../../base/basePopup';
import { Button } from '../../controls';

export class ItIsEasyPopup extends BasePopup {
  constructor(selector = '#myModalJSClick .modal-content') {
    super(selector);
    this.closeButtonSelector = '#myModalJSClick .modal-footer button';
  }

  get closeButton() {
    return new Button(this.closeButtonSelector);
  }
}
