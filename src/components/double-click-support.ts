export class DoubleClickSupport {
  private timer: any | null = null;
  private delay = 250;
  private prevent = false;

  public handleSingleClick(value: any, parent: any) {
    this.timer = setTimeout(() => {
      if (!this.prevent) {
        parent.$emit('click', value);
      }

      this.prevent = false;
    }, this.delay);
  }

  public handleDoubleClick(value: any, parent: any) {
    clearTimeout(this.timer);

    this.prevent = true;

    parent.$emit('dblclick', value);
  }
}
