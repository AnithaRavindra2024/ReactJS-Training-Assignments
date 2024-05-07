import { useState,useEffect } from "react";
 
import styles from "./Registration.module.css";
 
import axios from "axios";

function Registration() {
    const [user,setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password:'',
        address:''
            })
 
    // define state to maintain the error messages
 
    // define state to maintain the error messages
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        password:'',
        address:''
    });
  
 
    // define useEffect for the email to validate check email can be considered or not
 
    function handleNameChange(e) {
        setUser({
            ...user,
            name: e.target.value
        });
        
    }
 
    function handleEmailChange(e) {
        setUser({
            ...user,
            email: e.target.value
        });
        // verify this email is valid or not
    }
 
    function handlePhoneChange(e) {
 
        setUser({
            ...user,
            phone: e.target.value
        });
    }

    function handleAddressChange(e) {
 
        setUser({
            ...user,
            address: e.target.value
        });
    }

    function handlePasswordChange(e) {
 
        setUser({
            ...user,
            password: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(user);
        //reset the error state.
 
        setErrors({
            name: '',
            email: '',
            phone: '',
            address:'',
            password:'',
        });
 
        // validate the user object
        // if the name field is empty   set the error message name is required
 
        if (user.name === '') {
            // set error message name is required with prevState
 
            setErrors((prevState) => ({
                ...prevState,
                name: 'Name is required',
            }));
 
            //setErrors with out previous state
 
            // setErrors({
            //     ...errors,
            //     name: 'Name is required',
            // });
        }
        // if the email field is empty   set the error message email is required
 
        if (user.email === '') {
            // set error message email is required with prevState
 
            setErrors((prevState) => ({
                ...prevState,
                email: 'Email is required',
            }));
 
             
            setErrors({
                ...errors,
                email: 'Email is required',
            });
        }

        if(user.email !== ''){
            if(!user.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                setErrors((prevState)=>({
                    ...prevState,
                    email:'Email is not valid !!!'
                }));
            }
        }

        if (user.address === '') {
            // set error message email is required with prevState
 
            setErrors((prevState) => ({
                ...prevState,
                email: 'Address is required',
            }));
 
             
            setErrors({
                ...errors,
                email: 'Address is required',
            });
        }

        if (user.password === '') {
           
 
            setErrors((prevState) => ({
                ...prevState,
                password: 'Password is required',
            }));
 
             
            setErrors({
                ...errors,
                password: 'Password is required',
            });
        }

        if(user.password !== ''){
            if(!user.password.match(/^(?=.*\d).{6,20}$/)){
                setErrors((prevState)=>({
                    ...prevState,
                    password:'password is not valid and should be 10 digit',
                }));
            }
        }

        // if the phone field is empty   set the error message phone is required
        if(user.phone === ''){
            setErrors((prevState) => ({
                ...prevState,
                phone: 'Phone is required',
            }));
 
            // setErrors({
            //     ...errors,
            //     phone: 'Phone is required',
            // });
        }

        if(user.phone !== ''){
            if(!user.phone.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)){
                setErrors((prevState)=>({
                    ...prevState,
                    phone:'Phone is not valid !!!',
                }));
            }
        }

        axios.post('http://localhost:5000/api/users',user)
        .then(response=>{
           console.log(response.data);
           
        })
        .catch(error=>{
           console.log(error);
        }) 
    }
        function handleDelete(e) {
            e.preventDefault();
            console.log(user);

            axios.delete(`http://localhost:5000/api/users/${user.name}`)
            .then(response=>{
                console.log(response.data);
                    
             })
             .catch(error=>{
                console.log(error);
             })
            };

            function handelReset(e){
                e.preventDefault();
                console.log(e.target);
            
                setErrors({
                    name:'',
                    email:'',
                    phone:'',
                    password:'',
                   address:''
                });
            
                setUser({
                    name:'',
                    email:'',
                    phone:'',
                    password:'',
                    address:''
                });
            }
        
        
     
    return (
        <form  className={styles.loginForm} onSubmit={handleSubmit} >
            <div>
                <h1>User Registration</h1>
            </div>
        <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                value={user.name}
                onChange={handleNameChange}
               
            />
            {/* if errors contains name as error display it here */}
            {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                className={styles.input}
                value={user.password}
               
                onChange={handlePasswordChange}
               
            />
            {/* if errors contains phone as error display it here */}
            {errors.password && <span className={styles.error}>{errors.password}</span>}
 
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                value={user.email}
                onChange={handleEmailChange }
               
            />
            {/* if errors contains email as error display it here */}
            {errors.email && <span className={styles.error}>{errors.email}</span>}
 
        </div>
        <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>Phone:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.input}
                value={user.phone}
               
                onChange={handlePhoneChange}
               
            />
            {/* if errors contains phone as error display it here */}
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
 
        </div>

        <div className={styles.inputGroup}>
            <label htmlFor="address" className={styles.label}>Address:</label>
            <input
                type="address"
                id="address"
                name="address"
                className={styles.input}
                value={user.address}
               
                onChange={handleAddressChange}
               
            />
            {/* if errors contains phone as error display it here */}
            {errors.address && <span className={styles.error}>{errors.address}</span>}
 
        </div>

        <button type="submit" className={styles.submitButton}>Register User</button>
        <br></br>
        <button type="button" className={styles.submitButton} onClick={handleDelete}>Delete User</button>
        <br></br>
        <button type="button" className={styles.submitButton} onClick={handelReset}>Reset User</button>
    </form>
    );
 
}
export default Registration;