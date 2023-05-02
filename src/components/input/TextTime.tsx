
function TextTime({timestamp}: {timestamp: number}) {
    const convertTimeStamp = () => {
        if(!timestamp){
            return "..."
        }
        const dateOption = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        }
        // const timeOption = {

        // }

        const dateTimeOption = {
            ...dateOption
        } as Intl.DateTimeFormatOptions

        const initDate = new Intl.DateTimeFormat('en-GB', dateTimeOption)
        return initDate.format( new Date(1000 * timestamp))
    }
    return (
        <span>
            {convertTimeStamp()}
        </span>
    );
}

export default TextTime;