import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';

const RouteProtector = ({children}) => {
     const navigate = useNavigate();
     const [user] = useAuthState(auth);
     if(user){
         return children;
     }
     else{
         navigate('/login');
     }
};

export default RouteProtector;