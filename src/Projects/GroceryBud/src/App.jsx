import React, { useEffect, useState } from "react";
import Item from "./Item";
import Alert from "./Alert";

const getLocalStorage = () => {
  let items = localStorage.getItem("items");
  if (items) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState(getLocalStorage());
  const [editId, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "Please Enter Value");
    } else if (name && isEditing) {
      setItems(
        items.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value Edited Successfully");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setItems([...items, newItem]);
      setName("");
    }
  };
  const handleClear = () => {
    if (items.length > 0) {
      showAlert(true, "danger", "All items Cleared");
      setItems([]);
    } else {
      showAlert(true, "deleted", "Items Already Cleared");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <section className="section-center">
        <form action="" className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} items={items} />
          )}
          <h3>Grocery Bud</h3>

          <div className="form-control">
            <input
              type="text"
              placeholder="eg: water"
              className="grocery"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {items.length > 0 && (
          <div className="grocery-container">
            {items.map((item, index) => {
              return (
                <Item
                  key={item.id}
                  item={item}
                  items={items}
                  setItems={setItems}
                  deleteAlert={showAlert}
                  setIsEditing={setIsEditing}
                  setEditID={setEditID}
                  setName={setName}
                />
              );
            })}
          </div>
        )}

        <button className="clear-btn" onClick={() => handleClear()}>
          Clear Items
        </button>
      </section>
    </>
  );
}

export default App;
