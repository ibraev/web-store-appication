import React, {Component} from 'react';
import './Dishes.css'
import axios from '../../axios-dishes'
import {Button, Col, Form, FormGroup, Input, Label, Modal} from "reactstrap";
import {connect} from "react-redux";
import {createDishes} from "../../store/actions/orderAction";

class Dishes extends Component {
    state = {
        title:'',
        price:'',
        image:'',
        loading: false,
        modal: false
    };

    componentDidMount() {
        this.props.createDishes()
    };


    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }


    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    addDishes = event => {
        event.preventDefault();
        const dish = {
            title: this.state.title,
            price: this.state.price,
            image: this.state.image
    };
        this.setState({loading: true});
        axios.post('dishes.json', dish).then(() => {
        });
        this.setState({modal: false});
    };

    render() {
        const dishesArray = Object.keys(this.props.dishes).map(name => {
            return {...this.props.dishes[name]}
        });

        let dishesForMap = dishesArray.map((dish, key) => {
            return (
                <div className="Dishes_Block" key={key}>
                    <div>
                        <img className='img' src={dish.image} alt="#"/>
                    </div>
                    <div><h4 className="title">{dish.title}</h4></div>
                    <div>
                        <h4 className="price"><b>{dish.price} KGS</b></h4>
                    </div>
                    <div>
                        <Button>Edit</Button>
                    </div>
                    <div>
                        <Button>Delete</Button>
                    </div>

                </div>
            )
        });

        return (
            <div className='container'>
                <div className={'DishesBlock'}>
                    <h1>Dishes</h1>
                </div>
                <div className={'DishesBlock'}>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <Form className={'form'}>
                            <h2 className={'add_text'}>Add new dishes</h2>
                            <FormGroup row>
                                <Label for="title" sm={2}>Title</Label>
                                <Col sm={10}>
                                    <Input
                                        onChange={this.valueChanged}
                                        value={this.state.title}
                                        type="text" name="title"
                                        id="title" placeholder="title" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="price" sm={2}>Price</Label>
                                <Col sm={10}>
                                    <Input
                                        onChange={this.valueChanged}
                                        value={this.state.price}
                                        type="number"
                                        name="price"
                                        id="price"
                                        placeholder="price" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="image" sm={2}>Image</Label>
                                <Col sm={10}>
                                    <Input
                                        onChange={this.valueChanged}
                                        value={this.state.image}
                                        type="text"
                                        name="image" id="image"
                                        placeholder="image" />
                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Col sm={12}>
                                    <Button
                                        onClick={this.addDishes}
                                        type="button"
                                        className="btn btn-primary btn-lg btn-block">
                                        ADD
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal>
                    <button
                        className={'add-dishes'}
                        color="danger"
                        onClick={this.toggle}>{this.props.buttonLabel}Add New Dishes</button>
                </div>
                <div>
                    {dishesForMap}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dishes:state.dishes.dishes
});

const mapDispatchToProps = dispatch => ({
    createDishes: () => dispatch(createDishes())
});

export default connect(mapStateToProps, mapDispatchToProps ) (Dishes);