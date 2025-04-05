import { BaseComponent } from "@/components/base-component";
import headerHtml from "./header-component.html?raw";

class HeaderComponent extends BaseComponent {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();
	}

	protected override get htmlTemplate(): string {
		return headerHtml;
	}
}

customElements.define("header-component", HeaderComponent);
