import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { default as countryLabels } from 'react-phone-number-input/locale/en'
import { getCountries } from 'react-phone-number-input/input'

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react';

type InviteFormInputs = {
  firstName: string,
  lastName: string,
  companyName: string,
  phoneNumber: number,
  email: string,
  country: string,
  business: string,
  businessDescription: string,
}

export const InviteForm = () => {
  const [value, setValue] = useState()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<InviteFormInputs>();

  const onSubmit: SubmitHandler<InviteFormInputs> = data => console.log(data);

  console.log(watch("firstName")) // watch input value by passing the name of it

  return (
    <>
      <span className="block font-pngme-helvetica text-2xl px-4 pb-6 pt-10 lg:pt-20">Fill out the form</span>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white boxshadow-2 p-4 pt-6 z-10 rounded-lg lg:px-10">
        <div className="flex flex-col py-2">
          <label htmlFor="firstName" className="flex px-4">First name<span className="hidden lg:block">*</span></label>
          <input
            id="firstName"
            className="border-b-2 pl-4 lg:border-2 lg:py-2 lg:ml-4 lg:rounded-lg"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>First name is required</span>}
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="lastName" className="flex px-4">Last name<span className="hidden lg:block">*</span></label>
          <input
            id="lastName"
            className="border-b-2 pl-4 lg:border-2 lg:py-2 lg:ml-4 lg:rounded-lg"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span>Last name is required</span>}
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="companyName" className="px-4">Company name</label>
          <input
            id="companyName"
            className="border-b-2 pl-4 lg:border-2 lg:py-2 lg:ml-4 lg:rounded-lg"
            {...register("companyName", { required: true })}
          />
          {errors.companyName && <span>Company name is required</span>}
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="phoneNumber" className="flex px-4">Phone number<span className="hidden lg:block">*</span></label>
          {/* <PhoneInput
            defaultCountry="US"
            placeholder=""
            value={value}
            onChange={setValue}
            // {...register("phoneNumber", { required: true })}
          /> */}

          <input
            id="phoneNumber"
            type="number"
            className="border-b-2 pl-4 lg:border-2 lg:py-2 lg:ml-4 lg:rounded-lg"
            {...register("phoneNumber", { required: true })}
          />
          {errors.phoneNumber && <span>Phone number is required</span>}
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="email" className="flex px-4">Email adress<span className="hidden lg:block">*</span></label>
          <input
            id="email"
            className="border-b-2 pl-4 lg:border-2 lg:py-2 lg:ml-4 lg:rounded-lg"
            {...register("email", { required: true })}
          />
          {errors.email && <span>Email adress is required</span>}
        </div>

        <div className="flex lg:hidden flex-col pt-3 pb-5 mb-2 border-b-2 lg:ml-4">
          <select defaultValue="Country" className="px-4" placeholder='Country'>
            <option value="Country" disabled hidden>Country</option>

            {getCountries().map(country => (
              <option key={country} value={country}>
                {countryLabels[country]}
              </option>
            ))}
          </select>

          {errors.country && <span>Country is required</span>}
        </div>

        <div className="hidden lg:flex flex-col py-2">
          <label htmlFor="country" className="px-4">Country</label>
          <select defaultValue="select" className="px-0 ml-4 border-2 py-3 rounded-lg pl-4 text-gray-500" placeholder='select'>
            <option value="select" disabled hidden>
              Please select
            </option>

            {getCountries().map(country => (
              <option key={country} value={country}>
                {countryLabels[country]}
              </option>
            ))}
          </select>
          
          {/* <input
            id="country"
            className="border-b-2 pl-4"
            {...register("country", { required: true })}
          /> */}
          {errors.country && <span>Country is required</span>}
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="business" className="px-4">What business are you?</label>
          <input
            id="business"
            className="border-b-2 pl-4 lg:border-2 lg:py-2 lg:ml-4 lg:rounded-lg"
            {...register("business", { required: true })}
          />
          {errors.business && <span>Business is required</span>}
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="businessDescription" className="px-4">Please describe your business and what the debt facility will be used for?</label>
          <input
            id="businessDescription"
            className="border-b-2 pl-4 lg:border-2 lg:py-2 lg:ml-4 lg:rounded-lg"
            {...register("businessDescription", { required: true })}
          />
          {errors.businessDescription && <span>Business description is required</span>}
        </div>


        <button type="submit" className="bg-primary-pink text-white py-3 px-10 mt-8 mb-6 boxshadow rounded-full w-full text-lg">Submit</button>

        <div className="pb-6 text-lg text-body-gray-dark">
          By creating an account you agree to the
          <a href="" className="text-primary-pink"> terms of use </a>
          and our
          <a href="" className="text-primary-pink"> Privacy Policy </a>
          .
        </div>
      </form>
    </>
  )
}