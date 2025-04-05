import { BaseComponent } from "@/components/base-component";
import sideBarHtml from "./side-bar.html?raw";

class SideBar extends BaseComponent {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
		console.log("SideBar connected");
		console.log(this.shadowRoot);
	}

	protected override get htmlTemplate(): string {
		return sideBarHtml;
	}
}

customElements.define("side-bar", SideBar);
