import { Controller } from "@hotwired/stimulus";
import Typed from "typed.js";

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Comedy", "Action", "Romance", "SCI-FI"],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
      showCursor: false
    });
  }
}
