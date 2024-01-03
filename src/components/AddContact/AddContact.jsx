import axios from "axios";
import { useForm } from "react-hook-form";

const AddContact = () => {
  const {register, formState: {errors}, handleSubmit} = useForm()

  const onSubmit = (data) => {
    console.log(data)
    axios.post('https://contact-management-navy.vercel.app/contact/postContact', data)
      .then(res => {
        if(res.data.status){
          console.log(res.data.message)
        }
      })
  }
  return (
    <div className="max-w-screen-xl px-4 mx-auto">
      <div className="mb-4">
        <h1 className="text-4xl font-bold tracking-tight font-grotesk mt-6 mb-2">
          Add Contact
        </h1>
        <p>
          You can add contacts. By clicking submit button you can add new contact.{" "}
        </p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} action="">
            {/* name */}
            <div>
              <div className="relative text-black">
                <input
                  {...register('name', {required: true})}
                  type="text"
                  id="filled_error"
                  aria-describedby="filled_error_help"
                  className={errors.name ? 'block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer border-red-600 focus:border-red-600' : `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer`} // border-red-600 focus:border-red-600
                  placeholder="   "
                />
                <label
                  htmlFor="filled_error" // text-red-600
                  className={errors.name ? `text-red-600 absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto` : `absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}> 
                  Name
                </label>
              </div>
              {
                errors.name && <p
                id="filled_error_help" // text-red-600
                className={`mt-2 text-xs text-red-600`}>
                <span className="font-medium">Oh, snapp!</span> Name is required.
              </p>
              }
            </div>
            {/* email */}
            <div>
              <div className="relative text-black">
                <input
                  {...register('email')}
                  type="email"
                  id="filled_error"
                  aria-describedby="filled_error_help"
                  className={`block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer`} // border-red-600 focus:border-red-600
                  placeholder="   "
                />
                <label
                  htmlFor="filled_error" // text-red-600
                  className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}> 
                  Email
                </label>
              </div>
            </div>
            {/* address */}
            <div>
              <div className="relative text-black">
                <input
                  {...register('address', {required: true})}
                  type="text"
                  id="filled_error"
                  aria-describedby="filled_error_help"
                  className={errors.address ? 'block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer border-red-600 focus:border-red-600' : `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer`} // border-red-600 focus:border-red-600
                  placeholder="   "
                />
                <label
                  htmlFor="filled_error" // text-red-600
                  className={errors.address ? `text-red-600 absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto` : `absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}> 
                  Address
                </label>
              </div>
              {
                errors.address && <p
                id="filled_error_help" // text-red-600
                className={`mt-2 text-xs text-red-600`}>
                <span className="font-medium">Oh, snapp!</span> Address is required.
              </p>
              }
            </div>
            {/* number */}
            <div>
              <div className="relative text-black">
                <input
                  {...register('number', {required: true})}
                  type="number"
                  id="filled_error"
                  aria-describedby="filled_error_help"
                  className={errors.number ? 'block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer border-red-600 focus:border-red-600' : `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer`} // border-red-600 focus:border-red-600
                  placeholder="   "
                />
                <label
                  htmlFor="filled_error" // text-red-600
                  className={errors.number ? `text-red-600 absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto` : `absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}> 
                  Number
                </label>
              </div>
              {
                errors.number && <p
                id="filled_error_help" // text-red-600
                className={`mt-2 text-xs text-red-600`}>
                <span className="font-medium">Oh, snapp!</span> Number is required.
              </p>
              }
            </div>
            {/* photo */}
            <div>
              <div className="relative text-black">
                <input
                  {...register('photo', {required: true})}
                  type="text"
                  id="filled_error"
                  aria-describedby="filled_error_help"
                  className={errors.photo ? 'block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer border-red-600 focus:border-red-600' : `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer`} // border-red-600 focus:border-red-600
                  placeholder="   "
                />
                <label
                  htmlFor="filled_error" // text-red-600
                  className={errors.photo ? `text-red-600 absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto` : `absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}> 
                  Photo
                </label>
              </div>
              {
                errors.photo && <p
                id="filled_error_help" // text-red-600
                className={`mt-2 text-xs text-red-600`}>
                <span className="font-medium">Oh, snapp!</span> Photo is required.
              </p>
              }
            </div>

            <button className="bg-gradient-to-b from-[#15B9B9] to-[#3C1DFF] rounded-lg mt-4 active:scale-95 py-2 px-4 font-bold text-white">Submit</button>
          </form>
    </div>
  )
}

export default AddContact