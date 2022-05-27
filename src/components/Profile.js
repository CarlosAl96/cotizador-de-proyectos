import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, loading, logout } = useAuth();

  const naviagte = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      naviagte("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const createProject = () => {
    naviagte("/project");
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="w-full max-w-xs m-auto">
      <div className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <span className="block text-white font-bold mt-2">
            Welcome to project quote!
          </span>
          {user && (
            <span className="block text-white text-sm font-bold mt-2">
              {user.email}
            </span>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={createProject}
            className="bg-gray-400 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
          >
            Create New Project
          </button>
        </div>

        <div className="mb-4">
          <button
            onClick={handleLogout}
            className="bg-gray-400 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
