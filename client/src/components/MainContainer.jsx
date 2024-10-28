export default function MainContainer({children, className}){
    return(
        <main className={`mx-auto max-w-[1440px] pl-14 ${className}`}>
            {children}
        </main>
    )
}