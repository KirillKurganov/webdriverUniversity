import { BasePopup } from '../../base/basePopup';
import { Button } from '../../controls';

export class WellDonePopup extends BasePopup {
  constructor(selector = '#myModalMoveClick .modal-content') {
    super(selector);
    this.closeButtonSelector = '#myModalMoveClick .modal-footer button';
  }

  get closeButton() {
    return new Button(this.closeButtonSelector);
  }
}
