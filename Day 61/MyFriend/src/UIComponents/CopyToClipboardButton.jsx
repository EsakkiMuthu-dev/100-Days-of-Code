import { Button, Snackbar } from '@mui/material'
import { useState } from 'react'

const CopyToClipboardButton = ({id}) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
      setOpen(true)
      navigator.clipboard.writeText(id);
    }
    
    return (
        <>
          <Button size='small' variant="outlined" onClick={handleClick}>Share</Button>
          <Snackbar
          
            open={open}
            onClose={() => setOpen(false)}
            autoHideDuration={2000}
            message="Copied to clipboard"
          />
        </>
    )
}

export default CopyToClipboardButton;
