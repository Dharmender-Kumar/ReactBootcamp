import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Item = ({
  item,
  items,
  setItems,
  deleteAlert,
  setIsEditing,
  setEditID,
  setName,
}) => {
  // console.log(item);

  const handleEdit = (idx) => {
    const specification = items.find((i) => i.id === idx);
    setIsEditing(true);
    setEditID(idx);
    setName(specification.title);
  };
  const handleDelete = (idx) => {
    const newItems = items.filter((i) => i.id !== idx);
    setItems(newItems);
    deleteAlert(true, "deleted", "item is deleted");
  };

  return (
    <article className="grocery-item">
      <p className="title">{item.title}</p>
      <div className="btn-container">
        <button
          type="button"
          className="edit-btn"
          onClick={() => handleEdit(item.id)}
        >
          <FaEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => handleDelete(item.id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default Item;
