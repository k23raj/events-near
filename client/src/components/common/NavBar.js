import React from 'react';
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { startRemoveUser } from '../../actions/user'

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logouthandle = () => {
    this.props.dispatch(startRemoveUser())

    if (_.isEmpty(this.props.user)) {
      this.props.history.push('/login')
    }

  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: '#607D8B' }} light expand="md">
          <NavbarBrand href="/" style={{ color: "white" }}>Events</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/*  <NavItem>
                <NavLink href="/components/" style={{color:"white"}}>UserName</NavLink>
    </NavItem> */}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav >
                  {/* <FaUserCircle size="1.80em" color="#C9D4F8"/> */}
                  <span style={{ color: "white" }}>My Account</span>
                </DropdownToggle>

                <DropdownMenu right>
                  {_.isEmpty(this.props.user) ? (
                    <div>
                      <DropdownItem>
                        <Link to="/login"> Login </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="/register">Register </Link>
                      </DropdownItem>
                    </div>
                  ) : (
                      <div>
                        <DropdownItem>
                          <Link to="/account">Account </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to="/regEvents">My Bookings</Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <button onClick={this.logouthandle}>Sign out</button>
                        </DropdownItem>
                      </div>
                    )}

                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(NavBar)