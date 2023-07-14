import * as yup from 'yup';


const  schema = yup.object().shape({
    fullname: yup.string().required("name must be at least 2 characters").min(2, "name must be at least 2 characters"),
    specialtext: yup.string().trim(),
    beef: yup.boolean(),
    chicken: yup.boolean(),
    ham: yup.boolean(),
    vegi: yup.boolean(),
    pineapple: yup.boolean(),
    size: yup.string().oneOf(['Small', 'Large', 'Extra Large', 'Very Extra Large']) 
    
})
export default schema ;