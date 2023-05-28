import TextService from '../../services/TextService';
import { useEffect } from 'react';
import { setText, setError, setRight, setResetError, setInput, setActive, setCurrIndex, setFinished } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

export {
  TextService,
  useEffect,
  setText,
  setError,
  setRight,
  setResetError,
  setInput,
  setActive,
  setCurrIndex,
  setFinished,
  useDispatch,
  useSelector,
  uuidv4
};
