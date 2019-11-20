import * as React from "react";
import { FunctionComponent, ChangeEvent, useState } from "react";
import { DropdownList } from "./DropdownList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./dropdown.scss";

interface Props {
  items: string[];
  onItemSelect: (selected: string) => void;
  height: number;
}

export const Dropdown: FunctionComponent<Props> = ({
  items,
  onItemSelect,
  height
}) => {
  // state variables
  const [list, setList] = useState<Array<string>>(items);
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);

  // updates the visible dropdown list
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInput(e.target.value);
    setList(items.filter(item => item.indexOf(e.target.value) !== -1));
  };

  // handle selection by mouse from the list
  const handleItemSelected = (e: React.MouseEvent, selected: string) => {
    e.preventDefault();
    onItemSelect(selected);
  };

  // handles input field Enter key press
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input && list.length > 0) onItemSelect(list[0]);
  };

  const handleBlur = () => {
    setTimeout(() => setVisible(false), 300);
  };

  // rendering
  return (
    <div className="wrap">
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            onChange={onInputChange}
            value={input}
            type="text"
            className="searchTerm"
            onFocus={() => setVisible(true)}
            onBlur={handleBlur}
          />
          <FontAwesomeIcon icon={faAngleRight} className="searchIcon" />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="searchItems">
          <DropdownList
            items={list}
            height={height}
            onItemClick={handleItemSelected}
            visible={visible}
          />
        </div>
      </form>
    </div>
  );
};
