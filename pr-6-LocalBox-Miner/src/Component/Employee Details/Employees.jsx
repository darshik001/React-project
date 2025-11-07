import React, { useEffect, useState } from "react";
import { Container, Table, Button, Modal, Form, Image, Row, Col } from "react-bootstrap";;
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import "./Employees.css";

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [showView, setShowView] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [selectedEmp, setSelectedEmp] = useState(null);
    const [editForm, setEditForm] = useState({});

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("empdetails")) || [];
        setEmployees(storedData);
    });

    const handleDelete = (id) => {
        const updated = employees.filter((emp) => emp.id !== id);
        setEmployees(updated);
        localStorage.setItem("empdetails", JSON.stringify(updated));
    };

    const handleView = (emp) => {
        setSelectedEmp(emp);
        setShowView(true);
    };

    const handleEdit = (emp) => {
        setSelectedEmp(emp);
        setEditForm(emp);
        setShowEdit(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditForm({
            ...editForm,
            [name]: value,
        });
    };

    const handleSaveEdit = () => {
        const updated = employees.map((emp) =>
            emp.id === editForm.id ? editForm : emp
        );
        setEmployees(updated);
        localStorage.setItem("empdetails", JSON.stringify(updated));
        setShowEdit(false);
    };

    return (
        <div className="employee-bg">
            <Container className="py-5">
                <h2 className="text-center mb-5 fw-bold text-white">
                    Employee Records
                </h2>

                {employees.length === 0 ? (
                    <p className="text-center text-light">
                        No employee records found. Please add some employees.
                    </p>
                ) : (
                    <div className="glass-table-wrapper p-4 rounded-4 shadow-lg">
                        <div className="table-responsive">
                            <Table hover bordered className="align-middle text-center modern-table">
                                <thead className="table-gradient text-white">
                                    <tr>
                                        <th>ID</th>
                                        <th>Photo</th>
                                        <th>Full Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Department</th>
                                        <th>Role</th>
                                        <th>Experience</th>
                                        <th>Joining Date</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((emp) => (
                                        <tr key={emp.id}>
                                            <td>{emp.id}</td>
                                            <td>
                                                <img
                                                    src={emp.imageUrl || "https://via.placeholder.com/80"}
                                                    alt={emp.fullName}
                                                    className="emp-img"
                                                />
                                            </td>
                                            <td>{emp.fullName}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.phone}</td>
                                            <td className="text-capitalize">{emp.department}</td>
                                            <td className="text-capitalize">{emp.role}</td>
                                            <td>{emp.experienceYears} yrs</td>
                                            <td>{emp.joiningDate}</td>
                                            <td>
                                                <Button
                                                    variant="info"
                                                    size="sm"
                                                    className="me-2"
                                                    onClick={() => handleView(emp)}
                                                >
                                                    <FaEye />
                                                </Button>
                                                <Button
                                                    variant="warning"
                                                    size="sm"
                                                    className="me-2"
                                                    onClick={() => handleEdit(emp)}
                                                >
                                                    <FaEdit />
                                                </Button>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() => handleDelete(emp.id)}
                                                >
                                                    <FaTrashAlt />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                )}

                <Modal
                    show={showView}
                    onHide={() => setShowView(false)}
                    centered
                    className="modern-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Employee Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedEmp && (
                            <div className="text-center">
                                <Image
                                    src={selectedEmp.imageUrl || "https://via.placeholder.com/120"}
                                    roundedCircle
                                    className="mb-3 shadow-sm"
                                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                                />
                                <h5 className="fw-bold">{selectedEmp.fullName}</h5>
                                <p className="text-muted">{selectedEmp.email}</p>
                                <p>{selectedEmp.phone}</p>
                                <hr />
                                <p>
                                    <strong>Department:</strong> {selectedEmp.department}
                                </p>
                                <p>
                                    <strong>Role:</strong> {selectedEmp.role}
                                </p>
                                <p>
                                    <strong>Experience:</strong> {selectedEmp.experienceYears} years
                                </p>
                                <p>
                                    <strong>Joining Date:</strong> {selectedEmp.joiningDate}
                                </p>
                                <p>
                                    <strong>Address:</strong> {selectedEmp.address}
                                </p>
                            </div>
                        )}
                    </Modal.Body>
                </Modal>

                <Modal
                    show={showEdit}
                    onHide={() => setShowEdit(false)}
                    centered
                    className="modern-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {editForm && (
                            <Form>
                                <div className="text-center mb-3">
                                    <Image
                                        src={editForm.imageUrl || "https://via.placeholder.com/120"}
                                        roundedCircle
                                        className="shadow-sm"
                                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                    />
                                </div>
                                <Form.Group className="mb-3">
                                    <Form.Label>Profile Image URL</Form.Label>
                                    <Form.Control
                                        name="imageUrl"
                                        value={editForm.imageUrl}
                                        onChange={handleChange}
                                        placeholder="Enter image URL"
                                    />
                                </Form.Group>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control
                                                name="fullName"
                                                value={editForm.fullName}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                name="email"
                                                value={editForm.email}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control
                                                name="phone"
                                                value={editForm.phone}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Experience (Years)</Form.Label>
                                            <Form.Control
                                                name="experienceYears"
                                                value={editForm.experienceYears}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Department</Form.Label>
                                            <Form.Select
                                                name="department"
                                                value={editForm.department}
                                                onChange={handleChange}
                                            >
                                                <option value="">Choose department</option>
                                                <option value="engineering">Engineering</option>
                                                <option value="hr">Human Resources</option>
                                                <option value="marketing">Marketing</option>
                                                <option value="sales">Sales</option>
                                                <option value="finance">Finance</option>
                                                <option value="design">Design</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Role</Form.Label>
                                            <Form.Select
                                                name="role"
                                                value={editForm.role}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select role</option>
                                                <option value="developer">Developer</option>
                                                <option value="designer">Designer</option>
                                                <option value="manager">Manager</option>
                                                <option value="analyst">Analyst</option>
                                                <option value="intern">Intern</option>
                                                <option value="lead">Team Lead</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3">
                                    <Form.Label>Joining Date</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="joiningDate"
                                        value={editForm.joiningDate}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-4">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={2}
                                        name="address"
                                        value={editForm.address}
                                        onChange={handleChange}
                                    />
                                </Form.Group>

                                <div className="text-center">
                                    <Button variant="success" className="px-4" onClick={handleSaveEdit}>
                                        Save Changes
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Modal.Body>
                </Modal>
            </Container>
        </div>
    );
};

export default Employees;
