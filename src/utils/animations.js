export const animaciones = () => {
    return {
        initial: {
            scale: 1
        },
        initial_0: {
            scale: 0,
            opacity: 0
        },
        initial_menu: {
            opacity: 0.5,
            scale: 1,
            x: 300,

        },
        scaleUpDown: {
            scale: [1.1, 1, 0.9, 1, 1.1],
            transition: {
                duration: 10,
                repeat: Infinity
            }
        },
        animate_menu: {
            opacity: 1,
            scale: 1,
            x: 1
        },
        exit_menu: {
            opacity: 0.5,
            scale: 1,
            x: 300
        }
    }
}