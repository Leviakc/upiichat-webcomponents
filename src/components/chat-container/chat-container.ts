import { BaseComponent } from "@/components/base-component";
import "@/components/side-bar";
import "@/components/header-component/header-component";
import "@/components/chat-messages/chat-messages";
import "@/components/chat-input/chat-input";
import chatContainerHtml from "./chat-container.html?raw";
// import { ChatInput } from "@/components/chat-input/chat-input";

// bubbles: true,
// composed: true,
// detail: { text: messageText },
type ChatMessage = {
	bubbles: boolean;
	composed: boolean;
	detail: { text: string };
};

class ChatContainer extends BaseComponent {
	chatInput: HTMLInputElement | null = null;
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();

		this.chatInput = this.querySelector("chat-input");

		if (!this.chatInput) {
			throw new Error("chat-input not found");
		}

		this.chatInput.addEventListener("message-sent", (event: CustomEvent<{detail: string}) => {
			console.log(event);
		});
	}

	protected override get htmlTemplate(): string {
		return chatContainerHtml;
	}
}

customElements.define("chat-container", ChatContainer);
