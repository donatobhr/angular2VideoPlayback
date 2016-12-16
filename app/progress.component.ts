import {Component} from '@angular/core';

@Component({
    selector: 'video-progress',
    template: `
                <div id="progressMeterFull">
                    <div id="progressMeter"></div>
                </div>
                <div id="thumbScrubber"></div>
    `
})

export class ProgressComponent{
    constructor(){}
}