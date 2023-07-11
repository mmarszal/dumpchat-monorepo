import { UpperCaseCharacter, LowerCaseCharacter } from "./letters"

export type UserModes = UpperCaseCharacter | LowerCaseCharacter;

export interface User {
  user: string;
  mode: UserModes[];
  real_name: string;
  nick: string;
}