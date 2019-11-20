import * as React from "react";
import { FunctionComponent } from "react";

interface Props {
  items: string[];
  onItemClick: (event: React.MouseEvent, item: string) => void;
  height: number;
  visible: boolean;
}

export const DropdownList: FunctionComponent<Props> = ({
  items,
  onItemClick,
  height,
  visible
}) => {
  // rendering
  return (
    (visible && items.length > 0) 
    ? (
      <div>
        <ul className="select-box__list">
          {items.slice(0, height).map((item, idx) => (
            <li onClick={e => onItemClick(e, item)} key={`${item}${idx}`}>
              <label className="select-box__option">{item}</label>
            </li>
          ))}
        </ul>
      </div>
    )
    : <></>
  );
};
