import React,{useState} from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import ContactForm from './ContactForm';
import NameForm from './NameForm';
import SaveButton from '../Buttons/SaveButton';
import PropTypes from "prop-types";
import { updateuser } from "../../actions/authActions";
import { connect } from "react-redux";

//com1->com2->com3->com4
//store=>variables=>reducers(actions,store ke varible)


const Account=(props)=> {

    const dispatch= useDispatch()
    const auth=useSelector(state=>state.auth)
    const [firstName, setFirstName] = useState(auth.user.name);
    const [lastName, setLastName] = useState("");
    const [department, setDepartment] = useState("Web Development");
    const [occupation, setOccupation] = useState("");
    const [email, setEmail] = useState("");
    const [office, setOffice] = useState("London");
    const [phone, setPhone] = useState("");
    const [room, setRoom] = useState("");
    

    const onSubmit=(e)=>{
        e.preventDefault();
        const userdata={
            name:firstName+" "+lastName,
            department:department,
            occupation:occupation,
            id:auth.user.id,
            office:office,
            phone:phone,
            room:room
        }
        console.log(userdata);
        dispatch(updateuser(userdata));
        
    }
    const onphonechange =(e)=>{
        console.log("phone changed");
        setPhone(e.target.value);
    }
  return (
    <ProfileWrapper>
      <div className="profile-wrapper">
            <div className="header-wrapper">
                 <h6 className="header text-white">Profile</h6>
            </div>
            <Container>
                <Row>
                    <div className="horizontal-line">
                        <h6 className="header text-white mt-3">General information</h6>
                    </div>
                    <Col md="12">
                        <div className="d-flex flex-row my-5">
                            <div className="description-wrapper mr-5">
                                <p className="text-white">Picture</p>
                            </div>
                            <figure className="img-wrapper ml-5">
                                <img className="img-responsive" src="https://via.placeholder.com/150" alt="Profile Pic"/>
                            </figure>
                        </div>
                    </Col>
                </Row>
                    <NameForm 
                        fname={firstName}
                        onfnamechange={(e)=>setFirstName(e.target.value)}
                        lname={lastName}
                        onlnamechange={(e)=>setLastName(e.target.value)}
                        dept={department}
                        ondeptchange={(e)=>setDepartment(e.target.value)}
                        occ={occupation}
                        onoccchange={(e)=>setOccupation(e.target.value)}
                    />
                <Row>
                    <div className="horizontal-line">
                        <h6 className="header text-white mt-3">Contact information</h6>
                    </div>
                </Row>
                    <ContactForm
                        email={email}
                        onemailChange={(e)=>setEmail(e.target.value)}
                        office={office}
                        onofficeChange={(e)=>setOffice(e.target.value)}
                        phone={phone}
                        onphoneChange={onphonechange}
                        room={room}
                        onroomChange={(e)=>setRoom(e.target.value)}
                    />
                <Row className="my-5">
                    <Col md="12">
                    <SaveButton onSubmit={onSubmit}/>
                    </Col>
                </Row>
            </Container>
     </div>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
margin-left: 2rem;
.profile-wrapper {
    width: 70rem;
    height: auto;
    background-color: #3a4149;
    border: 1px solid #000;
}
.header {
    text-align: left;
    font-family: 'Open Sans';
    padding: 1.3rem 1rem 1rem 1rem;

}
.header-wrapper {
    background-color: #343b41;
    border-bottom: 1px solid #000;
}
.horizontal-line {
    border-bottom: 1px solid #fff;
    width: 100%;
}

`;


export default Account;