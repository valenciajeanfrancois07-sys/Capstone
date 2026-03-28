import { useState } from "react";

function EmployeeForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    department: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.position || !formData.department) {
      return;
    }

    onAdd({ ...formData, status: "actif" });

    setFormData({
      name: "",
      position: "",
      department: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nom"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        name="position"
        placeholder="Poste"
        value={formData.position}
        onChange={handleChange}
      />

      <input
        name="department"
        placeholder="Département"
        value={formData.department}
        onChange={handleChange}
      />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default EmployeeForm;