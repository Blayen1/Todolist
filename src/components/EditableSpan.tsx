import React, { useState, ChangeEvent, KeyboardEvent } from "react";

type PropsType = {
  oldTitle: string;
  callBack: (title: string) => void;
};

export const EditableSpan = (props: PropsType) => {
  const [edit, setEdit] = useState(false);
  let [newTitle, setNewTitle] = useState(props.oldTitle);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.charCode === 13) {
        addTask();
    }
}
  const addTask = () => {
    if (newTitle.trim() !== "") {
      props.callBack(newTitle);
    }
  };
  const editHandler = () => {
    setEdit(!edit);
    addTask();
  };

  return edit ? (
    <input
      value={newTitle}
      onBlur={editHandler}
      autoFocus
      onChange={onChangeHandler}
      onKeyPress={onKeyPressHandler}
    />
  ) : (
    <span onDoubleClick={editHandler}>{props.oldTitle}</span>
  );
};
