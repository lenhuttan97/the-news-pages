
export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5
        }
    }
}

export const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}


export const card = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    hoverRight: {
        scale: 1.1, x: 35, zIndex: 100
    },
    hoverLeft: {
        scale: 1.1, x: -35, zIndex: 100
    },
    hoverCenter: {
        scale: 1.1, zIndex: 100
    },
    tap: {
        scale: 0.95
    },
    hidden:{
         opacity: 0 
    },
    show : {
        opacity: 1,
        transition: {
            duration: 1
        }
    }

}

export const button = {
    tap: {
        scale: 0.95
    },
}

