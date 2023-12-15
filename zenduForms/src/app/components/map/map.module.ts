import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,

		AgmCoreModule.forRoot({
			// please get your own API key here:
			// https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
			apiKey: 'AIzaSyC6PADNpyd08SGNmbungf1QirJJ2-iRcNo',
		}),
	],
	declarations: [
		MapComponent
	],
	exports: [
		MapComponent
	],
	bootstrap: [MapComponent],
	providers: []
})
export class MapModule { }