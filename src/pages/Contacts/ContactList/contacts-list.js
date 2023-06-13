import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import TableContainer from "../../../components/Common/TableContainer";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const ContactsList = () => {
  const [userList, setUserList] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: () => {
          return <input type="checkbox" className="form-check-input" />;
        },
      },
      {
        Header: "Nom",
        accessor: "nom",
        disableFilters: true,
        Cell: ({ value }) => (
          <div className="avatar-xs">
            <span>{value}</span>
          </div>
        ),
      },
      {
        Header: "Prénom",
        accessor: "prenom",
        filterable: true,
      },
      {
        Header: "Email",
        accessor: "email",
        filterable: true,
      },
      {
        Header: "Adresse",
        accessor: "adresse",
        filterable: true,
      },
      {
        Header: "Pays",
        accessor: "pays",
        filterable: true,
      },
      {
        Header: "Actions",
        disableFilters: true,
        Cell: ({ row }) => (
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(row.original._id)}
          >
            Delete
          </button>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    fetch("http://localhost:4000/api/utilisateurs")
      .then((response) => response.json())
      .then((data) => {
        setUserList(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/utilisateurs/${id}`)
      .then((response) => {
        console.log("Contact deleted successfully");
        const updatedUserList = userList.filter((user) => user._id !== id);
        setUserList(updatedUserList);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const keyField = "_id";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={userList}
                    keyField={keyField}
                    isGlobalFilter={true}
                    customPageSize={10}
                    className="custom-header-css"
                    handleDelete={handleDelete}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ContactsList;
