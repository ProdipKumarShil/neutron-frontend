import eye from '../assets/eye.svg';
import edit from '../assets/pen.svg';
import trash from '../assets/delete.svg'

const SingleCard = ({contact}) => {
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
          <img className='h-6 w-6 cursor-pointer ' src={trash} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SingleCard