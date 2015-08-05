'use strict';

import {initMap} from './maps/initialise';
import {beaches} from './search/suggest';

initMap();
beaches.clearPrefetchCache();
beaches.initialize();