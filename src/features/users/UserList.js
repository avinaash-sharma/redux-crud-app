import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userDelete } from "./usersSlice";
export default function UserList() {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const handleClick = (id) => {
    if (id) {
      dispatch(
        userDelete({
          id,
        })
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>react-redux-crud-app</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button className="button-primary">Load users</button>
        </div>
        <div className="two columns">
          <Link to="/add-user">
            <button className="button-primary">Add user</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <table className="u-full-width">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, email }, i) => (
              <tr key={i}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                  <button style={{color: 'black', backgroundColor: 'tomato'}} onClick={() => handleClick(id)}><strong>Delete</strong></button>{" "}
                  <Link to={`/edit-user/${id}`}>
                    <button style={{color: 'black', backgroundColor: 'royalblue'}}><strong>Edit</strong></button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
