import TV from "./TV.js";
import Speaker from "./Speaker.js";
import Controller from "./Controller.js";

let tv = new TV();
let device = new Controller(tv);
device.increaseVolume();
device.decreaseVolume();
device.mute();

let speaker = new Speaker();
device = new Controller(speaker);
device.increaseVolume();
device.decreaseVolume();
device.mute();