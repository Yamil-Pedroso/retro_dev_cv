import { useState } from "react";

interface Props {
  name: string;
  parts: string[];
}

const fruitsArr = [
  { name: "apple" },
  { name: "banana" },
  { name: "grapes" },
];

const Practice = () => {
  const initialStates: Props[] = (fruitsArr ?? []).map((f) => ({
    name: f.name,
    parts: [f.name],
  }));

  const [fruits, setFruits] = useState(initialStates);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState(""); // Nuevo estado para el input

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDrop = (targetIndex: number) => {
    if (draggedIndex === null || draggedIndex === targetIndex) return;

    const updatedFruits = [...fruits];
    const draggedFruit = updatedFruits[draggedIndex];
    const targetFruit = updatedFruits[targetIndex];

    const combinedName = `${draggedFruit.name} + ${targetFruit.name}`;
    const combinedParts = [...draggedFruit.parts, ...targetFruit.parts];

    const newFruit = {
      name: combinedName,
      parts: combinedParts,
    };

    const filteredFruits = fruits.filter((_, index) => index !== draggedIndex && index !== targetIndex);
    const newFruits = [...filteredFruits, newFruit];

    setFruits(newFruits);
    setDraggedIndex(null);
  };

  const createBox = () => {
    if (inputValue.trim() === "") return; // No crear si el input está vacío

    const newFruit = {
      name: inputValue,
      parts: [inputValue],
    };

    setFruits((prevFruits) => [...prevFruits, newFruit]);
    setInputValue(""); // Limpiar el input después de crear
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const deleteFruit = (idx: number) => {
    setFruits((prevFruits) => prevFruits.filter((_, index) => index !== idx));
  };

  return (
    <div style={{ backgroundColor: "#2a2a2a", height: "100vh", padding: "20px" }}>
      {fruits.map((fruit, index) => (
        <div
          key={index}
          onClick={() => deleteFruit(index)}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
            width: "200px",
            background: "gray",
            cursor: "pointer"
          }}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => handleDrop(index)}
        >
          {fruit.name}
        </div>
      ))}

      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        placeholder="Escribe el nombre..."
        style={{ marginTop: "20px", padding: "10px", width: "180px" }}
      />
      <button
        onClick={createBox}
        style={{ padding: "10px 20px", marginLeft: "10px", cursor: "pointer" }}
      >
        Crear
      </button>
    </div>
  );
};

export default Practice;
