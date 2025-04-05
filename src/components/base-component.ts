import tailwind from "@/styles/style.css?inline";

type Options = {
	mode: ShadowRootMode;
};
export class BaseComponent extends HTMLElement {
	enableShadowDom(enabled = true, options: Options = { mode: "open" }) {
		enabled && this.attachShadow({ mode: options.mode });
	}

	render() {
		const baseTemplate = `
      <style>
        ${this.shadowRoot ? tailwind : ""}
        ${this.cssStyles}
      </style>
      ${this.htmlTemplate}
      `;

		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
      ${baseTemplate}
    `;
		} else {
			this.innerHTML = `
      ${baseTemplate}
    `;
		}
	}

	protected get cssStyles(): string {
		return "";
	}

	protected get htmlTemplate(): string {
		return "";
	}
}
