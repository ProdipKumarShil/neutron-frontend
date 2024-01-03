import eye from "../assets/eye.svg";
import edit from "../assets/pen.svg";
import trash from "../assets/delete.svg";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

const SingleCard = ({ contact }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .put(
        `https://contact-management-navy.vercel.app/contact/updateContact/${contact?._id}`,
        data
      )
      .then((res) => {
        console.log(res)
        if (res.data.status) {
          console.log(res.data.message);
        }
      });
  };

  const handleDelete = (e) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://contact-management-navy.vercel.app/contact/deleteContact/${contact._id}`
          )
          .then((res) => {
            console.log(res);
            Swal.fire({
              title: "Deleted!",
              text: "Your contact has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  return (
    <div className="border p-3 rounded flex flex-col md:flex-row gap-4">
      <img
        className="rounded-full block mx-auto h-32 w-32 object-cover"
        src={contact?.photo}
        alt=""
      />
      <div className="flex items-center w-full">
        <div className="">
          <p className="text-3xl font-bold mb-2">{contact?.name}</p>
          <p>
            Email: <span className="font-bold">{contact?.email}</span>
          </p>
          <p>
            Phone: <span className="font-bold">{contact?.number}</span>
          </p>
          <p>
            Address: <span className="font-bold">{contact?.address}</span>
          </p>
        </div>
        <div className="ms-auto flex flex-col gap-2">
          <img
            onClick={() =>
              document
                .getElementById(`${contact._id}${contact.name}`)
                .showModal()
            }
            className="h-6 w-6 cursor-pointer "
            src={eye}
            alt=""
          />
          <img
            onClick={() =>
              document.getElementById(`${contact._id}`).showModal()
            }
            className="h-6 w-6 cursor-pointer "
            src={edit}
            alt=""
          />
          <img
            onClick={handleDelete}
            className="h-6 w-6 cursor-pointer "
            src={trash}
            alt=""
          />
        </div>
      </div>

      {/* show modal */}
      <dialog id={`${contact._id}${contact.name}`} className="modal">
        <div className="modal-box rounded-sm">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="text-center">
            <img
              className="h-20 w-20 object-cover block rounded-full mx-auto"
              src={contact.photo}
              alt=""
            />
            <p className="text-3xl font-bold text-center mt-4 mb-3">
              {contact.name}
            </p>
            <p>
              Email: <span className="font-bold">{contact?.email}</span>
            </p>
            <p>
              Phone: <span className="font-bold">{contact?.number}</span>
            </p>
            <p>
              Address: <span className="font-bold">{contact?.address}</span>
            </p>
          </div>
        </div>
      </dialog>

      {/* edit modal */}
      <dialog id={`${contact._id}`} className="modal">
        <div className="modal-box rounded-sm">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg mb-4">Edit info</h3>
          <form
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
            action="">
            {/* name */}
            <div>
              <div className="relative text-black">
                <input
                  {...register("name", { required: true })}
                  defaultValue={contact?.name}
                  type="text"
                  id="filled_error"
                  aria-describedby="filled_error_help"
                  className={
                    errors.name
                      ? "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer border-red-600 focus:border-red-600"
                      : `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer`
                  } // border-red-600 focus:border-red-600
                  placeholder="   "
                />
                <label
                  htmlFor="filled_error" // text-red-600
                  className={
                    errors.name
                      ? `text-red-600 absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`
                      : `absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`
                  }>
                  Name
                </label>
              </div>
              {errors.name && (
                <p
                  id="filled_error_help" // text-red-600
                  className={`mt-2 text-xs text-red-600`}>
                  <span className="font-medium">Oh, snapp!</span> Name is
                  required.
                </p>
              )}
            </div>
            {/* email */}
            <div>
              <div className="relative text-black">
                <input
                  {...register("email")}
                  defaultValue={contact?.email}
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
                  {...register("address", { required: true })}
                  defaultValue={contact?.address}
                  type="text"
                  id="filled_error"
                  aria-describedby="filled_error_help"
                  className={
                    errors.address
                      ? "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer border-red-600 focus:border-red-600"
                      : `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer`
                  } // border-red-600 focus:border-red-600
                  placeholder="   "
                />
                <label
                  htmlFor="filled_error" // text-red-600
                  className={
                    errors.address
                      ? `text-red-600 absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`
                      : `absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`
                  }>
                  Address
                </label>
              </div>
              {errors.address && (
                <p
                  id="filled_error_help" // text-red-600
                  className={`mt-2 text-xs text-red-600`}>
                  <span className="font-medium">Oh, snapp!</span> Address is
                  required.
                </p>
              )}
            </div>
            {/* number */}
            <div>
              <div className="relative text-black">
                <input
                  {...register("number", { required: true })}
                  defaultValue={contact?.number}
                  type="number"
                  id="filled_error"
                  aria-describedby="filled_error_help"
                  className={
                    errors.number
                      ? "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer border-red-600 focus:border-red-600"
                      : `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer`
                  } // border-red-600 focus:border-red-600
                  placeholder="   "
                />
                <label
                  htmlFor="filled_error" // text-red-600
                  className={
                    errors.number
                      ? `text-red-600 absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`
                      : `absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`
                  }>
                  Number
                </label>
              </div>
              {errors.number && (
                <p
                  id="filled_error_help" // text-red-600
                  className={`mt-2 text-xs text-red-600`}>
                  <span className="font-medium">Oh, snapp!</span> Number is
                  required.
                </p>
              )}
            </div>
            {/* photo */}
            <div>
              <div className="relative text-black">
                <input
                  {...register("photo", { required: true })}
                  defaultValue={contact?.photo}
                  type="text"
                  id="filled_error"
                  aria-describedby="filled_error_help"
                  className={
                    errors.photo
                      ? "block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer border-red-600 focus:border-red-600"
                      : `block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 border-0 border-b-2 appearance-none focus:outline-none focus:ring-0  peer`
                  } // border-red-600 focus:border-red-600
                  placeholder="   "
                />
                <label
                  htmlFor="filled_error" // text-red-600
                  className={
                    errors.photo
                      ? `text-red-600 absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`
                      : `absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`
                  }>
                  Photo
                </label>
              </div>
              {errors.photo && (
                <p
                  id="filled_error_help" // text-red-600
                  className={`mt-2 text-xs text-red-600`}>
                  <span className="font-medium">Oh, snapp!</span> Photo is
                  required.
                </p>
              )}
            </div>

            <button className="bg-gradient-to-b from-[#15B9B9] to-[#3C1DFF] rounded-lg mt-4 active:scale-95 py-2 px-4 font-bold text-white">
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default SingleCard;
