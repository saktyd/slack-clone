import React from 'react'
import '../style/SidebarMenu.css'

function SidebarMenu( {Icon, title, style, className, id} ) {
  return (
    <div className={className ? `${className} sidebarMenu` : 'sidebarMenu'} style={style}>
      {Icon ? <Icon/> : <span className="hastag">#</span>}
      { title && <span>{title}</span> }
    </div>
  )
}

export default SidebarMenu
