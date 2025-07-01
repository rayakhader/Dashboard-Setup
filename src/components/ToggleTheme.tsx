import { useEffect, useState } from 'react'
import { Button } from './ui/button'

function ToggleTheme() {
    const [dark, setDark] = useState(false)

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [dark])

    function toggleTheme() {
        setDark(!dark)
    }
    return (
        <Button onClick={toggleTheme}>
            Toggle
        </Button>
    )
}

export default ToggleTheme