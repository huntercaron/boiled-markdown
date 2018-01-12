import React from 'react'
import styled from 'styled-components'


// styled components
const Container = styled.div`
	height: ${props => props.height};
  width: ${props => props.width};
	margin: auto;
	display: grid;
	background-color: black;
	grid-template-columns: ${props => props.doppler(props.cols)};
	grid-template-rows: ${props => props.doppler(props.rows, "forward")};
`

const Child = styled.div`
	border: 0.1px solid black;
  background-color: white;
`


// component
export default class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.rows = 11;
    this.cols = 8;
  }

  onComponentDidMount() {
    console.log(this.componentContainer.offsetWidth);
  }

  doppler = (num, direction) => {
    let base = "";

    if (direction == "forward") {
      for (let i = 0; i < num; i++) {
        base += " " + Math.pow(1.5, i) + "fr"
      }
    } else {
      for (let i = num; i > 0; i--) {
        base += " " + Math.pow(1.5, i) + "fr"
      }
    }

    return base;
  }

  render() {

    let items = [];
    const amount = 20;

    for (let x = 0; x <= this.rows; x++) {
      for (let y = 0; y <= this.rows; y++) {
        items.push({
          r1: x,
          r2: x+1,
          c1: y,
          c2: y+1
        });
      }
    }

    for (let i = 0; i <= amount; i++) {
      let row = Math.floor(Math.random()*this.rows+1);
      let rLength = Math.floor(Math.random()*(this.rows-row));

      let col = Math.floor(Math.random()*this.cols+1);
      let cLength = Math.floor(Math.random()*(this.cols-col));


    }


    return (
			<Container
        innerRef={container => {this.componentContainer = container}}
        doppler={this.doppler}
        rows={this.rows}
        cols={this.cols}
        width={this.width}
        height={this.props.height}>



				{items.map((item, i) => {

					let itemStyle = {
						backgroundColor: "white",
						opacity: 1,
						gridRow: `${item.r1}/${item.r2}`,
						gridColumn: `${item.c1}/${item.c2}`,
					}

					let imgStyle = {
						width: '100%'
					}

					return (
						<Child style={itemStyle}
							row1={item.r1}
							row2={item.r2}
							col1={item.c1}
							col2={item.c2}
              key={i}
            />
					);
				}



				)}

			</Container>
		)
  }
}
