import { Action } from "../redux/ngrx";

export const incrementadorAction: Action = {
  type: "INCREMENTAR",
};

export const decrementadorAction: Action = {
  type: "DECREMENTAR",
};

export const multiplicadorAction: Action = {
  type: "MULTIPLICAR",
  payload: 10,
};

export const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 10,
};

export const resetAction: Action = {
  type: "RESET",
};
