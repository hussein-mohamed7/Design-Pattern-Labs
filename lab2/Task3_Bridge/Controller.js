export default class Controller{
    constructor(device) {
        this.device = device;
    }
    increaseVolume() {
        this.device.increaseVolume();
    }
    decreaseVolume() {
        this.device.decreaseVolume();
    }
    mute() {
        this.device.Mute();
    }
}