/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

import {
  Button,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover, Card, Form, Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, ModalHeader, ModalBody, ModalFooter
} from "reactstrap";
import PropTypes from 'prop-types';

import ReactDatetime from "react-datetime";


// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {

  const [completeData, setCompleteData] = useState(false);
  const [register, setRegister] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = () => setRegister(!register);
  const toggleDrop = () => setDropdownOpen(!dropdownOpen);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });

  const changeState = () => {
    setCompleteData(true)
  }

  const showAlert = () => {
    setRegister(true)
  }
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          {completeData == false ? (
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Bienvenido!</h3>
                  <div className="social-line text-center">
                    <Button
                      className="btn-neutral btn-just-icon mr-1"
                      color="facebook"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button
                      className="btn-neutral btn-just-icon mr-1"
                      color="google"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-neutral btn-just-icon"
                      color="twitter"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                  </div>
                  <div className="register-form">
                    <label>Correo</label>
                    <Input placeholder="Email" type="text" />
                    <label>Contraseña</label>
                    <Input placeholder="Password" type="password" />
                    <Button block className="btn-round" color="danger" onClick={changeState}>
                      Siguiente
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Bienvenido!</h3>
                  <div className="register-form">
                    <Row>
                      <Col>
                        <label>Cédula</label>
                        <Input placeholder="Cédula" type="text" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Nombre</label>
                        <Input placeholder="Nombre" type="text" />
                      </Col>
                      <Col>
                        <label>Apellido</label>
                        <Input placeholder="Apellido" type="text" />
                      </Col>
                    </Row>
                    <Row>

                      <Row style={{ display: 'contents' }}>
                        <Col lg="12">
                          <label>Fecha de Nacimiento</label>
                          <FormGroup>
                            <InputGroup className="date" id="datetimepicker" style={{ color: 'black' }}>
                              <ReactDatetime
                                inputProps={{
                                  placeholder: "Seleccionar Fecha",
                                }}

                              />
                              <InputGroupAddon addonType="append">
                                <InputGroupText>
                                  <span className="glyphicon glyphicon-calendar">
                                    <i aria-hidden={true} className="fa fa-calendar" />
                                  </span>
                                </InputGroupText>
                              </InputGroupAddon>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                    </Row>

                    <Row>
                      <Col>
                        <label>Número</label>
                        <Input placeholder="Número" type="text" />
                      </Col>
                      <Col>
                        <label>Ciudad</label>
                        <Input placeholder="Ciudad" type="text" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <label>Sexo</label>
                        <Dropdown isOpen={dropdownOpen} toggle={toggleDrop} direction={'down'}>
                          <DropdownToggle caret style={{ width: '100%' }}>Sexo</DropdownToggle>
                          <DropdownMenu >
                            <DropdownItem style={{
                              backgroundColor: "rgba(256, 256, 256, 1)",
                            }}>Hombre</DropdownItem>
                            <DropdownItem style={{
                              backgroundColor: "rgba(256, 256, 256, 1)",
                            }}>Mujer</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </Col>
                    </Row>

                    <Button block className="btn-round" color="danger" onClick={showAlert}>
                      Registrar
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          )}
        </Container>
        <Modal isOpen={register} toggle={toggle}>
          <div className="modal-header">
            <button
              aria-label="Close"
              className="close"
              type="button"
              onClick={toggle}
            >
              <span aria-hidden={true}>×</span>
            </button>
            <h5
              className="modal-title text-center"
              id="exampleModalLabel"
            >
              Registro!
            </h5>
          </div>
          <div className="modal-body">
            Ha sido registrado correctamente.
          </div>
          <div className="modal-footer">
            <div className="right-side">
              <Button className="btn-link" color="danger" type="button" onClick={toggle}  >
                Vale
              </Button>
            </div>
          </div>
        </Modal>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Fitness Friends
          </h6>
        </div>
      </div>
    </>
  );
}

RegisterPage.propTypes = {
  direction: PropTypes.string,
};

export default RegisterPage;
