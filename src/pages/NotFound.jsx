
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 hover:underline">Go to Dashboard</Link>
    </div>
  );
}

export default NotFound;
