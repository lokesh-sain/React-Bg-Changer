function Button({bgColor,colorName,updateColor}) {

  return (
    <button className="outline-none px-4 py-1 rounded-full text-white" onClick={()=>updateColor(bgColor)}  style={{ backgroundColor: bgColor }}>{colorName}</button>
  )
}

export default Button