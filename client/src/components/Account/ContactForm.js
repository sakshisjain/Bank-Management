import React from 'react'
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Label,Input} from 'reactstrap';
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

const ContactForm = (props) => {
  return (
    <Row className="my-5">
        <Col md="6">
            <Form>
                <FormGroup row>
                <Label className="text-white" for="email" sm={3}>Email</Label>
                    <Col sm={9}>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            value={props.email}
                            onChange={props.onemailChange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>Phone</Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            onChange={props.onphoneChange}
                        />
                    </Col>
                </FormGroup>
            </Form>
        </Col>
        <Col md="6">
            <Form>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>Office location</Label>
                    <Col sm={9}>
                    <Input type="select" name="select" id="select" value={props.office} onChange={props.onofficeChange}>
                        <option value="London">London</option>
                        <option value="Tokyo">Tokyo</option>
                        <option value="San Francisco">San Francisco</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>Room</Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={props.room}
                            onChange={props.onroomChange}
                        />
                    </Col>
                </FormGroup>
            </Form>
        </Col>
    </Row>
  )
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser})(ContactForm);