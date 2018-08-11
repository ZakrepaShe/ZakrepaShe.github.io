class RowComponent extends Component {

  render() {
    if (!this._props.data) {
      return super.render();
    }

    const fields = Object.keys(this._props.data);

    fields.forEach((elKey) => {
      this.addChild(new Component({
          innerText: this._props.data[elKey]
        }, 'td')
      );

    });

    const btnWrap = new Component({}, 'td');
    btnWrap.addChild(new Component({
      innerText: 'delete',
      onClick: e => {
        let row = e.target.parentNode.parentNode;
        row.parentNode.removeChild(row)
      }
    }, 'button'));
    this.addChild(btnWrap);

    return super.render();
  }

}
