import style from "./styles/Stacks.module.css"

export function HorizontalStack({children, className}) {
    return (
        <div className={[style.HorizontalStack].concat(className).join(' ')}>
            {children}
        </div>
    );
}

export function VerticalStack({children, className}){
    return (
        <div className={[style.VerticalStack].concat(className).join(' ')}>
            {children}
        </div>
    );
}

export const ScrollType = {
    Horizontal: style.horizontalScroll,
    Vertical: style.verticalScroll
}

export function ScrollStack({children, scroll, className}) {
    return (
        <div className={[(scroll == ScrollType.Horizontal) ? ScrollType.Horizontal : ScrollType.Vertical].concat(className).join(' ')}>
            {children}
        </div>
    );
}

module.exports = {
    HorizontalStack: HorizontalStack({children}),
    VerticalStack: VerticalStack({children}),
    ScrollStack: ScrollStack({children, scroll})
}