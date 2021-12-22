import React, { useState, useRef } from 'react'
import FocusLock from 'react-focus-lock'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import Menu from './Menu'

import { useOnClickOutside } from 'hooks'

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = 'main-menu'

  useOnClickOutside(node, () => setOpen(false))

  return (
    <div ref={node}>
      <FocusLock disabled={!open}>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </FocusLock>
    </div>
  )
}

export default BurgerMenu
