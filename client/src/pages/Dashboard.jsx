import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [newEmail, setNewEmail] = useState("");

  const navigate = useNavigate();

  // 🔥 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    navigate("/");
  };

  // 🔥 FETCH USERS
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔥 UPDATE USER
  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/users/${editUser}`,
        { email: newEmail },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Updated successfully");

      await fetchUsers();

      setEditUser(null);
      setNewEmail(""); // 🔥 clear input

    } catch (err) {
      console.log("ERROR:", err.response?.data || err.message);
    }
  };

  // 🔥 DELETE USER (INSIDE COMPONENT)
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );

      if (!confirmDelete) return;

      await API.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("User deleted successfully");

      fetchUsers();

    } catch (err) {
      console.log("DELETE ERROR:", err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <button onClick={handleLogout}>Logout</button>

      {users.length === 0 ? (
        <p>No users</p>
      ) : (
        users.map((u) => (
          <div key={u._id}>
            {u.name} - {u.email}

            <button
              onClick={() => {
                setEditUser(u._id);
                setNewEmail(u.email);
              }}
            >
              Edit
            </button>

            {/* 🔥 DELETE BUTTON */}
            <button onClick={() => handleDelete(u._id)}>
              Delete
            </button>
          </div>
        ))
      )}

      {editUser && (
        <div>
          <input
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;