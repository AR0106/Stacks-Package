import style from "./styles/Stacks.module.css"

export function HorizontalStack({children}) {
    return (
        <div className={style.HorizontalStack}>
            {children}
        </div>
    );
}

export function VerticalStack({children}){
    return (
        <div className={style.VerticalStack}>
            {children}
        </div>
    );
}

export const ScrollType = {
    Horizontal: style.horizontalScroll,
    Vertical: style.verticalScroll
}

export function ScrollStack({children, scroll}) {
    console.log(scroll)

    return (
        <div className={(scroll == ScrollType.Horizontal) ? ScrollType.Horizontal : ScrollType.Vertical}>
            {children}
        </div>
    );
}

module.exports = {
    HorizontalStack: HorizontalStack({children}),
    VerticalStack: VerticalStack({children}),
    ScrollStack: ScrollStack({children, scroll})
}