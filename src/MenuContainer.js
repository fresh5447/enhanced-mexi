import React, {Component} from 'react';

const MenuTitle = props => <h1> 🌮 {props.title} 🌮 </h1>;

const MenuList = props => (
  <div>

    {/*.. need to use spiceThrese to filter through
              menu list before we map */

    props.menuItems.filter(item =>
      item.spiceLevel <= props.spiceThresh
    ).map((food, index) => {
      return (
        <div className="food-container" key={index}>
          <h4>🍴 {food.item} </h4>
          <h4> 🌶 spice {food.spiceLevel} </h4>
        </div>
      );
    })}

  </div>
);

const SpiceForm = props => {
  return (
    <div>
      <h3> Enter Spice Desire </h3>
      <input type="number" onChange={(event) => props.updateText(event)} />
    </div>
  );
};



class MenuContainer extends Component {
  state = {
    spiceThresh: 5,
  }

  // if you are passing the function to a child
  // container - you must bind it to THIS component
  textChange = this.textChange.bind(this)

  textChange(event) {
    var getSimpleNums = this.props.restaurantData.menuItems.map(item =>
      item.spiceLevel
    )

    var max = getSimpleNums.reduce(function(a, b) {
      return Math.max(a, b);
    });

    if(event.target.value < max) {
      this.setState({spiceThresh: event.target.value});
    } else {
      alert("num must be less than 10")
    }
  }

  render() {
    console.log(
      `%c ${this.props.restaurantData.title}`,
      'background: #222; color: #bada55; font-size: 22px;',
    );
    return (
      <div className="container">
        <MenuTitle title={this.props.restaurantData.title} />
        <SpiceForm updateText={this.textChange} />
        <MenuList
          spiceThresh={this.state.spiceThresh}
          menuItems={this.props.restaurantData.menuItems}
        />
      </div>
    );
  }
}

export default MenuContainer;
