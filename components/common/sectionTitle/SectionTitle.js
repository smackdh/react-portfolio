const SectionTitle = (props) =>{

  const {title} = props;
  return(
    <div className='py-10 text-center'>
        <h3 className="py-1 text-5xl dark:text-white">{title}</h3>
        <hr className='w-20 h-1 mx-auto my-6 bg-white rounded dark:text-teal-500'/>
      </div>
  )
}

export default SectionTitle;
