import React from "react";
import { Button } from "react-bootstrap";

type KeyAction = (keyId: string) => void;

interface KeyCapProps {
  type: string;
  //  style: string;
  name: string;
  caption: string;
  id: string;
  onClick: KeyAction;
}

export const KeyCap: React.FC<KeyCapProps> = (props) => {
  return (
    <Button
      className="btn-block" /* make the button stretch */
      type={props.type}
      id={props.id}
      name={props.name}
      size="lg"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        props.onClick(e.currentTarget.name)
      }
    >
      {props.caption}
    </Button>
  );
};

KeyCap.defaultProps = {
  type: "button",
  //  style: 'btn-primary',
  name: "Test",
  caption: "Test",
  id: "Test",
  onClick: (keyId: string) => {},
};
