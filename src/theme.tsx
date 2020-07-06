interface ITHEME {
    [key: string]: {
        [key: string]: string | object
        status: {
            [key: string]: string
        }
    }
}


const THEME: ITHEME = {
    fluent: {
        LIGHT_GREY: '#E3EAED',
        BLUE: '#C1E0F2',
        PEACH: '#D4B586',
        SHADOW_BLUE: '#C5D0DA',
        DARK_BROWN: '#28313E',
        LIGHT_BLUE: '#D5E3EF',
        ICON_BLUE: '#2F548B',
        ICON_DARK_BLUE: '#00183C',
        SECOND_BACKGROUND_COLOR: '#F5FAFC', 

        status: {
            online: '#39FF65',
            do_not_disturb: '#F98600'
        }
    }
}

export default THEME