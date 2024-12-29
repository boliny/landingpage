// plugins/fontawesome.js
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Prevents auto-adding of CSS (optional if using custom CSS)
config.autoAddCss = false;

// Add icons to the library
library.add(fas);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
