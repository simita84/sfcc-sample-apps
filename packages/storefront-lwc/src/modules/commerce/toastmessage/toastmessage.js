/*
    Copyright (c) 2020, salesforce.com, inc.
    All rights reserved.
    SPDX-License-Identifier: BSD-3-Clause
    For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
*/
import { LightningElement, api } from 'lwc';
import { messagehelper } from 'commerce/data';

/**
 * ToastMessage component. Renders toastMessage component
 */
class ToastMessage extends LightningElement {
    @api alertSuccessMessage;

    @api alertFailMessage;

    isVisible = false;
    addToBasketSucceed = false;

    constructor() {
        super();
    }

    updateBasketHandler(toastMessageEvent) {
        const timeToWait = 3000;
        if (toastMessageEvent.detail === 'add-to-basket') {
            this.isVisible = true;
            this.addToBasketSucceed = true;
            messagehelper.setMessageTimeout(this, timeToWait);
        } else if (toastMessageEvent.detail === 'failed-add-to-basket') {
            this.isVisible = true;
            this.addToBasketSucceed = false;
            messagehelper.setMessageTimeout(this, timeToWait);
        }
    }
}

export default ToastMessage;
