import React, { component, Component } from 'react';

class MyComponent extends Component {
    render () {
        return (
            <div>
                {/*나의 새롭고 멋진 컴포넌트*/}
                안녕하세요, 제이름은 { this.props.name } 입니다.
            </div>
        )
    }
}

export default MyComponent;