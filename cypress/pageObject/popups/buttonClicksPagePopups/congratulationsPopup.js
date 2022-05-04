import { BasePopup } from '../../base/basePopup';
import { Button } from '../../controls';

export class CongratulationsPopup extends BasePopup {
  constructor(selector = '.modal-dialog .modal-content') {
    super(selector);
    this.closeButtonSelector = '#myModalClick .modal-footer button';
  }

  get closeButton() {
    return new Button(this.closeButtonSelector);
  }
}
