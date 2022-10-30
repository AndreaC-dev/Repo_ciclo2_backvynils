import {Band} from './band';
import {Musician} from '../musician/musician';
import { PerformerPrize } from '../prize/performerPrize';

export class BandDetail extends Band {

    musicians?: Array<Musician>;
    performerPrizes?: Array<PerformerPrize>;
  }
