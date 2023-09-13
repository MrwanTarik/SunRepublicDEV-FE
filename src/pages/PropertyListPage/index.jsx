import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import Button from '../../components/Button';
import { API_URL } from '../../constants/main';
import classes from './styles.module.scss';

export default function PropertyListPage() {
  const [property, setProperty] = useState([]);
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const getProperty = useCallback(async () => {
    try {
      const response = await axios.get(`${API_URL}/property`);

      setProperty(response.data.rows);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const validatePassword = async () => {
    try {
      const response = await axios.post(`${API_URL}/admin/password`, {
        password,
      });

      if (response.data.isValid) {
        setIsPasswordValid(true);
      } else {
        alert('WRONG PASSWORD');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProperty = async (propertyId) => {
    try {
      const response = await axios.delete(`${API_URL}/property/${propertyId}`, {
        headers: {
          password,
        },
      });
      getProperty();
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProperty();
  }, [getProperty]);

  if (!isPasswordValid) {
    return (
      <div className={classes.PropertyListPage}>
        <div className={classes.container}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              validatePassword();
            }}
          >
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <Button onClick={validatePassword}>Proceed</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.PropertyListPage}>
      <div className={classes.container}>
        <ul>
          {property.map((prop) => {
            return (
              <li key={prop.id} onClick={() => deleteProperty(prop.id)}>
                <span>{prop.title}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="4" y="4" width="12" height="12" fill="white" />
                  <path
                    d="M10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0ZM13.9225 12.7442C14.2483 13.07 14.2483 13.5967 13.9225 13.9225C13.76 14.085 13.5467 14.1667 13.3333 14.1667C13.12 14.1667 12.9067 14.085 12.7442 13.9225L10 11.1783L7.25583 13.9225C7.09333 14.085 6.88 14.1667 6.66667 14.1667C6.45333 14.1667 6.24 14.085 6.0775 13.9225C5.75167 13.5967 5.75167 13.07 6.0775 12.7442L8.82167 10L6.0775 7.25583C5.75167 6.93 5.75167 6.40333 6.0775 6.0775C6.40333 5.75167 6.93 5.75167 7.25583 6.0775L10 8.82167L12.7442 6.0775C13.07 5.75167 13.5967 5.75167 13.9225 6.0775C14.2483 6.40333 14.2483 6.93 13.9225 7.25583L11.1783 10L13.9225 12.7442Z"
                    fill="#EF5225"
                  />
                </svg>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
