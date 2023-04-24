import { useEffect, useState } from "react";
import validator from "validator";
import { Button, Table } from "react-bootstrap";

function Employees() {
  // TODO: Load data from backend service
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error(error));
  }, []);

  const addEmployee = () => {
    // TODO: Add validations
    // Kui id on olemas juba siis ei lase lisada
    const idExists = users.some((user) => user.id === parseInt(id));

    // kui id eksisteerib siis returnib, ehk, rohkem kood edasi ei jookse siit.
    if (idExists) {
      return;
    }

    // splitib name tyhiku pealt ja returnib eesnime ja perekonnanime
    const [firstname, lastname] = name.split(" ");

    const isIdNumber = validator.isNumeric(id);
    const isFirstNameOnlyLetters = validator.isAlpha(firstname);
    const isLastNameStringOnlyLetters = validator.isAlpha(lastname);
    const isEmail = validator.isEmail(email);

    if (
      !isIdNumber ||
      !isFirstNameOnlyLetters ||
      !isEmail ||
      !isLastNameStringOnlyLetters
    ) {
      return;
    }

    // TODO: Add an employee to the table
    // teeb uue user objecti koikide fieldidega
    let newUser = {
      id: id,
      first_name: firstname,
      last_name: lastname,
      email: email,
      avatar: avatar,
    };

    // teeb uue users array kus on koik vanad userid ja newUser
    const newUsers = [...users, newUser];

    // lisab uue userite array state-i
    setUsers(newUsers);

    // Teeb inputit tyhjaks
    setEmail("");
    setId("");
    setName("");
    setAvatar("");
  };

  const deleteEmployee = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div>
      <div className="container">
        <h2 className="mb-4">Employees</h2>
        <Table className="table table-hover table-bordered table-sortable">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              {/* <!-- TODO: Add a column for an avatar --> */}
              <th scope="col">Avatar</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{`${user.first_name} ${user.last_name}`}</td>
                  <td>{user.email}</td>
                  <td>
                    <img
                      src={user.avatar}
                      alt={`${user.first_name} ${user.last_name} avatar`}
                    />
                  </td>
                  <td>
                    <Button
                      onClick={() => deleteEmployee(index)}
                      type="button"
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}

            <tr className="input-row">
              <td>
                <input
                  type="text"
                  placeholder="ID"
                  className="form-control"
                  value={id}
                  onChange={(e) => setId(e.currentTarget.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Avatar URL"
                  className="form-control"
                  value={avatar}
                  onChange={(e) => setAvatar(e.currentTarget.value)}
                />
              </td>
              <td>
                <Button
                  onClick={() => addEmployee()}
                  type="submit"
                  variant="success"
                >
                  Add
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Employees;
