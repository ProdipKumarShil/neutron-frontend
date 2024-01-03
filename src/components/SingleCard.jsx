import eye from '../assets/eye.svg';
import edit from '../assets/pen.svg';
import trash from '../assets/delete.svg'
import axios from 'axios';
import Swal from 'sweetalert2';

const SingleCard = ({contact}) => {
  
  const handleDelete = e => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://contact-management-navy.vercel.app/contact/deleteContact/${contact._id}`)
          .then(res => {
            console.log(res)
            Swal.fire({
              title: "Deleted!",
              text: "Your contact has been deleted.",
              icon: "success"
            });
          })
      }
    });
    
  }
  return (
    <div className='border p-3 rounded flex gap-4'>
      <img className='rounded-full h-32 w-32 object-cover' src={contact?.photo} alt="" />
      <div className="flex items-center w-full">
        <div className="">
          <p className='text-3xl font-bold mb-2'>{contact?.name}</p>
          <p>Email: <span className='font-bold'>{contact?.email}</span></p>
          <p>Phone: <span className='font-bold'>{contact?.number}</span></p>
          <p>Address: <span className='font-bold'>{contact?.address}</span></p>
        </div>
        <div className="ms-auto flex flex-col gap-2">
          <img className='h-6 w-6 cursor-pointer ' src={eye} alt="" />
          <img className='h-6 w-6 cursor-pointer ' src={edit} alt="" />
          <img onClick={handleDelete} className='h-6 w-6 cursor-pointer ' src={trash} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SingleCard