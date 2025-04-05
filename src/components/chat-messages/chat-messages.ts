import { BaseComponent } from "@/components/base-component";
import chatMessagesHtml from "./chat-messages.html?raw";

class ChatMessages extends BaseComponent {
	constructor() {
		super();
	}

	public connectedCallback() {
		this.render();
	}

	protected override get htmlTemplate(): string {
		return chatMessagesHtml;
	}
}

customElements.define("chat-messages", ChatMessages);
