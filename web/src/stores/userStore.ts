import { observable, action } from "mobx";
import { FormEvent, createContext } from "react";
import Axios from "axios";

class Store {
  @observable isLoggedIn = false;

  @action.bound
  registerUser = (user: RegisterInput) => async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const { data } = await Axios.post("/user/register", user);
    console.log(data);
  };
}

export default createContext(new Store());
