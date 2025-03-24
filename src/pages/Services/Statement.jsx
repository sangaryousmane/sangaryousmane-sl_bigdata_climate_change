import FEE3 from "../../Images/fee3.jpg";
import FEE1 from "../../Images/fee1.jpg";
import FEE2 from "../../Images/fee2.jpg";
import "./Statement.css";

export default function Statement() {
  return (
    <div className="statement-container">
      <div className="statement-header">
        <h1>FEEDING PROGRAM</h1>
        <h3>Mission statement</h3>
        <p className="description">
          Empowering communities by providing nutritious meals to combat hunger,
          nurture health, and inspire hope for a brighter future.
        </p>
      </div>

      <div className="image-grid">
        <div className="image-card">
          <img
            src={FEE3}
            alt="Coastal bridge architecture"
            className="card-image"
          />
        </div>

        <div className="image-card">
          <img
            src={FEE1}
            alt="Forest path with sunbeams"
            className="card-image"
          />
        </div>

        <div className="image-card">
          <img
            src={FEE2}
            alt="Modern office workspace"
            className="card-image"
          />
        </div>
      </div>
    </div>
  );
}
