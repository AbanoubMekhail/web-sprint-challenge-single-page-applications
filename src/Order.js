import { useState, useEffect } from "react"
import axios from "axios";
import * as yup from 'yup';
import schema from './formSchema';






export default function Order() {
    const [disable, setDisable] = useState(true);
    const [errors, setErrors] = useState({
        fullname: '',
        size: '',
        beef: '',
        chicken: '',
        ham: '',
        vegi: '',
        pineapple: '',
    });
    const [formValues, setFormValues] = useState({
        fullname: '',
        size: '',
        beef: false,
        chicken: false,
        ham: false,
        vegi: false,
        pineapple: false,
    });


    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({...errors, [name]: ''}))
        .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }
   

    const change = evt => {
        const { checked, value, name, type } = evt.target;
        const valueToUse = type === 'checkedbox' ? checked : value;
        setFormErrors(name, value)
        setFormValues({ ...formValues, [name]: valueToUse });

    }

    const submit = evt => {
        evt.preventDefault()
        const newOrder = {
            fullname: formValues.fullname.trim(),
            size: formValues.size,
            beef: formValues.beef,
            chicken: formValues.chicken,
            ham: formValues.ham,
            vegi: formValues.vegi,
            pineapple: formValues.pineapple,
            specialtext: formValues.specialtext
        }
        axios.post('https://reqres.in/api/orders', newOrder)
    }



    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisable(!valid));
    },[formValues])


    return (

        <div>
            <>
                <h2>Build your owen pizza</h2>
            </>

            <div style={{ color :'red'}}>
                {errors.fullname}
            </div>

            <form onSubmit={submit} id="pizza-form">
                <>
                    <label> Enter your full name<br />
                        <input
                            value={formValues.fullname}
                            id="name-input"
                            placeholder="Full Name"
                            name="fullname"
                            type="text"
                            onChange={change}
                        />
                    </label><br /></>

                <label>Which size would you prefer?
                    <select onChange={change} value={formValues.size} id="size-dropdown" name="size">
                        <option value=''>Make a choice </option>
                        <option value='1'>Small</option>
                        <option value='2'>Large</option>
                        <option value='3'>Extra Large</option>
                        <option value='4'>Very Extra Large</option>
                    </select>
                </label><br />


                <label>Your choise of topping<br />
                    <label>beef
                        <input onChange={change} checked={formValues.beef} type="checkbox" id="topping" name="beef" /><br />
                    </label>
                    <label>chicken
                        <input onChange={change} checked={formValues.chicken} type="checkbox" id="topping" name="chicken" /><br />
                    </label>
                    <label>ham
                        <input onChange={change} checked={formValues.ham} type="checkbox" id="topping" name="ham" /><br />
                    </label>
                    <label>vegi
                        <input onChange={change} checked={formValues.vegi} type="checkbox" id="topping" name="vegi" /><br />
                    </label>
                    <label>pineapple
                        <input onChange={change} checked={formValues.pineapple} type="checkbox" id="topping" name="pineapple" /><br />
                    </label>
                </label>

                <label> Special instructions<br />
                    <input
                        id="special-text"
                        placeholder="anything else you would like to add? "
                        name="specialtext"
                        type="text"
                        onChange={change}
                    />
                </label><br />

                <>
                    <h5>
                        fullname: {formValues.fullname.trim()},
                        size: {formValues.size},
                        beef: {formValues.beef},
                        chicken: {formValues.chicken},
                        ham: {formValues.ham},
                        vegi: {formValues.vegi},
                        pineapple: {formValues.pineapple},
                        specialtext: {formValues.specialtext}
                    </h5>
                </>


                <label> Add to cart
                    <input disabled={disable}  type="submit" id="order-button" />
                </label>


            </form>
        </div>
    )
}