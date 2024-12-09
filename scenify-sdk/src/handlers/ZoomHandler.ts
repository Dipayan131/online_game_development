import BaseHandler from "./BaseHandler";
class ZoomHandler extends BaseHandler {
  private element = this.slideRef.current;
  private scale = this.config.scale;
  private index = this.context.slideIndex;
  private slides: any;
  // console.log(this)
  test(data: any) {
    this.slides = data;
    // console.log('slides from zoomhandler', this.slides)
  }

  updateData() {
    console.log("update data called", this.slides);
    this.context.setItem(this.slides);
  }

  zoomIn() {
    this.scale += 0.1;
    this.scale = Math.min(Math.max(0.125, this.scale), 4);
    this.element.style.transition = "transform 0.1s linear";
    this.element.style.transform = `scale(${this.scale})`;
    this.context.setZoomRatio(this.scale);
    // this.updateData()
    // this.context.setSlideIndex(this.index + 1)
    // this.index += 1
    // console.log('slideIndex from context', this.context.slideIndex)
    // this.context.setItem(mockitem)
    console.log("Items from zoomHandlers", this.items);
  }

  zoomOut() {
    this.scale -= 0.1;
    this.scale = Math.min(Math.max(0.125, this.scale), 4);
    this.element.style.transition = "transform 0.1s linear";
    this.element.style.transform = `scale(${this.scale})`;
    this.context.setZoomRatio(this.scale);
    // this.context.setItem(this.slides)
    // this.context.setSlideIndex(this.index - 1)
    // this.index -= 1
    // console.log('slideIndex from context', this.context.slideIndex)
  }

  zoomToOne() {
    this.scale = 1;
    this.scale = Math.min(Math.max(0.125, this.scale), 4);
    this.element.style.transition = "transform 0.1s linear";
    this.element.style.transform = `scale(${this.scale})`;
    this.context.setZoomRatio(this.scale);
  }

  zoomToFit() {
    this.scale = 0.7;
    this.scale = Math.min(Math.max(0.125, this.scale), 4);
    this.element.style.transition = "transform 0.1s linear";
    this.element.style.transform = `scale(${this.scale})`;
    this.context.setZoomRatio(this.scale);
  }

  zoomToRatio(zoomRatio: number) {
    this.scale = zoomRatio;
    this.scale = Math.min(Math.max(0.125, this.scale), 4);
    this.element.style.transition = "transform 0.1s linear";
    this.element.style.transform = `scale(${this.scale})`;
    this.context.setZoomRatio(this.scale);
  }
}

export default ZoomHandler;
