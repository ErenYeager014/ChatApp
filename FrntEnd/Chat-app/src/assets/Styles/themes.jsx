import { createTheme } from "@mui/material"
const color={
    primary:'#000000'
}
const theme=createTheme({
    palette:{
        primary:{
            main:color.primary
        }
    },
    components:{
        MuiButton:{
            defaultProps:{
                disableTouchRipple:false,
            }
        }
    }
})
export default theme