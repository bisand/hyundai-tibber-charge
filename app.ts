import sourceMapSupport from 'source-map-support';
sourceMapSupport.install();

import Homey from 'homey';

class HyundaiTibberCharge extends Homey.App {
  /**
   * onInit is called when the app is initialized.
   */
  async onInit(): Promise<void> {
    this.log('MyApp has been initialized');
  }
}

module.exports = HyundaiTibberCharge;