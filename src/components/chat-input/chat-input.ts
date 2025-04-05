import { BaseComponent } from "@/components/base-component";
// import chat-input from "./test.html?raw";
// import chat-input from "./test.html?raw";
import chatInputHtml from "./chat-input.html?raw";

export class ChatInput extends BaseComponent {
	private inputElement: HTMLTextAreaElement | null = null;
	private sendButton: HTMLButtonElement | null = null;

	constructor() {
		super();
	}

	public connectedCallback() {
		this.render();
		this.inputElement = this.querySelector("textarea");
		this.sendButton = this.querySelector("button");
		console.log("html", chatInputHtml);

		// NOTE: Check why this validation is not working
		// if (!this.inputElement && !this.sendButton) return;
		if (!this.inputElement || !this.sendButton) return;

		this.inputElement.addEventListener("input", () => {
			if (!this.inputElement) return;
			this.inputElement.style.height = "auto";
			this.inputElement.style.height = `${this.inputElement.scrollHeight}px`;
		});

		this.sendButton.addEventListener("click", () => {
			if (this.inputElement?.value.trim() === "") return;
			this.sendMessage();
		});

		this.inputElement.addEventListener("keydown", (event) => {
			if (event.key !== "Enter") return;
			if (!this.inputElement?.value.trim()) {
				event.preventDefault();
				return;
			}

			if (event.shiftKey) {
				return;
			}

			event.preventDefault();
			this.sendMessage();
		});
	}

	protected override get htmlTemplate(): string {
		return chatInputHtml;
	}

	public sendMessage() {
		if (!this.inputElement) return;

		const messageText = this.inputElement.value.trim();
		if (messageText.trim() === "") return;

		this.dispatchEvent(
			new CustomEvent("message-sent", {
				bubbles: true,
				composed: true,
				detail: { text: messageText },
			}),
		);

		// 1. Clear the value
		this.inputElement.value = "";
		this.inputElement.rows = 1;
		this.inputElement.dispatchEvent(new Event("input"));
	}

	public disconnectedCallback() {
		this.inputElement?.removeEventListener("input", () => {});
		this.sendButton?.removeEventListener("click", () => {});
		this.inputElement?.removeEventListener("keydown", () => {});
	}

	protected override get cssStyles(): string {
		return `
            .send-button {
              background-color: #4CAF50;
              color: white;
              border: none;
              border-radius: 50%;
              padding: 10px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              outline: none;
            }
            .send-button:hover {
              background-color: #45a049;
            }
             .send-button svg {
                width: 24px;
                height: 24px;
                stroke: currentColor;
                stroke-width: 2;
                stroke-linecap: round;
                stroke-linejoin: round;
                fill: none;
      `;
	}
}

customElements.define("chat-input", ChatInput);
