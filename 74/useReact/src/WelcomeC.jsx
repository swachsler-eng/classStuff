import {Component} from 'react'
export default class WelcomeC
    extends Component {
    state = {
        count: 0,
        foo:0
    }
    constructor() { 
        super();
        // setInterval(() => {
        //     this.setState({count: this.state.count + 1})
        // }, 1000)
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count + 1
             })
        }, 1000)

             this.timer = setInterval(() => {
            this.setState({
                foo: this.state.foo - 1
             })
        }, 3000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const {first, last} = this.props
        return (
        <>
        <h1>WelcomeC, {first} {last}!</h1>
                <h2>count is {this.state.count}</h2>
                <h2>foo is {this.state.foo}</h2>
                </>
        );
    }
}