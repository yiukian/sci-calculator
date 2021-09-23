import { types } from '@babel/core';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
//import { useState, useDispatch } from 'react-redux';

export type KeyAction = (
  (() => void) |
  ((para1: string) => void) |
  null
)

interface KeyCapProps {
  type: string;
//  style: string;
  name: string;
  caption: string;
  id: string;
  action: KeyAction;
}

const initialState = {
    para1: '',
    para2: ''
}

export const KeyCap: React.FC<KeyCapProps> = (props) => {

//  const dispatch = useDispatch();
//  const [currentState, setState] = useState(initialState);
  
  return (
    <Button size='lg'>{props.caption}</Button>
  );

/*   return (
    <Button Style={'btn-primary'} onClick={() => props.action(props.capture)}>{props.capture}</Button>
  ); */
};


KeyCap.defaultProps = {
  type: 'Button',
//  style: 'btn-primary',
  name: 'Test',
  caption: 'Test',
  id: 'Test',
  action: (() => {}),
}

