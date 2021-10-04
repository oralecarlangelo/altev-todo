import React from "react";

function App() {
  const data = [
    {
      id: 1,
      name: "Sample Todo",
      description: "Sample Todo Description",
    },
  ];

  const [todos, setTodos] = React.useState(data);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [nameEdit, setNameEdit] = React.useState("");
  const [descriptionEdit, setDescriptionEdit] = React.useState("");

  const [edit, setEdit] = React.useState(0);
  //Component Did Update
  React.useEffect(() => {
    if (edit !== 0) {
      const todo = todos.find((todo) => todo.id === edit);
      setNameEdit(todo.name);
      setDescriptionEdit(todo.description);
    }
  }, [edit]);

  const addTodo = (e, name, description) => {
    e.preventDefault();
    const id = todos[todos.length - 1].id + 1;
    setTodos([...todos, { id, name, description }]);
    setName("");
    setDescription("");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const editTodo = (e, id, name, description) => {
    e.preventDefault();
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.name = name;
        todo.description = description;
      }
      return todo;
    });
    setTodos(newTodos);
    setEdit(0);
  };

  return (
    <div>
      <div className="p-4 border rounded-md m-2">
        <form onSubmit={(e) => addTodo(e, name, description)}>
          <div className="grid grid-cols-3 mb-2">
            <label htmlFor="name" className="mr-2">
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              className="border px-2 py-1 rounded-md col-span-2"
            />
          </div>
          <div className="grid grid-cols-3 mb-2">
            <label htmlFor="description" className="mr-2">
              Description
            </label>
            <input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              className="border px-2 py-1 rounded-md col-span-2"
            />
          </div>
          <div className="grid grid-cols-3">
            <button
              type="submit"
              className="col-span-3 border rounded-md px-2 py-1"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {todos.map(({ id, name, description }, index) => {
        return (
          <div key={index}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{description}</div>
            <button type="button" onClick={() => deleteTodo(id)}>
              Delete
            </button>
            <button type="button" onClick={() => setEdit(id)}>
              Edit
            </button>
            {edit === id && (
              <div>
                <form
                  onSubmit={(e) => editTodo(e, id, nameEdit, descriptionEdit)}
                >
                  <div>
                    <label htmlFor="name-edit">Name</label>
                    <input
                      id="name-edit"
                      value={nameEdit}
                      onChange={(e) => setNameEdit(e.currentTarget.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="description-edit">Description</label>
                    <input
                      id="description-edit"
                      value={descriptionEdit}
                      onChange={(e) =>
                        setDescriptionEdit(e.currentTarget.value)
                      }
                    />
                  </div>
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => setEdit(0)}>
                    Cancel
                  </button>
                </form>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
