import React from "react";
import { Todo } from "./Todo";

function EditTodo({ editTodo, todos, ...rest }) {
  const {
    match: {
      params: { id },
    },
    history,
  } = rest;
  React.useEffect(() => {
    if (id !== 0) {
      const todo = todos.find((todo) => todo.id === parseInt(id));
      setNameEdit(todo.name);
      setDescriptionEdit(todo.description);
    }
  }, [id]);

  const onSubmit = (e, id, nameEdit, descriptionEdit) => {
    editTodo(e, id, nameEdit, descriptionEdit);
    history.push("/");
  };

  const [nameEdit, setNameEdit] = React.useState("");
  const [edit, setEdit] = React.useState(0);
  const [descriptionEdit, setDescriptionEdit] = React.useState("");
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e, id, nameEdit, descriptionEdit)}>
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
            onChange={(e) => setDescriptionEdit(e.currentTarget.value)}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setEdit(0)}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditTodo;
