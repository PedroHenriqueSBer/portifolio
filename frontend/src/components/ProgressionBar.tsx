
interface ProgressionBarProps {
    percentage: string
}

export const ProgressionBar = ({
    percentage,
}: ProgressionBarProps) => {

    const getColor = () => {
        const number = parseInt(percentage.split('%')[0])
        if(number < 30)
            return "#d15656"
        if(number < 70)
            return "#cfd156"
        else
            return "#64d156"
    }

    return <div className="w-full h-full bg-slate-300 rounded-full">
        <div className="h-full text-sm text-slate-900 flex justify-end rounded-full py-0.5 px-2" style={{
            width: percentage,
            background: getColor()
        }}>
            {percentage}
        </div>
    </div>

}