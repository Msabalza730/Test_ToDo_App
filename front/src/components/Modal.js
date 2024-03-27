import React, { Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: {
                title: '',
                description: '',
                completed: false,
                created_at: '', 
                user: ''      
            }
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        const activeItem = {...this.state.activeItem, [name]: value};

        this.setState({activeItem});
    };

    render () {
        const { toggle, onSave } = this.props;

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="todo-title">Title</Label>
                            <Input
                            type="text"
                            id="todo-title"
                            name="title"
                            value={this.state.activeItem.title}
                            onChange={this.handleChange}
                            placeholder='Enter Task Title'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="todo-description">Description</Label>
                            <Input
                            type='text'
                            id='todo-description'
                            name='description'
                            value={this.state.activeItem.description}
                            onChange={this.handleChange}
                            placeholder='Enter Task description'
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                type="checkbox"
                                name='completed'
                                checked={this.state.activeItem.completed}
                                onChange={this.handleChange}
                                />
                                Completed
                            </Label>
                        </FormGroup>
                        {/* Date */}
                        <FormGroup>
                            <Label for="todo-created-at">Created At</Label>
                            <Input
                            type='text'
                            id='todo-created-at'
                            name='created_at'
                            value={this.state.activeItem.created_at}
                            onChange={this.handleChange}
                            placeholder='Enter Task creation date'
                            />
                        </FormGroup>
                        {/* User */}
                        <FormGroup>
                            <Label for="todo-user">User</Label>
                            <Input
                            type='text'
                            id='todo-user'
                            name='user'
                            value={this.state.activeItem.user}
                            onChange={this.handleChange}
                            placeholder='Enter Task user'
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                    color="success"
                    onClick={() => onSave(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}
