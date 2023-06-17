import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import {
  faTwitterSquare,
  faYoutubeSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(faArrowUpRightFromSquare, faTwitterSquare, faYoutubeSquare, faGithubSquare);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
