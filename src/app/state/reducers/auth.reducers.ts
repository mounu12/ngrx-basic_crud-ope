import { User } from '../../models/user.model';
import { AuthActionTypes, AuthActions} from '../actions/auth.actions';

export interface authState {

// is a user authenticated?
isAuthenticated: boolean;
// if authenticated, there should be a user object
user: User | null;
// error message
errorMessage: string | null;



}

export const initialState: authState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};


export function loadAuthReducer(state: authState = initialState,action: AuthActions){
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Invalid Credentials'
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}