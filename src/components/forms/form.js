import React from "react";
import './form.css';
import { Formik , ErrorMessage} from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
    fName : Yup.string().required("نام الزامی است"),
    lName : Yup.string().required("نام خانوادگی الزامی است"),
    id : Yup.string().required("کد ملی الزامی است").matches(/^\d{10}$/, 'کد ملی باید ده رقمی باشد'),
    birthday : Yup.string().required("سال تولد الزامی است"),
    address : Yup.string().required("آدرس الزامی است"),
    tel : Yup.string().required("تلفن همراه الزامی است").matches(/^09\d{9}$/, 'شماره تلفن همراه باید 11 رقم باشد'),
    carColor : Yup.string().required("رنگ ماشین الزامی است"),
    // پلاک ماشین
    firstPart : Yup.string().required("این بخش الزامی است").matches(/^\d{2}$/,'این بخش باید یک عدد دو رقمی باشد'),
    secondPart : Yup.string().required("این بخش الزامی است"),
    thirdPart : Yup.string().required("این بخش الزامی است").matches(/^\d{3}$/ , 'این بخش باید یک عدد سه رقمی باشد'),
    fourhtPart : Yup.string().required("این بخش الزامی است").matches(/^\d{2}$/ , 'این بخش باید یک عدد دو رقمی باشد'),
    carType : Yup.string().required("نوع ماشین الزامی است"),
    carModel : Yup.string().required("مدل ماشین الزامی است"),
    password : Yup.string().required("پسورد الزامی است").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@\.\-؟])[A-Za-z\d@\.؟\-]{8,}$/ , 'پسورد باید شامل حداقل یک حرف کوچک و یک حرف بزرگ و یک عدد و یکی از نماد های (@ - _ . ؟) باشد'),
})


const Form = () => {
    return (
        <Formik 
        initialValues = {{
            fName : '',
            lName : '',
            id : '',
            birthday : '',
            address : '',
            tel : '',
            carColor : '',

            // پلاک ماشین
            firstPart : '',
            secondPart : '' ,
            thirdPart : '',
            fourhtPart : '',

            carType : '',
            carModel : '',
            password : '',
        }}

        onSubmit={(values) => {
              console.log(values);
          }}

        validationSchema={schema}

        >
            {({values , error , handleSubmit, handleChange, handleBlur, touched}) => (
                <Form onSubmit={handleSubmit}>

                    <label htmlFor='fName'>نام</label>
                    <input value={values.fName} onBlur={handleBlur} onChange={handleChange} id="fName" name="fName" type="text" />
                    <ErrorMessage name="fName" />

                    <hr/>
                   
                    <label htmlFor='lName'>نام خانوادگی</label>
                    <input value={values.lName} onBlur={handleBlur} onChange={handleChange} id="lName" name="lName" type="text" />
                    <ErrorMessage name="lName" />

                    <hr/>

                    <label htmlFor='id'>کد ملی</label>
                    <input value={values.id.replace(/\D/ , '')} onBlur={handleBlur} onChange={handleChange} id="id" name="id" type="text" />
                    <ErrorMessage name="id" />

                    <hr/>

                    <label htmlFor='birthday'>سال تولد </label>
                    <input value={values.birthday} onBlur={handleBlur} onChange={handleChange} id="birthday" name="birthday" type="date" />
                    <ErrorMessage name="birthday" />

                    <hr/>

                    <label htmlFor='address'>آدرس </label>
                    <input value={values.address} onBlur={handleBlur} onChange={handleChange} id="address" name="address" type="text" />
                    <ErrorMessage name="address" />

                    <hr/>

                    <label htmlFor='tel'>تلفن همراه </label>
                    <input value={values.tel.replace(/\D/ , '')} onBlur={handleBlur} onChange={handleChange} id="tel" name="tel" type="tel" />
                    <ErrorMessage name="tel" />

                    <hr/>

                    <label htmlFor='carColor'>رنگ ماشین </label>
                    <input value={values.carColor} onBlur={handleBlur} onChange={handleChange} id="carColor" name="carColor" type="text" />
                    <ErrorMessage name="carColor" />

                    <hr/>

                    {/* پلاک ماشین */}
                    <div>
                        <input placeholder="22" value={values.firstPart.replace(/\D/ , '')} onBlur={handleBlur} onChange={handleChange}  type="text" name="firstPart" />
                        <ErrorMessage name="firstPart" />

                        <select name="secondPart">
                            <option>الف</option>
                            <option>ب</option>
                            <option>پ</option>
                            <option>ت</option>
                            <option>ث</option>
                            <option>ج</option>
                            <option>چ</option>
                            <option>ح</option>
                            <option>خ</option>
                            <option>د</option>
                            <option>ذ</option>
                            <option>ر</option>
                            <option>ز</option>
                            <option>ژ</option>
                            <option>س</option>
                            <option>ش</option>
                            <option>ص</option>
                            <option>ض</option>
                            <option>ط</option>
                            <option>ظ</option>
                            <option>ع</option>
                            <option>غ</option>
                            <option>ف</option>
                            <option>ق</option>
                            <option>ک</option>
                            <option>گ</option>
                            <option>ل</option>
                            <option>م</option>
                            <option>ن</option>
                            <option>و</option>
                            <option>ه</option>
                            <option>ی</option>
                        </select>

                        <input placeholder="325" value={values.thirdPart.replace(/\D/ , '')} onBlur={handleBlur} onChange={handleChange}  type="text" name="thirdPart" />
                        <ErrorMessage name="thirdPart" />

                        <input placeholder="22" value={values.fourhtPart.replace(/\D/ , '')} onBlur={handleBlur} onChange={handleChange}  type="text" name="fourhtPart" />
                        <ErrorMessage name="fourhtPart" />

                    </div>

                    <hr/>

                    <label htmlFor='carType'>نوع ماشین</label>
                    <input value={values.carType} onBlur={handleBlur} onChange={handleChange} id="carType" name="carType" type="text" />
                    <ErrorMessage name="carType" />

                    <hr/>

                    <label htmlFor='carModel'>مدل ماشین</label>
                    <input value={values.carModel} onBlur={handleBlur} onChange={handleChange} id="fNcarModelame" name="carModel" type="text" />
                    <ErrorMessage name="carModel" />

                    <hr/>

                    <label htmlFor="status"> وضعیت</label>
                    <select id="status">
                        <option>تایید شده </option>
                        <option> رد شده </option>
                        <option> در حال بررسی</option>
                    </select>

                    <hr/>

                    <label htmlFor='password'> پسورد</label>
                    <input value={values.password} onBlur={handleBlur} onChange={handleChange} id="password" name="password" type="text" />
                    <ErrorMessage name="password" />

                    <hr/>

                    <button style={{backgroundColor:'green'}} type="submit" >ثبت اطلاعات کاربر</button>

                </Form>
            )}
        </Formik>
    )
}

export default Form;