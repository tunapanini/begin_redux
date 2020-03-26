import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import { CounterActions } from 'store/actionCreators';

class CounterContainer extends Component {
	handleIncrement = () => {
		CounterActions.increment();
	}
	
	handleDecrement = () => {
		CounterActions.decrement();
	}
	
	render() {
		const { handleIncrement, handleDecrement } = this;
		const { number } = this.props;
		
		return (
			<Counter
				onIncrement={handleIncrement}
				onDecrement={handleDecrement}
				number={number}
			/>
		);
	}
}

// component 를 redux 와 연동할 때는 connect 를 사용합니다.
// connect() 의 결과는, component 에 props 를 넣어주는 함수를 반환합니다.
// 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
export default connect(
	// props 값으로 넣어 줄 상태를 정의해줍니다.
	(state) => ({
		number: state.counter.number
	}),
)(CounterContainer);