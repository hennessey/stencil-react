import { Component, Prop } from "@stencil/core";

@Component({
  tag: "fancy-button",
  styleUrl: "fancy-button.css",
  shadow: true
})
export class FancyButton {
  @Prop() text: string;

  private button!: HTMLButtonElement;
  private mask!: HTMLDivElement;
  private timerHandle?: number;

  constructor() {
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e: MouseEvent) {
    const buttonRect = this.button.getBoundingClientRect();
    let nextLeft = e.clientX - buttonRect.left;
    let nextTop = e.clientY - buttonRect.top;

    this.mask.style.left = `${nextLeft}px`;
    this.mask.style.top = `${nextTop}px`;
    this.mask.classList.add("active");

    this.timerHandle = setTimeout(() => { 
      this.mask.classList.remove("active");
    }, 450)
  }

  componentDidUnload() {
    if (this.timerHandle || this.timerHandle !== 0) {
      clearTimeout(this.timerHandle)
      this.timerHandle = 0
    }
  }


  render() {
    return (
      <button id="btn" ref={el => this.button = el as HTMLButtonElement} onClick={this.handleClick}>
        <span>{this.text}</span>
        <div id="btn-mask" ref={el => this.mask = el as HTMLDivElement} />
      </button>
    );
  }
}
