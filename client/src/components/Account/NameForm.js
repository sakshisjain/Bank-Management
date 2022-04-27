import React from 'react'
import { Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";

const NameForm = (props) => {
  return (
    <Row>
        <Col md="6">
            <Form>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>First Name</Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={props.auth.user.name.split(" ")[0]}
                            onChange={props.onfnamechange}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>Last Name</Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={props.auth.user.name.split(" ")[1]}
                            onChange={props.onlnamechange}
                        />
                    </Col>
                </FormGroup>
            </Form>
        </Col>
        <Col md="6">
            <Form>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>Department</Label>
                    <Col sm={9}>
                    <Input type="select" name="select" id="select" value={props.department} onChange={props.ondeptchange}>
                        <option value="Web Development" >Web Development</option>
                        <option value="System Development">System Development</option>
                        <option value="Sales">Sales</option>
                        <option value="Human Resources">Human Resources</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                <Label className="text-white" for="name" sm={3}>Occupation</Label>
                    <Col sm={9}>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={props.occupation}
                            onChange={props.onoccchange}
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

export default connect(mapStateToProps, {loginUser})(NameForm);
