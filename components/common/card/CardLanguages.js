const CardLanguages = (props) => {

  const {icon, name} = props;

  return (
    <div className='flex items-center gap-1'>
                <i class={icon}></i>
                <p className='py-1 text-gray-800'>{name}</p>
    </div>
  )
}

export default CardLanguages;
