import React,{useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
 } from 'reactstrap';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from 'prop-types';
import Search from '../Modal/Search';
import NotificationDropdown from './NotificationDropdown';
import MessagesDropdown from './MessagesDropdown';
const Navigation = (props)=>{
  const [isOpen,setIsOpen] = useState(false);
  const {user}=props.auth;
  const toggle=()=>{
    setIsOpen(!isOpen);
  }
  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
};
  return (
    <>
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
            <span className="text-white text-uppercase">
               {user.name}
            </span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto d-flex flex-row justify-content-center align-items-center" navbar>
            <NavItem>
                <Search/>
            </NavItem>
            <NavItem>
                <NotificationDropdown/>
            </NavItem>
            <NavItem>
                 <MessagesDropdown/>
            </NavItem>
            <NavItem>
              <NavLink href="/account">
                  <img className="img-fluid rounded-circle mx-3 mb-1" src="https://via.placeholder.com/40" alt="Avatar"/>
              </NavLink>
            </NavItem>
            <NavItem>
                  <Button color="danger" onClick={onLogoutClick}>Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </>
    )
}

// export default Navigation;
// class Navigation extends React.Component {
//     constructor(props) {
//         super(props);

//         this.toggle = this.toggle.bind(this);
//         this.state = {
//           isOpen: false
//         };
//     }
//     toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }
//     onLogoutClick = e => {
//         e.preventDefault();
//         this.props.logoutUser();
//     };
//   render() {
//     const { user } = this.props.auth;
   
//     )
//   }
// }

Navigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logoutUser})(Navigation)