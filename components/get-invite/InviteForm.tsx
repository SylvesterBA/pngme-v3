import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { default as countryLabels } from 'react-phone-number-input/locale/en'
import { getCountries } from 'react-phone-number-input/input'

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from 'react';

import styles from '../../styles/pages/GetInvite.module.css'

type InviteFormInputs = {
  firstName: string,
  lastName: string,
  companyName: string,
  phoneNumber: number,
  email: string,
  country: string,
  additionalInformation: string,
}

export const InviteForm = () => {
  const [value, setValue] = useState()
  const { control, register, handleSubmit, watch, formState: { errors } } = useForm<InviteFormInputs>();

  const onSubmit: SubmitHandler<InviteFormInputs> = data => console.log(data);

  console.log(watch("firstName")) // watch input value by passing the name of it

  return (
    <>
      <span className="block font-pngme-helvetica text-2xl px-4 pb-6 pt-10 md:pt-20">Fill out the form</span>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white boxshadow-2 p-4 pt-6 z-10 rounded-lg lg:px-6">
        <div className="flex flex-col py-2">
          <label htmlFor="firstName" className="flex px-4 text-black md:font-bold pb-2 md:px-0 text-sm lg:text-base md:bolder">First name*</label>
          <input
            id="firstName"
            className="border-b-2 pl-4 md:border-2 md:py-3 md:rounded md:text-sm"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span className="text-sm lg:text-lg text-red-600 pl-4">First name is required</span>}
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="lastName" className="flex px-4 text-black md:font-bold pb-2 md:px-0 text-sm lg:text-base">Last name*</label>
          <input
            id="lastName"
            className="border-b-2 pl-4 md:border-2 md:py-3 md:rounded md:text-sm"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <span className="text-sm lg:text-lg text-red-600 pl-4">Last name is required</span>}
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="companyName" className="px-4 text-black md:font-bold pb-2 md:px-0 text-sm lg:text-base">Company</label>
          <input
            id="companyName"
            className="border-b-2 pl-4 md:border-2 md:py-3 md:rounded md:text-sm"
            {...register("companyName", { required: true })}
          />
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="phoneNumber" className="flex px-4 text-black md:font-bold pb-2 md:px-0 text-sm lg:text-base">Phone number*</label>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => <PhoneInput
              {...field}
              defaultCountry="US"
              placeholder="Phone number"
              value={value}
              className={styles.phoneNumber}
            />}
          />

          {errors.phoneNumber && <span className="text-sm lg:text-lg text-red-600 pl-4">Phone number is required</span>}
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="email" className="flex px-4 text-black md:font-bold pb-2 md:px-0 text-sm lg:text-base">Email adress*</label>
          <input
            id="email"
            className={`border-b-2 pl-4 md:border-2 md:py-3 md:rounded md:text-sm`}
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span className="text-sm lg:text-lg text-red-600 pl-4">Email adress is required</span>}
        </div>

        <div className="flex md:hidden flex-col h-14 border-b-2 pl-3 mb-2"> {/* pt-3 pb-5 mb-2 border-b-2 lg:ml-4 */}
          <select defaultValue="Country" className="h-full text-sm" placeholder='Country'> {/* px-4 pb-2 md:px-0 text-sm lg:text-base */}
            <option value="Country" disabled hidden>Country</option>

            {getCountries().map(country => (
              <option key={country} value={country}>
                {countryLabels[country]}
              </option>
            ))}
          </select>

          {errors.country && <span className="text-sm lg:text-lg text-red-600 pl-4">Country is required</span>}
        </div>

        <div className="hidden md:flex flex-col py-2">
          <label htmlFor="country" className="flex px-4 text-black md:font-bold pb-2 md:px-0 text-sm lg:text-base">Country*</label>
          <select defaultValue="select" className="px-0 ml-4 border-2 py-3 rounded pl-4 text-gray-500 md:ml-0" placeholder='select'>
            <option value="select" disabled hidden>
              Please select
            </option>

            {getCountries().map(country => (
              <option key={country} value={country}>
                {countryLabels[country]}
              </option>
            ))}
          </select>
          {errors.country && <span className="text-sm lg:text-lg text-red-600 pl-4">Country is required</span>}
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="business" className="px-4 text-black md:font-bold pb-2 md:px-0 text-sm lg:text-base">Please provide any additonal information on your data needs</label>
          <textarea
            id="business"
            className="border-b-2 pl-4 md:border-2 md:py-3 md:rounded md:text-sm"
            {...register("additionalInformation")}
          />
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