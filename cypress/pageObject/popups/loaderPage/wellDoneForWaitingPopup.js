import { BasePopup } from '../../base/basePopup';

export class WellDoneForWaitingPopup extends BasePopup {
  constructor(selector = '#myModalClick .modal-content') {
    super(selector);
  }
}
