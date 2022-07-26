import './Timestamp.css'

const Timestamp = ({ post }) => {
    const fullMonths = {
        'Jan': 'January',
        'Feb': 'February',
        'Mar': 'March',
        'Apr': 'April',
        'May': 'May',
        'Jun': 'June',
        'Jul': 'July',
        'Aug': 'August',
        'Sep': 'September',
        'Oct': 'October',
        'Nov': 'November',
        'Dec': 'December',
    }

    const today = new Date()
    const todayGMT = today.toUTCString();
    const currentDateArray = todayGMT.split(' ')
    const dayToday = currentDateArray[1]
    const monthToday = currentDateArray[2]
    const yearToday = currentDateArray[3]
    const timeToday = currentDateArray[4]

    const dateCreatedArray = post.createdAt.split(' ');
    const dayCreated = dateCreatedArray[1]
    const monthCreated = dateCreatedArray[2]
    const yearCreated = dateCreatedArray[3]
    const timeCreated = dateCreatedArray[4]

    const dateToday = new Date(`${dayToday}/${monthToday}/${yearToday} ${timeToday}`);
    const dateCreated = new Date(`${dayCreated}/${monthCreated}/${yearCreated} ${timeCreated}`);

    const timeDiff = Math.abs(dateToday - dateCreated);
    const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hourDiff = Math.floor(timeDiff / (1000 * 60 * 60))
    const minuteDiff = Math.floor(timeDiff / (1000 * 60))
    const secondDiff = Math.floor(timeDiff / 1000)

    let createdContent;

    switch (true) {
        case (secondDiff < 60):
            if (secondDiff <= 1) {
                createdContent = (
                    <div className='createdTimeStamp'>1 SECOND AGO</div>
                )
            } else {
                createdContent = (
                    <div className='createdTimeStamp'>{secondDiff} SECONDS AGO</div>
                )
            }
            break;
        case (minuteDiff < 60):
            if (minuteDiff <= 1) {
                createdContent = (
                    <div className='createdTimeStamp'>1 MINUTE AGO</div>
                )
            } else {
                createdContent = (
                    <div className='createdTimeStamp'>{minuteDiff} MINUTES AGO</div>
                )
            }
            break;
        case (hourDiff < 24):
            if (hourDiff <= 1) {
                createdContent = (
                    <div className='createdTimeStamp'>1 HOUR AGO</div>
                )
            } else {
                createdContent = (
                    <div className='createdTimeStamp'>{hourDiff} HOURS AGO</div>
                )
            }
            break;
        case (dayDiff < 7):
            if (dayDiff <= 1) {
                createdContent = (
                    <div className='createdTimeStamp'>1 DAY AGO</div>
                )
            } else {
                createdContent = (
                    <div className='createdTimeStamp'>{dayDiff} DAYS AGO</div>
                )
            }
            break;
        case (yearToday === yearCreated):
            createdContent = (
                <div className='createdTimeStamp'>{fullMonths[monthCreated]} {dayCreated}</div>
            );
            break;
        default:
            createdContent = (
                <div className='createdTimeStamp'>{fullMonths[monthCreated]} {dayCreated}, {yearCreated}</div>
            );
            break;
    }

    return (
        <div>
            {createdContent}
        </div>
    )
}

export default Timestamp;
