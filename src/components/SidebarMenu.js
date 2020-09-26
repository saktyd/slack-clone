import React from 'react'
import '../style/SidebarMenu.css'

function SidebarMenu( {Icon, title, style, className} ) {
  return (
    <div className={className ? `${className} sidebarMenu` : 'sidebarMenu'} style={style}>
      {Icon && <Icon/>}
      { title && <span>{title}</span> }
    </div>
  )
}

export default SidebarMenu
